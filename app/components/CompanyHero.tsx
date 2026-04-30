"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";

export default function CompanyHero() {
    const containerRef = useRef<HTMLElement>(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
    const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

    return (
        <section ref={containerRef} className="w-full h-[70vh] min-h-[500px] flex items-center bg-bio-primary relative overflow-hidden">

            {/* Background Image Layer with Parallax */}
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%] z-0 opacity-40">
                <Image
                    src="/images/company/hero-bg.png"
                    alt="BIOJENA Laboratory Background"
                    fill
                    priority
                    className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bio-primary via-bio-primary/60 to-transparent"></div>
                <div className="absolute inset-0 bg-gradient-to-t from-bio-primary via-transparent to-transparent"></div>
            </motion.div>

            {/* Background Watermark */}
            <div className="absolute top-20 right-[-5%] opacity-[0.03] select-none pointer-events-none z-10">
                <span className="text-[35vw] font-sans font-bold tracking-tighter text-white">
                    03
                </span>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-20">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
                    <div className="lg:col-span-10">
                        <motion.h1
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-7xl lg:text-8xl font-sans font-medium tracking-tight text-white leading-[0.9] mb-6"
                        >
                            BIOJENA <br />
                            <span className="italic text-white/50">Core</span>
                        </motion.h1>
                    </div>

                    <div className="lg:col-span-8">
                        <motion.div
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 1, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col gap-6 font-mono text-base md:text-lg leading-relaxed text-white/80 border-l-2 border-bio-accent pl-8"
                        >
                            <p>
                                Designable & Biodegradable Raw Materials for High-Performance Cosmetics.
                            </p>
                        </motion.div>
                    </div>
                </div>
            </div>
        </section>
    );
}