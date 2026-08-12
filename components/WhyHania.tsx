"use client";

import { motion } from "framer-motion";
import { whyHania } from "@/data/content";

export default function WhyHania() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <p className="label text-deep-sage md:col-span-3">
            {whyHania.label}
          </p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal md:col-span-8">
            {whyHania.heading[0]}
            <br />
            {whyHania.heading[1]}
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-x-10 gap-y-14">
          {whyHania.principles.map((p, i) => (
            <motion.div
              key={p.n}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.06 }}
            >
              <span className="font-display text-champagne text-2xl block mb-4">
                {p.n}
              </span>
              <h3 className="font-display text-xl text-charcoal mb-3">
                {p.title}
              </h3>
              <p className="text-charcoal/60 leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
