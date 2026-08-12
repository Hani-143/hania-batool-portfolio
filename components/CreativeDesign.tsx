"use client";

import { motion } from "framer-motion";
import { creativeDesign } from "@/data/content";

export default function CreativeDesign() {
  return (
    <section className="py-24 md:py-32 bg-beige/40">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="max-w-2xl mb-14">
          <p className="label text-deep-sage mb-6">{creativeDesign.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-6">
            {creativeDesign.heading}
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed">
            {creativeDesign.copy}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-8 gap-y-6 border-t border-charcoal/10 pt-8 mb-12">
          {creativeDesign.services.map((s, i) => (
            <motion.div
              key={s}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="text-charcoal/80 border-b border-charcoal/10 pb-4"
            >
              {s}
            </motion.div>
          ))}
        </div>

        <p className="font-display text-2xl text-champagne">
          {creativeDesign.philosophy}
        </p>
      </div>
    </section>
  );
}
