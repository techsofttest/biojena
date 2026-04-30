"use client";

import { motion } from "framer-motion";

export default function CompanyPartner() {
    const pathways = [
        { 
            num: "01",
            t: "Raw Material Supply", 
            d: "Precision-engineered bacterial biocellulose delivered as standardized, ready-to-formulate ingredients for seamless integration." 
        },
        { 
            num: "02",
            t: "Co-Development Partnerships", 
            d: "Bespoke BC materials engineered at the molecular level to solve specific formulation or performance challenges." 
        },
        { 
            num: "03",
            t: "Technology Transfer", 
            d: "Scaling through knowledge. We provide full technology transfer and technical support for large-scale implementations." 
        }
    ];

    return (
        <section className="w-full bg-[#FDFDFD] py-16 md:py-32 px-4 md:px-8 border-b border-bio-panel">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="mb-20 max-w-2xl"
                >
                    <div className="flex items-center gap-3 mb-6">
                        <span className="w-2 h-2 bg-bio-accent"></span>
                        <span className="font-mono text-[14px] tracking-[0.3em] uppercase text-bio-primary font-bold">
                            COLLABORATION MODEL
                        </span>
                    </div>
                    <h2 className="text-4xl md:text-5xl lg:text-6xl font-sans font-medium text-bio-primary mb-6">How We Partner</h2>
                    <p className="font-mono text-sm md:text-base text-bio-primary/60 leading-relaxed">
                        BIOJENA acts as a strategic material partner, offering three distinct pathways to transition your formulations into the bio-based future.
                    </p>
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-px md:bg-bio-panel border-y md:border border-bio-panel overflow-hidden">
                    {pathways.map((item, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="bg-white p-12 flex flex-col group relative overflow-hidden transition-all duration-700 hover:bg-[#FAFAFA]"
                        >
                            {/* Card Watermark */}
                            <span className="absolute -bottom-4 -right-4 font-sans font-bold text-8xl text-bio-primary opacity-[0.03] group-hover:opacity-[0.06] transition-opacity duration-700 select-none">
                                {item.num}
                            </span>

                            <div className="relative z-10">
                                <span className="w-8 h-[2px] bg-bio-accent mb-12 block group-hover:w-16 transition-all duration-700 ease-in-out"></span>
                                <h4 className="text-2xl font-sans font-medium text-bio-primary mb-6 group-hover:text-bio-accent-dark transition-colors duration-500 leading-tight">
                                    {item.t}
                                </h4>
                                <p className="font-mono text-sm leading-relaxed text-bio-primary/70">
                                    {item.d}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
