"use client";

import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";
import { testimonial } from "@/data/content";

export default function Testimonial() {
  return (
    <section className="py-24 md:py-32 bg-near-black text-ivory">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7 }}
        className="max-w-3xl mx-auto px-6 md:px-10 text-center"
      >
        <Quote className="mx-auto mb-8 text-champagne" size={40} strokeWidth={1.2} />

        <p className="font-display text-2xl sm:text-3xl leading-relaxed mb-10">
          &ldquo;{testimonial.quote}&rdquo;
        </p>

        <div className="flex justify-center gap-1 mb-6">
          {Array.from({ length: testimonial.stars }).map((_, i) => (
            <Star key={i} size={18} className="fill-champagne text-champagne" />
          ))}
        </div>

        <p className="label text-ivory">{testimonial.name}</p>
        <p className="text-ivory/50 text-sm mt-1">{testimonial.role}</p>
      </motion.div>
    </section>
  );
}
