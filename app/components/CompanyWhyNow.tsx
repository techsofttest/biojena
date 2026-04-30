"use client";

import { motion } from "framer-motion";

export default function CompanyWhyNow() {
    const whyNow = [
        {
            num: "01",
            title: "Regulation",
            desc: "The EU Green Deal and upcoming 2027 mandates specifically target microplastics and persistent synthetic polymers in cosmetic formulations."
        },
        {
            num: "02",
            title: "Consumer Expectations",
            desc: "Transparency and radical sustainability are no longer niche; they are baseline expectations for the modern, conscious consumer."
        },
        {
            num: "03",
            title: "Material Science Maturity",
            desc: "Proprietary MMR Technology finally makes BioCellulose a viable, high-performance replacement for mainstream cosmetic ingredients."
        }
    ];

    return (
        // REMOVED 'overflow-hidden' from the section so sticky positioning works
        <section className="w-full bg-[#FDFDFD] py-16 md:py-32 px-4 md:px-8 border-b border-bio-panel relative">

            {/* Background Detail - Wrapped safely to prevent any bleed */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute top-20 right-[-5%] opacity-[0.02] select-none">
                    <span className="text-[25vw] font-sans font-bold tracking-tighter text-bio-primary">
                        NOW
                    </span>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-y-24 gap-x-20 items-start relative z-10">

                {/* Sticky Left Column */}
                {/* ADDED 'h-fit' and changed to 'md:top-32' for perfect top-alignment under the navbar */}
                <div className="md:col-span-5 md:sticky md:top-32 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <span className="w-1 h-12 bg-bio-accent"></span>
                        <span className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-primary font-bold">
                            STRATEGIC CONTEXT
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl font-sans font-medium text-bio-primary leading-tight mb-12"
                    >
                        Why <span className="italic text-bio-primary/70 text-4xl md:text-5xl block mt-2">Now?</span>
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.3 }}
                        className="font-mono text-[14px] leading-relaxed text-bio-primary/50 max-w-sm"
                    >
                        The intersection of policy, public demand, and technological breakthrough has created a unique window for material revolution.
                    </motion.p>
                </div>

                {/* Content Right Column */}
                <div className="md:col-span-7 flex flex-col gap-0 border-t border-bio-panel pb-12">
                    {whyNow.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="group py-12 md:py-20 border-b border-bio-panel flex gap-12"
                        >
                            <span className="font-mono text-4xl text-bio-accent opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                {item.num}
                            </span>
                            <div className="flex flex-col gap-4">
                                <h4 className="text-2xl md:text-3xl font-sans font-medium text-bio-primary group-hover:text-bio-accent-dark transition-colors duration-500">
                                    {item.title}
                                </h4>
                                <p className="font-mono text-[14px] md:text-base text-bio-primary/70 leading-relaxed max-w-lg">
                                    {item.desc}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>

            </div>
        </section>
    );
}