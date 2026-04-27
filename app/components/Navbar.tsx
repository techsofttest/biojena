"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import Button from "./Button";

export default function Navbar() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsScrolled(true);
            } else {
                setIsScrolled(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        // Initial check
        handleScroll();

        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        // Boxed Layout: Detached from top, centered, with glassmorphic background and border
        <header
            className={`fixed z-50 transition-all duration-300 border ${isScrolled
                ? "top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl bg-bio-bg/85 backdrop-blur-md border-bio-panel"
                : "top-0 left-1/2 -translate-x-1/2 w-full max-w-full bg-transparent border-transparent"
                }`}
        >
            <div className="w-full max-w-7xl mx-auto px-8 h-20 flex items-center justify-between">

                {/* Logo Area */}
                <Link href="/" className="relative flex items-center group z-10">
                    <Image
                        src="/logo/logo2.png"
                        alt="BIOJENA Logo"
                        width={160}
                        height={40}
                        className={`object-contain transition-all duration-300 ${!isScrolled ? "brightness-0 invert" : ""}`}
                        priority
                    />
                </Link>

                {/* Central Clinical Links */}
                {/* Matched to the Button typography for visual consistency across the UI */}
                <nav className={`hidden md:flex gap-2 font-mono text-xs font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? "text-bio-primary" : "text-white"}`}>

                    {/* Nav Link: Home */}
                    <Link href="/" className="relative group px-6 py-3 overflow-hidden flex items-center justify-center transition-colors duration-300">
                        {/* Vertical Center-Fill Animation Layer */}
                        <span className="absolute inset-0 w-full h-full bg-bio-accent origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-in-out -z-10" aria-hidden="true"></span>
                        <span className={`relative z-10 transition-colors duration-300 group-hover:text-bio-primary`}>Home</span>
                    </Link>

                    {/* Nav Link: Technology */}
                    <Link href="/technology" className="relative group px-6 py-3 overflow-hidden flex items-center justify-center transition-colors duration-300">
                        <span className="absolute inset-0 w-full h-full bg-bio-accent origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-in-out -z-10" aria-hidden="true"></span>
                        <span className={`relative z-10 transition-colors duration-300 group-hover:text-bio-primary`}>Technology</span>
                    </Link>

                    {/* Nav Link: Company */}
                    <Link href="/company" className="relative group px-6 py-3 overflow-hidden flex items-center justify-center transition-colors duration-300">
                        <span className="absolute inset-0 w-full h-full bg-bio-accent origin-center scale-y-0 group-hover:scale-y-100 transition-transform duration-400 ease-in-out -z-10" aria-hidden="true"></span>
                        <span className={`relative z-10 transition-colors duration-300 group-hover:text-bio-primary`}>Company</span>
                    </Link>

                </nav>

                {/* Signature CTA */}
                <div className="hidden md:block">
                    <Link href="/contact">
                        <Button
                            variant="primary"
                            className={!isScrolled ? "!text-white !border-white hover:!text-bio-primary" : ""}
                        >
                            Contact Us
                        </Button>
                    </Link>
                </div>

            </div>
        </header>
    );
}
