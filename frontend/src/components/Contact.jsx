import { useState } from "react";
import { motion } from "framer-motion";
import axios from "axios";
import { toast } from "sonner";
import { Send, Loader2 } from "lucide-react";

const BACKEND_URL = process.env.REACT_APP_BACKEND_URL;
const API = `${BACKEND_URL}/api`;

const projectTypes = [
    "Heritage / Restoration",
    "Residential",
    "Commercial",
    "Institutional",
    "Other",
];

export const Contact = () => {
    const [form, setForm] = useState({
        name: "",
        email: "",
        phone: "",
        project_type: projectTypes[0],
        message: "",
    });
    const [loading, setLoading] = useState(false);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setForm((prev) => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!form.name || !form.email || !form.message) {
            toast.error("Please fill in your name, email and message.");
            return;
        }
        setLoading(true);
        try {
            await axios.post(`${API}/contact`, form);
            toast.success("Thank you. A GeoCoat specialist will be in touch within 24 hours.");
            setForm({
                name: "",
                email: "",
                phone: "",
                project_type: projectTypes[0],
                message: "",
            });
        } catch (err) {
            toast.error(
                err?.response?.data?.detail?.[0]?.msg ||
                    err?.response?.data?.detail ||
                    "Could not send your message. Please try again."
            );
        } finally {
            setLoading(false);
        }
    };

    const inputBase =
        "w-full bg-[#F5F5F0] border border-[#D1CEC5] px-5 py-4 text-[#1A1A1A] placeholder-[#5B7059]/60 focus:outline-none focus:border-[#3A4538] transition-colors rounded-sm";

    return (
        <section
            id="contact"
            data-testid="contact-section"
            className="relative bg-[#3A4538] text-[#F5F5F0] py-24 md:py-32 lg:py-40 overflow-hidden"
        >
            <div className="grain-overlay opacity-[0.06]" />

            <div className="relative max-w-[1500px] mx-auto px-6 md:px-12 lg:px-16">
                <div className="grid grid-cols-12 gap-8 md:gap-12">
                    {/* Left */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="col-span-12 lg:col-span-5"
                    >
                        <div className="flex items-center gap-3 text-xs uppercase tracking-[0.3em] text-[#DDA74F] mb-6">
                            <span className="w-8 h-px bg-[#DDA74F]" />
                            <span>Speak with us</span>
                        </div>
                        <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl font-extralight tracking-tight leading-[0.95] text-[#F5F5F0] mb-8 text-balance">
                            Tell us about your{" "}
                            <span className="italic text-[#DDA74F]">surface.</span>
                        </h2>
                        <p className="text-base md:text-lg text-[#EAE6DA]/80 leading-relaxed mb-12 max-w-md">
                            Send a brief about your project. We'll respond within 24 hours
                            with sample chips, technical data, and a certified applicator
                            in your region.
                        </p>

                        <div className="space-y-6">
                            <div>
                                <div className="text-xs uppercase tracking-[0.25em] text-[#DDA74F] mb-2">
                                    Studio
                                </div>
                                <div className="font-heading text-xl text-[#F5F5F0] font-light">
                                    studio@geocoat.example
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.25em] text-[#DDA74F] mb-2">
                                    Specifications
                                </div>
                                <div className="font-heading text-xl text-[#F5F5F0] font-light">
                                    +91 80 GEO COAT
                                </div>
                            </div>
                            <div>
                                <div className="text-xs uppercase tracking-[0.25em] text-[#DDA74F] mb-2">
                                    Atelier
                                </div>
                                <div className="font-heading text-xl text-[#F5F5F0] font-light leading-snug">
                                    Bangalore · Mumbai · Lisbon
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Form */}
                    <motion.form
                        onSubmit={handleSubmit}
                        noValidate
                        initial={{ opacity: 0, y: 40 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, delay: 0.1 }}
                        className="col-span-12 lg:col-span-7 bg-[#F5F5F0] text-[#1A1A1A] p-8 md:p-12 rounded-sm"
                        data-testid="contact-form"
                    >
                        <div className="grid grid-cols-2 gap-5">
                            <div className="col-span-2 md:col-span-1">
                                <label className="text-xs uppercase tracking-[0.25em] text-[#5B7059] mb-2 block">
                                    Name
                                </label>
                                <input
                                    type="text"
                                    name="name"
                                    value={form.name}
                                    onChange={handleChange}
                                    placeholder="Your name"
                                    className={inputBase}
                                    data-testid="contact-input-name"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="text-xs uppercase tracking-[0.25em] text-[#5B7059] mb-2 block">
                                    Email
                                </label>
                                <input
                                    type="email"
                                    name="email"
                                    value={form.email}
                                    onChange={handleChange}
                                    placeholder="you@studio.com"
                                    className={inputBase}
                                    data-testid="contact-input-email"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="text-xs uppercase tracking-[0.25em] text-[#5B7059] mb-2 block">
                                    Phone (optional)
                                </label>
                                <input
                                    type="tel"
                                    name="phone"
                                    value={form.phone}
                                    onChange={handleChange}
                                    placeholder="+91 ..."
                                    className={inputBase}
                                    data-testid="contact-input-phone"
                                />
                            </div>
                            <div className="col-span-2 md:col-span-1">
                                <label className="text-xs uppercase tracking-[0.25em] text-[#5B7059] mb-2 block">
                                    Project type
                                </label>
                                <select
                                    name="project_type"
                                    value={form.project_type}
                                    onChange={handleChange}
                                    className={inputBase}
                                    data-testid="contact-input-project-type"
                                >
                                    {projectTypes.map((p) => (
                                        <option key={p} value={p}>
                                            {p}
                                        </option>
                                    ))}
                                </select>
                            </div>
                            <div className="col-span-2">
                                <label className="text-xs uppercase tracking-[0.25em] text-[#5B7059] mb-2 block">
                                    Tell us about the project
                                </label>
                                <textarea
                                    name="message"
                                    value={form.message}
                                    onChange={handleChange}
                                    placeholder="Substrate, area, location, timeline..."
                                    rows={6}
                                    className={inputBase + " resize-none"}
                                    data-testid="contact-input-message"
                                />
                            </div>
                        </div>

                        <div className="mt-8 flex flex-wrap items-center justify-between gap-4">
                            <div className="text-xs text-[#5B7059] max-w-xs">
                                By submitting, you agree to be contacted by a GeoCoat
                                consultant. We don't sell data, ever.
                            </div>
                            <button
                                type="submit"
                                disabled={loading}
                                data-testid="contact-submit-button"
                                className="group inline-flex items-center gap-3 bg-[#3A4538] text-[#F5F5F0] px-8 py-4 rounded-sm hover:bg-[#C05A45] transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
                            >
                                <span className="text-sm tracking-wide uppercase">
                                    {loading ? "Sending..." : "Send message"}
                                </span>
                                {loading ? (
                                    <Loader2 size={16} className="animate-spin" />
                                ) : (
                                    <Send size={16} className="group-hover:translate-x-1 transition-transform" />
                                )}
                            </button>
                        </div>
                    </motion.form>
                </div>
            </div>
        </section>
    );
};
