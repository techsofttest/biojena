"use client";

import Image from "next/image";
import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";

export default function Technology() {
  // Parallax logic for Card 1
  const ref1 = useRef(null);
  const { scrollYProgress: scrollYProgress1 } = useScroll({
    target: ref1,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress1, [0, 1], ["-15%", "15%"]);

  // Parallax logic for Card 2
  const ref2 = useRef(null);
  const { scrollYProgress: scrollYProgress2 } = useScroll({
    target: ref2,
    offset: ["start end", "end start"],
  });
  const y2 = useTransform(scrollYProgress2, [0, 1], ["-15%", "15%"]);

  // Parallax logic for Card 3
  const ref3 = useRef(null);
  const { scrollYProgress: scrollYProgress3 } = useScroll({
    target: ref3,
    offset: ["start end", "end start"],
  });
  const y3 = useTransform(scrollYProgress3, [0, 1], ["-15%", "15%"]);

  return (
    <section className="w-full bg-[#FDFDFD] py-10 md:py-20 px-4 md:px-8 border-b border-bio-panel overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="flex items-center gap-3 mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-bio-accent"></span>
          <span className="w-2 h-2 rounded-full bg-bio-accent"></span>
          <span className="w-2 h-2 rounded-full bg-bio-accent"></span>
          <span className="font-mono text-[14px] tracking-widest uppercase text-bio-primary">
            TECHNOLOGY
          </span>
        </motion.div>

        {/* Section Header */}
        <div className="flex flex-col md:flex-row gap-12 justify-between items-start mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-1/2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-bio-primary leading-[1.1]">
              Mobile Matrix Reservoir Technology
            </h2>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="md:w-5/12 flex flex-col justify-end"
          >
            <p className="font-mono text-sm leading-relaxed text-bio-primary/70">
              Our Proprietary Bioreactors with Mobile Matrix Reservoir
              Technology BIOJENA's proprietary bioreactor system utilizes Mobile
              Matrix Reservoir (MMR) Technology—a controlled fermentation
              process that shapes materials during growth. Our specialized
              bioreactors enable precise manipulation of the biological matrix
              at the microscopic level, giving us direct control over structure,
              performance, and functionality. By cycling shaped templates
              between fermentation medium and air phases, we guide BioCellulose
              synthesis layer by layer as it forms. This dynamic approach allows
              us to engineer material properties during biosynthesis rather than
              through post-processing. The result is application-specific
              BioCellulose with custom geometry, tunable porosity, multilayer
              functionality, and integrated active ingredients—all achieved in a
              single fermentation cycle. Our bioreactor design transforms MMR
              Technology from a laboratory concept into a scalable production
              platform for precision-engineered biomaterials.
            </p>
          </motion.div>
        </div>

        {/* The Editorial Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-10">
          {/* Card 1: Structured Sheets */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div
              ref={ref1}
              className="w-full aspect-square bg-[#F4F4F4] overflow-hidden mb-6 relative"
            >
              <motion.div
                style={{ y: y1 }}
                className="absolute inset-0 w-full h-[130%] -top-[15%]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/technology/Structured Sheets.png"
                    alt="Structured Sheets"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-sans font-medium text-bio-primary mb-1">
                  Structured Sheets
                </h3>
                <p className="font-mono text-[14px] text-bio-primary/50 uppercase tracking-widest">
                  Masks & patches
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-bio-panel flex items-center justify-center group-hover:bg-bio-accent group-hover:border-bio-accent transition-colors duration-300 flex-shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-bio-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="10 5 19 5 19 14"></polyline>
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-bio-primary/10 mt-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-bio-accent w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </div>
          </motion.div>

          {/* Card 2: Functional Matrices */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div
              ref={ref2}
              className="w-full aspect-square bg-[#F4F4F4] overflow-hidden mb-6 relative"
            >
              <motion.div
                style={{ y: y2 }}
                className="absolute inset-0 w-full h-[130%] -top-[15%]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/technology/Functional Matrices.png"
                    alt="Functional Matrices"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-sans font-medium text-bio-primary mb-1">
                  Functional Matrices
                </h3>
                <p className="font-mono text-[14px] text-bio-primary/50 uppercase tracking-widest">
                  Hydration & delivery
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-bio-panel flex items-center justify-center group-hover:bg-bio-accent group-hover:border-bio-accent transition-colors duration-300 flex-shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-bio-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="10 5 19 5 19 14"></polyline>
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-bio-primary/10 mt-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-bio-accent w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </div>
          </motion.div>

          {/* Card 3: Custom Structures */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="group cursor-pointer"
          >
            <div
              ref={ref3}
              className="w-full aspect-square bg-[#F4F4F4] overflow-hidden mb-6 relative"
            >
              <motion.div
                style={{ y: y3 }}
                className="absolute inset-0 w-full h-[130%] -top-[15%]"
              >
                <div className="relative w-full h-full">
                  <Image
                    src="/images/technology/Custom Structures.png"
                    alt="Custom Structures"
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                </div>
              </motion.div>
            </div>

            <div className="flex justify-between items-start">
              <div>
                <h3 className="text-xl font-sans font-medium text-bio-primary mb-1">
                  Custom Structures
                </h3>
                <p className="font-mono text-[14px] text-bio-primary/50 uppercase tracking-widest">
                  Multilayer & tailored
                </p>
              </div>

              <div className="w-8 h-8 rounded-full border border-bio-panel flex items-center justify-center group-hover:bg-bio-accent group-hover:border-bio-accent transition-colors duration-300 flex-shrink-0">
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-bio-primary transform group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300"
                >
                  <line x1="5" y1="19" x2="19" y2="5"></line>
                  <polyline points="10 5 19 5 19 14"></polyline>
                </svg>
              </div>
            </div>
            <div className="w-full h-[1px] bg-bio-primary/10 mt-6 relative overflow-hidden">
              <div className="absolute top-0 left-0 h-full bg-bio-accent w-full transform -translate-x-full group-hover:translate-x-0 transition-transform duration-500 ease-out"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
