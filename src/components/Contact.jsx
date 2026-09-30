// Update these two values with your real contact details.
const WHATSAPP_NUMBER = "919506990878"; // country code + number, no + or spaces
const CONTACT_EMAIL = "hello@guystudio.in";

export default function Contact() {
  return (
    <section id="contact" className="py-20 md:py-28 border-t border-line bg-ink text-white">
      <div className="container-content">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-ignite mb-3">Contact</p>
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
            Let's talk about your business.
          </h2>
          <p className="mt-4 text-white/60 leading-relaxed">
            The fastest way to reach us is WhatsApp — most conversations start there.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-4">
          <a
            href={`https://wa.me/${WHATSAPP_NUMBER}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn-primary"
          >
            Talk to us on WhatsApp
          </a>
          <a href={`mailto:${CONTACT_EMAIL}`} className="btn-secondary-dark">
            {CONTACT_EMAIL}
          </a>
        </div>
      </div>
    </section>
  );
}
