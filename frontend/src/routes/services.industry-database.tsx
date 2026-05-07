import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  Building2, 
  Target, 
  Search, 
  LayoutGrid, 
  Briefcase, 
  GraduationCap,
  HeartPulse,
  Truck,
  Lightbulb,
  Cpu,
  Globe,
  Settings,
  ShieldCheck,
  Factory
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/industry-database")({
  component: IndustryDatabase,
});

const industries = [
  { name: "Software and IT", icon: Cpu },
  { name: "Manufacturing", icon: Factory },
  { name: "Retail", icon: LayoutGrid },
  { name: "Healthcare and Pharma", icon: HeartPulse },
  { name: "Hospitality", icon: Globe },
  { name: "Business Services", icon: Briefcase },
  { name: "Transportation", icon: Truck },
  { name: "Consumer Services", icon: UsersIcon }, // Mapping to a default
  { name: "Finance, Banking & Insurance", icon: ShieldCheck },
  { name: "Media and Internet", icon: Lightbulb },
  { name: "Organizations", icon: Building2 },
  { name: "Energy and Utilities", icon: Settings },
  { name: "Telecommunication", icon: PhoneCall },
  { name: "Government", icon: Landmark },
  { name: "Education", icon: GraduationCap },
  { name: "Real Estate & Construction", icon: Hammer }
];

// Re-mapping icons for better match
import { Users as UsersIcon, PhoneCall, Landmark, Hammer } from "lucide-react";

function IndustryDatabase() {
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
            Industry <br />
            <span className="text-[#c0ff33]">Database</span>
          </motion.h1>
          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            Establish meaningful connections through precise industry-specific targeting.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 relative overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-8">Precision Targeting with Segmented Outreach</h2>
            <p className="text-xl text-slate-600 leading-relaxed mb-8">
              Do you focus on a specific industry vertical or segment? At Revnity Marketing, we provide comprehensive access to all industries and sub-industries, enabling precise targeting for your business outreach.
            </p>
            <div className="space-y-4">
              {['Industry Keywords', 'SIC Codes', 'NAICS Codes'].map((code) => (
                <div key={code} className="flex items-center gap-3 text-lg font-bold text-slate-900">
                  <div className="w-2 h-2 rounded-full bg-[#c0ff33]" />
                  {code}
                </div>
              ))}
            </div>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="p-12 rounded-[3rem] bg-slate-50 border border-slate-100 shadow-xl"
          >
            <Target className="text-[#004ab0] mb-6" size={48} />
            <h3 className="text-2xl font-bold mb-6">Strategic Collaboration</h3>
            <p className="text-lg text-slate-600 leading-relaxed">
              Our dedicated Account Managers collaborate with you to refine your target industries. With our tailored approach, you can segment and filter any database by industry verticals to maximize engagement and conversion.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Industry Grid */}
      <section className="py-24 bg-background text-white px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-6">
              Major Industry <span className="text-[#c0ff33]">Verticals</span>
            </h2>
            <p className="text-xl text-white/50 max-w-3xl mx-auto">
              Explore a detailed classification of major industries along with their respective sub-industries.
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {industries.map((ind, i) => (
              <motion.div
                key={ind.name}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -8, backgroundColor: 'rgba(192, 255, 51, 0.1)' }}
                className="p-8 rounded-[2rem] bg-white/5 border border-white/10 flex flex-col items-center text-center transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center text-white mb-6 group-hover:bg-[#c0ff33] group-hover:text-black transition-colors">
                  <ind.icon size={28} />
                </div>
                <h4 className="text-sm font-bold uppercase tracking-widest text-white/80 group-hover:text-white">{ind.name}</h4>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final Call */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-block p-4 rounded-3xl bg-slate-50 mb-8">
            <Globe className="text-[#004ab0]" size={40} />
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-8">Expand Your <br /> Market Reach</h2>
          <p className="text-xl text-slate-600 leading-relaxed mb-12">
            Our data-driven industry insights empower you to navigate complex market landscapes with surgical precision.
          </p>
          <button className="px-12 py-5 rounded-full bg-background text-white font-black uppercase tracking-widest hover:bg-[#004ab0] transition-colors shadow-2xl">
            Start Precise Targeting
          </button>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
