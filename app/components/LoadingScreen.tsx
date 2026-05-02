'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function LoadingScreen() {
    const [progress, setProgress] = useState(0);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        // Prevent scrolling while loading
        document.body.style.overflow = 'hidden';

        const interval = setInterval(() => {
            setProgress((prev) => {
                if (prev >= 100) {
                    clearInterval(interval);
                    setTimeout(() => {
                        setIsLoading(false);
                        document.body.style.overflow = 'unset';
                    }, 800);
                    return 100;
                }
                // Random increments to make it look "organic" and scientific
                const increment = Math.floor(Math.random() * 3) + 1;
                return Math.min(prev + increment, 100);
            });
        }, 40);

        return () => {
            clearInterval(interval);
            document.body.style.overflow = 'unset';
        };
    }, []);

    return (
        <AnimatePresence>
            {isLoading && (
                <motion.div
                    initial={{ opacity: 1 }}
                    exit={{
                        clipPath: 'inset(0 0 100% 0)', // Slides up like a luxury blind
                        transition: { duration: 1.2, ease: [0.76, 0, 0.24, 1] }
                    }}
                    className="fixed inset-0 z-[100] bg-bio-bg flex items-center justify-center overflow-hidden"
                >
                    {/* 1. Massive Background Watermark Counter */}
                    <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none pointer-events-none">
                        <span className="text-[50vw] font-sans font-bold tracking-tighter text-bio-primary">
                            {progress.toString().padStart(2, '0')}
                        </span>
                    </div>

                    {/* 2. The Vertical Scanning Spine */}
                    <div className="absolute left-1/2 top-0 bottom-0 w-[1px] bg-bio-panel -translate-x-1/2">
                        <motion.div
                            className="w-full bg-bio-accent"
                            style={{ height: `${progress}%` }}
                        />
                    </div>

                    {/* 3. Central Branding & Status */}
                    <div className="relative z-10 w-full max-w-7xl px-8 grid grid-cols-1 md:grid-cols-12 items-center">

                        {/* Branding (Left Side) */}
                        <div className="md:col-span-5">
                            <motion.div
                                initial={{ x: -20, opacity: 0 }}
                                animate={{ x: 0, opacity: 1 }}
                                transition={{ delay: 0.2 }}
                            >
                                <span className="font-sans text-4xl font-bold tracking-[0.2em] text-bio-primary">
                                    BIOJENA
                                </span>
                                <div className="flex items-center gap-4 mt-2">
                                    <span className="w-8 h-[1px] bg-bio-accent"></span>
                                    <span className="font-mono text-[9px] tracking-[0.4em] text-bio-primary/40 uppercase">
                                        Germany // System Initializing
                                    </span>
                                </div>
                            </motion.div>
                        </div>

                        {/* Right Side Empty for visual balance */}
                        <div className="md:col-span-7 flex justify-end">
                            <div className="flex flex-col items-end text-right">
                                <span className="font-mono text-[10px] tracking-widest text-bio-primary mb-2">
                                    {progress < 100 ? "CALIBRATING_MATRIX" : "CALIBRATION_COMPLETE"}
                                </span>
                                <div className="flex gap-1">
                                    {[...Array(5)].map((_, i) => (
                                        <motion.div
                                            key={i}
                                            animate={{
                                                opacity: progress > (i * 20) ? 1 : 0.2,
                                                backgroundColor: progress > (i * 20) ? '#FFD54F' : '#E2E8F0'
                                            }}
                                            className="w-8 h-1"
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* 4. Corner Data Readouts (The "System" feel) */}
                    <div className="absolute top-12 left-12 font-mono text-[8px] text-bio-primary/30 uppercase tracking-[0.3em]">
                        Kernel: v4.27.2026 <br />
                        Location: Jena, DE
                    </div>

                    <div className="absolute bottom-12 right-12 font-mono text-[8px] text-bio-primary/30 uppercase tracking-[0.3em] text-right">
                        Encryption: active <br />
                        Protocol: MMR_SECURE
                    </div>

                </motion.div>
            )}
        </AnimatePresence>
    );
}

