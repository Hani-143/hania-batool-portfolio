"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { executive } from "@/data/content";

export default function PersonalBranding() {
  return (
    <section className="relative bg-near-black text-ivory overflow-hidden">
      <div className="grid md:grid-cols-2">
        <div className="relative min-h-[70vh] md:min-h-[100vh]">
          <Image
            src="/images/executive.jpg"
            alt='Hania Batool in an executive office setting, with the line "You never know who is watching"'
            fill
            sizes="(max-width: 768px) 100vw, 50vw"
            className="object-cover object-top"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-transparent via-transparent to-near-black/20" />
        </div>

        <div className="relative flex items-center py-24 px-6 md:px-16">
          <div className="absolute top-16 left-6 md:left-16 hairline w-16" />
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="max-w-lg"
          >
            <p className="label text-champagne mb-8">
              Personal Branding &amp; Executive Presence
            </p>

            <p className="font-display text-3xl sm:text-4xl leading-snug text-champagne mb-10">
              {executive.imageLine[0]}
              <br />
              {executive.imageLine[1]}
            </p>

            <h2 className="font-display text-3xl sm:text-4xl leading-tight mb-8">
              {executive.heading}
            </h2>

            <p className="text-ivory/70 leading-relaxed mb-12">
              {executive.copy}
            </p>

            <div className="flex flex-wrap items-center gap-x-3 gap-y-3">
              {executive.connections.map((c, i) => (
                <span key={c} className="flex items-center gap-3">
                  <span className="label text-ivory/80">{c}</span>
                  {i < executive.connections.length - 1 && (
                    <span className="w-6 hairline" />
                  )}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
