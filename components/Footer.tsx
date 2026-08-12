import { brand, nav, contact, footer } from "@/data/content";

export default function Footer() {
  return (
    <footer className="bg-near-black text-ivory pt-20 pb-8">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-10 pb-16 border-b border-ivory/10">
          <div className="md:col-span-5">
            <p className="font-display text-3xl mb-4">{brand.name}</p>
            <ul className="text-ivory/50 text-sm space-y-1">
              {brand.positioning.slice(0, 5).map((p) => (
                <li key={p}>{p}</li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3">
            <p className="label text-ivory/40 mb-5">Navigate</p>
            <ul className="space-y-2">
              {nav.map((item) => (
                <li key={item.href}>
                  <a
                    href={item.href}
                    className="text-ivory/70 hover:text-champagne transition-colors focus-ring"
                  >
                    {item.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <p className="label text-ivory/40 mb-5">Connect</p>
            <ul className="space-y-2">
              <li>
                <a
                  href={`mailto:${contact.email}`}
                  className="text-ivory/70 hover:text-champagne transition-colors focus-ring"
                >
                  Email
                </a>
              </li>
              <li>
                <a
                  href={contact.whatsappHref}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 hover:text-champagne transition-colors focus-ring"
                >
                  WhatsApp
                </a>
              </li>
              <li>
                <a
                  href={contact.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ivory/70 hover:text-champagne transition-colors focus-ring"
                >
                  LinkedIn
                </a>
              </li>
            </ul>
            <p className="text-ivory/40 text-sm mt-6">
              {footer.availability}
            </p>
          </div>
        </div>

        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-ivory/30">
          <p>© {new Date().getFullYear()} {brand.name}. All rights reserved.</p>
          <p>
            {footer.credit}{" "}
            <a
              href={footer.creditUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-champagne transition-colors focus-ring"
            >
              {footer.creditName}
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
