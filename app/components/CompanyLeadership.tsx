"use client";

import { motion } from "framer-motion";

export default function CompanyLeadership() {
    const team = [
        {
            num: "01",
            name: "Deepesh Changat",
            role: "CEO",
            desc: "Serial entrepreneur with 25+ years building and scaling biotech and medical technology ventures across Germany, Europe, and international markets. Deep expertise in commercializing deep-science innovations and navigating regulatory pathways."
        },
        {
            num: "02",
            name: "Dr. Stefan Kreusch",
            role: "CSO",
            desc: "Biotech innovator with 25+ years translating academic research into commercial ventures. Recognized across Germany's biotech ecosystem for bridging the gap between fundamental science and market-ready products."
        },
        {
            num: "03",
            name: "Dr. Dirk Merkel",
            role: "BUSINESS DEVELOPMENT",
            desc: "Trained chemist with 25+ years specializing in science-driven business development, strategic partnerships, and market expansion in cosmetics and personal care."
        },
        {
            num: "04",
            name: "Vanessa Raddatz",
            role: "R&D LEAD",
            desc: "Expert in bacterial Biocellulose material design with specialization in Pharmaceutical Technology & Biopharmacy. The scientific backbone of MMR Technology development and Proprietary Bioreactors."
        }
    ];

    return (
        <section className="w-full bg-bio-bg py-16 md:py-32 px-4 md:px-8 border-b border-bio-panel relative overflow-hidden">

            {/* Background Detail */}
            <div className="absolute top-20 left-[-5%] opacity-[0.02] select-none pointer-events-none">
                <span className="text-[25vw] font-sans font-bold tracking-tighter text-bio-primary uppercase">
                    TEAM
                </span>
            </div>

            <div className="max-w-7xl mx-auto relative z-10">

                <motion.div
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row md:items-end justify-between gap-12 mb-32"
                >
                    <div className="max-w-2xl">
                        <div className="flex items-center gap-3 mb-8">
                            <span className="w-2 h-2 rounded-full bg-bio-accent"></span>
                            <span className="font-mono text-[14px] tracking-[0.4em] uppercase text-bio-primary font-bold">
                                LEADERSHIP
                            </span>
                        </div>
                        <h2 className="text-5xl md:text-6xl font-sans font-medium tracking-tight text-bio-primary leading-[0.95]">
                            The minds behind <br />
                            <span className="italic text-bio-primary/70">the matrix.</span>
                        </h2>
                    </div>
                    {/* <div className="font-mono text-[14px] tracking-[0.3em] uppercase text-bio-primary/30 hidden md:block">
                        [ SYSTEM_PHASE // CORE_TEAM ]
                    </div> */}
                </motion.div>

                {/* Team Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-20 gap-y-24 mb-20">
                    {team.map((member, idx) => (
                        <motion.div
                            key={idx}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: idx * 0.1, ease: [0.16, 1, 0.3, 1] }}
                            className="flex flex-col group"
                        >
                            <div className="flex items-center justify-between border-b border-bio-panel pb-6 mb-8">
                                <span className="font-mono text-2xl text-bio-accent opacity-30 group-hover:opacity-100 transition-opacity duration-500">
                                    {member.num}
                                </span>
                                <span className="font-mono text-[14px] uppercase tracking-[0.3em] text-bio-primary/40 font-bold group-hover:text-bio-primary transition-colors duration-500">
                                    {member.role}
                                </span>
                            </div>
                            <h3 className="text-3xl md:text-4xl font-sans font-medium text-bio-primary mb-6">
                                {member.name}
                            </h3>
                            <p className="font-mono text-sm md:text-base leading-relaxed text-bio-primary/70 max-w-lg">
                                {member.desc}
                            </p>
                        </motion.div>
                    ))}
                </div>

                {/* Advisory Board */}
                <motion.div
                    initial={{ opacity: 0, scale: 0.98 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, ease: [0.16, 1, 0.3, 1] }}
                    className="bg-bio-panel p-12 md:p-20 text-center relative overflow-hidden group"
                >
                    <span className="absolute top-0 left-1/2 -translate-x-1/2 w-[1px] h-10 bg-bio-accent"></span>
                    <span className="font-mono text-[14px] uppercase tracking-[0.4em] text-bio-primary/40 block mb-12 font-bold">
                        SCIENTIFIC ADVISORY BOARD
                    </span>
                    <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
                        {[
                            { name: "Prof. Dr. Klemm", sub: "Emeritus, Univ. Jena" },
                            { name: "Prof. Dr. Dagmar Fischer", sub: "FAU Erlangen" },
                            { name: "PD Dr. Wolfgang Fried", sub: "" }
                        ].map((advisor, idx) => (
                            <div key={idx} className="flex flex-col gap-2">
                                <span className="font-sans text-2xl text-bio-primary">{advisor.name}</span>
                                {advisor.sub && (
                                    <span className="font-mono text-[14px] tracking-[0.1em] text-bio-primary/40 uppercase">{advisor.sub}</span>
                                )}
                            </div>
                        ))}
                    </div>
                </motion.div>

            </div>
        </section>
    );
}