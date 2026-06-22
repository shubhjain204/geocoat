import { motion } from "framer-motion";

const steps = [
    {
        n: "01",
        title: "Substrate inspection",
        body: "We assess porosity, alkalinity, and existing finishes. Mineral substrates: lime, stone, render, concrete, mineral plasters.",
    },
    {
        n: "02",
        title: "Surface preparation",
        body: "Old organic films are stripped. Substrate is cleaned, repaired, and stabilised with mineral primer if needed.",
    },
    {
        n: "03",
        title: "Pigment formulation",
        body: "Color is mixed from inorganic mineral pigments per spec — small-batch, fully traceable, fade-proof.",
    },
    {
        n: "04",
        title: "Silicification",
        body: "Two thin coats applied. Potassium silicate reacts with substrate over 7 days, forming a chemical bond that cannot peel.",
    },
    {
        n: "05",
        title: "A finish that becomes the wall",
        body: "After cure, the paint is the wall — vapour-open, UV-stable, fire-rated, color-fast for generations.",
    },
];

export const Process = () => {
    return (
        <section
            id="process"
            data-testid="process-section"
            className="relative bg-[#F5F5F0] py-24 md:py-32 lg:py-40"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-12 gap-8 mb-20"
                >
                    <div className="col-span-12 lg:col-span-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C05A45]">
                        <span className="w-8 h-px bg-[#C05A45]" />
                        <span>The Process</span>
                    </div>
                    <h2 className="col-span-12 lg:col-span-9 font-heading text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.95] text-[#1A1A1A] text-balance">
                        Five steps from{" "}
                        <span className="italic text-[#3A4538]">mineral</span> to monument.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-12 gap-6 md:gap-8">
                    {/* Sticky left rail with mineral image */}
                    <div className="col-span-12 lg:col-span-5">
                        <div className="lg:sticky lg:top-32">
                            <div className="aspect-[4/5] overflow-hidden mb-6">
                                <img
                                    src="https://images.pexels.com/photos/15291734/pexels-photo-15291734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940"
                                    alt="Mineral surface detail"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            <p className="text-sm text-[#5B7059] leading-relaxed max-w-md">
                                Every project is overseen by a GeoCoat-certified applicator.
                                Our chemistry only works when applied correctly — so we don't
                                sell to just anyone.
                            </p>
                        </div>
                    </div>

                    {/* Timeline */}
                    <div className="col-span-12 lg:col-span-7 lg:pl-8">
                        <div className="relative">
                            {steps.map((s, i) => (
                                <motion.div
                                    key={s.n}
                                    initial={{ opacity: 0, x: 40 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{ duration: 0.7, delay: i * 0.08 }}
                                    className="relative pl-12 pb-12 last:pb-0 border-l border-[#D1CEC5] last:border-l last:border-l-transparent"
                                    data-testid={`process-step-${s.n}`}
                                >
                                    <div className="absolute -left-3 top-0 w-6 h-6 rounded-full bg-[#F5F5F0] border border-[#3A4538] grid place-items-center">
                                        <div className="w-2 h-2 rounded-full bg-[#C05A45]" />
                                    </div>
                                    <div className="font-mono text-xs text-[#5B7059] uppercase tracking-[0.3em] mb-2">
                                        Step {s.n}
                                    </div>
                                    <h3 className="font-heading text-2xl md:text-3xl font-light text-[#1A1A1A] mb-3">
                                        {s.title}
                                    </h3>
                                    <p className="text-base text-[#5B7059] leading-relaxed max-w-lg">
                                        {s.body}
                                    </p>
                                </motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};
