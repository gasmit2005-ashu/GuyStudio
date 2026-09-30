import { useEffect, useRef } from "react";

// A quiet, deliberate animated node network — represents the connected
// systems (content, leads, automation) the studio builds. Respects
// prefers-reduced-motion by freezing on first frame.
function NetworkCanvas() {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let raf;
    let width, height, dpr;

    const nodes = Array.from({ length: 18 }, () => ({
      x: Math.random(),
      y: Math.random(),
      vx: (Math.random() - 0.5) * 0.0006,
      vy: (Math.random() - 0.5) * 0.0006,
      r: Math.random() * 2 + 1.5,
    }));

    function resize() {
      dpr = window.devicePixelRatio || 1;
      width = canvas.clientWidth;
      height = canvas.clientHeight;
      canvas.width = width * dpr;
      canvas.height = height * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    }

    function step() {
      ctx.clearRect(0, 0, width, height);

      for (const n of nodes) {
        if (!reduceMotion) {
          n.x += n.vx;
          n.y += n.vy;
          if (n.x < 0 || n.x > 1) n.vx *= -1;
          if (n.y < 0 || n.y > 1) n.vy *= -1;
        }
      }

      for (let i = 0; i < nodes.length; i++) {
        for (let j = i + 1; j < nodes.length; j++) {
          const a = nodes[i];
          const b = nodes[j];
          const dx = (a.x - b.x) * width;
          const dy = (a.y - b.y) * height;
          const dist = Math.sqrt(dx * dx + dy * dy);
          const max = 150;
          if (dist < max) {
            ctx.strokeStyle = `rgba(255,255,255,${0.12 * (1 - dist / max)})`;
            ctx.lineWidth = 1;
            ctx.beginPath();
            ctx.moveTo(a.x * width, a.y * height);
            ctx.lineTo(b.x * width, b.y * height);
            ctx.stroke();
          }
        }
      }

      for (const n of nodes) {
        ctx.beginPath();
        ctx.arc(n.x * width, n.y * height, n.r, 0, Math.PI * 2);
        ctx.fillStyle = "rgba(255,90,31,0.9)";
        ctx.fill();
      }

      if (!reduceMotion) raf = requestAnimationFrame(step);
    }

    resize();
    step();
    window.addEventListener("resize", resize);
    return () => {
      window.removeEventListener("resize", resize);
      if (raf) cancelAnimationFrame(raf);
    };
  }, []);

  return <canvas ref={canvasRef} className="w-full h-full" aria-hidden="true" />;
}

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="container-content grid lg:grid-cols-[1.1fr_0.9fr] gap-14 items-center">
        <div>
          <p className="section-label">For local businesses in India</p>
          <h1 className="text-4xl sm:text-5xl md:text-[3.4rem] leading-[1.08] font-bold text-ink tracking-tight">
            Turn your local business into a modern digital brand.
          </h1>
          <p className="mt-6 text-lg text-ink/65 max-w-xl leading-relaxed">
            We help local businesses attract more attention, generate enquiries and build a
            stronger online presence using AI, content and automation.
          </p>
          <div className="mt-9 flex flex-wrap gap-4">
            <a href="#audit" className="btn-primary">
              Get Free AI Audit
            </a>
            <a href="#work" className="btn-secondary">
              View Our Work
            </a>
          </div>
          <div className="mt-12 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-ink/50">
            <span>Websites</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>AI Content</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>Lead Generation</span>
            <span className="w-1 h-1 rounded-full bg-ink/20" />
            <span>Automation</span>
          </div>
        </div>

        <div className="relative aspect-[4/5] md:aspect-square rounded-3xl bg-ink overflow-hidden">
          <NetworkCanvas />
          <div className="absolute inset-0 flex flex-col justify-end p-8">
            <div className="bg-white/[0.06] backdrop-blur-sm border border-white/10 rounded-2xl p-5">
              <p className="text-white/50 text-xs font-medium mb-1">Built for gyms &amp; fitness studios</p>
              <p className="text-white font-display font-semibold">
                One connected system for content, leads and follow-up.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
