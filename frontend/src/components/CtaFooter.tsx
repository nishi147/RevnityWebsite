import logoImg from "@/assets/Revnity Marketing.png";
import { motion } from "framer-motion";
import { ArrowUpRight, Instagram, Linkedin, Twitter, Youtube, ArrowUp, ShieldCheck } from "lucide-react";

import { useState } from "react";
import { toast } from "sonner";

export function CtaFooter() {
  const [formData, setFormData] = useState({ name: "", email: "", ict: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.ict) {
      toast.error("Please fill in all fields");
      return;
    }

    setIsSubmitting(true);
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL || ""}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        toast.success("Message sent to projects@revnitymarketing.com!");
        setFormData({ name: "", email: "", ict: "" });
      } else {
        throw new Error("Failed to send");
      }
    } catch (error) {
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <footer id="contact" className="relative bg-white">
      {/* CTA Section */}
      <section className="relative mx-auto max-w-7xl px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative overflow-hidden rounded-[3rem] bg-background px-8 py-12 text-center shadow-2xl md:px-16 md:py-16"
        >
          {/* Animated Background Orbs */}
          <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-indigo-600/20 blur-[100px] animate-pulse" />
          <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-[#c0ff33]/10 blur-[100px] animate-pulse" />
          
          <div className="relative z-10 flex flex-col items-center">
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-xs font-bold uppercase tracking-[0.4em] text-white/50"
            >
              READY TO SCALE
            </motion.p>
            
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="mt-6 text-5xl font-black uppercase tracking-tight text-white sm:text-8xl lg:text-9xl"
            >
              FUEL YOUR <br />
              <span className="text-shimmer">GROWTH</span>
            </motion.h2>

            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="mt-12 w-full max-w-xl"
            >
              <form onSubmit={handleSubmit} className="space-y-4 text-left">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <input 
                    type="text" 
                    required
                    placeholder="Full Name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#c0ff33] transition-all"
                  />
                  <input 
                    type="email" 
                    required
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#c0ff33] transition-all"
                  />
                </div>
                <textarea 
                  required
                  placeholder="Let me know your ICT"
                  rows={4}
                  value={formData.ict}
                  onChange={(e) => setFormData({ ...formData, ict: e.target.value })}
                  className="w-full rounded-2xl bg-white/5 border border-white/10 px-6 py-4 text-white focus:outline-none focus:border-[#c0ff33] transition-all"
                />
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  disabled={isSubmitting}
                  type="submit"
                  className="w-full rounded-2xl bg-[#c0ff33] py-4 text-slate-950 font-bold uppercase tracking-widest shadow-[0_0_30px_rgba(192,255,51,0.2)] hover:shadow-[0_0_50px_rgba(192,255,51,0.4)] transition-all disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Sending..." : "Fuel Your Growth"}
                </motion.button>
              </form>
            </motion.div>
          </div>

          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        </motion.div>
      </section>

      {/* Main Footer Section */}
      <div className="bg-background text-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8">
            {/* Logo and Info */}
            <div className="space-y-8">
              <div className="flex items-center gap-3">
                <img 
                  src={logoImg} 
                  alt="Revnity Marketing Logo" 
                  className="h-20 w-auto"
                />
              </div>
              
              <div className="space-y-1">
                <p className="text-sm text-white/50">Get In Touch With Us</p>
                <a href="/contact" className="text-lg font-bold text-[#c0ff33] hover:underline transition-all">
                  Expert Advice
                </a>
              </div>

              <div className="pt-10 space-y-4">
                <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10">
                  <ShieldCheck className="h-10 w-10 text-[#c0ff33]" />
                  <div>
                    <p className="text-sm font-bold">CCPA and GDPR aligned</p>
                    <p className="text-[10px] text-white/40">Full Compliance with all Laws</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Services */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Services</h4>
              <ul className="space-y-4 text-sm text-white/40">
                {[
                  "Technographic Intelligence",
                  "Title Based Database",
                  "Channel Partner Insight",
                  "Stack Data Append",
                  "Data Appending & Discovery",
                  "Industry Database",
                  "ALL Services"
                ].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-[#c0ff33] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Resources */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Resources</h4>
              <ul className="space-y-4 text-sm text-white/40">
                {[
                  "Customers",
                  "Case Studies",
                  "Privacy Policy",
                  "Refund Policy",
                  "Blogs"
                ].map((l) => (
                  <li key={l}>
                    <a href="#" className="hover:text-[#c0ff33] transition-colors">{l}</a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Company / Contact */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold text-white">Company</h4>
              <div className="space-y-6 text-sm text-white/40">
                <div>
                  <a href="#" className="block hover:text-[#c0ff33] transition-colors">About Us</a>
                </div>
                <div>
                  <p className="text-white/60 font-semibold mb-1">Contact Us</p>
                  <p>+1 3452876422</p>
                </div>
                <div>
                  <p className="text-white/60 font-semibold mb-1">Sales</p>
                  <p>sales@revnitymarketing.com</p>
                </div>
                <div>
                  <p className="text-white/60 font-semibold mb-1">Project Status Inquiry</p>
                  <p>projects@revnitymarketing.com</p>
                </div>
                <div>
                  <p className="text-white/60 font-semibold mb-1">Other Inquiries</p>
                  <p>admin@revnitymarketing.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/5 flex flex-col lg:flex-row justify-between items-start lg:items-center gap-12">

            <div className="flex gap-8 items-center">
              <div className="flex gap-4">
                {[
                  { Icon: Linkedin, href: "https://www.linkedin.com/company/revnity-marketing/" },
                  { Icon: Instagram, href: "https://www.instagram.com/revnity_marketing_/" }
                ].map((social, i) => (
                  <a 
                    key={i} 
                    href={social.href} 
                    target="_blank"
                    rel="noopener noreferrer"
                    className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-[#c0ff33] hover:text-slate-950 transition-all"
                  >
                    <social.Icon size={18} />
                  </a>
                ))}
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/20 uppercase tracking-widest">
            <p>© 2025 Revnity Marketing. All rights reserved.</p>
            <button 
              onClick={scrollToTop}
              className="grid h-12 w-12 place-items-center rounded-full bg-white/5 hover:bg-[#c0ff33] hover:text-slate-950 transition-all"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
