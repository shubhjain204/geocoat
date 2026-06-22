import { motion } from "framer-motion";
import { Wind, Flame, Sun, Leaf, Droplets, Atom, ShieldCheck, Mountain } from "lucide-react";

const features = [
    {
        icon: Wind,
        title: "Breathable",
        meta: "Vapour permeability µ < 5",
        body: "Walls release moisture freely, preventing damp, mould, and structural decay.",
        span: "md:col-span-6 md:row-span-2",
        accent: "#3A4538",
        big: true,
    },
    {
        icon: Atom,
        title: "Silicification",
        meta: "Chemistry, not adhesion",
        body: "Potassium silicate fuses with mineral substrate into one solid mass.",
        span: "md:col-span-3",
        accent: "#C05A45",
    },
    {
        icon: Flame,
        title: "Fire A1",
        meta: "Highest non-combustibility class",
        body: "Will not burn, smoke or release toxic fumes when exposed to fire.",
        span: "md:col-span-3",
        accent: "#DDA74F",
    },
    {
        icon: Sun,
        title: "UV-stable",
        meta: "60+ years color fastness",
        body: "Mineral pigments are inorganic — they cannot fade like organic dyes.",
        span: "md:col-span-3",
        accent: "#5B7059",
    },
    {
        icon: Leaf,
        title: "0 VOC",
        meta: "No emissions, ever",
        body: "Safe for interiors, hospitals, schools, and ecologically sensitive sites.",
        span: "md:col-span-3",
        accent: "#3A4538",
    },
    {
        icon: ShieldCheck,
        title: "Algae & fungi resistant",
        meta: "High pH inhibits growth",
        body: "Naturally alkaline surface deters biological colonisation, no biocides.",
        span: "md:col-span-4",
        accent: "#C05A45",
    },
    {
        icon: Droplets,
        title: "Hydrophobic",
        meta: "Drives water out, not in",
        body: "Capillary water-repellent yet vapour-open — the holy grail for masonry.",
        span: "md:col-span-4",
        accent: "#DDA74F",
    },
    {
        icon: Mountain,
        title: "Heritage approved",
        meta: "Specified by conservators",
        body: "The only category of paint suitable for historic lime and stone facades.",
        span: "md:col-span-4",
        accent: "#3A4538",
    },
];

export const Features = () => {
    return (
        <section
            id="why"
            data-testid="features-section"
            className="relative bg-[#EAE6DA] py-24 md:py-32 lg:py-40 overflow-hidden"
        >
            <div className="grain-overlay" />

            <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-12 gap-8 mb-16 md:mb-24"
                >
                    <div className="col-span-12 lg:col-span-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C05A45]">
                        <span className="w-8 h-px bg-[#C05A45]" />
                        <span>Why Mineral</span>
                    </div>
                    <h2 className="col-span-12 lg:col-span-9 font-heading text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.95] text-[#1A1A1A] text-balance">
                        Eight reasons mineral silicate is the only{" "}
                        <span className="italic text-[#3A4538]">honest</span> paint left.
                    </h2>
                </motion.div>

                {/* Bento grid */}
                <div className="grid grid-cols-1 md:grid-cols-12 gap-6 md:gap-8 auto-rows-[minmax(220px,auto)]">
                    {features.map((f, i) => {
                        const Icon = f.icon;
                        return (
                            <motion.div
                                key={f.title}
                                data-testid={`feature-card-${f.title.toLowerCase().replace(/\s/g, "-")}`}
                                initial={{ opacity: 0, y: 40 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true, margin: "-50px" }}
                                transition={{ duration: 0.7, delay: i * 0.05 }}
                                className={`col-span-1 ${f.span} group relative bg-[#F5F5F0] border border-[#D1CEC5] p-8 md:p-10 hover:-translate-y-1 transition-all duration-500 hover:shadow-[0_30px_60px_-30px_rgba(0,0,0,0.25)] overflow-hidden`}
                            >
                                <div
                                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
                                    style={{
                                        background: `radial-gradient(circle at 100% 0%, ${f.accent}18, transparent 60%)`,
                                    }}
                                />

                                <div className="relative flex flex-col h-full justify-between gap-8">
                                    <div
                                        className="w-12 h-12 grid place-items-center border border-[#D1CEC5]"
                                        style={{ color: f.accent }}
                                    >
                                        <Icon size={22} strokeWidth={1.2} />
                                    </div>

                                    <div>
                                        <div className="text-[10px] uppercase tracking-[0.3em] text-[#5B7059] mb-3">
                                            {f.meta}
                                        </div>
                                        <h3
                                            className={`font-heading font-light text-[#1A1A1A] mb-3 ${
                                                f.big ? "text-4xl md:text-5xl" : "text-2xl"
                                            }`}
                                        >
                                            {f.title}
                                        </h3>
                                        <p className="text-sm text-[#5B7059] leading-relaxed max-w-md">
                                            {f.body}
                                        </p>
                                    </div>
                                </div>
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};
