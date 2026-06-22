import Marquee from "react-fast-marquee";

const words = [
    "Breathable",
    "Mineral-bonded",
    "UV-Stable",
    "Non-toxic",
    "Fire-resistant",
    "Heritage-grade",
    "Algae-resistant",
    "Color-fast",
    "Petrified pigments",
    "Lime-compatible",
    "Eco-certified",
    "Vapour-permeable",
];

export const KeywordMarquee = () => (
    <div
        data-testid="keyword-marquee"
        className="bg-[#1A1A1A] py-10 border-y border-[#3A4538] overflow-hidden"
    >
        <Marquee speed={45} gradient={false} pauseOnHover>
            {words.map((w, i) => (
                <span
                    key={i}
                    className="marquee-text text-5xl md:text-7xl text-[#F5F5F0] mx-12 inline-flex items-center"
                >
                    {w}
                    <span className="mx-12 text-[#DDA74F]">✦</span>
                </span>
            ))}
        </Marquee>
    </div>
);
