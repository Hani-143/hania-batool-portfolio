"use client";

import { motion } from "framer-motion";
import { focus } from "@/data/content";

export default function Focus() {
  return (
    <section className="py-20 md:py-28">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <motion.h2
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="label text-charcoal/50 mb-10"
        >
          {focus.heading}
        </motion.h2>

        <ol className="grid sm:grid-cols-2 md:grid-cols-4 gap-x-8 gap-y-8 border-t border-charcoal/10 pt-8">
          {focus.items.map((item, i) => (
            <motion.li
              key={item}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.05 }}
              className="flex items-start gap-4"
            >
              <span className="font-display text-champagne text-lg">
                {String(i + 1).padStart(2, "0")}
              </span>
              <span className="text-charcoal/80 leading-snug">{item}</span>
            </motion.li>
          ))}
        </ol>
      </div>
    </section>
  );
}
