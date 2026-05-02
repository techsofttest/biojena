"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileMenuOpen]);

  const ringVariants: Variants = {
    animate: {
      rotate: [0, -15, 15, -10, 10, -5, 5, 0],
      transition: {
        duration: 0.6,
        repeat: Infinity,
        repeatDelay: 4,
        ease: "easeInOut",
      },
    },
  };

  const sparkleVariants: Variants = {
    animate: (custom: number) => ({
      scale: [0, 1, 0],
      opacity: [0, 1, 0],
      transition: {
        duration: 1.5,
        repeat: Infinity,
        delay: custom * 0.5,
        ease: "easeInOut",
      },
    }),
  };

  const menuVariants: Variants = {
    closed: {
      x: "100%",
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
    open: {
      x: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const },
    },
  };

  const linkVariants: Variants = {
    closed: { opacity: 0, y: 20 },
    open: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: 0.4 + i * 0.1,
        duration: 0.6,
        ease: [0.16, 1, 0.3, 1] as const,
      },
    }),
  };

  // Logical check: if the menu is open, the navbar MUST dock to the top so it aligns with the menu background
  const isFloating = isScrolled && !isMobileMenuOpen;
  const isDarkTheme = !isScrolled && !isMobileMenuOpen;

  return (
    <>
      <header
        className={`fixed z-[60] transition-all duration-500 ${
          isFloating
            ? "top-6 left-1/2 -translate-x-1/2 w-[calc(100%-2rem)] max-w-7xl bg-bio-bg/85 backdrop-blur-md border border-bio-panel"
            : "top-0 left-0 w-full bg-transparent border-transparent"
        }`}
      >
        <div className="w-full max-w-7xl mx-auto px-6 md:px-8 h-20 flex items-center justify-between">
          {/* Logo Area */}
          <Link
            href="/"
            className="relative flex items-center z-10"
            onClick={() => setIsMobileMenuOpen(false)}
          >
            <div className="w-[140px] md:w-[160px] transition-all duration-300">
              <Image
                src="/logo/logo2.png"
                alt="BIOJENA Logo"
                width={160}
                height={16}
                className={`object-contain w-full h-auto transition-all duration-300 ${isDarkTheme ? "brightness-0 invert" : ""}`}
                priority
              />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav
            className={`hidden lg:flex gap-4 font-mono text-[14px] font-bold tracking-[0.2em] uppercase transition-colors duration-300 ${isScrolled ? "text-bio-primary" : "text-white"}`}
          >
            <Link
              href="/"
              className="px-4 py-2 hover:text-bio-accent transition-colors"
            >
              Home
            </Link>
            <Link
              href="/technology"
              className={`px-4 py-2 hover:text-bio-accent transition-colors ${isScrolled ? "hover:text-bio-accent-dark" : "hover:text-bio-accent"}`}
            >
              Technology
            </Link>
            <Link
              href="/company"
              className={`px-4 py-2 hover:text-bio-accent transition-colors ${isScrolled ? "hover:text-bio-accent-dark" : "hover:text-bio-accent"}`}
            >
              Company
            </Link>
          </nav>

          {/* Desktop Contact Detail */}
          <div className="hidden lg:flex items-center">
            <div
              className={`group flex items-center gap-3 font-mono text-[14px] font-bold tracking-[0.1em] transition-colors duration-300 ${!isScrolled ? "text-white" : "text-bio-primary"}`}
            >
              <div className="relative flex items-center justify-center">
                <motion.svg
                  custom={0}
                  variants={sparkleVariants}
                  animate="animate"
                  className="absolute -top-1 -left-1.5 w-2 h-2 text-bio-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l3 9h9l-7 5 3 9-8-7-8 7 3-9-7-5h9z" />
                </motion.svg>
                <motion.svg
                  custom={1}
                  variants={sparkleVariants}
                  animate="animate"
                  className="absolute -bottom-1 -right-1.5 w-1.5 h-1.5 text-bio-accent"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 0l3 9h9l-7 5 3 9-8-7-8 7 3-9-7-5h9z" />
                </motion.svg>

                <motion.svg
                  variants={ringVariants}
                  animate="animate"
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  viewBox="0 0 24 24"
                >
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </motion.svg>
              </div>
              <span>contact@biojena.com</span>
            </div>
          </div>

          {/* Mobile Menu Toggle (Hamburger) */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="lg:hidden relative flex flex-col justify-center items-center w-10 h-10 z-50 focus:outline-none"
            aria-label="Toggle Menu"
          >
            {/* Instead of inheriting text color, we EXPLICITLY set the background color of the lines. 
                            This guarantees the burger icon never vanishes. 
                        */}
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? 45 : 0,
                y: isMobileMenuOpen ? 8 : 0,
              }}
              className={`w-6 h-[2px] block transition-colors duration-300 ${isDarkTheme ? "bg-white" : "bg-bio-primary"}`}
            />
            <motion.span
              animate={{ opacity: isMobileMenuOpen ? 0 : 1 }}
              className={`w-6 h-[2px] block my-1.5 transition-colors duration-300 ${isDarkTheme ? "bg-white" : "bg-bio-primary"}`}
            />
            <motion.span
              animate={{
                rotate: isMobileMenuOpen ? -45 : 0,
                y: isMobileMenuOpen ? -8 : 0,
              }}
              className={`w-6 h-[2px] block transition-colors duration-300 ${isDarkTheme ? "bg-white" : "bg-bio-primary"}`}
            />
          </button>
        </div>
      </header>

      {/* Off-Canvas Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            // Set below header's z-60, but above everything else
            className="fixed inset-0 z-[50] bg-bio-bg flex flex-col"
          >
            {/* Menu Background Detail */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none overflow-hidden">
              <span className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[26vw] font-sans font-bold tracking-tighter text-bio-primary">
                BIOJENA
              </span>
            </div>

            <div className="flex-1 flex flex-col justify-center px-8 relative z-10 pt-24">
              <nav className="flex flex-col gap-6 md:gap-8">
                {[
                  { name: "Home", href: "/" },
                  { name: "Technology", href: "/technology" },
                  { name: "Company", href: "/company" },
                ].map((link, i) => (
                  <motion.div
                    key={link.name}
                    custom={i}
                    variants={linkVariants}
                  >
                    <Link
                      href={link.href}
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="text-4xl md:text-7xl font-sans font-medium text-bio-primary hover:text-bio-accent-dark transition-colors"
                    >
                      {link.name}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <div className="mt-auto pb-12">
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.8 }}
                  className="flex flex-col gap-8"
                >
                  <div className="h-px w-full bg-bio-panel"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[12px] uppercase tracking-widest text-bio-primary/40 font-bold">
                        Direct Inquiries
                      </span>
                      <a
                        href="mailto:contact@biojena.com"
                        className="font-mono text-lg text-bio-primary hover:text-bio-accent-dark transition-colors"
                      >
                        contact@biojena.com
                      </a>
                      <span className="font-mono text-lg text-bio-primary">
                        +49 3641 555 880
                      </span>
                    </div>
                    <div className="flex flex-col gap-2">
                      <span className="font-mono text-[12px] uppercase tracking-widest text-bio-primary/40 font-bold">
                        Headquarters
                      </span>
                      <p className="font-mono text-[14px] text-bio-primary/60 leading-relaxed">
                        BIOJENA
                        <br />
                        Spitzweidenweg 30
                        <br />
                        07743 Jena, Germany
                      </p>
                    </div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
