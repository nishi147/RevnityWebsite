import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  History, 
  UserPlus, 
  Layers, 
  TrendingUp, 
  Search, 
  ShieldCheck,
  AlertCircle,
  CheckCircle2,
  Database,
  Building
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/data-appending-and-discovery")({
  component: DataAppendingDiscovery,
});

const reasons = [
  { icon: Building, text: "Acquired Companies – Businesses that have merged or been acquired." },
  { icon: AlertCircle, text: "Defunct Companies – Companies that have gone out of business." },
  { icon: RefreshCw, text: "Rebranded or Merged Entities – Organizations that have undergone changes." },
  { icon: UserPlus, text: "Incomplete Contact Information – Missing emails, phones, or titles." },
  { icon: History, text: "Outdated Data – Old or incorrect contact information." },
  { icon: Layers, text: "Lack of Tech Insights – No information on technology stacks." },
  { icon: Search, text: "Missing Business Details – Absent revenue, size, or identifiers." },
  { icon: Database, text: "Poor Segmentation – Not categorized by industry or vertical." }
];

const enrichmentSteps = [
  { title: "Company Data Enrichment", desc: "Fill in missing details about target companies." },
  { title: "Contact Information Update", desc: "Add and correct missing or outdated contact details." },
  { title: "Technology Stack Insights", desc: "Append technology usage data for MHAs." },
  { title: "Target Persona Expansion", desc: "Identify and include new key decision-makers." },
  { title: "Business Metrics Update", desc: "Append current revenue, employee size, and industry verticals." }
];

// Need to import RefreshCw explicitly since it was used in reasons
import { RefreshCw } from "lucide-react";

function DataAppendingDiscovery() {
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
            Data Appending <br />
            <span className="text-[#c0ff33]">& Discovery</span>
          </motion.h1>
          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            Continuously refreshing your Must-Have Accounts (MHAs) for maximum sales impact.
          </p>
        </div>
      </section>

      {/* Challenge Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold mb-8">The Challenge of Obsolete Lists</h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-6">
                Must-Have Accounts (MHAs) are strategic target accounts assigned to sales and marketing teams for focused engagement. However, these lists often become obsolete due to market shifts, leadership changes, and outdated insights.
              </p>
              <div className="bg-[#004ab0] p-8 rounded-[2rem] text-white">
                <p className="font-bold text-lg">
                  Regular updates are essential to ensure effective sales efforts and capitalize on new opportunities.
                </p>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {reasons.map((reason, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="p-5 rounded-2xl bg-white border border-slate-100 flex items-start gap-4 shadow-sm"
                >
                  <div className="p-2 rounded-lg bg-slate-50 text-[#004ab0]">
                    <reason.icon size={20} />
                  </div>
                  <p className="text-sm font-medium text-slate-600 leading-snug">{reason.text}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Solution Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              Continuous <span className="text-[#004ab0]">Data Refresh</span>
            </h2>
            <p className="mt-6 text-xl text-slate-500 max-w-2xl mx-auto">
              To maximize impact, your target lists must be continuously updated with accurate and relevant information.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {enrichmentSteps.map((step, i) => (
              <motion.div
                key={step.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="p-10 rounded-[3rem] bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#c0ff33]/50 transition-all group"
              >
                <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-[#004ab0] transition-colors group-hover:bg-[#c0ff33] group-hover:text-black">
                  <CheckCircle2 size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-950">{step.title}</h3>
                <p className="text-slate-500 leading-relaxed">{step.desc}</p>
              </motion.div>
            ))}
            
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[3rem] bg-background text-white flex flex-col justify-center items-center text-center lg:col-span-1"
            >
              <TrendingUp className="text-[#c0ff33] mb-6" size={48} />
              <h3 className="text-2xl font-bold mb-4">Drive Better Outreach</h3>
              <p className="text-white/60 mb-8">Ready to revitalize your account intelligence?</p>
              <button className="px-8 py-4 rounded-full bg-[#c0ff33] text-black font-bold uppercase tracking-widest text-sm hover:scale-105 transition-transform">
                Get Expert Advice
              </button>
            </motion.div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
