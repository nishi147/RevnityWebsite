import { motion } from "framer-motion";
import { ArrowUpRight, Facebook, Linkedin, Twitter, Youtube, ArrowUp } from "lucide-react";

export function CtaFooter() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="relative bg-white">
      {/* CTA Section */}
      <section className="relative mx-auto max-w-6xl px-6 py-16 sm:py-24">
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative overflow-hidden rounded-[2.5rem] bg-slate-50 p-10 shadow-card border border-slate-200 md:p-16"
        >
          <div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-primary/30 blur-3xl animate-blob" />
          <div className="absolute -bottom-20 -left-20 h-72 w-72 rounded-full bg-accent/30 blur-3xl animate-blob" />

          <p className="text-sm uppercase tracking-[0.25em] text-primary">Get in touch</p>
          <h2 className="mt-3 max-w-2xl text-3xl font-bold leading-tight text-slate-950 sm:text-6xl">
            Power Up Your Marketing <span className="text-shimmer">Edge today.</span>
          </h2>
          <div className="mt-8 flex flex-wrap gap-4">
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              href="mailto:sales@revnitymarketing.com"
              className="inline-flex items-center gap-2 rounded-full bg-slate-950 px-5 py-3 text-sm font-semibold text-white"
            >
              Contact Sales <ArrowUpRight className="h-4 w-4" />
            </motion.a>
            <motion.a 
              whileHover={{ scale: 1.05 }} 
              href="tel:+13452876422"
              className="inline-flex items-center gap-2 rounded-full border border-slate-300 px-5 py-3 text-sm font-semibold text-slate-900"
            >
              Call Us: +1 345 287 6422 <ArrowUpRight className="h-4 w-4" />
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* Main Footer Section */}
      <div className="bg-[#111111] text-white py-20 px-6">
        <div className="mx-auto max-w-7xl">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12">
            {/* Logo and Info */}
            <div className="lg:col-span-2">
              <div className="flex items-center gap-2 mb-8">
                <span className="relative grid h-10 w-10 place-items-center rounded-md bg-lime-grad">
                  <span className="block h-4 w-4 rotate-45 bg-black" />
                </span>
                <span className="font-display text-2xl font-bold">Revnity</span>
              </div>
              <div className="space-y-4 text-white/50 text-sm">
                <p>4517 Washington Ave. Manchester, Kentucky 39495</p>
                <p>Hours: 8:00 - 17:00, Mon - Sat</p>
              </div>
            </div>

            {/* Navigation Columns */}
            <div className="space-y-6">
              <h4 className="text-lg font-bold">About</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {["Company", "Careers", "Press media", "History", "Sitemap", "Privacy Policy"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold">Services</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {["IT Consultancy", "Data Security", "Business Reform", "Firewall Advance", "Interactions", "SEO"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>

            <div className="space-y-6">
              <h4 className="text-lg font-bold">Resource</h4>
              <ul className="space-y-4 text-sm text-white/50">
                {["Community", "Our Blog", "Forums", "Meetups", "Marketplace"].map((l) => (
                  <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-20 pt-10 border-t border-white/10 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-12">
            {/* Newsletter */}
            <div className="max-w-md w-full">
              <h4 className="text-lg font-bold mb-2">Join our newsletter</h4>
              <p className="text-sm text-white/40 mb-6">No ads. No trails. No commitments</p>
              <form className="flex gap-2">
                <input 
                  type="email" 
                  placeholder="Email Address" 
                  className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm focus:outline-none focus:border-primary transition-colors"
                />
                <button 
                  type="submit"
                  className="bg-primary text-primary-foreground px-6 py-3 rounded-full text-sm font-bold flex items-center gap-2 hover:opacity-90 transition-opacity"
                >
                  Subscribe <ArrowUpRight size={16} />
                </button>
              </form>
            </div>

            {/* Support and Follow */}
            <div className="flex flex-col md:flex-row gap-12 lg:gap-20">
              <div className="space-y-6">
                <h4 className="text-lg font-bold">Support</h4>
                <ul className="space-y-4 text-sm text-white/50">
                  {["Forum Support", "Help FAQ", "Contact Us"].map((l) => (
                    <li key={l}><a href="#" className="hover:text-primary transition-colors">{l}</a></li>
                  ))}
                </ul>
              </div>

              <div className="space-y-6">
                <h4 className="text-lg font-bold">Follow us</h4>
                <div className="flex gap-4">
                  {[Facebook, Linkedin, Twitter, Youtube].map((Icon, i) => (
                    <a key={i} href="#" className="grid h-10 w-10 place-items-center rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all">
                      <Icon size={18} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div className="mt-20 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-white/30 uppercase tracking-widest">
            <p>© 2026 Revnity. All rights reserved.</p>
            <button 
              onClick={scrollToTop}
              className="grid h-12 w-12 place-items-center rounded-full bg-white/5 hover:bg-primary hover:text-primary-foreground transition-all"
            >
              <ArrowUp size={20} />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
