import { useEffect, useRef, useState } from "react";
import { timeOptions, trainingOptions } from "./content.js";
import { btnPrimary } from "./ui.js";

const empty = { name: "", phone: "", training: trainingOptions[0], time: timeOptions[0] };
const field =
  "w-full rounded-lg border border-white/15 bg-fz-bg px-4 py-3 text-sm text-white outline-none transition focus:border-fz-accent";

// Demo-only: nothing is sent anywhere. Submission is simulated locally.
export default function TrialModal({ open, onClose }) {
  const [form, setForm] = useState(empty);
  const [errors, setErrors] = useState({});
  const [done, setDone] = useState(false);
  const dialogRef = useRef(null);
  const firstRef = useRef(null);
  const doneRef = useRef(null);

  useEffect(() => {
    if (!open) return;
    setForm(empty);
    setErrors({});
    setDone(false);
    const previous = document.activeElement;
    document.body.style.overflow = "hidden";
    const t = setTimeout(() => firstRef.current?.focus(), 0);

    function onKey(e) {
      if (e.key === "Escape") onClose();
      if (e.key !== "Tab" || !dialogRef.current) return;
      const items = dialogRef.current.querySelectorAll("button, input, select, a[href]");
      if (!items.length) return;
      const first = items[0];
      const last = items[items.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    }
    document.addEventListener("keydown", onKey);
    return () => {
      clearTimeout(t);
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
      previous?.focus?.();
    };
  }, [open, onClose]);

  useEffect(() => {
    if (done) doneRef.current?.focus();
  }, [done]);

  if (!open) return null;

  function update(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function submit(e) {
    e.preventDefault();
    const next = {};
    if (!form.name.trim()) next.name = "Please enter your name.";
    if (form.phone.replace(/\D/g, "").length < 10) next.phone = "Enter a valid 10-digit phone number.";
    setErrors(next);
    if (Object.keys(next).length === 0) setDone(true);
  }

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center bg-black/70 p-0 backdrop-blur-sm sm:items-center sm:p-6"
      onMouseDown={(e) => e.target === e.currentTarget && onClose()}
    >
      <div
        ref={dialogRef}
        role="dialog"
        aria-modal="true"
        aria-labelledby="fz-trial-title"
        className="max-h-[92vh] w-full max-w-md overflow-y-auto rounded-t-3xl border border-white/10 bg-fz-surface p-6 sm:rounded-3xl sm:p-8"
      >
        <div className="flex items-start justify-between gap-4">
          <h2 id="fz-trial-title" className="font-display text-2xl font-bold text-white">
            {done ? "Demo confirmation" : "Book Your Free Trial"}
          </h2>
          <button onClick={onClose} aria-label="Close" className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/15 text-white/70 hover:text-white">
            ✕
          </button>
        </div>

        {done ? (
          <div className="mt-5">
            <p className="leading-relaxed text-fz-muted">
              Thanks, {form.name.trim()}! In a live version, the FitZone team would now contact you about{" "}
              <span className="text-white">{form.training}</span> ({form.time.toLowerCase()}).
            </p>
            <p className="mt-3 rounded-lg border border-white/10 bg-fz-bg p-3 text-xs text-fz-muted">
              Portfolio demo — nothing was sent or stored.
            </p>
            <button ref={doneRef} onClick={onClose} className={`${btnPrimary} mt-6 w-full`}>Done</button>
          </div>
        ) : (
          <form onSubmit={submit} noValidate className="mt-6 space-y-4">
            <div>
              <label htmlFor="fz-name" className="mb-1.5 block text-sm text-white/70">Name</label>
              <input ref={firstRef} id="fz-name" name="name" value={form.name} onChange={update} autoComplete="name" className={field} aria-invalid={!!errors.name} />
              {errors.name && <p className="mt-1 text-xs text-red-300">{errors.name}</p>}
            </div>
            <div>
              <label htmlFor="fz-phone" className="mb-1.5 block text-sm text-white/70">Phone</label>
              <input id="fz-phone" name="phone" type="tel" inputMode="tel" value={form.phone} onChange={update} autoComplete="tel" className={field} aria-invalid={!!errors.phone} />
              {errors.phone && <p className="mt-1 text-xs text-red-300">{errors.phone}</p>}
            </div>
            <div>
              <label htmlFor="fz-training" className="mb-1.5 block text-sm text-white/70">Preferred training</label>
              <select id="fz-training" name="training" value={form.training} onChange={update} className={field}>
                {trainingOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <div>
              <label htmlFor="fz-time" className="mb-1.5 block text-sm text-white/70">Preferred time</label>
              <select id="fz-time" name="time" value={form.time} onChange={update} className={field}>
                {timeOptions.map((o) => <option key={o}>{o}</option>)}
              </select>
            </div>
            <button type="submit" className={`${btnPrimary} w-full`}>Request My Free Trial</button>
            <p className="text-center text-xs text-fz-muted">Concept website · demo form only</p>
          </form>
        )}
      </div>
    </div>
  );
}
