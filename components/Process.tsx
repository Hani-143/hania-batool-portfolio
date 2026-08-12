"use client";

import { motion } from "framer-motion";
import { process } from "@/data/content";

export default function Process() {
  return (
    <section id="process" className="py-24 md:py-32 bg-beige/40">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-xl mx-auto mb-20">
          <p className="label text-deep-sage mb-6">{process.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal">
            {process.heading[0]}
            <br />
            {process.heading[1]}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-10 md:gap-6 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 hairline" />
          {process.stages.map((s, i) => (
            <motion.div
              key={s.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="relative"
            >
              <span className="font-display text-champagne text-2xl block mb-6 bg-beige/40 md:bg-transparent">
                {s.n}
              </span>
              <h3 className="font-display text-xl text-charcoal mb-3">
                {s.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">{s.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
