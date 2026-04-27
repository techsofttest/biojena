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
                        The industry relies heavily on synthetic, fossil-derived ingredients that compromise the environment, or plant-based alternatives that lack structural purity. BIOJENA bridges this gap by engineering pure bacterial nanocellulose—a material that performs like a synthetic but degrades like a leaf.
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
                            <span className="font-mono text-[10px] uppercase tracking-widest text-bio-primary/50">Biodegradability Rating</span>
                            <span className="font-mono text-lg font-bold text-bio-primary">100% (Absolute)</span>
                        </div>

                        <div className="w-full h-[1px] bg-bio-primary/10"></div>

                        <div className="flex flex-col gap-1">
                            <span className="font-mono text-[10px] uppercase tracking-widest text-bio-primary/50">MMR Purity Standard</span>
                            <span className="font-mono text-lg font-bold text-bio-primary">&gt;99.8%</span>
                        </div>

                    </motion.div>

                </div>

            </div>
        </section>
    );
}