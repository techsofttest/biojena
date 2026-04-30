"use client";

import { motion } from "framer-motion";

export default function TechMechanism() {
    const steps = [
        {
            num: "01",
            title: "Template Definition",
            text: "Shaped templates define the final geometry (sheets, tubes, spheres, complex 3D structures)."
        },
        {
            num: "02",
            title: "Dynamic Cycling",
            text: "Templates cycle between fermentation medium and air phase, building cellulose layer by layer."
        },
        {
            num: "03",
            title: "Precision Control",
            text: "Cycle timing, immersion depth, and medium composition control nanofiber orientation, density, and porosity."
        },
        {
            num: "04",
            title: "Single-Run Synthesis",
            text: "The entire structure—shape, architecture, multilayer composition, and actives—forms in one fermentation run."
        }
    ];

    return (
        <section className="w-full bg-bio-bg py-10 md:py-20 px-4 md:px-8 border-b border-bio-panel">
            <div className="max-w-7xl mx-auto">

                <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-8">
                    <div className="max-w-2xl">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6 }}
                            className="flex items-center gap-3 mb-10"
                        >
                            <span className="w-1 h-10 bg-bio-accent"></span>
                            <span className="font-mono text-[14px] tracking-[0.3em] uppercase text-bio-primary font-bold">
                                OPERATION LOGIC
                            </span>
                        </motion.div>
                        <motion.h2
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                            className="text-4xl md:text-5xl font-sans font-medium text-bio-primary"
                        >
                            How MMR Technology Works.
                        </motion.h2>
                    </div>
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="font-mono text-[14px] tracking-[0.2em] uppercase text-bio-primary/40 hidden md:block"
                    >
                        [ SYSTEM_PHASE // 0.04 ]
                    </motion.div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-px bg-bio-panel border border-bio-panel">
                    {steps.map((item, idx) => (
                        <motion.div
                            key={item.num}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: idx * 0.1 }}
                            className="bg-white p-10 md:p-12 flex flex-col group hover:bg-[#FAFAFA] transition-colors duration-500"
                        >
                            <span className="font-mono text-4xl text-bio-accent opacity-30 group-hover:opacity-100 transition-opacity duration-500 mb-12">
                                {item.num}
                            </span>
                            <h4 className="text-xl font-sans font-medium text-bio-primary mb-6 group-hover:text-bio-accent transition-colors duration-500">
                                {item.title}
                            </h4>
                            <p className="font-mono text-sm text-bio-primary/70 leading-relaxed">
                                {item.text}
                            </p>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}
