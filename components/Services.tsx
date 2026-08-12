"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { services } from "@/data/content";

export default function Services() {
  return (
    <section id="services" className="py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label text-deep-sage md:col-span-3"
          >
            {services.label}
          </motion.p>
          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl leading-tight text-charcoal md:col-span-8"
          >
            {services.heading}
          </motion.h2>
        </div>

        <div className="border-t border-charcoal/15">
          {services.items.map((s, i) => (
            <motion.a
              href="#contact"
              key={s.n}
              initial={{ opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.04 }}
              className="group grid md:grid-cols-12 items-center gap-4 py-7 border-b border-charcoal/15 hover:bg-beige/40 transition-colors focus-ring px-2 -mx-2"
            >
              <span className="font-display text-champagne text-xl md:col-span-1">
                {s.n}
              </span>
              <span className="font-display text-2xl md:text-3xl text-charcoal md:col-span-4 group-hover:translate-x-1 transition-transform">
                {s.title}
              </span>
              <span className="text-charcoal/60 leading-relaxed md:col-span-6">
                {s.desc}
              </span>
              <span className="md:col-span-1 flex md:justify-end">
                <ArrowUpRight
                  className="text-charcoal/40 group-hover:text-champagne group-hover:translate-x-1 group-hover:-translate-y-1 transition-all"
                  size={22}
                />
              </span>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}
