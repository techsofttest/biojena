"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function TechDetails() {
    return (
        <section className="w-full bg-[#FDFDFD] py-10 md:py-20 px-4 md:px-8 border-b border-bio-panel overflow-hidden">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-24 items-center">

                {/* Text Content */}
                <div className="md:col-span-6 lg:col-span-5">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <span className="w-1 h-10 bg-bio-accent"></span>
                        <span className="font-mono text-[14px] tracking-[0.3em] uppercase text-bio-primary font-bold">
                            THE TRANSITION
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-bio-primary leading-tight mb-10"
                    >
                        Moving beyond static cultivation.
                    </motion.h2>

                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="flex flex-col gap-10 font-mono text-sm md:text-base leading-relaxed text-bio-primary/80"
                    >
                        <p>
                            Traditional biocellulose (BC) production uses static fermentation—bacteria grow on stationary surfaces, forming flat sheets with fixed properties.
                        </p>

                        <div className="bg-bio-panel p-8 md:p-12 border border-bio-primary/10 relative overflow-hidden group">
                            <span className="absolute top-0 left-0 w-[2px] h-0 bg-bio-accent group-hover:h-full transition-all duration-700 ease-in-out"></span>
                            <strong className="text-bio-primary block mb-4 uppercase tracking-[0.2em] text-[14px]">The MMR Advantage</strong>
                            <p className="text-bio-primary/90">
                                MMR Technology replaces static cultivation with a dynamic template-based system that guides biosynthesis in real-time, enabling precision control over material architecture, functionality, and performance.
                            </p>
                        </div>
                    </motion.div>
                </div>

                {/* Visual Side */}
                <div className="md:col-span-6 lg:col-span-7 relative">
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="relative w-full aspect-[4/3] bg-bio-panel border border-bio-panel overflow-hidden group"
                    >
                        <Image
                            src="/images/technology/process1.png"
                            alt="Dynamic Bioreactor Process"
                            fill
                            sizes="(max-width: 768px) 100vw, 50vw"
                            className="object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-bio-primary/10 group-hover:bg-transparent transition-colors duration-500"></div>

                        {/* Technical Overlay Detail */}
                        {/* <div className="absolute bottom-0 right-0 bg-bio-primary text-white p-6 md:p-8 font-mono text-[10px] tracking-[0.2em] uppercase">
                            <span className="text-bio-accent mr-2">●</span> [ UNIT.SYS // BIOREAC.01 ]
                        </div> */}
                    </motion.div>
                </div>

            </div>
        </section>
    );
}
