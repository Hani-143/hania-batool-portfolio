"use client";

import { motion } from "framer-motion";
import { aiContent } from "@/data/content";

export default function AIContent() {
  return (
    <section className="grid md:grid-cols-2">
      <div className="bg-charcoal text-ivory py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-md ml-auto md:mr-0">
          <p className="label text-champagne mb-6">{aiContent.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight mb-8">
            {aiContent.heading[0]}
            <br />
            <span className="text-champagne">{aiContent.heading[1]}</span>
          </h2>
          <p className="text-ivory/70 leading-relaxed mb-10">
            {aiContent.copy}
          </p>
          <p className="text-ivory/70 leading-relaxed">
            {aiContent.positioning}
          </p>
        </div>
      </div>

      <div className="bg-ivory py-24 md:py-32 px-6 md:px-10">
        <div className="max-w-md">
          <p className="label text-charcoal/50 mb-5">What I Create</p>
          <ul className="space-y-3 mb-12">
            {aiContent.services.map((s, i) => (
              <motion.li
                key={s}
                initial={{ opacity: 0, x: 10 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: i * 0.05 }}
                className="text-charcoal/80 border-b border-charcoal/10 pb-3"
              >
                {s}
              </motion.li>
            ))}
          </ul>

          <p className="label text-charcoal/50 mb-5">Tools</p>
          <div className="flex flex-wrap gap-3">
            {aiContent.tools.map((t) => (
              <span
                key={t}
                className="text-sm border border-champagne/40 text-deep-sage px-4 py-2"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
