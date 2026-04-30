"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechHero() {
    return (
        <section className="w-full h-[70vh] min-h-[500px] flex items-center bg-bio-primary relative overflow-hidden">

            {/* Background Image Layer */}
            <div className="absolute inset-0 w-full h-full z-0 opacity-40">
                <Image
                    src="/images/technology/hero-bg.png"
                    alt="Bacterial Nanocellulose Background"
                    fill
                    priority
                    className="object-cover"
                />
                {/* Contrast Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-r from-bio-primary via-bio-primary/60 to-transparent"></div>
            </div>

            {/* Background Watermark */}
            <div className="absolute top-20 right-[-5%] opacity-10 select-none pointer-events-none z-10">
                <span className="text-[30vw] font-sans font-bold tracking-tighter text-white">
                    02
                </span>
            </div>

            <div className="max-w-7xl mx-auto w-full px-4 md:px-8 relative z-20">
                <div className="grid grid-cols-1 md:grid-cols-12 gap-8">
                    <div className="md:col-span-10 lg:col-span-9">
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                            className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium tracking-tight text-white leading-[1.05] mb-6"
                        >
                            Material Design at <br />
                            the <span className="italic text-white/70">Source.</span>
                        </motion.h1>
                    </div>

                    <div className="md:col-span-8 flex flex-col justify-end">
                        <motion.p
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                            className="font-mono text-[14px] md:text-base leading-relaxed text-white/80 border-l-2 border-bio-accent pl-8 max-w-2xl"
                        >
                            Enabled by BIOJENA’s Proprietary Bioreactors with Mobile Matrix Reservoir (MMR) Technology. We define geometry, porosity, and functionality as the material grows.
                        </motion.p>
                    </div>
                </div>
            </div>
        </section>
    );
}