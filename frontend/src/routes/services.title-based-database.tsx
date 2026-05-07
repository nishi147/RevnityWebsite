import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  Users, 
  Briefcase, 
  Search, 
  Target, 
  Database,
  BarChart,
  UserCheck,
  Globe,
  Settings,
  Scale,
  Code2,
  Cpu,
  BadgeDollarSign,
  HeartHandshake
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/title-based-database")({
  component: TitleBasedDatabase,
});

const departments = [
  { icon: Cpu, name: "Information Technology" },
  { icon: BadgeDollarSign, name: "Finance" },
  { icon: HeartHandshake, name: "Human Resources" },
  { icon: Code2, name: "Engineering" },
  { icon: Scale, name: "Legal" },
  { icon: Target, name: "Marketing" },
  { icon: Settings, name: "Operations" },
  { icon: Briefcase, name: "Sales" }
];

function TitleBasedDatabase() {
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 overflow-hidden bg-background">
        <div className="absolute inset-0 z-0">
          <img 
            src={section2} 
            alt="Background" 
            className="w-full h-full object-cover opacity-30"
          />
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
            Title Based <br />
            <span className="text-[#c0ff33]">Database</span>
          </motion.h1>
          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            Precision targeting for decision-makers across every industry.
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6 relative">
        <div className="absolute left-0 top-0 w-full h-full bg-[radial-gradient(circle_at_10%_20%,#c0ff3305,transparent)]" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-8"
            >
              <h2 className="text-4xl font-bold text-slate-950">Personalized Persona Alignment</h2>
              <p className="text-xl text-slate-600 leading-relaxed">
                We specialize in providing access to professionals across all levels, departments, and job functions within an organization. Our Account Managers partner with you to define your ideal target personas, ensuring alignment with your business objectives.
              </p>
              <div className="flex gap-4">
                <div className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <UserCheck className="text-[#004ab0]" />
                  <span className="font-bold">Ideal Target Personas</span>
                </div>
                <div className="px-6 py-3 rounded-2xl bg-slate-50 border border-slate-100 flex items-center gap-3">
                  <Briefcase className="text-[#004ab0]" />
                  <span className="font-bold">Every Job Level</span>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative p-12 rounded-[3rem] bg-background text-white overflow-hidden shadow-2xl"
            >
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#004ab0]/20 blur-[80px] -mr-32 -mt-32" />
              <Database size={60} className="text-[#c0ff33] mb-8" />
              <h3 className="text-5xl md:text-7xl font-black mb-4">102M+</h3>
              <p className="text-xl text-white/60 font-bold uppercase tracking-widest">B2B Contacts Worldwide</p>
              <p className="mt-6 text-white/40 italic">
                A massive global repository updated in real-time to keep your campaigns fueled.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Expertise Grid */}
      <section className="py-24 bg-slate-50 px-6 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
            <div className="max-w-2xl">
              <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
                Beyond Traditional <br /> <span className="text-[#004ab0]">Segmentation</span>
              </h2>
              <p className="mt-6 text-lg text-slate-600">
                Along with traditional department-based segmentation, we offer customized keyword-driven job title filtering, enabling you to pinpoint specialized roles.
              </p>
            </div>
            <div className="hidden md:block">
              <BarChart size={100} className="text-slate-200" />
            </div>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {departments.map((dept, i) => (
              <motion.div
                key={dept.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className="group p-8 rounded-[2rem] bg-white border border-slate-100 flex flex-col items-center text-center shadow-sm hover:shadow-xl hover:border-[#c0ff33]/50 transition-all duration-300"
              >
                <div className="w-16 h-16 rounded-2xl bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-[#c0ff33] group-hover:text-black transition-all mb-6">
                  <dept.icon size={32} />
                </div>
                <h4 className="text-lg font-bold text-slate-950 group-hover:text-[#004ab0] transition-colors">{dept.name}</h4>
              </motion.div>
            ))}
          </div>
          
          <div className="mt-16 text-center">
            <p className="text-slate-400 font-bold uppercase tracking-widest text-sm">
              Plus thousands more specialized job titles available
            </p>
          </div>
        </div>
      </section>

      {/* Precision Section */}
      <section className="py-32 px-6">
        <div className="max-w-4xl mx-auto text-center space-y-12">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="w-20 h-20 bg-[#c0ff33] rounded-full flex items-center justify-center mx-auto text-black shadow-[0_0_40px_rgba(192,255,51,0.4)]"
          >
            <Search size={32} />
          </motion.div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
            Efficiency through <br /> Precision Targeting
          </h2>
          <p className="text-xl md:text-2xl text-slate-600 leading-relaxed">
            We deliver precision targeting that helps you engage with the right decision-makers efficiently and effectively. No more wasted effort on low-fit prospects.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="px-12 py-5 rounded-full bg-background text-white font-black uppercase tracking-widest shadow-2xl transition-all"
          >
            Define Your Persona
          </motion.button>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
