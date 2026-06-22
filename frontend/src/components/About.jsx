import { motion } from "framer-motion";

export const About = () => {
    return (
        <section
            id="about"
            data-testid="about-section"
            className="relative bg-[#F5F5F0] py-24 md:py-32 lg:py-40"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-12 gap-6 md:gap-12">
                    {/* Overline */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 lg:col-span-3"
                    >
                        <div className="sticky top-32 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C05A45]">
                            <span className="w-8 h-px bg-[#C05A45]" />
                            <span>Studio Note 01</span>
                        </div>
                    </motion.div>

                    {/* Quote / Statement */}
                    <motion.div
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-100px" }}
                        transition={{ duration: 1, delay: 0.1 }}
                        className="col-span-12 lg:col-span-9"
                    >
                        <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-extralight leading-tight tracking-tight text-[#1A1A1A] text-balance">
                            We don't coat surfaces — we{" "}
                            <span className="italic text-[#3A4538]">mineralise</span> them.
                            GeoCoat penetrates pore by pore, binding pigment and substrate into a
                            single, breathing stone.
                        </h2>

                        <div className="mt-16 grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
                            {[
                                {
                                    h: "Chemistry, not film",
                                    p: "Pure potassium silicate forms a silicification reaction with mineral substrates. No peeling, no flaking — ever.",
                                },
                                {
                                    h: "Pigments from the earth",
                                    p: "Only natural iron oxides and mineral pigments. Inert. Permanent. Color-true for decades.",
                                },
                                {
                                    h: "A second skin for buildings",
                                    p: "Breathable, vapour-permeable, fire-rated A1. The original sustainable paint, refined for the modern era.",
                                },
                            ].map((item) => (
                                <motion.div
                                    key={item.h}
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.7 }}
                                    className="border-t border-[#D1CEC5] pt-6"
                                    data-testid={`about-card-${item.h}`}
                                >
                                    <h3 className="font-heading text-xl font-light text-[#3A4538] mb-3">
                                        {item.h}
                                    </h3>
                                    <p className="text-sm text-[#5B7059] leading-relaxed">{item.p}</p>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>

                {/* Editorial image strip */}
                <motion.div
                    initial={{ opacity: 0, y: 60 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ duration: 1.2 }}
                    className="mt-24 md:mt-32 grid grid-cols-12 gap-4 md:gap-6"
                >
                    <div className="col-span-12 md:col-span-8 aspect-[16/10] overflow-hidden">
                        <img
                            src="https://images.unsplash.com/photo-1761476267514-ffec14e7af84?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxzdG9uZSUyMGZhY2FkZSUyMGJ1aWxkaW5nfGVufDB8fHx8MTc4MjExMTgwOHww&ixlib=rb-4.1.0&q=85"
                            alt="Stone facade architecture"
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]"
                            data-testid="about-image-primary"
                        />
                    </div>
                    <div className="col-span-12 md:col-span-4 flex flex-col gap-4 md:gap-6">
                        <div className="aspect-[4/3] overflow-hidden">
                            <img
                                src="https://images.unsplash.com/photo-1708894462826-ba3fa93b41b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtaW5lcmFsJTIwcGFpbnQlMjB0ZXh0dXJlfGVufDB8fHx8MTc4MjExMTgwOHww&ixlib=rb-4.1.0&q=85"
                                alt="Mineral paint texture"
                                className="w-full h-full object-cover hover:scale-105 transition-transform duration-[1.4s]"
                                data-testid="about-image-secondary"
                            />
                        </div>
                        <div className="bg-[#3A4538] text-[#F5F5F0] p-6 flex-1 flex flex-col justify-between">
                            <div className="text-xs uppercase tracking-[0.3em] text-[#DDA74F]">
                                Founded
                            </div>
                            <div className="font-heading text-5xl md:text-6xl font-extralight">2011</div>
                            <div className="text-sm text-[#EAE6DA] leading-relaxed mt-4">
                                Trusted by architects, conservators, and developers across heritage,
                                residential, and commercial projects.
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};
