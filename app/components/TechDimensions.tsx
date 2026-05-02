"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import Image from "next/image";

function DimensionSection({ dim, idx }: { dim: any; idx: number }) {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"],
  });

  // Parallax for the image
  const y = useTransform(scrollYProgress, [0, 1], ["-15%", "15%"]);
  // Opacity and slide for content
  const contentOpacity = useTransform(
    scrollYProgress,
    [0, 0.3, 0.7, 1],
    [0, 1, 1, 0],
  );

  const isEven = idx % 2 === 0;

  return (
    <div
      ref={sectionRef}
      className="w-full min-h-[70vh] flex items-center py-10 md:py-20 relative overflow-hidden border-b border-bio-panel last:border-b-0"
    >
      <div
        className={`max-w-7xl mx-auto w-full px-4 md:px-8 grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-20 items-center`}
      >
        {/* Content Side */}
        <motion.div
          initial={{ opacity: 0, x: isEven ? -30 : 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
          className={`md:col-span-5 flex flex-col ${isEven ? "md:order-1" : "md:order-2 md:text-right md:items-end"}`}
        >
          <div
            className={`flex flex-col gap-4 mb-8 ${isEven ? "items-start" : "items-start md:items-end"}`}
          >
            <span className="font-mono text-5xl font-bold text-bio-accent opacity-20">
              {dim.id}
            </span>
            <div className="w-12 h-[2px] bg-bio-accent"></div>
          </div>

          <h3 className="text-3xl md:text-5xl font-sans font-medium text-bio-primary leading-tight mb-8">
            {dim.title}
          </h3>

          <p className="font-mono text-sm md:text-base leading-relaxed text-bio-primary/70 mb-10 max-w-lg">
            {dim.desc}
          </p>

          <div
            className={`pt-8 border-t border-bio-panel w-full max-w-sm ${!isEven && "md:border-t-0 md:pt-0"}`}
          >
            <div className={`flex flex-col gap-2 ${!isEven && "md:items-end"}`}>
              <p className="font-mono text-[14px] text-bio-primary font-bold uppercase tracking-widest leading-relaxed">
                {dim.spec}
              </p>
            </div>
          </div>
        </motion.div>

        {/* Image Side */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: "-10%" }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
          className={`md:col-span-7 relative ${isEven ? "md:order-2" : "md:order-1"}`}
        >
          <div className="relative w-full aspect-[4/3] md:aspect-[16/10] overflow-hidden bg-bio-panel border border-bio-panel group">
            <motion.div
              style={{ y }}
              className="absolute inset-0 w-full h-[130%] -top-[15%]"
            >
              <Image
                src={dim.img}
                alt={dim.title}
                fill
                sizes="(max-width: 768px) 100vw, 60vw"
                className="object-cover transition-transform duration-1000 group-hover:scale-105"
              />
            </motion.div>
            {/* Overlay Detail */}
            <div className="absolute inset-0 bg-bio-primary/5 group-hover:bg-transparent transition-colors duration-700"></div>
            <div className="absolute top-0 left-0 w-full h-full border-[20px] border-white/0 group-hover:border-white/5 transition-all duration-700 pointer-events-none"></div>
          </div>

          {/* Technical Tag Floating */}
          <div
            className={`absolute -bottom-6 ${isEven ? "-left-6" : "-right-6"} hidden lg:block`}
          >
            {/* <div className="bg-bio-primary text-white p-6 font-mono text-[10px] tracking-[0.2em] uppercase border border-white/10 backdrop-blur-sm">
                            <span className="text-bio-accent mr-2">●</span> [ SPEC.LOG // VAR.{dim.id} ]
                        </div> */}
          </div>
        </motion.div>
      </div>
    </div>
  );
}

export default function TechDimensions() {
  const dimensions = [
    {
      id: "01",
      title: "3D Shape & Architecture",
      img: "/images/technology/Structured Sheets.png",
      desc: "Define any geometry from flat sheets to complex 3D forms. Shapes are formed during biosynthesis—no cutting, molding, or material waste. Our templates guide the bacteria to build layer by layer exactly where the material is needed.",
      apps: "Custom-fit masks, curved patches, anatomically shaped delivery devices.",
    },
    {
      id: "02",
      title: "Nanofiber Network Density",
      img: "/images/technology/Functional Matrices.png",
      desc: "Tune porosity from dense barrier films to highly porous matrices. Dense networks provide mechanical strength and occlusive properties for sustained release. Porous networks enable high water retention (up to 99%) and rapid active delivery.",
      apps: "Hydration masks, controlled-release patches, barrier films.",
    },
    {
      id: "03",
      title: "Multilayer Functionality",
      img: "/images/technology/multilayer.png",
      desc: "Build multi-functional materials with distinct layers in one biosynthesis run. Each layer can have different density, porosity, or active loading—without lamination or adhesives. Layers bond at the molecular level, eliminating delamination risk.",
      apps: "Gradient-release systems, dual-function masks.",
    },
    {
      id: "04",
      title: "Active Ingredient Incorporation",
      img: "/images/technology/Custom Structures.png",
      desc: "Incorporate actives, botanicals, pigments, and functional compounds directly during fermentation. Homogeneous distribution ensures consistent delivery with pharmaceutical-grade reproducibility and zero chemical cross-linking.",
      apps: "Pre-loaded sheet masks, active delivery patches, color-customized bases.",
    },
  ];

  return (
    <section className="w-full bg-bio-bg py-24 md:py-40 border-b border-bio-panel overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 md:px-8 mb-20">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center text-center max-w-3xl mx-auto"
        >
          <div className="flex items-center gap-3 mb-6">
            <span className="w-2 h-2 rounded-full bg-bio-accent"></span>
            <span className="font-mono text-[10px] tracking-widest uppercase text-bio-primary">
              THE FOUR DIMENSIONS
            </span>
          </div>
          <h2 className="text-4xl md:text-6xl font-sans font-medium tracking-tight text-bio-primary mb-8">
            The Architecture of{" "}
            <span className="italic text-bio-primary/70">Control.</span>
          </h2>
          <p className="font-mono text-sm text-bio-primary/60 leading-relaxed">
            We don't just grow materials; we design them at the cellular level.
            By manipulating the environment of the bioreactor, we command the
            structural outcome in four key dimensions.
          </p>
        </motion.div>
      </div>

      <div className="flex flex-col">
        {dimensions.map((dim, idx) => (
          <DimensionSection key={dim.id} dim={dim} idx={idx} />
        ))}
      </div>
    </section>
  );
}
