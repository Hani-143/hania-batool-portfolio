"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Linkedin } from "lucide-react";
import { linkedinSection } from "@/data/content";

export default function LinkedInSection() {
  return (
    <section className="py-24 md:py-32 bg-beige/40">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14 items-start">
        <div className="md:col-span-7">
          <p className="label text-deep-sage mb-6">{linkedinSection.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-8 max-w-xl">
            {linkedinSection.heading}
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-xl">
            {linkedinSection.copy}
          </p>

          <p className="label text-charcoal/50 mb-5">Hania Helps Optimize</p>
          <ul className="grid sm:grid-cols-2 gap-3 mb-10 max-w-xl">
            {linkedinSection.optimizes.map((item) => (
              <li
                key={item}
                className="text-charcoal/80 border-b border-charcoal/10 pb-3"
              >
                {item}
              </li>
            ))}
          </ul>

          <p className="text-charcoal/70 leading-relaxed max-w-xl mb-2">
            <span className="font-display text-charcoal">Approach — </span>
            {linkedinSection.approach}
          </p>
          <p className="text-charcoal/70 leading-relaxed max-w-xl mb-10">
            <span className="font-display text-charcoal">Goal — </span>
            {linkedinSection.goal}
          </p>

          <a
            href="#contact"
            className="label inline-block bg-charcoal text-ivory px-7 py-4 hover:bg-champagne hover:text-charcoal transition-colors focus-ring"
          >
            {linkedinSection.cta} →
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5"
        >
          <div className="bg-charcoal text-ivory p-8">
            <div className="flex items-center gap-3 mb-8 text-champagne">
              <Linkedin size={22} />
              <span className="label">Profile Preview</span>
            </div>

            <div className="relative w-full aspect-[1195/783] overflow-hidden border border-champagne/20">
              <Image
                src="/images/linkedin-profile.png"
                alt="Hania Batool's LinkedIn profile page, showing her name, headline as a professional resume writer and CV expert, and location"
                fill
                sizes="(max-width: 768px) 100vw, 35vw"
                className="object-contain object-top bg-ivory"
              />
            </div>

            <div className="hairline w-full my-8" />
            <div className="flex gap-3 flex-wrap">
              {["Headline", "About", "Experience", "Skills"].map((t) => (
                <span
                  key={t}
                  className="text-xs uppercase tracking-wide border border-champagne/30 text-champagne/80 px-3 py-1"
                >
                  {t}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
