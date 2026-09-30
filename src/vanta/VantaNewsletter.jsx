import { useState } from "react";
import Reveal from "../fitzone/Reveal.jsx";
import { btnSolid, container } from "./ui.js";

// Demo-only: nothing is sent anywhere.
export default function VantaNewsletter() {
  const [email, setEmail] = useState("");
  const [joined, setJoined] = useState(false);

  function submit(e) {
    e.preventDefault();
    if (!email.trim()) return;
    setJoined(true);
  }

  return (
    <section className="border-y border-vt-line bg-vt-surface py-16 md:py-20">
      <div className={container}>
        <Reveal className="mx-auto max-w-xl text-center">
          <h2 className="font-display text-2xl font-bold uppercase tracking-tight text-vt-paper md:text-3xl">Get the Drop First.</h2>
          <p className="mt-3 text-sm leading-relaxed text-vt-muted">
            Join the Vanta list for new releases, collection updates and exclusive previews.
          </p>
          {joined ? (
            <p className="mt-6 text-sm text-vt-paper">You're on the list — thanks! (demo only, no email was sent)</p>
          ) : (
            <form onSubmit={submit} className="mx-auto mt-6 flex max-w-sm flex-col gap-3 sm:flex-row">
              <label htmlFor="vt-email" className="sr-only">Email</label>
              <input
                id="vt-email"
                type="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 border border-vt-line bg-vt-bg px-4 py-3 text-sm text-vt-paper outline-none placeholder:text-vt-muted focus:border-vt-paper/60"
              />
              <button type="submit" className={btnSolid}>Join the List</button>
            </form>
          )}
        </Reveal>
      </div>
    </section>
  );
}
