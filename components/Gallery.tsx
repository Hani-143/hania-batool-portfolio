"use client";

import Image from "next/image";
import { motion } from "framer-motion";

export default function Gallery() {
  return (
    <section className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <p className="label text-deep-sage mb-6">Gallery</p>
        <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-16 max-w-xl">
          A closer look.
        </h2>
      </div>

      <div className="max-w-8xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-6 md:gap-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-7 relative aspect-[4/3] overflow-hidden"
        >
          <Image
            src="/images/branding.jpg"
            alt="Hania Batool, personal branding portrait"
            fill
            sizes="(max-width: 768px) 100vw, 55vw"
            className="object-cover"
          />
        </motion.div>

        <div className="md:col-span-5 grid grid-rows-2 gap-6 md:gap-8">
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.1 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/about.jpg"
              alt="Hania Batool, personal portrait"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="relative aspect-[4/3] overflow-hidden"
          >
            <Image
              src="/images/content.jpg"
              alt="Hania Batool at work on creative content"
              fill
              sizes="(max-width: 768px) 100vw, 35vw"
              className="object-cover"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
