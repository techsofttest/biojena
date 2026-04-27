"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function AboutSummary() {
    return (
        <section className="relative w-full bg-bio-bg py-10 md:py-20 px-4 md:px-8 border-b border-bio-panel">

            <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-x-12 gap-y-16 items-start">

                {/* LEFT SIDE: The Sticky Vision Stack */}
                <div className="md:col-span-7 md:sticky md:top-32 h-fit">
                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, x: -10 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                        className="flex items-center gap-3 mb-8"
                    >
                        <span className="w-2 h-2 bg-bio-accent"></span>
                        <span className="font-mono text-[10px] tracking-[0.3em] uppercase text-bio-primary font-bold">
                            THE VISION
                        </span>
                    </motion.div>

                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl lg:text-7xl font-sans font-medium tracking-tight text-bio-primary leading-[1.05] mb-12"
                    >
                        Transitioning the world to <br />
                        <span className="text-bio-bg bg-bio-primary px-4 pb-1 inline-block mt-2 shadow-sm">
                            bio-based
                        </span> raw materials.
                    </motion.h2>

                    {/* CTA */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <Link href="/company" className="group inline-flex items-center gap-6 w-fit py-2">
                            <span className="font-mono text-xs font-bold tracking-[0.2em] uppercase text-bio-primary">
                                Read Full Story
                            </span>
                            <div className="relative flex items-center">
                                <span className="w-12 h-[1px] bg-bio-primary group-hover:w-20 group-hover:bg-bio-accent transition-all duration-500 ease-in-out"></span>
                                <span className="absolute right-0 w-2 h-2 border-r border-t border-bio-primary group-hover:border-bio-accent rotate-45 transition-colors"></span>
                            </div>
                        </Link>
                    </motion.div>
                </div>

                {/* RIGHT SIDE: The Scrolling Detail Stack */}
                <div className="md:col-span-5 flex flex-col gap-12">
                    {/* The Suggested Image Anchor */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.98 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                        className="w-full aspect-square md:aspect-[4/5] bg-bio-panel relative overflow-hidden group border border-bio-panel"
                    >
                        <div className="absolute inset-0 bg-[#F4F4F4] group-hover:scale-105 transition-transform duration-1000 ease-out">
                            <Image
                                src="/images/home-about/ab.png"
                                alt="Bio-Fabricated Sculpt"
                                fill
                                className="object-cover"
                                priority
                            />
                        </div>
                    </motion.div>

                    {/* Deep-Dive Narrative Text */}
                    <div className="flex flex-col gap-8 pb-32">
                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8 }}
                            className="font-mono text-sm leading-relaxed text-bio-primary/90"
                        >
                            <strong className="text-bio-primary">BIOJENA</strong> is a biomaterials company developing sustainable alternatives for the cosmetics industry. We work with bacterial nanocellulose, a natural material produced through fermentation.
                        </motion.p>

                        <div className="w-full h-[1px] bg-bio-panel"></div>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.1 }}
                            className="font-mono text-sm leading-relaxed text-bio-primary/70"
                        >
                            Using our specialized Mobile Matrix Reservoir Technology, we control the structure and shape of this material during production. This allows us to create high-performance, biodegradable materials that can seamlessly replace synthetic ingredients in cosmetic products without compromising on quality or efficacy.
                        </motion.p>

                        <motion.p
                            initial={{ opacity: 0, y: 15 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="font-mono text-sm leading-relaxed text-bio-primary/70"
                        >
                            Our vision is to bridge the gap between high-end biotechnology and the luxury cosmetic market, ensuring that the next generation of beauty products is as pure as it is performant.
                        </motion.p>
                    </div>
                </div>

            </div>
        </section>
    );
}
