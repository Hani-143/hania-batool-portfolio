import { trustStrip } from "@/data/content";

export default function TrustStrip() {
  return (
    <section className="border-y border-charcoal/10 py-6">
      <div className="max-w-8xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-center md:justify-between gap-y-4 gap-x-10">
        {trustStrip.map((item) => (
          <span key={item} className="label text-charcoal/50 text-center">
            {item}
          </span>
        ))}
      </div>
    </section>
  );
}
