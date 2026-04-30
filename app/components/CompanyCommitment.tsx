"use client";

import { motion } from "framer-motion";
import Image from "next/image";

export default function CompanyCommitment() {
    const commitments = [
        {
            target: "To the industry:",
            text: "We never compromise performance to achieve sustainability. Bio-based materials must match or exceed synthetics in every functional metric."
        },
        {
            target: "To our partners:",
            text: "Transparency, technical rigor, and reliability. We deliver what we promise, on the timeline we commit to, with full scientific disclosure."
        },
        {
            target: "To the planet:",
            text: "Every kilogram of bacterial BioCellulose we produce replaces persistent synthetic polymers. We measure our success by the environmental debt we prevent."
        }
    ];

    return (
        <section className="w-full bg-[#FDFDFD] py-16 md:py-32 px-4 md:px-8 border-b border-bio-panel">
            <div className="max-w-7xl mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-bio-primary p-12 md:p-24 text-white relative overflow-hidden group"
                >
                    {/* Background Visual Layer */}
                    <div className="absolute inset-0 z-0 opacity-20">
                        <Image 
                            src="/images/company/commitment-bg.png"
                            alt="Commitment Background"
                            fill
                            className="object-cover transition-transform duration-[20s] group-hover:scale-110"
                        />
                        <div className="absolute inset-0 bg-gradient-to-br from-bio-primary via-bio-primary/80 to-transparent"></div>
                    </div>

                    <div className="relative z-10">
                        <motion.div
                            initial={{ opacity: 0, x: -10 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="flex items-center gap-3 mb-16"
                        >
                            <span className="w-10 h-[1px] bg-bio-accent"></span>
                            <span className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-accent font-bold">
                                OUR CORE COMMITMENT
                            </span>
                        </motion.div>

                        <div className="flex flex-col gap-16 md:gap-20">
                            {commitments.map((item, idx) => (
                                <motion.div 
                                    key={idx} 
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.8, delay: idx * 0.2 }}
                                    className="flex flex-col md:flex-row gap-6 md:gap-16 border-b border-white/10 pb-12 last:border-0 last:pb-0"
                                >
                                    <span className="font-mono text-[14px] text-bio-accent md:w-48 flex-shrink-0 pt-1 font-bold uppercase tracking-widest">
                                        {item.target}
                                    </span>
                                    <p className="text-xl md:text-2xl font-sans font-light leading-relaxed text-white/90 max-w-3xl">
                                        {item.text}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
}
