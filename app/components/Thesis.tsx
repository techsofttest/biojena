"use client";

import { motion } from "framer-motion";

export default function Thesis() {
    return (
        <section className="w-full bg-bio-bg py-10 md:py-20 px-8 flex justify-center border-b border-bio-panel">

            <div className="max-w-5xl w-full relative">

                {/* The Core Statement */}
                <motion.h2
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                    className="text-3xl md:text-5xl lg:text-6xl font-sans font-medium tracking-tight text-bio-primary leading-[1.2] mb-12"
                >
                    Cosmetics require materials that are
                    <span className="block mt-2">
                        both <span className="italic opacity-70">sustainable</span> and <span className="border-b-2 border-bio-accent pb-1">high-performance.</span>
                    </span>
                </motion.h2>

                {/* The Sub-Thesis & Data Readouts */}
                <div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">

                    <motion.p
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="flex-1 font-mono text-sm leading-relaxed text-bio-primary/80"
                    >
                        The industry relies heavily on synthetic, fossil-derived ingredients that compromise the environment, or plant-based alternatives that lack structural purity and performance consistency. BIOJENA bridges this gap by engineering pure BioCellulose—a material that performs like a synthetic but degrades like a leaf. Using our proprietary bioreactors with Mobile Matrix Reservoir (MMR) Technology, we achieve precision control over material architecture during biosynthesis. This enables application-specific properties—custom geometry, tunable porosity, multilayer functionality—all in a single fermentation cycle. The result: pharmaceutical-grade purity with cosmetic-grade performance, 100% biodegradable, and designed to meet your exact formulation needs.
                    </motion.p>

                    {/* Technical Validation Block */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full md:w-auto flex flex-col gap-6 p-6 bg-bio-panel border border-bio-primary/10"
                    >

                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-[14px] uppercase tracking-widest text-bio-primary/50">Biodegradability Rating</span>
                            <div className="flex gap-1">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <div key={i} className="w-6 h-1.5 bg-bio-accent"></div>
                                ))}
                            </div>
                        </div>
                        <div className="flex flex-col gap-2">
                            <span className="font-mono text-[14px] uppercase tracking-widest text-bio-primary/50">MMR Purity Standard</span>
                            <span className="font-mono text-lg font-bold text-bio-primary">&gt;99.8%</span>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}
