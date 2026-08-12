"use client";

import { motion } from "framer-motion";
import { finalCta } from "@/data/content";

export default function CTA() {
  return (
    <section className="bg-charcoal text-ivory py-24 md:py-32">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 md:px-10 text-center"
      >
        <h2 className="font-display text-4xl sm:text-5xl md:text-6xl leading-tight mb-8">
          {finalCta.heading}
        </h2>
        <p className="text-ivory/70 text-lg leading-relaxed mb-12 max-w-xl mx-auto">
          {finalCta.copy}
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a
            href="#contact"
            className="label bg-champagne text-charcoal px-8 py-4 hover:bg-ivory transition-colors focus-ring"
          >
            {finalCta.primary} →
          </a>
          <a
            href="#contact"
            className="label border border-ivory/30 px-8 py-4 hover:border-ivory transition-colors focus-ring"
          >
            {finalCta.secondary} →
          </a>
        </div>
      </motion.div>
    </section>
  );
}
