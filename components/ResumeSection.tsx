"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Check } from "lucide-react";
import { resumeSection } from "@/data/content";

export default function ResumeSection() {
  return (
    <section id="work" className="py-24 md:py-32 bg-beige/40">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid md:grid-cols-12 gap-14 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="md:col-span-5 relative order-2 md:order-1"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/resume.jpg"
              alt="Hania Batool's CV and resume writing workspace"
              fill
              sizes="(max-width: 768px) 100vw, 40vw"
              className="object-cover"
            />
          </div>
        </motion.div>

        <div className="md:col-span-7 order-1 md:order-2">
          <p className="label text-deep-sage mb-6">{resumeSection.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-6 max-w-xl">
            {resumeSection.heading}
          </h2>
          <p className="text-charcoal/70 text-lg leading-relaxed mb-10 max-w-xl">
            {resumeSection.intro}
          </p>

          <ul className="grid sm:grid-cols-2 gap-x-8 gap-y-4 mb-12">
            {resumeSection.checklist.map((item) => (
              <li key={item} className="flex items-start gap-3 text-charcoal/80">
                <Check size={18} className="text-champagne mt-0.5 shrink-0" />
                {item}
              </li>
            ))}
          </ul>

          <div className="hairline w-full mb-10" />

          <p className="label text-charcoal/50 mb-5">
            {resumeSection.whatICanCreateHeading}
          </p>
          <div className="flex flex-wrap gap-3 mb-10">
            {resumeSection.whatICanCreate.map((item) => (
              <span
                key={item}
                className="text-sm border border-charcoal/20 px-4 py-2 text-charcoal/70"
              >
                {item}
              </span>
            ))}
          </div>

          <p className="font-display text-xl text-charcoal/80 leading-relaxed max-w-xl">
            {resumeSection.goal}
          </p>
        </div>
      </div>
    </section>
  );
}
