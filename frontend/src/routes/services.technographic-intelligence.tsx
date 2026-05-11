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
  RefreshCw,
  Activity,
  MessageSquare,
  FileText,
  ArrowRight,
  Zap,
  Globe,
  Check,
  ChevronDown
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/technographic-intelligence")({
  component: TechnographicIntelligence,
});



function TechnographicIntelligence() {
  return (
    <main className="min-h-screen bg-white text-slate-950 overflow-x-hidden">

      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white text-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#004ab0]/10 blur-[100px] rounded-full opacity-70" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-lime-50 blur-[100px] rounded-full opacity-70" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center w-full overflow-hidden">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-7 space-y-8 w-full max-w-full"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#004ab0]"></span>
              Technographic Intelligence
            </div>
            
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-slate-950 break-words">
              Know <span className="text-[#004ab0]">Exactly</span> What Tech Your Prospects Run
            </h1>

            
            <p className="text-xs sm:text-base text-slate-600 max-w-xl font-medium leading-relaxed break-words">
              Revnity maps the technology stack of 25M+ companies across 35,000+ software products — so your sales and marketing teams stop guessing and start winning.
            </p>


            
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <button className="px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-[#c0ff33] text-[#0f172a] font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-[#b0f022] transition-colors shadow-lg shadow-[#c0ff33]/20">
                Request Sample Data
              </button>


              <button className="px-8 py-4 rounded-xl border border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-sm hover:bg-slate-50 transition-all">
                See How It Works
              </button>
            </div>
          </motion.div>
          
          {/* Right Column (The Card) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-5 bg-white border border-slate-100 rounded-[2.5rem] p-4 sm:p-8 space-y-8 shadow-xl relative"

          >
            <div className="flex justify-between items-center relative z-10">
              <h3 className="text-xs font-bold uppercase tracking-widest text-slate-400">Live Tech Stack Insights</h3>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 px-3 py-1 text-xs font-bold text-emerald-600">
                <span className="w-1 h-1 rounded-full bg-emerald-500"></span>
                Updated 45-day cycle
              </div>
            </div>
            
            {/* List Items */}
            <div className="space-y-6 relative z-10">
              {/* Salesforce */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-[#004ab0] border border-slate-100">
                    <Database size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-sm">Salesforce CRM</div>
                    <div className="text-xs text-slate-400 font-medium">Enterprise · 62,400 companies</div>
                  </div>
                </div>
                <div className="flex flex-col items-end sm:text-right w-full sm:w-auto">

                  <div className="w-full sm:w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1">

                    <div className="h-full bg-[#004ab0] rounded-full" style={{ width: '84%' }}></div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500">84% adoption in target segment</div>
                </div>
              </div>
              
              {/* AWS */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-emerald-600 border border-slate-100">
                    <Layers size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-sm">AWS Infrastructure</div>
                    <div className="text-xs text-slate-400 font-medium">Cloud · 89,100 companies</div>
                  </div>
                </div>
                <div className="flex flex-col items-end sm:text-right w-full sm:w-auto">

                  <div className="w-full sm:w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1">

                    <div className="h-full bg-emerald-500 rounded-full" style={{ width: '71%' }}></div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500">71% adoption in target segment</div>
                </div>
              </div>
              
              {/* HubSpot */}
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 sm:gap-4">

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-slate-50 rounded-xl flex items-center justify-center text-orange-600 border border-slate-100">
                    <BarChart4 size={20} />
                  </div>
                  <div>
                    <div className="font-bold text-slate-950 text-sm">HubSpot Marketing</div>
                    <div className="text-xs text-slate-400 font-medium">MarTech · 41,800 companies</div>
                  </div>
                </div>
                <div className="flex flex-col items-end sm:text-right w-full sm:w-auto">

                  <div className="w-full sm:w-32 h-1.5 bg-slate-100 rounded-full overflow-hidden mb-1">

                    <div className="h-full bg-orange-500 rounded-full" style={{ width: '58%' }}></div>
                  </div>
                  <div className="text-[10px] font-bold text-slate-500">58% adoption in target segment</div>
                </div>
              </div>
            </div>
            
            {/* Stats */}
            <div className="pt-6 border-t border-slate-100 grid grid-cols-3 gap-4 relative z-10">
              <div className="text-center">
                <div className="text-xl font-black text-slate-950">35K+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Technologies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black text-slate-950">25M+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Companies</div>
              </div>
              <div className="text-center">
                <div className="text-xl font-black text-slate-950">17+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Data Sources</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Beyond Firmographics */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-7 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              What is Technographic Intelligence
            </div>
            
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950 leading-none">
              Beyond Firmographics – <br />
              The Missing <br />
              Intelligence Layer
            </h2>
            
            <p className="text-xl text-slate-600 font-medium leading-relaxed">
              Firmographics tell you who a company is. Technographics tell you how they operate, what problems they're solving, and whether they're ready to buy from you.
            </p>
            
            <div className="space-y-6 text-slate-600 text-lg leading-relaxed pt-4">
              <p>
                Technographic data is the detailed map of every software tool, platform, and infrastructure component a company relies on. For ambitious B2B SaaS and technology companies, it's the <span className="font-bold text-slate-950">difference between cold outreach and highly targeted, contextual selling</span>.
              </p>
              <p>
                Revnity has supported over <span className="font-bold text-slate-950">2,000 IT companies</span> by surfacing these insights — enabling smarter ABM, competitive displacement campaigns, and ICP refinement that actually converts. We track <span className="font-bold text-slate-950">tech adoption, switching signals, and upgrade intent</span> across your entire addressable market.
              </p>
              <p>
                Our data goes far beyond what's scraped from job postings. We validate through direct human outreach, multi-channel signals, and a rigorous 8-stage quality process — so what you get is <span className="font-bold text-slate-950">actionable, not approximate</span>.
              </p>
            </div>
            
            <div className="flex flex-wrap gap-2 pt-4">
              {['GDPR Aligned', 'CCPA Compliant', 'Human-Verified', '17+ Data Sources', 'BAN-Qualified Leads'].map(tag => (
                <div key={tag} className="px-4 py-2 rounded-full bg-white border border-slate-100 text-xs font-bold text-slate-700 shadow-sm">
                  {tag}
                </div>
              ))}
            </div>
          </div>
          
          <div className="lg:col-span-5 space-y-6">
            {/* Cards */}
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-[#004ab0]/10 flex items-center justify-center text-[#004ab0]">
                <Activity size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Real-Time Buying Signals</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Detect companies adopting new tools, switching vendors, or expanding their stack — and reach them at the perfect moment in their buying cycle.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <UserCheck size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Pre-Qualified Prospects (BAN Criteria)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Prospects using competitor tech already have Budget, Authority, and Need established. Our data hands you accounts ready for a displacement conversation.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm space-y-4">
              <div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600">
                <Zap size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Competitive Displacement Intelligence</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Know who is using your competitors' products and approach them with targeted, relevant positioning that converts at dramatically higher rates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-gradient-to-br from-[#0096c7] to-[#03045e] text-white px-6 relative overflow-hidden">
        {/* Glows */}
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#c0ff33]/20 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold text-[#c0ff33] uppercase tracking-wider mb-4">
            Use Cases
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-white mb-4">
            How B2B Teams Deploy <br /> Technographic Intelligence
          </h2>
          <p className="text-xl text-white/70 max-w-2xl mx-auto font-medium">
            From ICP definition to active pipeline, technographic data transforms every revenue function in your organization.
          </p>
        </div>



        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Card 1 */}
          <motion.div 
            className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 relative z-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white/40">01</span>
              <div className="w-10 h-10 rounded-lg bg-[#c0ff33] flex items-center justify-center text-[#004ab0]">
                <Search size={20} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">ICP & TAM Definition</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Build your Ideal Customer Profile and Total Addressable Market based on real technology adoption data — not guesswork.
            </p>
            <ul className="space-y-2 pt-2">
              {["GTM research by tech stack compatibility", "Accurate TAM sizing from real adoption data", "Segment by stack for laser targeting"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-white/80">
                  <Check size={14} className="text-[#c0ff33]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Card 2 */}
          <motion.div 
            className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 relative z-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white/40">02</span>
              <div className="w-10 h-10 rounded-lg bg-[#c0ff33] flex items-center justify-center text-[#004ab0]">
                <MessageSquare size={20} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">ABM & Sales Outreach</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Arm your reps with context before the first call. Know what tools prospects use — and lead with positioning that resonates.
            </p>
            <ul className="space-y-2 pt-2">
              {["Hyper-personalized outreach by tech stack", "Move from cold call to consultative sell", "Shorter sales cycles, higher close rates"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-white/80">
                  <Check size={14} className="text-[#c0ff33]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Card 3 */}
          <motion.div 
            className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 relative z-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white/40">03</span>
              <div className="w-10 h-10 rounded-lg bg-[#c0ff33] flex items-center justify-center text-[#004ab0]">
                <BarChart4 size={20} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Campaign ROI & Segmentation</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Stop burning spend on mismatched accounts. Build audience segments from real tech stack data and watch CPL drop.
            </p>
            <ul className="space-y-2 pt-2">
              {["Stack-based audience segmentation", "Auto-exclude incompatible accounts", "Maximize ABM efficiency & paid ROI"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-white/80">
                  <Check size={14} className="text-[#c0ff33]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Card 4 */}
          <motion.div 
            className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 relative z-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white/40">04</span>
              <div className="w-10 h-10 rounded-lg bg-[#c0ff33] flex items-center justify-center text-[#004ab0]">
                <Monitor size={20} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Competitive Displacement</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Identify who is using your competitors' software today and build a campaign designed to win them over with targeted differentiation.
            </p>
            <ul className="space-y-2 pt-2">
              {["Map competitor customer base", "Spot contract expiry windows", "Position as the superior alternative"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-white/80">
                  <Check size={14} className="text-[#c0ff33]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Card 5 */}
          <motion.div 
            className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 relative z-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white/40">05</span>
              <div className="w-10 h-10 rounded-lg bg-[#c0ff33] flex items-center justify-center text-[#004ab0]">
                <FileText size={20} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">CRM Enrichment & Scoring</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Enrich your existing CRM records with tech stack data to dramatically improve lead scoring models and sales prioritization.
            </p>
            <ul className="space-y-2 pt-2">
              {["Stack Data Append to live CRM", "Build hyper-accurate scoring models", "Prioritize reps on highest-value accounts"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-white/80">
                  <Check size={14} className="text-[#c0ff33]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
          
          {/* Card 6 */}
          <motion.div 
            className="bg-white/5 p-8 rounded-3xl border border-white/10 space-y-6 relative z-10 backdrop-blur-sm"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex justify-between items-center">
              <span className="text-sm font-bold text-white/40">06</span>
              <div className="w-10 h-10 rounded-lg bg-[#c0ff33] flex items-center justify-center text-[#004ab0]">
                <Target size={20} />
              </div>
            </div>
            <h3 className="text-xl font-bold text-white">Product & GTM Strategy</h3>
            <p className="text-white/70 text-sm leading-relaxed">
              Understand the real-world tech environments your prospects live in — so your product roadmap and go-to-market messaging hit the mark.
            </p>
            <ul className="space-y-2 pt-2">
              {["Integration & partnership discovery", "Market sizing by tech adoption cluster", "GTM messaging aligned to real environments"].map(item => (
                <li key={item} className="flex items-center gap-2 text-xs font-bold text-white/80">
                  <Check size={14} className="text-[#c0ff33]" />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </section>

      <section className="py-24 bg-slate-50 px-6 relative overflow-hidden">
        {/* Glow */}
        <div className="absolute left-1/4 top-1/4 h-[400px] w-[400px] rounded-full bg-[#c0ff33]/5 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">

          <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider mb-4">
            Industry Verticals
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950 mb-4">
            Deep Coverage Across <br /> Key B2B Technology Sectors
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Precision technographic data for the industries where technology drives the buying decision.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              cat: "SOFTWARE & SAAS",
              title: "Horizontal & Vertical SaaS Platforms",
              desc: "From enterprise software providers to emerging PLG companies — track adoption, switching patterns, and competitive displacement opportunities."
            },
            {
              cat: "CLOUD & INFRASTRUCTURE",
              title: "IaaS, PaaS, SaaS & DevOps",
              desc: "Monitor cloud service providers, hosting platforms, and DevOps tooling. Track migration signals across AWS, Azure, GCP, and beyond."
            },
            {
              cat: "CYBERSECURITY & RISK",
              title: "Network, Endpoint & IAM Security",
              desc: "Target security software buyers with precision. Identify users of network, endpoint, cloud, and identity security platforms."
            },
            {
              cat: "ENTERPRISE APPLICATIONS",
              title: "ERP, CRM, SCM & BI Systems",
              desc: "Identify which ERP, CRM, and data management systems companies run. Find integration opportunities and migration candidates."
            },
            {
              cat: "IT SERVICES & MSPS",
              title: "Channel Partners & System Integrators",
              desc: "Connect with managed service providers, IT consultants, and channel partners driving digital transformation for their clients."
            },
            {
              cat: "HARDWARE & DEVICES",
              title: "Networking, Storage & Computing",
              desc: "Track IT hardware manufacturers, storage vendors, and enterprise-grade networking infrastructure providers across global markets."
            }
          ].map(item => (
            <div key={item.title} className="bg-white p-8 rounded-3xl border border-slate-100 space-y-4 flex flex-col justify-between">
              <div>
                <span className="text-xs font-bold text-[#004ab0] uppercase tracking-wider">{item.cat}</span>
                <h3 className="text-xl font-bold text-slate-950 mt-2">{item.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed mt-2">{item.desc}</p>
              </div>
              <button className="text-sm font-bold text-[#004ab0] flex items-center gap-1 hover:gap-2 transition-all mt-4 self-start">
                Explore data <ArrowRight size={16} />
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Data Quality Pipeline */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider mb-4">
            How It Works
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950 mb-4">
            An 8-Stage Data Quality Pipeline
          </h2>
          <p className="text-xl text-slate-600 max-w-2xl mx-auto font-medium">
            Our in-house research team and data quality process ensures every record you receive is accurate, verified, and actionable.
          </p>
        </div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {[
            { num: "01", title: "Primary Collection", desc: "17+ data channels — web signals, job postings, social data, and direct research" },
            { num: "02", title: "Segmentation", desc: "Records categorized by industry, tech category, geography, and company size" },
            { num: "03", title: "Standardization", desc: "Normalized across vendor naming, versions, and technology taxonomy" },
            { num: "04", title: "Human Validation", desc: "Direct phone, email survey, and social validation by our analyst team" },
            { num: "05", title: "Data Typing", desc: "Structured into relevant data types: firmographic, technographic, contact" },
            { num: "06", title: "Compliance Review", desc: "GDPR and CCPA alignment checks across all record types" },
            { num: "07", title: "45-Day Refresh", desc: "Periodic re-validation ensures data stays current and actionable" },
            { num: "08", title: "Enrichment & Delivery", desc: "Delivered as custom-filtered lists or appended to your existing CRM" }
          ].map(item => (
            <div key={item.num} className="bg-gradient-to-br from-[#c0ff33]/20 to-white p-6 rounded-2xl border border-slate-100 space-y-3 hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">

              <span className="text-sm font-bold text-[#004ab0]">{item.num}</span>
              <h3 className="text-lg font-bold text-slate-950">{item.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Methodology */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="p-6 bg-white rounded-2xl border border-slate-100 text-center">
              <span className="text-3xl font-black text-[#004ab0]">17+</span>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Verified data source channels</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 text-center">
              <span className="text-3xl font-black text-emerald-600">45d</span>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Data refresh cycle</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 text-center">
              <span className="text-3xl font-black text-orange-600">3-way</span>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Validation: phone, email, social</p>
            </div>
            <div className="p-6 bg-white rounded-2xl border border-slate-100 text-center">
              <span className="text-3xl font-black text-violet-600">8-Stage</span>
              <p className="text-xs font-bold text-slate-500 uppercase tracking-wider mt-1">Quality assurance pipeline</p>
            </div>
            <div className="col-span-1 sm:col-span-2 p-6 bg-white rounded-2xl border border-slate-100">
              <h3 className="text-lg font-bold text-slate-950">Mass & Niche Market Coverage</h3>
              <p className="text-xs text-slate-600 mt-1">Filter by industry, revenue, IT budget, company size, geography, and specific technology</p>
            </div>
          </div>
          
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Data Methodology
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-950">
              Research-Grade Accuracy at Scale
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We take a meticulous, in-house approach that no automated scraper can replicate. Here's what sets our data apart.
            </p>
            <div className="space-y-4 text-slate-600 text-sm leading-relaxed">
              <p>
                Our dedicated team of research analysts collaborates with data quality experts to ensure the accuracy and timeliness of every record. We don't rely solely on web scraping — we go further with <span className="font-bold text-slate-950">direct human verification</span>.
              </p>
              <p>
                Preliminary data gathered from 17+ channels undergoes a rigorous multi-stage QA process. Every technology adoption claim is validated via direct phone outreach, email survey response, and social confirmation — not just inferred from job listings.
              </p>
              <p>
                Whether you need <span className="font-bold text-slate-950">broad market coverage</span> analyzing thousands of companies using a particular platform, or <span className="font-bold text-slate-950">precision-targeted segments</span> filtered by niche industry and decision-maker role — our consultants build the right dataset for your GTM motion.
              </p>
            </div>
            <div className="flex gap-2 pt-2">
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600">
                <Check size={12} /> GDPR Aligned
              </div>
              <div className="inline-flex items-center gap-1.5 rounded-full bg-emerald-50 border border-emerald-100 px-3 py-1 text-xs font-bold text-emerald-600">
                <Check size={12} /> CCPA Compliant
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Case Studies */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="text-center space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Case Studies
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950 leading-none">
              Real Results for <br /> Technology Companies
            </h2>
            <p className="text-xl text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              See how B2B technology companies have used Revnity's technographic intelligence to accelerate pipeline and reduce wasted spend.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 uppercase tracking-wider">
                  ERP Software
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  ERP Provider Identifies 12,000 Competitor Accounts Across LATAM
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A mid-market ERP vendor needed to expand in Latin America. Revnity mapped competitor SAP and Oracle users across the region, filtered by company size and IT budget, enabling a targeted displacement campaign.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                <span className="text-4xl font-black text-[#004ab0]">3.2x</span>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  improvement in outreach response rate vs. generic lists
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 uppercase tracking-wider">
                  HRMS / HCM
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  HRMS Vendor Builds a Pipeline of 8,400 Qualified Prospects in 30 Days
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  An HRMS company needed to reach companies still running legacy HR platforms. Revnity identified users of outdated HCM systems, pre-qualified by Budget, Authority, and Need signals — delivering sales-ready accounts.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                <span className="text-4xl font-black text-emerald-600">41%</span>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  reduction in cost per qualified lead
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white border border-slate-100 rounded-3xl p-8 flex flex-col justify-between shadow-sm hover:shadow-md transition-shadow">
              <div className="space-y-4">
                <div className="inline-block rounded-full bg-slate-100 px-3 py-1 text-xs font-bold text-slate-600 uppercase tracking-wider">
                  Cybersecurity
                </div>
                <h3 className="text-xl font-bold text-slate-950">
                  Security Firm Doubles ABM Efficiency by Filtering Out Incompatible Accounts
                </h3>
                <p className="text-slate-600 text-sm leading-relaxed">
                  A network security vendor was burning ABM budget on companies running incompatible infrastructure. Revnity's technographic filtering eliminated 60% of non-target spend and concentrated resources on ready buyers.
                </p>
              </div>
              <div className="pt-6 border-t border-slate-100 mt-6 flex items-center gap-3">
                <span className="text-4xl font-black text-orange-600">2X</span>
                <p className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                  ABM pipeline efficiency in one quarter
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              FAQ
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              Common Questions
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Q1 */}
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-3 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="flex items-center gap-3">
                <span className="text-[#004ab0] font-bold text-sm">01</span>
                <h3 className="text-lg font-bold text-slate-950">How is technographic data collected and verified?</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                We source from 17+ channels including digital signals, job postings, and social data. Every record is then validated through direct phone outreach, email surveys, and social confirmation by our in-house analyst team — not just automated scraping.
              </p>
            </div>

            {/* Q2 */}
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-3 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="flex items-center gap-3">
                <span className="text-[#004ab0] font-bold text-sm">02</span>
                <h3 className="text-lg font-bold text-slate-950">Why does this matter more than a standard lead list?</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                A standard list tells you who a company is (firmographics). Our data tells you how they operate — their Tech DNA. Knowing their stack lets your reps predict needs, personalize pitches, and have consultative conversations from the very first touch.
              </p>
            </div>

            {/* Q3 */}
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-3 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="flex items-center gap-3">
                <span className="text-[#004ab0] font-bold text-sm">03</span>
                <h3 className="text-lg font-bold text-slate-950">How often is the data refreshed?</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                We conduct periodic updates every 45 days across our full dataset. Technology adoption changes — companies migrate, expand, and cancel tools regularly. Our refresh cycle ensures you're acting on current signals, not stale records.
              </p>
            </div>

            {/* Q4 */}
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-3 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="flex items-center gap-3">
                <span className="text-[#004ab0] font-bold text-sm">04</span>
                <h3 className="text-lg font-bold text-slate-950">Can this data be appended to my existing CRM?</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                Yes. Our Stack Data Append service lets you enrich existing accounts and leads in your CRM with technographic attributes — enabling dramatically better lead scoring, segmentation, and sales prioritization without rebuilding your database.
              </p>
            </div>

            {/* Q5 */}
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-3 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="flex items-center gap-3">
                <span className="text-[#004ab0] font-bold text-sm">05</span>
                <h3 className="text-lg font-bold text-slate-950">What filters are available for targeting?</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                Filter by specific technology, vendor, software category, industry vertical, company size, revenue range, IT budget, geography, and decision-maker job title. Our consultants help you combine these filters to build the most precise possible dataset for your GTM motion.
              </p>
            </div>

            {/* Q6 */}
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-3 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="flex items-center gap-3">
                <span className="text-[#004ab0] font-bold text-sm">06</span>
                <h3 className="text-lg font-bold text-slate-950">Is your data GDPR and CCPA compliant?</h3>
              </div>
              <p className="text-slate-600 text-sm leading-relaxed pl-7">
                Yes. All data collection, processing, and delivery is aligned with GDPR and CCPA requirements. We maintain full compliance documentation and update our practices as regulations evolve — so you can use our data with confidence.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Form Section */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
          <div className="lg:col-span-5 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Get Started
            </div>
            <h2 className="text-4xl md:text-5xl font-black uppercase tracking-tighter text-slate-950 leading-none">
              Request a Free <br /> Sample Dataset
            </h2>
            <p className="text-lg text-slate-600 font-medium leading-relaxed">
              Tell us your target technology and ideal customer profile — and we'll deliver a sample of the exact technographic data we can provide for your market.
            </p>
            
            <div className="space-y-4 pt-4">
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-[#004ab0]/10 flex items-center justify-center text-[#004ab0]">
                  <Check size={12} />
                </div>
                <span className="text-sm font-medium text-slate-700">Receive sample within 24 business hours</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-600">
                  <Check size={12} />
                </div>
                <span className="text-sm font-medium text-slate-700">No commitment required to view sample</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-orange-50 flex items-center justify-center text-orange-600">
                  <Check size={12} />
                </div>
                <span className="text-sm font-medium text-slate-700">Free consultation call with a data specialist</span>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-5 h-5 rounded-full bg-violet-50 flex items-center justify-center text-violet-600">
                  <Check size={12} />
                </div>
                <span className="text-sm font-medium text-slate-700">Custom-filtered for your ICP and target tech stack</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-7 bg-white border border-slate-100 rounded-3xl p-8 space-y-6 shadow-sm">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">First Name</label>
                <input type="text" placeholder="Sarah" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-[#004ab0]/100 transition-colors" />
              </div>
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Last Name</label>
                <input type="text" placeholder="Johnson" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-[#004ab0]/100 transition-colors" />
              </div>
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Work Email</label>
              <input type="email" placeholder="sarah@company.com" className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-[#004ab0]/100 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Company Name</label>
              <input type="text" placeholder="Acme Software Inc." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-[#004ab0]/100 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Target Technology</label>
              <input type="text" placeholder="e.g. Salesforce, SAP, AWS, HubSpot.." className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-[#004ab0]/100 transition-colors" />
            </div>

            <div className="space-y-2">
              <label className="text-xs font-bold text-slate-500 uppercase tracking-wider">Primary Use Case</label>
              <div className="relative">
                <select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-sm text-slate-950 focus:outline-none focus:border-[#004ab0]/100 transition-colors appearance-none">
                  <option>Select a use case..</option>
                  <option>ABM & Sales Outreach</option>
                  <option>Competitor Displacement</option>
                  <option>TAM Expansion</option>
                </select>
                <div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-slate-400">
                  <ChevronDown size={16} />
                </div>
              </div>
            </div>

            <button className="w-full bg-[#004ab0] hover:bg-[#003a8c] text-white font-bold uppercase tracking-wider text-sm py-4 rounded-xl transition-colors flex items-center justify-center gap-2">
              Request Free Sample <ArrowRight size={16} />
            </button>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
