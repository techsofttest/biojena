"use client";

import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";

export default function Footer() {
    return (
        <footer className="relative w-full bg-bio-primary pt-32 pb-12 px-4 md:px-8 text-white overflow-hidden">

            {/* Background Depth Watermark */}
            <div className="absolute bottom-[-10%] left-1/2 -translate-x-1/2 w-full flex justify-center opacity-[0.03] pointer-events-none select-none z-0">
                <span className="text-[22vw] font-sans font-bold tracking-tighter text-white whitespace-nowrap">
                    BIOJENA
                </span>
            </div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-7xl mx-auto relative z-10"
            >

                <div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 border-b border-white/10 pb-24">

                    {/* Brand & Mission Column */}
                    <div className="md:col-span-5 flex flex-col justify-between">
                        <div>
                            {/* Logo with Color Inversion */}
                            <Link href="/" className="relative inline-block mb-8 group">
                                <Image
                                    src="/logo/logo2.png"
                                    alt="BIOJENA Logo"
                                    width={160}
                                    height={18}
                                    className="invert brightness-0 invert-[1] transition-opacity duration-300 group-hover:opacity-80"
                                    style={{ width: "160px", height: "auto" }}
                                />
                            </Link>

                            <p className="font-mono text-sm leading-relaxed text-white/50 max-w-sm mt-4">
                                Engineered purity. Materializing the future of sustainable, high-performance cosmetics through MMR technology.
                            </p>
                        </div>
                    </div>

                    {/* Navigation Column */}
                    <div className="md:col-span-3">
                        <h4 className="font-mono text-xs tracking-[0.3em] uppercase text-white/30 mb-10">Navigation</h4>
                        <nav className="flex flex-col gap-5 font-sans text-sm font-medium tracking-wide">
                            <Link href="/" className="hover:text-bio-accent transition-colors duration-300 w-fit">Home</Link>
                            <Link href="/technology" className="hover:text-bio-accent transition-colors duration-300 w-fit">Technology</Link>
                            <Link href="/company" className="hover:text-bio-accent transition-colors duration-300 w-fit">Company</Link>
                        </nav>
                    </div>

                    {/* Direct Contact Column */}
                    <div className="md:col-span-4">
                        <h4 className="font-mono text-xs tracking-[0.3em] uppercase text-white/30 mb-10">Direct Inquiries</h4>
                        <div className="flex flex-col gap-8 font-mono text-sm">

                            <div className="group">
                                <span className="block text-[11px] text-white/30 uppercase tracking-widest mb-2">Email Partnerships</span>
                                <a href="mailto:contact@biojena.com" className="text-xl text-white hover:text-bio-accent transition-all duration-300 flex items-center gap-3">
                                    contact@biojena.com
                                    <span className="w-6 h-[1px] bg-bio-accent transform scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500"></span>
                                </a>
                            </div>

                            <div className="group">
                                <span className="block text-[11px] text-white/30 uppercase tracking-widest mb-2">Global HQ</span>
                                <p className="leading-relaxed text-white/70">
                                    BIOJENA GmbH<br />
                                    Spitzweidenweg 30, 07743 Jena, Germany
                                </p>
                            </div>

                        </div>
                    </div>

                </div>

                {/* Bottom Bar: Copyright */}
                <div className="flex flex-col md:flex-row justify-between items-center pt-12 gap-6 relative">
                    <div className="flex items-center gap-4">
                        <div className="w-2 h-2 rounded-full bg-bio-accent animate-pulse"></div>
                        <p className="font-mono text-xs tracking-widest text-white/30 uppercase">
                            © {new Date().getFullYear()} BIOJENA Germany // All Systems Nominal
                        </p>
                    </div>
                </div>

            </motion.div>
        </footer>
    );
}
