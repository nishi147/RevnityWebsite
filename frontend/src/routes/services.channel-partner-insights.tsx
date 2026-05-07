import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  Users, 
  Target, 
  TrendingUp, 
  ShieldCheck, 
  Globe, 
  Search,
  CheckCircle2,
  PieChart,
  BarChart3,
  Network
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/channel-partner-insights")({
  component: ChannelPartnerInsights,
});

function ChannelPartnerInsights() {
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
            Channel Partner <br />
            <span className="text-[#c0ff33]">Insights</span>
          </motion.h1>
          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            Critical expertise for building high-performing partner ecosystems.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6"
            >
              <h2 className="text-3xl font-bold text-slate-950">Specialized Partner Selection</h2>
              <p className="text-lg text-slate-600 leading-relaxed">
                Selecting the right channel partner is critical to the success of your channel sales strategy. Rather than engaging with generic IT service providers, businesses need partners with specialized expertise aligned with their core competencies.
              </p>
              <p className="text-lg text-slate-600 leading-relaxed font-bold border-l-4 border-[#c0ff33] pl-6 py-2">
                Revnity Marketing meticulously categorizes MSPs, channel partners, and resellers across 100+ industry-specific classifications.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-slate-50 p-10 rounded-[3rem] border border-slate-100"
            >
              <h3 className="text-2xl font-bold mb-6">Database Attributes</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {['Industry Focus', 'Technology Alliances', 'Regional Coverage', 'Partner Capabilities'].map((attr) => (
                  <li key={attr} className="flex items-center gap-3 p-4 bg-white rounded-2xl shadow-sm">
                    <CheckCircle2 size={20} className="text-[#c0ff33]" />
                    <span className="text-sm font-bold text-slate-700">{attr}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Discovery Section */}
      <section className="py-24 bg-background text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <Network className="mx-auto mb-8 text-[#c0ff33]" size={64} />
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Discover the Perfect MSP</h2>
          <p className="text-xl text-white/60 max-w-3xl mx-auto mb-12 leading-relaxed">
            Get a customized report with intelligent insights on MSPs, helping you evaluate each MSP based on critical performance indicators.
          </p>
          <div className="inline-block p-1 bg-white/10 rounded-full">
            <button className="px-12 py-5 rounded-full bg-[#c0ff33] text-black font-black uppercase tracking-widest hover:scale-105 transition-transform">
              Request Sample Report
            </button>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-24 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">Benefits of MSP and <br /> <span className="text-[#004ab0]">Channel Database</span></h2>
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* For Sales */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <BarChart3 size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-[#004ab0] flex items-center gap-3">
                <Target size={24} /> For Channel Sales
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Quickly identify the right partners with precision and efficiency.",
                  "Accelerate engagement with new or existing partners.",
                  "Assign Executives and Account Managers to key partner accounts.",
                  "Gain insights into competitors’ partner affiliations."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#c0ff33] flex items-center justify-center shrink-0 text-black text-xs font-bold">{i+1}</span>
                    <p className="text-slate-600 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* For Marketers */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="p-12 rounded-[3rem] bg-[#004ab0] text-white relative overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-8 opacity-10">
                <PieChart size={100} />
              </div>
              <h3 className="text-2xl font-bold mb-8 text-[#c0ff33] flex items-center gap-3">
                <Globe size={24} /> For Channel Marketers
              </h3>
              <ul className="space-y-6 relative z-10">
                {[
                  "Identify partners already engaged with competitors.",
                  "Analyze the Total Addressable Market (TAM) for potential partners.",
                  "Leverage data-driven insights for hyper-targeted recruitment.",
                  "Effectively segment and target partners based on capabilities."
                ].map((item, i) => (
                  <li key={i} className="flex gap-4 items-start">
                    <span className="w-6 h-6 rounded-full bg-[#c0ff33] flex items-center justify-center shrink-0 text-black text-xs font-bold">{i+1}</span>
                    <p className="text-white/80 font-medium">{item}</p>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
