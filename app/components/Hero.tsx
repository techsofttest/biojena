"use client";

import Link from 'next/link';
import { motion } from 'framer-motion';

export default function Hero() {
    return (
        // Outer Wrapper: Viewport height, handling the spacing to create the "Boxed" effect
        <section className="w-full h-screen flex items-center justify-center bg-transparent">

            {/* Inner Box: The actual Hero container. Sharp corners, full height of remaining space */}
            <div className="relative w-full h-full flex flex-col items-center justify-center overflow-hidden">

                {/* Background Video Layer */}
                <div className="fixed inset-0 w-full h-full -z-10 bg-[#05110d]">
                    <video
                        src="/video/hero-sec/hero-video3.mp4"
                        autoPlay
                        loop
                        muted
                        playsInline
                        className="w-full h-full object-cover opacity-80 mix-blend-screen"
                    />
                    {/* Contrast Overlay: A dark green wash to ensure the pure white text is perfectly legible */}
                    {/* <div className="absolute inset-0 bg-bio-primary/20"></div> */}
                </div>

                {/* Content Container: Centered, White Text, Standard/Medium Weights */}
                <div className="relative z-10 w-full px-6 flex flex-col items-center text-center">

                    {/* Eyebrow */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                        className="flex flex-col items-center gap-3 mb-6"
                    >
                        <span className="w-[1px] h-8 bg-bio-accent"></span>
                        <span className="font-mono text-xs tracking-[0.3em] uppercase text-white">
                            BIOJENA Technology
                        </span>
                    </motion.div>

                    {/* Main Headline: Centered, White, standard font weight (no extra-bold) */}
                    <motion.h1
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
                        className="text-4xl md:text-5xl lg:text-6xl font-sans tracking-wide text-white leading-[1.15] mb-8"
                    >
                        Designable
                        Biodegradable <br />
                        Materials
                    </motion.h1>

                    {/* Sub-copy */}
                    {/* <p className="font-mono text-xs md:text-sm leading-relaxed text-white/80 mb-10 max-w-lg">
                        Bacterial nanocellulose engineered using Mobile Matrix Reservoir Technology. Pioneering the next generation of pure, sustainable cosmetic raw materials.
                    </p> */}

                    {/* Action Area: Inverted White Button for Dark Background */}
                    <motion.div
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.5, ease: [0.16, 1, 0.3, 1] }}
                    >
                        <Link href="/technology" className="group relative inline-flex items-center justify-center px-10 py-4 font-mono text-xs tracking-[0.2em] uppercase text-white border border-white/50 transition-all duration-300">
                            {/* The signature vertical center-fill, modified to work with the dark background */}
                            <span className="absolute inset-0 w-full h-full bg-bio-accent origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-500 ease-in-out -z-10" aria-hidden="true"></span>
                            <span className="relative z-10 group-hover:text-bio-primary transition-colors duration-300">
                                Explore Technology
                            </span>
                        </Link>
                    </motion.div>

                </div>

            </div>
        </section>
    );
}