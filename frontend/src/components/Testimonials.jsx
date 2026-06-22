import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
    {
        quote:
            "GeoCoat is the only mineral paint we've found that performs as well in a 19th-century lime plaster restoration as it does on a brand new concrete villa. The pigments are extraordinary.",
        name: "Aanya Mehra",
        role: "Principal Architect, Studio Calcaire",
    },
    {
        quote:
            "We specified GeoCoat across a 12,000 sqm hospital project. Two years on, zero call-backs. The walls breathe, the colors are unchanged, and indoor air quality has never been better.",
        name: "Rajat Iyer",
        role: "Project Director, MEDarc",
    },
    {
        quote:
            "For our heritage conservation work, traditional acrylic paint was always a compromise. GeoCoat lets the wall behave like a wall — porous, alive, honest.",
        name: "Dr. Helena Costa",
        role: "Conservation Lead, Patrimoine",
    },
];

export const Testimonials = () => {
    return (
        <section
            data-testid="testimonials-section"
            className="relative bg-[#EAE6DA] py-24 md:py-32 lg:py-40"
        >
            <div className="grain-overlay opacity-[0.08]" />
            <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-12 gap-8 mb-16"
                >
                    <div className="col-span-12 lg:col-span-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#C05A45]">
                        <span className="w-8 h-px bg-[#C05A45]" />
                        <span>Words from the field</span>
                    </div>
                </motion.div>

                <div className="grid grid-cols-12 gap-8 md:gap-12">
                    {items.map((t, i) => (
                        <motion.figure
                            key={t.name}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-50px" }}
                            transition={{ duration: 0.8, delay: i * 0.1 }}
                            className={`col-span-12 ${
                                i === 0
                                    ? "md:col-span-12 lg:col-span-7"
                                    : "md:col-span-6 lg:col-span-5"
                            } bg-[#F5F5F0] border border-[#D1CEC5] p-8 md:p-12 hover:-translate-y-1 transition-all duration-500`}
                            data-testid={`testimonial-${i}`}
                        >
                            <Quote
                                size={32}
                                strokeWidth={1}
                                className="text-[#C05A45] mb-6"
                            />
                            <blockquote
                                className={`font-heading font-light leading-snug text-[#1A1A1A] mb-8 text-balance ${
                                    i === 0 ? "text-2xl md:text-3xl lg:text-4xl" : "text-xl md:text-2xl"
                                }`}
                            >
                                "{t.quote}"
                            </blockquote>
                            <figcaption className="border-t border-[#D1CEC5] pt-4 flex justify-between items-end">
                                <div>
                                    <div className="font-heading text-lg text-[#1A1A1A]">{t.name}</div>
                                    <div className="text-xs uppercase tracking-[0.2em] text-[#5B7059] mt-1">
                                        {t.role}
                                    </div>
                                </div>
                            </figcaption>
                        </motion.figure>
                    ))}
                </div>
            </div>
        </section>
    );
};
