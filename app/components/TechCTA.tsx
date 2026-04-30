"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import Button from "./Button";

export default function TechCTA() {
    return (
        <section className="w-full bg-bio-bg py-10 md:py-20 px-4 md:px-8 text-center flex flex-col items-center relative overflow-hidden">

            {/* Background Accent */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[1px] h-32 bg-bio-accent"></div>

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                className="max-w-4xl relative z-10"
            >
                <h2 className="text-4xl md:text-5xl lg:text-7xl font-sans font-medium tracking-tight text-bio-primary mb-12">
                    Ready to innovate your <span className="italic text-bio-primary/70">formulations?</span>
                </h2>
                <p className="font-mono text-sm md:text-base leading-relaxed text-bio-primary/70 mb-16 max-w-2xl mx-auto">
                    Contact us to explore how MMR Technology with our Proprietary Bioreactors can solve your formulation challenges, or to discuss co-development opportunities for application-specific materials.
                </p>

                <div className="flex flex-col items-center gap-12">
                    <Link href="mailto:contact@biojena.de">
                        <Button variant="primary">
                            Initiate Co-Development
                        </Button>
                    </Link>

                    {/* Direct Rep Info */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.5 }}
                        className="font-mono text-[14px] uppercase tracking-[0.4em] text-bio-primary/40"
                    >
                        Direct Inquiry: <span className="text-bio-primary ml-2">Vanessa Raddatz</span> // <a href="mailto:contact@biojena.de" className="text-bio-primary hover:text-bio-accent transition-colors">contact@biojena.de</a>
                    </motion.div>
                </div>
            </motion.div>
        </section>
    );
}