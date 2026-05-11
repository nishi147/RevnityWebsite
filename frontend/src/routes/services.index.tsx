import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { 
  Check, 
  ArrowRight, 
  Database, 
  Layers, 
  Zap, 
  Search, 
  ShieldCheck, 
  Globe, 
  CheckCircle2, 
  Lock, 
  RefreshCw,
  Cpu,
  Rocket,
  Shield,
  Laptop,
  Server,
  Radio,
  Building2,
  Mail,
  User,
  BarChart,
  Heart,
  Filter,
  Wrench,
  Calendar,
  Clock,
  File,
  Settings,
  Package,
  Target,
  Sparkles,
  Swords,
  Users
} from "lucide-react";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/services/")({
  component: ServicesIndex,
});

function ServicesIndex() {
  const services = [
    { title: "Technographic Intelligence", desc: "Access the live customer base of 45,000+ technologies — software, cloud, and hardware. Know exactly who uses what, and outmaneuver competitors at the right moment.", tags: ["45,000+ technology installs tracked", "Competitor displacement insights", "Real-time install/uninstall signals", "CRM-ready CSV exports"], highlighted: true, to: "/services/technographic-intelligence" },
    { title: "Title Based Database", desc: "Filter your ICP to exact personas by job title, seniority, and department. Engage decision-makers directly — no noise, no gatekeepers.", tags: ["200+ distinct job title categories", "Seniority and department filters", "Verified direct email & LinkedIn", "10M+ title-matched contacts"], to: "/services/title-based-database" },
    { title: "Channel Partner Insights", desc: "Empower your channel strategy with in-depth partner profiles. Tailored MSP, VAR, and reseller data to accelerate recruitment and long-term partner success.", tags: ["Ideal Channel Partner profiling", "MSP, VAR & reseller segmentation", "Geographic partner mapping", "Onboarding-ready data exports"], to: "/services/channel-partner-insights" },
    { title: "Stack Data Append", desc: "Enrich your existing CRM or target account lists with live tech stack data. Understand the tools your MHA's run — and position your product at the right moment.", tags: ["Append to existing CRM data", "Identify tech stack gaps", "Trigger-based outreach signals", "Compatible with Salesforce, HubSpot"], to: "/services/stack-data-append" },
    { title: "Industry Database", desc: "AI-driven SIC & NAICS segmentation to map accurate vertical insights. Prioritize the right markets at the right time and power your pipeline with precision.", tags: ["SIC & NAICS code mapping", "AI-driven vertical classification", "Market sizing & TAM analysis", "Segment-specific personas"], to: "/services/industry-database" },
    { title: "Data Appending & Discovery", desc: "Unlock deeper account penetration by appending updated decision-maker data to your existing lists. Smarter campaigns, broader market reach, less manual research.", tags: ["Multi-contact discovery per account", "Buying committee mapping", "Email + mobile number append", "Ideal for ABM campaigns"], to: "/services/data-appending-and-discovery" }
  ];

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f4f8] to-white overflow-hidden relative">
        {/* Grid Pattern Simulation */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0]">
              <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
              210M+ Verified B2B Contacts Globally
            </div>
            <h1 className="text-3xl sm:text-4xl md:text-6xl font-bold text-[#0f172a] leading-tight">
              Precision Data. <span className="text-[#004ab0]">Pipeline-Ready</span> Intelligence.
            </h1>
            <p className="text-lg text-slate-600 max-w-xl">
              Six specialized data services engineered for B2B SaaS teams — from technographic targeting to title-based outreach. Zero noise. Maximum pipeline.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="px-8 py-4 bg-[#c0ff33] text-slate-900 font-bold rounded-xl hover:bg-[#a8e62c] transition-colors shadow-lg shadow-[#c0ff33]/20">
                Request Free Sample
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                Browse Services →
              </button>
            </div>
            
            {/* Stats below hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {[
                { label: "Verified contacts", val: "210M+" },
                { label: "Deliverability", val: "95%" },
                { label: "Countries covered", val: "190+" },
                { label: "Technologies tracked", val: "45K+" }
              ].map((stat, i) => (
                <div key={i}>
                  <div className="text-3xl font-bold text-[#004ab0]">{stat.val}</div>
                  <div className="text-xs text-slate-500">{stat.label}</div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column (Card) */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative"
          >
            {/* Main Card */}
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <Target size={20} className="text-[#004ab0]" />
                <div>
                  <div className="text-sm font-bold text-[#0f172a]">Persona Targeting Engine</div>
                  <div className="text-xs text-slate-400">Matching against 210M+ contacts...</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  "Chief Information Officer",
                  "VP of Sales",
                  "Director of Marketing",
                  "VP of Engineering"
                ].map((role, index) => (
                  <div key={index} className="bg-[#f8faff] p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                    <span className="text-sm font-semibold text-[#0f172a]">{role}</span>
                    <span className="text-xs font-bold text-[#137333] bg-[#e6f4ea] px-2 py-1 rounded-full flex items-center gap-1">
                      <Check size={12} /> Match
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badges */}
            <div className="absolute -top-6 -right-6 bg-white p-4 rounded-xl shadow-lg border border-slate-100 text-center">
              <div className="text-2xl font-bold text-[#004ab0]">95%</div>
              <div className="text-xs text-slate-500">Deliverability<br />Guarantee</div>
            </div>
            <div className="absolute -bottom-6 -left-6 bg-[#0f172a] text-white p-4 rounded-xl flex items-center gap-3 shadow-lg">
              <Lock className="text-[#c0ff33]" size={20} />
              <div>
                <div className="text-sm font-bold">GDPR</div>
                <div className="text-xs text-white/50">Fully Compliant</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            OUR SERVICES
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Everything your pipeline needs — in one place
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Six precision data solutions built for B2B SaaS revenue teams. Pick the ones that fit your GTM motion or stack them all.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div 
              key={index} 
              className={`p-8 rounded-2xl border transition-all flex flex-col justify-between ${
                service.highlighted 
                  ? "bg-[#004ab0] text-white border-[#004ab0] shadow-xl shadow-[#004ab0]/10" 
                  : "bg-white text-slate-900 border-slate-100 hover:shadow-md"
              }`}
            >
              <div>
                {service.highlighted && (
                  <span className="text-xs font-bold text-[#c0ff33] bg-white/10 px-3 py-1 rounded-full mb-4 inline-block">
                    MOST POPULAR
                  </span>
                )}
                <h3 className={`text-xl font-bold mb-3 ${service.highlighted ? 'text-white' : 'text-[#0f172a]'}`}>
                  {service.title}
                </h3>
                <p className={`text-sm mb-6 ${service.highlighted ? 'text-white/80' : 'text-slate-500'}`}>
                  {service.desc}
                </p>
                <ul className="space-y-2 mb-6">
                  {service.tags.map((tag, i) => (
                    <li key={i} className="flex gap-2 items-center text-xs">
                      <Check size={14} className={service.highlighted ? "text-[#c0ff33]" : "text-[#004ab0]"} />
                      <span className={service.highlighted ? "text-white/70" : "text-slate-600"}>{tag}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <Link 
                to={service.to} 
                className={`text-sm font-bold flex items-center gap-2 ${
                  service.highlighted ? 'text-[#c0ff33] hover:text-white' : 'text-[#004ab0] hover:text-[#003d94]'
                }`}
              >
                Learn more <ArrowRight size={14} />
              </Link>
            </div>
          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            From ICP definition to pipeline in four steps
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our end-to-end process ensures every contact you receive is verified, enriched, and ready to fuel your outreach.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {[
              { num: "01", title: "Define your Ideal Customer Profile", desc: "Tell us your target industries, company size, tech stack, geographies, and personas. The sharper your ICP, the better your results." },
              { num: "02", title: "We build and verify your list", desc: "Our engine cross-references 210M+ contacts, runs real-time email verification, and filters out bounces and outdated records." },
              { num: "03", title: "Enrich with technographic signals", desc: "Optionally layer in tech stack data, competitor install info, and buying committee contacts for maximum account penetration." },
              { num: "04", title: "Export and activate your pipeline", desc: "Receive your data as a clean CSV or direct CRM import. Ready for sequences, ABM, or cold outreach — in hours, not weeks." }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="text-sm font-bold text-[#004ab0] shrink-0 mt-1">{step.num}</div>
                <div>
                  <h3 className="text-lg font-bold text-[#0f172a] mb-1">{step.title}</h3>
                  <p className="text-sm text-slate-500">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Column (Card) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
            <div className="text-xs font-bold text-slate-400 mb-4">Pipeline Health Dashboard</div>
            <div className="space-y-4">
              {[
                { label: "ICP Match Rate", val: 94, color: "#004ab0" },
                { label: "Email Deliverability", val: 95, color: "#c0ff33" },
                { label: "Technographic Coverage", val: 87, color: "#004ab0" },
                { label: "Global Coverage", val: 190, color: "#004ab0", max: 200 }
              ].map((row, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">{row.label}</span>
                    <span className="text-[#0f172a]">{row.val}{row.max ? '' : '%'}</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${(row.val / (row.max || 100)) * 100}%`, backgroundColor: row.color }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex justify-between items-center mt-6 pt-6 border-t border-slate-100 text-xs text-slate-500">
              <span>Last refreshed: Just now</span>
              <span className="text-[#137333] font-bold">✓ GDPR Compliant</span>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            BUILT FOR YOUR TEAM
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            The right data for every revenue motion
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Whether you're doing cold outreach, ABM, or competitive displacement — Revnity has a data solution that fits.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Cold Outbound & SDR Teams", desc: "Arm your SDRs with verified, title-matched contacts and live tech signals to drive more booked meetings in less time.", icon: <Rocket size={20} /> },
            { title: "Account-Based Marketing", desc: "Build hyper-targeted account lists with full buying-committee coverage and tech stack context for precision ABM plays.", icon: <Target size={20} /> },
            { title: "Competitive Displacement", desc: "Identify companies using competitor tools and reach them with a winning message — before your rivals do.", icon: <Swords size={20} /> },
            { title: "Channel & Partner Recruitment", desc: "Scale your indirect sales motion by finding and qualifying ideal MSPs, VARs, and resellers across every geography.", icon: <Users size={20} /> },
            { title: "Market Expansion & TAM Analysis", desc: "Enter new locales or goes with confidence using AI-driven industry data, SIC/NAICS mapping, and TAM discovery.", icon: <Globe size={20} /> },
            { title: "CRM Enrichment & Hygiene", desc: "Keep your CRM healthy and powerful with fresh contact data, updated tech stacks, and new stakeholders appended automatically.", icon: <Database size={20} /> }
          ].map((item, index) => (
            <div key={index} className="bg-[#f8faff] p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#004ab0] mb-6 shadow-sm">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Data Quality Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
              TRUST & COMPLIANCE
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Data you can trust — and defend in front of legal
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Every contact in our database is sourced, verified, and maintained under strict global compliance standards. Your outreach is safe — and credible.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { title: "GDPR Compliant", desc: "All European contact data is collected and processed in full accordance with GDPR regulations.", icon: <Lock size={16} /> },
                { title: "CCPA Aligned", desc: "California consumer privacy requirements are built into our data collection and management processes.", icon: <Shield size={16} /> },
                { title: "95% Deliverability", desc: "Every email is triple-verified before delivery. If we miss the mark, we replace contacts — guaranteed.", icon: <CheckCircle2 size={16} /> },
                { title: "Continuously Refreshed", desc: "Our data is updated in real time, so you always reach contacts who are currently in role and active.", icon: <RefreshCw size={16} /> }
              ].map((item, index) => (
                <div key={index} className="bg-white p-4 rounded-xl border border-slate-100 flex gap-3">
                  <div className="text-[#004ab0] mt-1">{item.icon}</div>
                  <div>
                    <h3 className="text-sm font-bold text-[#0f172a] mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (Card) */}
          <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
            <div className="text-xs font-bold text-slate-400 mb-4">Data Quality Breakdown</div>
            <div className="space-y-4 mb-6">
              {[
                { label: "Emails Verified", val: 96 },
                { label: "Currently in Role", val: 91 },
                { label: "Mobile Number", val: 72 },
                { label: "LinkedIn Verified", val: 93 },
                { label: "Tech Stack Data", val: 87 }
              ].map((row, index) => (
                <div key={index} className="space-y-1">
                  <div className="flex justify-between text-xs font-semibold">
                    <span className="text-slate-500">{row.label}</span>
                    <span className="text-[#0f172a]">{row.val}%</span>
                  </div>
                  <div className="w-full h-1.5 bg-slate-100 rounded-full">
                    <div className="h-full rounded-full" style={{ width: `${row.val}%`, backgroundColor: "#004ab0" }}></div>
                  </div>
                </div>
              ))}
            </div>
            <div className="text-xs text-slate-400">
              Data selection methodology:<br />
              Sourced from public business registries, professional networks, event databases, and partner integrations — refreshed continuously.
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
