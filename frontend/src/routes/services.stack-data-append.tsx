import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  Database, 
  Layers, 
  Search, 
  Zap, 
  UserPlus, 
  RefreshCw,
  ArrowRight,
  Monitor
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/stack-data-append")({
  component: StackDataAppend,
});

const steps = [
  {
    title: "Share Your List",
    desc: "Simply share your list of company names or websites from your inactive prospect database.",
    icon: Database
  },
  {
    title: "Data Enrichment",
    desc: "We enrich your list with relevant technology stack insights for every company.",
    icon: Layers
  },
  {
    title: "Contact Discovery",
    desc: "We provide up-to-date contact information for key decision-makers at these accounts.",
    icon: UserPlus
  },
  {
    title: "Actionable Results",
    desc: "Turn dead leads into valuable opportunities with precision targeting.",
    icon: Zap
  }
];

function StackDataAppend() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img src={section2} alt="Background" className="w-full h-full object-cover opacity-30" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-bold text-[#c0ff33] mb-8"
          >
            Service Detail
          </motion.div>
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-5xl md:text-8xl font-black text-white uppercase tracking-tighter leading-none"
          >
            Stack Data <br />
            <span className="text-[#c0ff33]">Append</span>
          </motion.h1>
          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            Turn incomplete CRM data into a high-intent sales pipeline.
          </p>
        </div>
      </section>

      {/* Problem Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Stop Guessing, Start Knowing</h2>
            <div className="space-y-6 text-xl text-slate-600 leading-relaxed">
              <p>
                Tech companies often store prospect data in their CRM but lack insights into the technology stack of these companies. Sales reps frequently ask prospects about their installed technologies, leading to inefficiencies.
              </p>
              <p className="bg-slate-50 p-8 rounded-3xl border-l-8 border-[#004ab0] text-slate-900 font-bold">
                We provide tech companies with actionable intelligence on the technology stack of their prospects, along with up-to-date contact information for key decision-makers.
              </p>
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative bg-background rounded-[3rem] p-12 text-white shadow-2xl overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#c0ff33]/10 to-transparent" />
            <RefreshCw className="text-[#c0ff33] animate-spin-slow mb-8" size={60} />
            <h3 className="text-3xl font-bold mb-4">Turn "Dead Leads" into Value</h3>
            <p className="text-white/60 leading-relaxed">
              Inactive prospect databases are goldmines waiting to be unlocked. Enriching them with stack data transforms static lists into targeted, impactful prospecting campaigns.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Action Steps */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              The Path to <br /> <span className="text-[#004ab0]">Data Enrichment</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500">Simple steps to revitalize your CRM intelligence.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative bg-white p-10 rounded-[2.5rem] shadow-sm hover:shadow-xl transition-all group"
              >
                <div className="absolute top-8 right-8 text-slate-100 font-black text-6xl select-none group-hover:text-[#c0ff33]/20 transition-colors">
                  0{i + 1}
                </div>
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-[#004ab0] mb-8 group-hover:bg-[#c0ff33] group-hover:text-black transition-colors">
                  <step.icon size={32} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-950 relative z-10">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed relative z-10">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to action */}
      <section className="py-24 px-6 text-center">
        <div className="max-w-4xl mx-auto space-y-10">
          <div className="inline-flex items-center gap-4 text-[#004ab0] font-black uppercase tracking-widest text-sm">
            <span className="h-px w-12 bg-[#004ab0]" />
            Efficiency Enhanced
            <span className="h-px w-12 bg-[#004ab0]" />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter">Maximize Sales <br /> Effectiveness</h2>
          <p className="text-xl text-slate-600 leading-relaxed">
            Stop wasting time asking basic technology questions. Start your conversations with deep insights already in hand.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-10 py-5 rounded-full bg-[#c0ff33] text-black font-black uppercase tracking-widest shadow-xl hover:shadow-[#c0ff33]/40 transition-all"
          >
            Enrich Your List Now
          </motion.button>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
