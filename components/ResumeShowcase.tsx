"use client";

import { motion } from "framer-motion";
import { FileText, ArrowRight, Download } from "lucide-react";
import { resumeShowcase } from "@/data/content";

export default function ResumeShowcase() {
  return (
    <section className="py-24 md:py-32">
      <div className="max-w-8xl mx-auto px-6 md:px-10">
        <div className="text-center max-w-2xl mx-auto mb-16">
          <p className="label text-deep-sage mb-6">{resumeShowcase.label}</p>
          <h2 className="font-display text-4xl sm:text-5xl leading-tight text-charcoal mb-6">
            {resumeShowcase.heading}
          </h2>
          <p className="text-charcoal/60 leading-relaxed">
            {resumeShowcase.intro}
          </p>
        </div>

        <div className="grid sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {resumeShowcase.items.map((item, i) => (
            <motion.div
              key={item.n}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="group border border-charcoal/15 hover:border-champagne transition-colors p-8"
            >
              <div className="flex items-start justify-between mb-8">
                <span className="font-display text-3xl text-champagne">
                  {item.n}
                </span>
                <FileText className="text-charcoal/30" size={22} />
              </div>

              <h3 className="font-display text-2xl text-charcoal mb-3">
                {item.title}
              </h3>

              <div className="flex flex-wrap gap-2 mb-8">
                {item.tags.map((t) => (
                  <span
                    key={t}
                    className="text-xs uppercase tracking-wide text-charcoal/50 border border-charcoal/15 px-3 py-1"
                  >
                    {t}
                  </span>
                ))}
              </div>

              <div className="flex items-center gap-6 pt-6 border-t border-charcoal/10">
                <a
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="label flex items-center gap-2 text-charcoal group-hover:text-champagne transition-colors focus-ring"
                >
                  {item.cta} <ArrowRight size={15} />
                </a>
                <a
                  href={item.file}
                  download
                  className="label flex items-center gap-2 text-charcoal/50 hover:text-charcoal transition-colors focus-ring"
                >
                  <Download size={15} /> Download
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        <p className="text-center text-xs text-charcoal/40 max-w-xl mx-auto mt-10">
          Contact details on sample documents are withheld to protect client
          privacy. Formatting and structure are shown as delivered.
        </p>
      </div>
    </section>
  );
}
