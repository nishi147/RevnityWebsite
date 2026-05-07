import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { motion } from "framer-motion";
import { Mail, Phone, MapPin } from "lucide-react";

export const Route = createFileRoute("/contact")({
  component: ContactPage,
});

function ContactPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f620,transparent)]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl xs:text-4xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Get in <span className="text-[#c0ff33]">Touch</span>
          </motion.h1>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Ready to fuel your growth? Our team is standing by to help you map your TAM.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Mail, title: "Email Us", detail: "projects@revnitymarketing.com", label: "Send a message" },
            { icon: Phone, title: "Call Us", detail: "+1 3452876422", label: "Talk to expert" },
            { icon: MapPin, title: "Location", detail: "Manchester, Kentucky", label: "Our headquarters" },
          ].map((item, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 text-center group hover:bg-white hover:shadow-xl transition-all"
            >
              <div className="mx-auto w-16 h-16 rounded-2xl bg-[#c0ff33] text-slate-950 flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform">
                <item.icon size={32} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 mb-2">{item.title}</h3>
              <p className="text-slate-600 font-medium mb-4">{item.detail}</p>
              <span className="text-xs font-bold uppercase tracking-widest text-[#004ab0]">{item.label}</span>
            </motion.div>
          ))}
        </div>
      </section>

      {/* The form section - Reusing the CTA structure */}
      <div className="pb-24">
        <CtaFooter />
      </div>
    </main>
  );
}
