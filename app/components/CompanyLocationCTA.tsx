"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";

export default function CompanyLocationCTA() {
  return (
    <section className="w-full bg-bio-bg py-16 md:py-32 px-4 md:px-8 text-center flex flex-col items-center relative overflow-hidden">
      {/* Background Detail */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03] select-none pointer-events-none w-full">
        <span className="text-[20vw] font-sans font-bold tracking-tighter text-bio-primary uppercase whitespace-nowrap">
          JENA // GERMANY
        </span>
      </div>

      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-bio-accent"></div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        className="max-w-4xl relative z-10"
      >
        <div className="flex items-center justify-center gap-4 mb-10">
          <span className="w-2 h-2 rounded-full bg-bio-accent"></span>
          <span className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-primary font-bold">
            LOCATION // HQ
          </span>
        </div>

        <h2 className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-bio-primary mb-12 leading-[0.95]">
          Headquartered in <br />
          <span className="italic text-bio-primary/70">Jena, Germany.</span>
        </h2>

        <p className="font-mono text-base md:text-lg leading-relaxed text-bio-primary/60 mb-20 max-w-2xl mx-auto">
          A city with 450 years of scientific innovation, home to Carl Zeiss and
          generations of chemistry and biotech pioneers. Jena offers a deep
          biotech ecosystem, skilled workforce, and central European access to
          major cosmetic manufacturing hubs.
        </p>

        <div className="flex flex-col items-center gap-16">
          <a href="mailto:contact@biojena.com">
            <Button variant="primary">Initiate Contact</Button>
          </a>

          {/* Contact details explicitly placed as per doc */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1, delay: 0.5 }}
            className="font-mono text-[14px] leading-loose text-bio-primary/80 border-t border-bio-panel pt-12"
          >
            <strong className="text-bio-primary uppercase tracking-widest text-[14px] block mb-2">
              Company Information
            </strong>
            <span className="text-bio-primary">BIOJENA</span>
            <br />
            Spitzweidenweg 30, 07743 Jena, Germany
            <br />
            Email:{" "}
            <a
              href="mailto:contact@biojena.com"
              className="text-bio-primary hover:text-bio-accent transition-colors"
            >
              contact@biojena.com
            </a>{" "}
            | Web: www.biojena.com
            <br />
            Partnership Inquiries:{" "}
            <a
              href="mailto:contact@biojena.com"
              className="text-bio-primary hover:text-bio-accent transition-colors font-bold"
            >
              contact@biojena.com
            </a>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
