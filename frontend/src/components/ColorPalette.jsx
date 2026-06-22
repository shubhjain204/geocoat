import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const palette = [
    { code: "GC 01", name: "Limestone", hex: "#EAE6DA", desc: "Soft warm white with the calm of weathered limestone." },
    { code: "GC 07", name: "Bone Sand", hex: "#D9CDB5", desc: "An organic neutral, equally at home in heritage or modern interiors." },
    { code: "GC 14", name: "Ochre Earth", hex: "#C89F5D", desc: "Iron-oxide ochre — the original pigment of human history." },
    { code: "GC 22", name: "Terracotta", hex: "#C05A45", desc: "Burnt earth red, deep and saturated, ages with grace." },
    { code: "GC 31", name: "Olive Moss", hex: "#5B7059", desc: "Quiet green, drawn from lichen and oak-shaded stone." },
    { code: "GC 38", name: "Pine Shadow", hex: "#3A4538", desc: "Deep forest green-black, dramatic and architectural." },
    { code: "GC 45", name: "Slate Ash", hex: "#5C5751", desc: "Cool mineral grey with traces of mica." },
    { code: "GC 52", name: "Charcoal Stone", hex: "#1F1F1D", desc: "Near-black, the deepest mineral pigment our chemistry allows." },
];

export const ColorPalette = () => {
    const [active, setActive] = useState(0);
    const current = palette[active];

    return (
        <section
            id="palette"
            data-testid="palette-section"
            className="relative bg-[#F5F5F0] py-24 md:py-32 lg:py-40 overflow-hidden"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-12 gap-8 mb-16"
                >
                    <div className="col-span-12 lg:col-span-3 flex items-start gap-3 text-xs uppercase tracking-[0.3em] text-[#C05A45]">
                        <span className="w-8 h-px bg-[#C05A45] mt-2" />
                        <span>The Palette</span>
                    </div>
                    <h2 className="col-span-12 lg:col-span-9 font-heading text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.95] text-[#1A1A1A] text-balance">
                        A library of <span className="italic text-[#3A4538]">earth.</span>
                        <br />
                        Eight permanent mineral hues.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-12 gap-6 md:gap-12">
                    {/* Sample */}
                    <div className="col-span-12 lg:col-span-7 relative">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={current.code}
                                initial={{ opacity: 0, scale: 1.02 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.99 }}
                                transition={{ duration: 0.6, ease: [0.86, 0, 0.07, 1] }}
                                className="relative aspect-[4/5] md:aspect-[5/6] overflow-hidden"
                                style={{ backgroundColor: current.hex }}
                                data-testid="palette-sample"
                            >
                                <div className="grain-overlay opacity-[0.12]" />
                                <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end">
                                    <div>
                                        <div
                                            className="text-xs uppercase tracking-[0.3em] mb-2"
                                            style={{
                                                color: current.hex === "#1F1F1D" || current.hex === "#3A4538" || current.hex === "#5B7059" || current.hex === "#5C5751"
                                                    ? "#EAE6DA"
                                                    : "#1A1A1A"
                                            }}
                                        >
                                            {current.code}
                                        </div>
                                        <div
                                            className="font-heading text-4xl md:text-6xl font-extralight"
                                            style={{
                                                color: current.hex === "#1F1F1D" || current.hex === "#3A4538" || current.hex === "#5B7059" || current.hex === "#5C5751"
                                                    ? "#F5F5F0"
                                                    : "#1A1A1A"
                                            }}
                                        >
                                            {current.name}
                                        </div>
                                    </div>
                                    <div
                                        className="font-mono text-xs"
                                        style={{
                                            color: current.hex === "#1F1F1D" || current.hex === "#3A4538" || current.hex === "#5B7059" || current.hex === "#5C5751"
                                                ? "#EAE6DA"
                                                : "#1A1A1A"
                                        }}
                                    >
                                        {current.hex}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>
                    </div>

                    {/* Swatch list */}
                    <div className="col-span-12 lg:col-span-5 flex flex-col justify-between gap-8">
                        <div>
                            <AnimatePresence mode="wait">
                                <motion.p
                                    key={current.code + "desc"}
                                    initial={{ opacity: 0, y: 10 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -10 }}
                                    transition={{ duration: 0.4 }}
                                    className="text-base md:text-lg text-[#5B7059] leading-relaxed mb-12"
                                    data-testid="palette-description"
                                >
                                    {current.desc}
                                </motion.p>
                            </AnimatePresence>

                            <div className="grid grid-cols-4 gap-3">
                                {palette.map((p, i) => (
                                    <button
                                        key={p.code}
                                        onClick={() => setActive(i)}
                                        data-testid={`palette-swatch-${p.code.toLowerCase().replace(" ", "-")}`}
                                        className={`group relative aspect-square overflow-hidden transition-all duration-300 ${
                                            active === i
                                                ? "ring-2 ring-offset-2 ring-offset-[#F5F5F0] ring-[#1A1A1A] scale-95"
                                                : "hover:-translate-y-1"
                                        }`}
                                        style={{ backgroundColor: p.hex }}
                                        aria-label={p.name}
                                    >
                                        <div className="grain-overlay opacity-[0.15]" />
                                        <div
                                            className="absolute bottom-1 left-1.5 text-[9px] font-mono"
                                            style={{
                                                color: p.hex === "#1F1F1D" || p.hex === "#3A4538" || p.hex === "#5B7059" || p.hex === "#5C5751"
                                                    ? "#EAE6DA"
                                                    : "#1A1A1A"
                                            }}
                                        >
                                            {p.code}
                                        </div>
                                    </button>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-[#D1CEC5] pt-6 flex items-center justify-between">
                            <div className="text-xs uppercase tracking-[0.25em] text-[#5B7059]">
                                Want the full color book?
                            </div>
                            <a
                                href="#contact"
                                data-testid="palette-cta-button"
                                className="text-sm uppercase tracking-wide text-[#1A1A1A] hover:text-[#C05A45] transition-colors geo-link"
                            >
                                Request samples
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
