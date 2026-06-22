import { SmoothScroll } from "@/components/SmoothScroll";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { KeywordMarquee } from "@/components/KeywordMarquee";
import { About } from "@/components/About";
import { Features } from "@/components/Features";
import { ColorPalette } from "@/components/ColorPalette";
import { Applications } from "@/components/Applications";
import { Process } from "@/components/Process";
import { Testimonials } from "@/components/Testimonials";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Landing() {
    return (
        <SmoothScroll>
            <main data-testid="landing-page" className="relative bg-[#F5F5F0] text-[#1A1A1A]">
                <Navigation />
                <Hero />
                <KeywordMarquee />
                <About />
                <Features />
                <ColorPalette />
                <Applications />
                <Process />
                <Testimonials />
                <Contact />
                <Footer />
            </main>
        </SmoothScroll>
    );
}
