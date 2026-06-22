export const Footer = () => {
    return (
        <footer
            data-testid="footer-section"
            className="bg-[#1A1A1A] text-[#EAE6DA] py-16 md:py-20"
        >
            <div className="max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-12 gap-8 md:gap-12 mb-12">
                    {/* Brand */}
                    <div className="col-span-12 md:col-span-5">
                        <div className="flex items-center gap-2 mb-6">
                            <div className="w-8 h-8 relative">
                                <div className="absolute inset-0 bg-[#F5F5F0] rounded-sm rotate-45" />
                                <div className="absolute inset-1.5 bg-[#DDA74F] rounded-sm rotate-45" />
                            </div>
                            <div>
                                <div className="font-heading text-xl font-light text-[#F5F5F0]">
                                    GeoCoat<span className="text-[#C05A45]">.</span>
                                </div>
                                <div className="text-[10px] uppercase tracking-[0.3em] text-[#DDA74F]">
                                    Mineral Silicate Paint
                                </div>
                            </div>
                        </div>
                        <p className="text-sm leading-relaxed max-w-md text-[#EAE6DA]/70">
                            A new chemistry of paint — pigments from the earth, bound
                            chemically to the surfaces they protect. Breathable. Permanent.
                            Honest.
                        </p>
                    </div>

                    {/* Links */}
                    <div className="col-span-6 md:col-span-3">
                        <div className="text-xs uppercase tracking-[0.3em] text-[#DDA74F] mb-4">
                            Explore
                        </div>
                        <ul className="space-y-3 text-sm">
                            {["About", "Why Mineral", "Palette", "Applications", "Process"].map((l) => (
                                <li key={l}>
                                    <a
                                        href={`#${l.toLowerCase().replace(/\s/g, "-").replace("why-mineral", "why")}`}
                                        className="geo-link hover:text-[#F5F5F0] transition-colors"
                                        data-testid={`footer-link-${l.toLowerCase().replace(/\s/g, "-")}`}
                                    >
                                        {l}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="col-span-6 md:col-span-4">
                        <div className="text-xs uppercase tracking-[0.3em] text-[#DDA74F] mb-4">
                            Reach
                        </div>
                        <ul className="space-y-3 text-sm">
                            <li>studio@geocoat.example</li>
                            <li>+91 80 GEO COAT</li>
                            <li className="text-[#EAE6DA]/70">Bangalore · Mumbai · Lisbon</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom bar */}
                <div className="pt-8 border-t border-[#3A4538] flex flex-col md:flex-row justify-between gap-4 text-xs text-[#EAE6DA]/60">
                    <div>© {new Date().getFullYear()} GeoCoat Mineral Paints. All rights reserved.</div>
                    <div className="flex gap-6">
                        <a href="#" className="geo-link hover:text-[#F5F5F0]" data-testid="footer-link-privacy">Privacy</a>
                        <a href="#" className="geo-link hover:text-[#F5F5F0]" data-testid="footer-link-terms">Terms</a>
                        <a href="#" className="geo-link hover:text-[#F5F5F0]" data-testid="footer-link-spec">Tech Specs</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};
