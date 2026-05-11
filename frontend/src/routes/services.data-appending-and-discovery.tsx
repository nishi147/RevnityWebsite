import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { useState } from "react";
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
  Filter
} from "lucide-react";

export const Route = createFileRoute("/services/data-appending-and-discovery")({
  component: DataAppendingAndDiscovery,
});

function DataAppendingAndDiscovery() {
  const [selectedFilters, setSelectedFilters] = useState<string[]>(["Industry Vertical", "Geography / Region"]);

  const toggleFilter = (filter: string) => {
    if (selectedFilters.includes(filter)) {
      setSelectedFilters(selectedFilters.filter(f => f !== filter));
    } else {
      setSelectedFilters([...selectedFilters, filter]);
    }
  };

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f4f8] to-white overflow-hidden relative">
        {/* Grid Pattern Simulation */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center relative z-10 w-full overflow-hidden">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 w-full max-w-full"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-xs font-semibold text-[#004ab0]">
              <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
              B2B DATA INTELLIGENCE
            </div>
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight break-words">
              Revive Your <span className="text-[#004ab0]">Dead</span> Target Account Lists
            </h1>
            <p className="text-xs sm:text-base text-slate-600 max-w-xl break-words">
              Turn stale, incomplete MHA lists into high-precision, sales-ready account intelligence. AI-verified contact enrichment, tech stack insights, and decision-maker mapping — all GDPR & CCPA compliant.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="px-5 py-3 sm:px-8 sm:py-4 bg-[#c0ff33] text-slate-900 font-bold rounded-xl hover:bg-[#a8e62c] transition-colors shadow-lg shadow-[#c0ff33]/20 text-xs sm:text-sm">
                Request Free Sample
              </button>
              <button className="px-5 py-3 sm:px-8 sm:py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-xs sm:text-sm">
                See How It Works →
              </button>
            </div>

            
            {/* Stats below hero */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 pt-8 border-t border-slate-100">
              {[
                { label: "Data Accuracy", val: "95%" },
                { label: "Turnaround Time", val: "48h" },
                { label: "Clients Served", val: "500+" },
                { label: "Contacts Verified", val: "12M+" }
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
              <div className="flex items-center justify-between mb-6">
                <div>
                  <div className="text-sm font-bold text-[#0f172a]">Account List Health Score</div>
                  <div className="text-xs text-slate-400">After Append</div>
                </div>
                <span className="text-xs font-bold text-white bg-[#137333] px-3 py-1 rounded-full">
                  • After Append
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Contact Information", val: 94, color: "#004ab0" },
                  { label: "Tech Stack Coverage", val: 80, color: "#c0ff33" },
                  { label: "Decision Maker Mapping", val: 91, color: "#004ab0" },
                  { label: "Revenue & Employee Data", val: 97, color: "#004ab0" }
                ].map((row, index) => (
                  <div key={index} className="space-y-1">
                    <div className="flex justify-between text-xs font-semibold">
                      <span className="text-slate-500">{row.label}</span>
                      <span className="text-[#0f172a]">{row.val}%</span>
                    </div>
                    <div className="w-full h-1.5 bg-slate-100 rounded-full">
                      <div className="h-full rounded-full" style={{ width: `${row.val}%`, backgroundColor: row.color }}></div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Grid of stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6 pt-6 border-t border-slate-100">
                {[
                  { label: "Verified Emails", val: "12,450" },
                  { label: "Companies Enriched", val: "3,200+" },
                  { label: "Decision Makers Found", val: "8,750" },
                  { label: "Tech Stack Accuracy", val: "96%" }
                ].map((stat, i) => (
                  <div key={i} className="bg-[#f8faff] p-4 rounded-xl border border-slate-100">
                    <div className="text-lg font-bold text-[#004ab0]">{stat.val}</div>
                    <div className="text-xs text-slate-500">{stat.label}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -right-6 bg-[#0f172a] text-white p-4 rounded-xl flex items-center gap-3 shadow-lg">
              <ShieldCheck className="text-[#c0ff33]" size={20} />
              <div>
                <div className="text-sm font-bold">GDPR & CCPA Compliant</div>
                <div className="text-xs text-white/50">Full legal compliance</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Why Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            THE PROBLEM
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Why Your MHA Lists Are Failing You
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Must-Have Account lists become obsolete faster than teams can action them. Market shifts, leadership changes, and mergers silently erode your pipeline.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Column (Cards) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "Defunct & Acquired Companies", desc: "Businesses that merged, rebranded, or shut down — still sitting in your outreach list.", icon: <Building2 size={20} /> },
              { title: "Incomplete Contact Information", desc: "Missing emails, phone numbers, and job titles make it impossible to reach the right person.", icon: <Mail size={20} /> },
              { title: "Zero Tech Stack Visibility", desc: "No data on what tools your prospects use — leaving you unable to position your solution effectively.", icon: <Layers size={20} /> },
              { title: "Poor Segmentation & Missing Metrics", desc: "No revenue estimates, employee counts, or industry classification for proper targeting.", icon: <BarChart size={20} /> }
            ].map((item, index) => (
              <div key={index} className="bg-[#f8faff] p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] mb-4 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Right Column (Comparison Card) */}
          <div className="bg-[#f8faff] p-8 rounded-3xl border border-slate-100">
            <div className="text-sm font-bold text-slate-400 mb-6">Your Current Account List</div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#0f172a]">Synapse Corp</div>
                  <div className="text-xs text-slate-500">Last updated: 14 months ago • No email</div>
                </div>
                <span className="text-xs font-bold text-[#b06000] bg-[#fef7e0] px-2 py-1 rounded-full">Stale</span>
              </div>
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#0f172a]">Vexor Technologies</div>
                  <div className="text-xs text-slate-500">Acquired by DataCore Inc. • Contact unknown</div>
                </div>
                <span className="text-xs font-bold text-[#c5221f] bg-[#fce8e6] px-2 py-1 rounded-full">Defunct</span>
              </div>
            </div>
            
            <div className="text-center text-slate-400 my-4">↓ Revnity Enrichment Engine ↓</div>

            <div className="text-sm font-bold text-slate-400 mb-4">After Revnity Append</div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-[#137333] flex items-center justify-between">
                <div>
                  <div className="text-sm font-bold text-[#0f172a]">Synapse Corp — DataCore Inc.</div>
                  <div className="text-xs text-slate-500">VP Sales: j.kim@datacore.io • HubSpot, Salesforce</div>
                </div>
                <span className="text-xs font-bold text-[#137333] bg-[#e6f4ea] px-2 py-1 rounded-full">✓ Updated</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="py-24 px-6 bg-gradient-to-br from-[#0096c7] to-[#03045e] text-white relative overflow-hidden">
        {/* Glows */}
        <div className="absolute right-0 top-0 h-[300px] w-[300px] rounded-full bg-[#c0ff33]/20 blur-[100px]" />
        
        <div className="max-w-7xl mx-auto text-center mb-16 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-sm font-semibold text-[#c0ff33] mb-4">
            WHAT WE APPEND
          </div>
          <h2 className="text-4xl font-bold text-white mb-4">
            Complete Account Intelligence, End-to-End
          </h2>
          <p className="text-lg text-white/70 max-w-3xl mx-auto">
            Everything your sales and marketing team needs to activate a target account with confidence.
          </p>
        </div>




        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Company Data Enrichment", desc: "Fill in missing firmographic details — HQ address, subsidiary relationships, founding year, and company description — for every account in your list.", badges: ["Firmographics", "HQ Data", "Subsidiaries"], icon: <Building2 size={24} /> },
            { title: "Contact Information Update", desc: "Add and verify direct emails, LinkedIn profiles, phone numbers, and job titles for key contacts at every target account. Pre-scrubbed and bounce-tested.", badges: ["Verified Emails", "Direct Dials", "LinkedIn"], icon: <Mail size={24} /> },
            { title: "Technology Stack Insights", desc: "Discover which CRM, marketing, ERP, or cloud tools each account uses. Know your competitive landscape before the first outreach.", badges: ["Tech Stack", "CRM Usage", "Cloud Platforms"], icon: <Layers size={24} /> },
            { title: "Target Persona Expansion", desc: "Map every key decision maker, influencer, and champion within your target accounts. Identify new stakeholders you didn't know existed.", badges: ["Decision Makers", "Org Chart", "Influencers"], icon: <User size={24} /> },
            { title: "Business Metrics Update", desc: "Append current revenue bands, employee headcount, growth signals, and industry verticals so your segmentation always reflects today's reality.", badges: ["Revenue Data", "Headcount", "Growth Signals"], icon: <BarChart size={24} /> },
            { title: "ICP & TAM Discovery", desc: "Use SIC/NAICS filtering, intent signals, and keyword-specific searches to uncover net-new accounts that perfectly match your ideal customer profile.", badges: ["ICP Matching", "TAM Analysis", "Intent Data"], icon: <Search size={24} /> }
          ].map((item, index) => (
            <motion.div 
              key={index} 
              className="bg-white/5 p-8 rounded-2xl border border-white/10 hover:shadow-md transition-shadow flex flex-col justify-between relative z-10 backdrop-blur-sm"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <div>
                <div className="w-12 h-12 bg-[#c0ff33] rounded-xl flex items-center justify-center text-[#004ab0] mb-6">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-white/70 mb-6">{item.desc}</p>
              </div>
              <div className="flex flex-wrap gap-2">
                {item.badges.map((badge, i) => (
                  <span key={i} className="text-xs font-semibold text-[#c0ff33] bg-white/10 px-3 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>




          ))}
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            From Stale List to Sales-Ready Pipeline in 48 Hours
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            A structured, AI-assisted workflow that guarantees accuracy at every step.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-start gap-8 relative">
            {/* Line connecting steps (hidden on mobile) */}
            <div className="hidden md:block absolute top-10 left-0 right-0 h-0.5 bg-slate-100 -z-10"></div>
            
            {[
              { step: "#1", title: "List Submission", desc: "Share your existing MHA or target account list in any format — CSV, Excel, or CRM export.", icon: <Database size={20} /> },
              { step: "#2", title: "Audit & Analysis", desc: "We audit every record — flagging defunct companies, outdated contacts, and missing fields.", icon: <Search size={20} /> },
              { step: "#3", title: "AI Enrichment", desc: "Our AI engine cross-references 50+ data sources to fill and verify every missing field.", icon: <Cpu size={20} /> },
              { step: "#4", title: "Human Validation", desc: "Analysts verify AI outputs — especially decision makers, emails, and tech stack data.", icon: <CheckCircle2 size={20} /> },
              { step: "#5", title: "Delivery", desc: "Receive your enriched list within 48 hours, ready to import into any CRM or marketing platform.", icon: <Rocket size={20} /> }
            ].map((step, index) => (
              <div key={index} className="flex-1 flex flex-col items-center text-center">
                <div className="w-20 h-20 bg-white border-2 border-slate-100 rounded-full flex items-center justify-center text-[#004ab0] mb-4 shadow-sm hover:border-[#c0ff33] transition-colors relative">
                  {step.icon}
                  <span className="absolute -top-2 -right-2 bg-[#004ab0] text-white text-xs font-bold w-6 h-6 rounded-full flex items-center justify-center">{step.step}</span>
                </div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 max-w-[150px]">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ICP Discovery Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            ICP DISCOVERY
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Find Accounts That Match Your ICP Exactly
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Go beyond list cleaning — discover net-new accounts using powerful filter combinations tailored to your ideal customer profile.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-start">
          {/* Left Column (Filters) */}
          <div className="space-y-6">
            <h3 className="text-xl font-bold text-[#0f172a]">Select your targeting filters:</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                "Industry Vertical", "Geography / Region", 
                "Revenue Range", "Company Size", 
                "Technology Usage", "SIC / NAICS Code", 
                "Intent Signals", "Job Title / Persona"
              ].map((filter, index) => (
                <button
                  key={index}
                  onClick={() => toggleFilter(filter)}
                  className={`p-4 rounded-xl border text-sm font-semibold transition-colors flex items-center gap-3 ${
                    selectedFilters.includes(filter)
                      ? "bg-[#004ab0] text-white border-[#004ab0]"
                      : "bg-white text-slate-600 border-slate-200 hover:bg-slate-50"
                  }`}
                >
                  <Filter size={16} />
                  {filter}
                </button>
              ))}
            </div>
            <div className="bg-[#e8f0fe] p-4 rounded-xl text-sm text-[#004ab0] flex gap-3 items-start">
              <Zap size={16} className="shrink-0 mt-0.5" />
              <span>Tip: Combining tech stack + industry + revenue filters typically yields a 3-5x improvement in outreach response rates.</span>
            </div>
          </div>

          {/* Right Column (Results) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="flex justify-between items-center mb-6">
              <div className="text-sm font-bold text-[#0f172a]">Matching Accounts</div>
              <span className="text-xs font-bold text-white bg-[#004ab0] px-3 py-1 rounded-full">2,847 found</span>
            </div>
            
            <div className="space-y-4">
              {[
                { name: "SaaSFlow Inc.", desc: "HubSpot • Salesforce • $15M revenue • 200 emp", role: "VP Sales ✓" },
                { name: "CloudPeak Solutions", desc: "Marketo • Zendesk • $20M revenue • 210 emp", role: "CIO ✓" },
                { name: "DataXcel Corp", desc: "SAP • Tableau • $10M revenue • 120 emp", role: "CMO ✓" },
                { name: "NexaMetrics Ltd", desc: "Pipedrive • Intercom • $8M revenue • 120 emp", role: "CMO ✓" }
              ].map((account, index) => (
                <div key={index} className="flex justify-between items-center py-3 border-b border-slate-100 last:border-0">
                  <div>
                    <div className="text-sm font-bold text-[#0f172a]">{account.name}</div>
                    <div className="text-xs text-slate-500">{account.desc}</div>
                  </div>
                  <span className="text-xs font-bold text-[#137333] bg-[#e6f4ea] px-2 py-1 rounded-full">{account.role}</span>
                </div>
              ))}
            </div>
            
            <button className="w-full mt-6 py-3 bg-[#004ab0] text-white font-bold rounded-xl hover:bg-[#003d94] transition-colors">
              Request This Dataset →
            </button>
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-[#0f172a] text-white p-12 rounded-[3rem] text-center relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "linear-gradient(#fff 1px, transparent 1px), linear-gradient(90deg, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          
          <div className="relative z-10">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#c0ff33] mb-4">
              COMPLIANCE & TRUST
            </div>
            <h2 className="text-4xl font-bold mb-4">
              Built for Enterprise Compliance
            </h2>
            <p className="text-lg text-white/70 max-w-2xl mx-auto mb-12">
              Every record we deliver meets the highest global data privacy standards so your team can prospect without legal risk.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                { title: "GDPR Aligned", desc: "Full EU compliance on all European contacts", icon: <Shield size={20} /> },
                { title: "CCPA Compliant", desc: "California Consumer Privacy Act adherent", icon: <Lock size={20} /> },
                { title: "AI-Verified", desc: "Multi-source cross-verification on every record", icon: <CheckCircle2 size={20} /> },
                { title: "Live Refresh", desc: "Continuous updates to prevent data decay", icon: <RefreshCw size={20} /> }
              ].map((item, index) => (
                <div key={index} className="bg-white/5 p-6 rounded-2xl border border-white/10 text-left">
                  <div className="text-[#c0ff33] mb-4">{item.icon}</div>
                  <h3 className="text-base font-bold mb-2">{item.title}</h3>
                  <p className="text-xs text-white/50">{item.desc}</p>
                </div>
              ))}
            </div>
            
            <div className="flex flex-wrap justify-center gap-6 mt-12 text-sm text-white/70">
              {["No third-party data resale", "Opt-out list management", "Data retention policies", "Secure file transfer", "NDA on all engagements"].map((item, i) => (
                <div key={i} className="flex items-center gap-2">
                  <Check size={16} className="text-[#c0ff33]" />
                  {item}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            INDUSTRIES WE SERVE
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Vertical Expertise Across B2B Sectors
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We specialize in data for technology-focused B2B companies with complex sales cycles and multi-stakeholder decisions.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { title: "Software & SaaS", desc: "Technographics, competitive intelligence, and decision-maker data for vertical SaaS companies targeting enterprise accounts.", icon: <Laptop size={24} /> },
            { title: "MSPs & IT Consulting", desc: "Channel partner profiles, MSP database, and prospect data for IT consulting firms targeting specific vendor ecosystems.", icon: <Server size={24} /> },
            { title: "IT Hardware & Infrastructure", desc: "Server, storage, and networking companies get region-specific technographic data and channel development insights.", icon: <Database size={24} /> },
            { title: "Telecommunications", desc: "CCaaS, UCaaS, VoIP, and PBX companies leverage telecom-specific technographics for high-engagement campaigns.", icon: <Radio size={24} /> },
            { title: "Fintech & Financial Services", desc: "Accurate persona mapping and verified contacts for B2B fintech platforms targeting CFOs, controllers, and treasury teams.", icon: <Building2 size={24} /> },
            { title: "HealthTech & EduTech", desc: "Vertical-specific database for digital health and education technology companies targeting enterprise or SMB buyers.", icon: <Heart size={24} /> }
          ].map((item, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e8f0fe] rounded-xl flex items-center justify-center text-[#004ab0] mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
