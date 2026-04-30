"use client";

import { motion } from "framer-motion";

export default function CompanyWhoWeAre() {
    return (
        // REMOVED 'overflow-hidden' from the parent section. This is required for sticky to work!
        <section className="w-full bg-[#FDFDFD] py-16 md:py-32 px-4 md:px-8 border-b border-bio-panel relative">

            {/* Background Detail - Wrapped in its own overflow-hidden container so it doesn't break the section */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 right-[-5%] opacity-[0.02] select-none">
                    <span className="text-[25vw] font-sans font-bold tracking-tighter text-bio-primary">
                        ETHOS
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-20 gap-x-20 items-start relative z-10">

                {/* Left Column: The Anchor */}
                {/* ADDED 'h-fit' and reduced to 'top-32' to align it perfectly near the top */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <span className="w-1 h-10 bg-bio-accent"></span>
                        <span className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-primary font-bold">
                            IDENTITY
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl lg:text-7xl font-sans font-medium text-bio-primary leading-[0.95] mb-8"
                    >
                        Who <br />
                        <span className="italic text-bio-primary/70">We Are.</span>
                    </motion.h2>
                </div>

                {/* Right Column: The Narrative */}
                <div className="lg:col-span-7 flex flex-col gap-12 pb-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-mono text-base md:text-lg leading-relaxed text-bio-primary/80 flex flex-col gap-12"
                    >
                        <p className="text-xl md:text-2xl font-sans font-light text-bio-primary leading-relaxed">
                            <strong className="text-bio-primary font-medium">BIOJENA</strong> develops precision-synthesized biocellulose for the cosmetics industry. We combine deep scientific expertise in fermentation biotechnology with proprietary production methods to create raw materials that eliminate the performance-sustainability trade-off.
                        </p>

                        {/* Highlight Box for the MMR Technology statement */}
                        <div className="bg-bio-panel p-10 md:p-16 border border-bio-primary/10 relative overflow-hidden group">
                            <span className="absolute top-0 left-0 w-[2px] h-0 bg-bio-accent group-hover:h-full transition-all duration-1000 ease-in-out"></span>

                            <h4 className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-primary/40 mb-8 block">THE MECHANISM</h4>

                            <p className="text-bio-primary/90 text-sm md:text-base leading-relaxed">
                                Our Proprietary Bioreactors with <strong className="text-bio-primary">Mobile Matrix Reservoir (MMR) Technology</strong> gives us direct control over material architecture during biosynthesis, enabling application-specific properties: defined geometry, controlled porosity, multilayer functionality, and integrated active ingredients—all in a single fermentation cycle, without chemical modification.
                            </p>
                        </div>

                        <p className="text-sm md:text-base text-bio-primary/60 border-l border-bio-panel pl-8">
                            This is not just bio-based; it is bio-designed. We represent the next phase of high-performance formulation science.
                        </p>
                    </motion.div>
                </div>

            </div>
        </section>
    );
}