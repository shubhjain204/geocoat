import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const links = [
    { href: "#about", label: "About" },
    { href: "#why", label: "Why Mineral" },
    { href: "#palette", label: "Palette" },
    { href: "#applications", label: "Applications" },
    { href: "#process", label: "Process" },
    { href: "#contact", label: "Contact" },
];

export const Navigation = () => {
    const [scrolled, setScrolled] = useState(false);
    const [open, setOpen] = useState(false);

    useEffect(() => {
        const onScroll = () => setScrolled(window.scrollY > 30);
        window.addEventListener("scroll", onScroll);
        return () => window.removeEventListener("scroll", onScroll);
    }, []);

    return (
        <motion.header
            data-testid="main-nav"
            initial={{ y: -40, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 0.8, ease: [0.86, 0, 0.07, 1] }}
            className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
                scrolled
                    ? "backdrop-blur-xl bg-[#F5F5F0]/75 border-b border-[#D1CEC5]"
                    : "bg-transparent"
            }`}
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16 flex items-center justify-between py-5">
                <a href="#top" data-testid="logo-link" className="flex items-center gap-2 group">
                    <div className="w-8 h-8 relative">
                        <div className="absolute inset-0 bg-[#3A4538] rounded-sm rotate-45 group-hover:rotate-[55deg] transition-transform duration-500" />
                        <div className="absolute inset-1.5 bg-[#DDA74F] rounded-sm rotate-45" />
                    </div>
                    <div className="leading-none">
                        <div className="font-heading text-xl font-light tracking-tight text-[#1A1A1A]">
                            GeoCoat<span className="text-[#C05A45]">.</span>
                        </div>
                        <div className="text-[10px] uppercase tracking-[0.25em] text-[#5B7059] mt-0.5">
                            Mineral Silicate
                        </div>
                    </div>
                </a>

                <nav className="hidden lg:flex items-center gap-10">
                    {links.map((l) => (
                        <a
                            key={l.href}
                            href={l.href}
                            data-testid={`nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                            className="geo-link text-sm tracking-wide text-[#1A1A1A] hover:text-[#C05A45] transition-colors"
                        >
                            {l.label}
                        </a>
                    ))}
                </nav>

                <div className="flex items-center gap-3">
                    <a
                        href="#contact"
                        data-testid="nav-cta-button"
                        className="hidden md:inline-flex items-center gap-2 bg-[#3A4538] text-[#F5F5F0] px-5 py-2.5 text-sm tracking-wide hover:bg-[#C05A45] transition-colors duration-300 rounded-sm"
                    >
                        Request a Sample
                        <span className="text-base">→</span>
                    </a>
                    <button
                        onClick={() => setOpen(!open)}
                        data-testid="mobile-menu-toggle"
                        className="lg:hidden w-10 h-10 grid place-items-center text-[#1A1A1A]"
                        aria-label="Toggle menu"
                    >
                        {open ? <X size={22} /> : <Menu size={22} />}
                    </button>
                </div>
            </div>

            <AnimatePresence>
                {open && (
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        className="lg:hidden overflow-hidden bg-[#F5F5F0] border-t border-[#D1CEC5]"
                    >
                        <div className="px-6 py-6 flex flex-col gap-4">
                            {links.map((l) => (
                                <a
                                    key={l.href}
                                    href={l.href}
                                    onClick={() => setOpen(false)}
                                    data-testid={`mobile-nav-link-${l.label.toLowerCase().replace(/\s/g, "-")}`}
                                    className="text-[#1A1A1A] py-2 border-b border-[#D1CEC5] text-lg font-heading font-light"
                                >
                                    {l.label}
                                </a>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </motion.header>
    );
};
