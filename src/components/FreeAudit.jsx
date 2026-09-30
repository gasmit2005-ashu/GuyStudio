import { useState } from "react";

const fields = [
  { name: "name", label: "Name", type: "text", required: true },
  { name: "business", label: "Business Name", type: "text", required: true },
  { name: "businessType", label: "Business Type", type: "text", required: true, placeholder: "e.g. Gym, Salon, Cafe" },
  { name: "instagram", label: "Instagram URL", type: "url", required: false },
  { name: "website", label: "Website URL", type: "url", required: false },
  { name: "whatsapp", label: "WhatsApp Number", type: "tel", required: true },
];

// Replace with your WhatsApp number (country code, no + or spaces), e.g. "919876543210"
const WHATSAPP_NUMBER = "919506990878";

export default function FreeAudit() {
  const [form, setForm] = useState({});
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e) {
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));
  }

  function handleSubmit(e) {
    e.preventDefault();
    // No backend is wired up yet — this hands the details straight to WhatsApp.
    // Swap this for a real submission endpoint (e.g. Formspree, Google Sheets
    // via Apps Script, or your own serverless function) when ready.
    const message = encodeURIComponent(
      `Free AI Audit request\nName: ${form.name || ""}\nBusiness: ${form.business || ""}\nType: ${
        form.businessType || ""
      }\nInstagram: ${form.instagram || ""}\nWebsite: ${form.website || ""}\nWhatsApp: ${form.whatsapp || ""}`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, "_blank");
    setSubmitted(true);
  }

  return (
    <section id="audit" className="py-20 md:py-28 border-t border-line">
      <div className="container-content grid lg:grid-cols-[0.9fr_1.1fr] gap-14">
        <div>
          <p className="section-label">Free AI audit</p>
          <h2 className="text-3xl md:text-4xl font-bold text-ink tracking-tight">
            Not sure what your business needs?
          </h2>
          <p className="mt-4 text-ink/60 leading-relaxed max-w-md">
            Get a free AI-powered review of your online presence.
          </p>
        </div>

        <div className="bg-paper2 border border-line rounded-2xl p-7 md:p-9">
          {submitted ? (
            <div className="py-10 text-center">
              <h3 className="text-xl font-display font-semibold text-ink">Request sent</h3>
              <p className="mt-2 text-ink/60">
                We've opened WhatsApp with your details filled in — just hit send and we'll take it
                from there.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="mt-6 text-sm font-semibold text-ignite"
              >
                Submit another request
              </button>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="grid sm:grid-cols-2 gap-5">
              {fields.map((f) => (
                <div key={f.name} className={f.name === "businessType" ? "sm:col-span-2" : ""}>
                  <label htmlFor={f.name} className="block text-sm font-medium text-ink/70 mb-1.5">
                    {f.label}
                  </label>
                  <input
                    id={f.name}
                    name={f.name}
                    type={f.type}
                    required={f.required}
                    placeholder={f.placeholder}
                    value={form[f.name] || ""}
                    onChange={handleChange}
                    className="w-full rounded-lg border border-line bg-paper px-4 py-3 text-sm text-ink placeholder:text-ink/35 focus:border-ignite outline-none transition-colors"
                  />
                </div>
              ))}
              <button type="submit" className="btn-primary sm:col-span-2 mt-2">
                Request Free Audit
              </button>
            </form>
          )}
        </div>
      </div>
    </section>
  );
}
