"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { hero } from "@/data/content";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  show: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] },
  }),
};

export default function Hero() {
  return (
    <section id="home" className="relative pt-32 pb-20 md:pt-44 md:pb-28 overflow-hidden">
      <div className="max-w-8xl mx-auto px-6 md:px-10 grid md:grid-cols-2 gap-14 items-center">
        <div className="order-2 md:order-1">
          <motion.p
            custom={0}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="label text-deep-sage mb-6"
          >
            {hero.eyebrow}
          </motion.p>

          <motion.h1
            custom={1}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="font-display text-charcoal leading-[1.05] text-5xl sm:text-6xl lg:text-7xl mb-8"
          >
            {hero.headline[0]}
            <br />
            <span className="text-champagne">{hero.headline[1]}</span>
          </motion.h1>

          <motion.p
            custom={2}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="text-charcoal/70 text-lg leading-relaxed max-w-md mb-10"
          >
            {hero.sub}
          </motion.p>

          <motion.div
            custom={3}
            initial="hidden"
            animate="show"
            variants={fadeUp}
            className="flex flex-wrap items-center gap-4 mb-12"
          >
            <a
              href="#services"
              className="label bg-charcoal text-ivory px-7 py-4 hover:bg-champagne hover:text-charcoal transition-colors focus-ring"
            >
              {hero.ctaPrimary} →
            </a>
            <a
              href="#contact"
              className="label border border-charcoal/30 px-7 py-4 hover:border-charcoal transition-colors focus-ring"
            >
              {hero.ctaSecondary} →
            </a>
          </motion.div>

          <motion.div
            custom={4}
            initial="hidden"
            animate="show"
            variants={fadeUp}
          >
            <div className="hairline w-24 mb-5" />
            <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-charcoal/60">
              {hero.microList.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.97 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
          className="order-1 md:order-2 relative"
        >
          <div className="relative aspect-[4/5] w-full overflow-hidden">
            <Image
              src="/images/hero.jpg"
              alt="Hania Batool, professional resume writer and CV designer, working at her desk"
              fill
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
              className="object-cover object-top"
            />
          </div>
          <div className="absolute -bottom-6 -left-6 bg-ivory border border-champagne/40 px-6 py-4 hidden sm:block">
            <p className="label text-charcoal/70">{hero.sideLabel}</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
