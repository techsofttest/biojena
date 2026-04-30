"use client";

import { motion } from "framer-motion";

export default function TechSpecs() {
    return (
        <section className="w-full bg-[#FDFDFD] py-10 md:py-20 px-4 md:px-8 border-b border-bio-panel">
            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-20 gap-x-12 items-start">

                {/* Why MMR - Sticky Header */}
                <div className="md:col-span-5 md:sticky md:top-40">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="w-2 h-2 bg-bio-accent"></span>
                        <span className="font-mono text-[14px] tracking-[0.3em] uppercase text-bio-primary font-bold">
                            PERFORMANCE METRICS
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl font-sans font-medium text-bio-primary mb-8"
                    >
                        Why MMR?
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-mono text-sm leading-relaxed text-bio-primary/60 max-w-sm"
                    >
                        MMR Technology delivers design freedom and functional complexity with the sustainability profile of a natural material.
                    </motion.p>
                </div>

                {/* Technical Points & Status */}
                <div className="md:col-span-7 flex flex-col gap-24">

                    <div className="grid grid-cols-1 gap-12">
                        {[
                            "Application-specific architecture tailored to formulation needs.",
                            "Zero post-processing (no chemical cross-linking or mechanical treatment).",
                            "Pharmaceutical-grade purity (>99.8% cellulose, no lignin or hemicellulose).",
                            "100% biodegradable, zero microplastic residue.",
                            "Scalable production with 7-14 day fermentation cycles."
                        ].map((point, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                className="flex items-start gap-6 group"
                            >
                                <span className="w-1.5 h-1.5 bg-bio-accent mt-2 flex-shrink-0 group-hover:scale-150 transition-transform duration-300"></span>
                                <p className="font-mono text-lg text-bio-primary/90 leading-tight group-hover:text-bio-primary transition-colors">
                                    {point}
                                </p>
                            </motion.div>
                        ))}
                    </div>

                    {/* Production Status Box */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="bg-bio-primary p-12 md:p-16 text-white relative overflow-hidden group"
                    >
                        {/* Background Detail */}
                        <div className="absolute top-0 right-0 w-80 h-80 border border-white/5 rounded-full translate-x-1/2 -translate-y-1/2 pointer-events-none group-hover:border-bio-accent/10 transition-colors duration-700"></div>

                        <div className="relative z-10">
                            <h3 className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-accent mb-10 font-bold">
                                PRODUCTION STATUS
                            </h3>
                            <p className="text-2xl md:text-3xl font-sans font-medium leading-tight mb-12 max-w-lg">
                                MMR Technology is <span className="text-bio-accent">operational today.</span>
                            </p>
                            <div className="w-full h-[1px] bg-white/10 mb-12"></div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
                                <div>
                                    <h4 className="font-mono text-[14px] tracking-[0.2em] uppercase text-white/40 mb-3">Capacity</h4>
                                    <p className="font-mono text-[14px] leading-relaxed text-white/70">
                                        Lab-scale prototypes and pilot-scale production currently active in Jena, Germany.
                                    </p>
                                </div>
                                <div>
                                    <h4 className="font-mono text-[14px] tracking-[0.2em] uppercase text-white/40 mb-3">Validation</h4>
                                    <p className="font-mono text-[14px] leading-relaxed text-white/70">
                                        Legacy data from <strong className="text-white">KKF Polymers for Life</strong> covers 25+ years of clinical and cosmetic safety.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}