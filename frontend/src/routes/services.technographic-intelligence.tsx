import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  Monitor, 
  Search, 
  Target, 
  UserCheck, 
  TrendingUp, 
  ShieldCheck, 
  Database,
  BarChart4,
  Layers,
  RefreshCw
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/technographic-intelligence")({
  component: TechnographicIntelligence,
});

const benefits = [
  {
    icon: Monitor,
    title: "Comprehensive Technology Assessment",
    desc: "Gain a complete overview of the technology stack used by your prospects."
  },
  {
    icon: Search,
    title: "Technology Insights",
    desc: "Access detailed insights into the technology solutions deployed by potential customers."
  },
  {
    icon: Target,
    title: "Targeting the Right Audience",
    desc: "Identify and engage highly relevant prospects with a strong likelihood of product adoption."
  },
  {
    icon: UserCheck,
    title: "Pre-Qualified Leads (BANT Criteria)",
    desc: "Focus on prospects already meeting Budget, Authority, and Need criteria, as they are currently using competitor solutions."
  },
  {
    icon: TrendingUp,
    title: "Enhancing Prospect Value",
    desc: "Incorporate technographic data into your key accounts to improve prospect intelligence and decision-making."
  },
  {
    icon: ShieldCheck,
    title: "Gaining a Competitive Advantage",
    desc: "Leverage technographics to position your offering as the superior choice, attracting companies seeking better service, pricing, or value."
  }
];

function TechnographicIntelligence() {
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
            Technographic <br />
            <span className="text-[#c0ff33]">Intelligence</span>
          </motion.h1>
          <p className="mt-8 text-xl md:text-2xl text-white/60 max-w-3xl font-medium leading-relaxed">
            What is Technographic Intelligence?
          </p>
        </div>
      </section>

      {/* Intro Section */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-6"
          >
            <p className="text-xl text-slate-600 leading-relaxed">
              Technographics refers to detailed insights into the technology stack a company is using. For ambitious and fast-growing technology companies, this information is invaluable—it enables more precise, contextual, and effective outreach.
            </p>
            <p className="text-xl text-slate-600 leading-relaxed">
              Revnity Marketing has supported over <span className="font-bold text-slate-950">2,000 IT companies</span> by providing detailed technographic data. Whether it's uncovering the tech stack of competitors or identifying the technologies that integrate with their own solutions, this information empowers companies to make smarter, more strategic decisions.
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="relative"
          >
            <div className="rounded-[3rem] bg-background p-12 text-white shadow-2xl relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-64 h-64 bg-[#c0ff33]/10 blur-[80px] -mr-32 -mt-32" />
              <h2 className="text-3xl md:text-4xl font-bold leading-tight relative z-10">
                We have mapped over <span className="text-[#c0ff33]">35,000+</span> software products, technologies, and vendors.
              </h2>
              <div className="mt-8 flex items-center gap-4 text-[#c0ff33] relative z-10">
                <Database size={40} />
                <span className="text-sm font-bold uppercase tracking-widest">Global Data Repository</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Grid */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-20">
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              How Technographics Enhance <br /> <span className="text-[#004ab0]">Business Growth</span>
            </h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, i) => (
              <motion.div
                key={benefit.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="bg-white p-10 rounded-[2.5rem] shadow-sm border border-slate-100 hover:shadow-xl transition-all group"
              >
                <div className="w-14 h-14 rounded-2xl bg-slate-50 flex items-center justify-center text-[#004ab0] mb-8 group-hover:bg-[#c0ff33] group-hover:text-black transition-colors">
                  <benefit.icon size={28} />
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-950">{benefit.title}</h3>
                <p className="text-slate-500 leading-relaxed">{benefit.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Acquisition Section */}
      <section className="py-24 px-6 overflow-hidden relative">
        <div className="absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-[#c0ff33]/5 blur-[120px] rounded-full" />
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="order-2 lg:order-1">
              <h2 className="text-4xl font-bold text-slate-950 mb-8">Technographic Data Acquisition and Validation</h2>
              <div className="space-y-6 text-lg text-slate-600">
                <p>
                  At Revnity Marketing, we take a meticulous, in-house approach to collecting, updating, and verifying technographic data. Our dedicated team of research analysts collaborates closely with our data quality and verification experts to ensure the accuracy and timeliness of the information we provide.
                </p>
                <p>
                  We source technographic data from <span className="font-bold text-slate-950 text-xl">17+ reliable channels</span>, identifying companies utilizing specific technologies. This preliminary data undergoes a rigorous quality assurance and validation process.
                </p>
              </div>
              <div className="mt-10 grid grid-cols-2 gap-4">
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <RefreshCw className="text-[#004ab0] mb-3" />
                  <p className="font-bold text-slate-950">45-Day Updates</p>
                  <p className="text-sm text-slate-500">Continuous accuracy</p>
                </div>
                <div className="p-6 rounded-2xl bg-slate-50 border border-slate-100">
                  <ShieldCheck className="text-[#004ab0] mb-3" />
                  <p className="font-bold text-slate-950">Multi-Channel</p>
                  <p className="text-sm text-slate-500">Rigorous validation</p>
                </div>
              </div>
            </div>
            <div className="order-1 lg:order-2">
              <div className="relative rounded-[3rem] overflow-hidden shadow-2xl">
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 to-transparent z-10" />
                <div className="absolute bottom-8 left-8 z-20 text-white">
                  <p className="text-3xl font-bold italic">"Accuracy is our foundation."</p>
                </div>
                <div className="bg-[#004ab0] h-[500px] flex items-center justify-center">
                  <BarChart4 size={150} className="text-white/20 animate-pulse" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Reach Section */}
      <section className="py-24 bg-background text-white px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter mb-12">
            Comprehensive Market Reach: <span className="text-[#c0ff33]">Mass & Niche</span>
          </h2>
          <div className="max-w-4xl mx-auto space-y-8 text-xl text-white/70 leading-relaxed">
            <p>
              We understand that every business has unique marketing goals. Our technographics data offers a versatile solution, whether you’re aiming for broad market reach or precision-targeted marketing through advanced filtering.
            </p>
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 py-8">
              {['Industry', 'Product Type', 'Revenue', 'IT Budget'].map(tag => (
                <div key={tag} className="px-6 py-3 rounded-full border border-white/20 text-sm font-bold text-white/90">
                  {tag}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final Reach */}
      <section className="py-32 px-6 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="flex flex-col lg:flex-row gap-16 items-center">
            <div className="flex-1">
              <h2 className="text-5xl font-black uppercase tracking-tighter text-slate-950 mb-8">
                The Extensive Reach <br /> of Our Technographics
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-10">
                No one covers technographics like Revnity Marketing. With real-time tracking of <span className="text-[#004ab0] font-bold">30,000+ technologies</span> and <span className="text-[#004ab0] font-bold">25M+ companies</span>, we provide the most extensive and precise technographic data in the industry.
              </p>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-10 py-5 rounded-full bg-[#c0ff33] text-black font-black uppercase tracking-widest shadow-xl hover:shadow-[#c0ff33]/40 transition-all"
              >
                Get Started Now
              </motion.button>
            </div>
            <div className="flex-1 grid grid-cols-2 gap-6">
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                <span className="text-5xl font-black text-[#004ab0] mb-2">30K+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Technologies</span>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-slate-50 border border-slate-100 flex flex-col items-center text-center">
                <span className="text-5xl font-black text-[#004ab0] mb-2">25M+</span>
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">Companies</span>
              </div>
              <div className="p-10 rounded-[2.5rem] bg-[#c0ff33] border border-slate-100 flex flex-col items-center text-center md:col-span-2">
                <Layers size={40} className="mb-4 text-black" />
                <span className="text-lg font-black text-black uppercase tracking-tighter leading-tight">Continuous Research Keeps You Ahead</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
