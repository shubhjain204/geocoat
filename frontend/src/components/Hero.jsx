import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Scene3D } from "@/components/Scene3D";
import { ArrowDown } from "lucide-react";

export const Hero = () => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
    const y = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

    return (
        <section
            id="top"
            ref={ref}
            data-testid="hero-section"
            className="relative min-h-screen w-full overflow-hidden bg-[#F5F5F0]"
        >
            {/* 3D background canvas */}
            <div className="absolute inset-0 z-0">
                <Scene3D />
            </div>

            {/* Grain texture */}
            <div className="grain-overlay z-10" />

            {/* Bottom fade */}
            <div className="absolute bottom-0 inset-x-0 h-40 bg-gradient-to-t from-[#F5F5F0] to-transparent z-10 pointer-events-none" />

            {/* Content overlay */}
            <motion.div
                style={{ y, opacity }}
                className="relative z-20 max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 pt-40 pb-24 min-h-screen flex flex-col justify-between pointer-events-none"
            >
                {/* Top tagline */}
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.4 }}
                    className="flex items-center gap-3 text-xs tracking-[0.3em] uppercase text-[#5B7059] pointer-events-auto"
                >
                    <span className="w-8 h-px bg-[#5B7059]" />
                    <span>Mineral · Pigment · Permanence</span>
                </motion.div>

                {/* Headline */}
                <div className="max-w-5xl pointer-events-auto">
                    <motion.h1
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1.2, delay: 0.2, ease: [0.86, 0, 0.07, 1] }}
                        className="font-heading font-extralight tracking-tighter leading-[0.95] text-[#1A1A1A] text-5xl sm:text-7xl md:text-8xl lg:text-[8.5rem] text-balance"
                    >
                        Paint that
                        <br />
                        <span className="italic font-light text-[#3A4538]">becomes</span> the wall
                        <span className="text-[#C05A45]">.</span>
                    </motion.h1>

                    <motion.p
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 1, delay: 0.7 }}
                        className="mt-10 max-w-xl text-base md:text-lg text-[#5B7059] leading-relaxed"
                    >
                        GeoCoat is a next-generation mineral silicate paint that fuses chemically
                        with mineral substrates — producing finishes that breathe, weather, and
                        last for generations.
                    </motion.p>

                    <motion.div
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 1 }}
                        className="mt-12 flex flex-wrap items-center gap-4"
                    >
                        <a
                            href="#palette"
                            data-testid="hero-cta-primary"
                            className="group inline-flex items-center gap-3 bg-[#3A4538] text-[#F5F5F0] px-8 py-4 rounded-sm hover:bg-[#1F2A1F] transition-all duration-300 hover:-translate-y-0.5"
                        >
                            <span className="text-sm tracking-wide uppercase">Explore the Palette</span>
                            <span className="w-6 h-px bg-[#F5F5F0] group-hover:w-10 transition-all" />
                        </a>
                        <a
                            href="#why"
                            data-testid="hero-cta-secondary"
                            className="inline-flex items-center gap-2 text-[#1A1A1A] px-2 py-4 hover:text-[#C05A45] transition-colors"
                        >
                            <span className="text-sm tracking-wide uppercase border-b border-[#1A1A1A] hover:border-[#C05A45] pb-1">
                                Why Mineral Silicate
                            </span>
                        </a>
                    </motion.div>
                </div>

                {/* Bottom row */}
                <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 1.4, duration: 1 }}
                    className="flex flex-wrap items-end justify-between gap-6 pointer-events-auto"
                >
                    <div className="flex items-center gap-2 text-xs tracking-widest uppercase text-[#1A1A1A]">
                        <ArrowDown size={14} className="animate-bounce" />
                        <span>Scroll</span>
                    </div>
                    <div className="flex flex-wrap gap-x-12 gap-y-4 font-heading font-light">
                        {[
                            { k: "60+ yr", v: "Service life" },
                            { k: "0 VOC", v: "Toxic emissions" },
                            { k: "A1", v: "Fire rating" },
                            { k: "µ < 5", v: "Vapour permeable" },
                        ].map((stat) => (
                            <div key={stat.k} data-testid={`hero-stat-${stat.k}`}>
                                <div className="text-2xl text-[#1A1A1A]">{stat.k}</div>
                                <div className="text-[11px] uppercase tracking-[0.2em] text-[#5B7059] mt-1">
                                    {stat.v}
                                </div>
                            </div>
                        ))}
                    </div>
                </motion.div>
            </motion.div>
        </section>
    );
};
