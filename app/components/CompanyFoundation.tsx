"use client";

import { motion } from "framer-motion";

export default function CompanyFoundation() {
    const foundations = [
        {
            stat: "100+",
            label: "PUBLICATIONS",
            text: "Peer-reviewed scientific publications establishing BC properties, safety, and functional applications."
        },
        {
            stat: "25+",
            label: "YEARS",
            text: "Decades of cross-industry validation in pharmaceutical, medical, and cosmetic applications."
        },
        {
            stat: "2000s",
            label: "OPERATIONAL",
            text: "Deep institutional experience through KKF Polymers for Life, driving biocellulose innovation since the early 2000s."
        }
    ];

    return (
        // REMOVED 'overflow-hidden' from the parent section so sticky positioning works
        <section className="w-full bg-[#FDFDFD] py-16 md:py-32 px-4 md:px-8 border-b border-bio-panel relative">

            {/* Background Grid Pattern - Wrapped safely to prevent any bleed */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 opacity-[0.03] select-none"
                    style={{ backgroundImage: 'radial-gradient(circle, #0D2C24 1px, transparent 1px)', backgroundSize: '40px 40px' }}>
                </div>
            </div>

            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-y-24 gap-x-20 items-start relative z-10">

                {/* Sticky Left Column */}
                {/* ADDED 'h-fit' and changed to 'lg:top-32' for perfect top-alignment */}
                <div className="lg:col-span-5 lg:sticky lg:top-32 h-fit">
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-10"
                    >
                        <span className="w-1 h-12 bg-bio-accent"></span>
                        <span className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-primary font-bold">
                            FOUNDATION
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="text-5xl md:text-6xl font-sans font-medium text-bio-primary leading-[0.95] mb-12"
                    >
                        Built on <br />
                        <span className="italic text-bio-primary/70">25+ Years</span> <br />
                        of Science.
                    </motion.h2>

                    <motion.p
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.4 }}
                        className="font-mono text-sm leading-relaxed text-bio-primary/40 max-w-sm"
                    >
                        Our technology is not experimental; it is the culmination of decades of academic and commercial validation.
                    </motion.p>
                </div>

                {/* Right Column Content */}
                {/* Added bottom padding (pb-12) to ensure smooth scrolling past the sticky element */}
                <div className="lg:col-span-7 flex flex-col gap-24 pb-12">
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="font-mono text-base md:text-lg leading-relaxed text-bio-primary/80 flex flex-col gap-10"
                    >
                        <p className="text-xl md:text-2xl font-sans font-light text-bio-primary leading-relaxed">
                            BIOJENA is a spin-off from <strong className="text-bio-primary font-medium italic">KKF Polymers (University of Jena)</strong>, built on the definitive body of work in bacterial biocellulose.
                        </p>
                        <div className="bg-bio-panel p-10 md:p-16 border border-bio-primary/10 relative group">
                            <span className="absolute top-0 right-0 w-[40px] h-[40px] border-t-2 border-r-2 border-bio-accent/20 group-hover:border-bio-accent transition-colors duration-700"></span>
                            <p className="text-bio-primary/70 text-sm md:text-base leading-relaxed">
                                Our founding team emerged from the research group of <strong className="text-bio-primary font-medium">Prof. Dr. Dieter Klemm</strong>, a global authority in biocellulose whose publications and patents have defined the material architecture standards over three decades.
                            </p>
                        </div>
                    </motion.div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-px bg-bio-panel border border-bio-panel">
                        {foundations.map((item, idx) => (
                            <motion.div
                                key={idx}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                                className="bg-white p-12 flex flex-col group hover:bg-[#FAFAFA] transition-colors duration-500"
                            >
                                <span className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-primary/40 mb-10 block group-hover:text-bio-accent-dark transition-colors duration-500">
                                    {item.label}
                                </span>
                                <span className="font-sans text-5xl md:text-6xl font-medium text-bio-primary mb-8 group-hover:scale-105 origin-left transition-transform duration-700">
                                    {item.stat}
                                </span>
                                <p className="font-mono text-[14px] text-bio-primary/60 leading-relaxed">
                                    {item.text}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}