"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { about } from "@/data/content";

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 bg-beige/40">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-12 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
          className="md:col-span-4 relative"
        >
          <div className="relative aspect-[3/4] w-full max-w-sm overflow-hidden">
            <Image
              src="/images/about.jpg"
              alt="Hania Batool in a garden setting, a personal and authentic portrait"
              fill
              sizes="(max-width: 768px) 100vw, 33vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="md:col-span-8">
          <motion.p
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="label text-deep-sage mb-6"
          >
            {about.label}
          </motion.p>

          <motion.h2
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="font-display text-4xl sm:text-5xl leading-[1.15] text-charcoal mb-10 max-w-xl"
          >
            {about.heading.map((line, i) => (
              <span key={i}>
                {line}
                <br />
              </span>
            ))}
          </motion.h2>

          <div className="grid sm:grid-cols-2 gap-8 max-w-3xl">
            {about.paragraphs.map((p, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.08 }}
                className="text-charcoal/70 leading-relaxed"
              >
                {p}
              </motion.p>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
