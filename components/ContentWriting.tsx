"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { contentWriting } from "@/data/content";

export default function ContentWriting() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14 items-start">
        <div className="md:col-span-6">
          <p className="label text-deep-sage mb-6">{contentWriting.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-8">
            {contentWriting.heading}
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-md">
            {contentWriting.copy}
          </p>

          <div className="flex flex-wrap gap-3 mb-10">
            {contentWriting.types.map((t) => (
              <span
                key={t}
                className="text-sm border border-charcoal/20 px-4 py-2 text-charcoal/70"
              >
                {t}
              </span>
            ))}
          </div>

          <p className="font-display text-xl text-charcoal/80 leading-relaxed max-w-md">
            {contentWriting.philosophy}
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-6 relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/content.jpg"
              alt="Hania Batool working on content and creative writing"
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
