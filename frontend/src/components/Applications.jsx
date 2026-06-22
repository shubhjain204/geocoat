import { motion } from "framer-motion";

const applications = [
    {
        tag: "01 / Heritage",
        title: "Conservation & restoration",
        body: "The only category of paint approved by conservators for lime plaster, sandstone, and historic masonry. Restores without sealing.",
        img: "https://images.pexels.com/photos/37582309/pexels-photo-37582309.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        span: "col-span-12 md:col-span-7",
        aspect: "aspect-[16/11]",
    },
    {
        tag: "02 / Residential",
        title: "Villas & homes",
        body: "A breathable interior and exterior finish that delivers museum-grade pigments to private architecture.",
        img: "https://images.unsplash.com/photo-1628012209120-d9db7abf7eab?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzOTB8MHwxfHNlYXJjaHwyfHxtb2Rlcm4lMjBhcmNoaXRlY3R1cmUlMjBleHRlcmlvcnxlbnwwfHx8fDE3ODIxMTE4MDh8MA&ixlib=rb-4.1.0&q=85",
        span: "col-span-12 md:col-span-5",
        aspect: "aspect-[4/5]",
    },
    {
        tag: "03 / Commercial",
        title: "Offices, hospitality, cultural",
        body: "Low-maintenance facades and interiors that outlast paint cycles by decades, reducing whole-life cost.",
        img: "https://images.pexels.com/photos/15291734/pexels-photo-15291734.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
        span: "col-span-12 md:col-span-5",
        aspect: "aspect-[4/5]",
    },
    {
        tag: "04 / Institutional",
        title: "Hospitals, schools, museums",
        body: "Zero VOC, fire-rated A1, algae-resistant — built for high-occupancy, high-sensitivity environments.",
        img: "https://images.unsplash.com/photo-1708894462826-ba3fa93b41b7?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NDk1ODB8MHwxfHNlYXJjaHwxfHxtaW5lcmFsJTIwcGFpbnQlMjB0ZXh0dXJlfGVufDB8fHx8MTc4MjExMTgwOHww&ixlib=rb-4.1.0&q=85",
        span: "col-span-12 md:col-span-7",
        aspect: "aspect-[16/11]",
    },
];

export const Applications = () => {
    return (
        <section
            id="applications"
            data-testid="applications-section"
            className="relative bg-[#1A1A1A] text-[#F5F5F0] py-24 md:py-32 lg:py-40 overflow-hidden"
        >
            <div className="grain-overlay opacity-[0.08]" />

            <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="grid grid-cols-12 gap-8 mb-20"
                >
                    <div className="col-span-12 lg:col-span-3 flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#DDA74F]">
                        <span className="w-8 h-px bg-[#DDA74F]" />
                        <span>Applications</span>
                    </div>
                    <h2 className="col-span-12 lg:col-span-9 font-heading text-4xl md:text-6xl lg:text-7xl font-extralight tracking-tight leading-[0.95] text-[#F5F5F0] text-balance">
                        Wherever the wall is{" "}
                        <span className="italic text-[#DDA74F]">mineral</span>, GeoCoat belongs.
                    </h2>
                </motion.div>

                <div className="grid grid-cols-12 gap-6 md:gap-8">
                    {applications.map((a, i) => (
                        <motion.div
                            key={a.title}
                            initial={{ opacity: 0, y: 40 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.8, delay: i * 0.08 }}
                            className={`${a.span} group`}
                            data-testid={`application-card-${a.tag.split(" / ")[1].toLowerCase()}`}
                        >
                            <div className={`relative ${a.aspect} overflow-hidden mb-6`}>
                                <img
                                    src={a.img}
                                    alt={a.title}
                                    className="w-full h-full object-cover transition-transform duration-[1.6s] group-hover:scale-105"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A1A]/40 to-transparent" />
                                <div className="absolute top-4 left-4 text-xs uppercase tracking-[0.3em] text-[#F5F5F0]/80 font-mono">
                                    {a.tag}
                                </div>
                            </div>
                            <h3 className="font-heading text-2xl md:text-3xl font-light mb-3 text-[#F5F5F0]">
                                {a.title}
                            </h3>
                            <p className="text-sm text-[#EAE6DA]/70 leading-relaxed max-w-md">
                                {a.body}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};
