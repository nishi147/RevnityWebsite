import { createFileRoute } from "@tanstack/react-router";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { useState } from "react";
import { 
  BarChart3, 
  Sparkles, 
  Users, 
  Activity, 
  Check, 
  FolderOpen, 
  Microscope, 
  Globe, 
  Target, 
  BarChart, 
  Settings, 
  Rocket, 
  Megaphone, 
  Gem, 
  TrendingUp,
  Building2,
  User,
  Mail,
  Laptop,
  Trophy,
  Factory,
  Cloud,
  Smartphone,
  Swords,
  Link as LinkIcon,
  Database,
  Boxes,
  Cpu,
  Radio,
  ShieldCheck,
  Package,
  Shield,
  Wrench,
  Calendar,
  Clock,
  File,
  Zap,
  Lock
} from "lucide-react";

export const Route = createFileRoute("/services/stack-data-append")({
  component: StackDataAppend,
});

function StackDataAppend() {
  const [activeTab, setActiveTab] = useState("sales");

  const tabs = [
    { id: "sales", label: "Sales Teams" },
    { id: "marketing", label: "Marketing Ops" },
    { id: "partners", label: "Channel Partners" },
    { id: "revops", label: "RevOps Leaders" }
  ];

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
              STACK DATA APPEND
            </div>
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight break-words">
              Enrich Your <span className="text-[#004ab0]">CRM</span> with <span className="text-[#c0ff33]">Tech Stack</span> Intelligence
            </h1>
            <p className="text-xs sm:text-base text-slate-600 max-w-xl break-words">
              Turn cold prospect lists into warm opportunities. We append verified technology stack data to your existing accounts — so your reps walk into every call knowing exactly what tools your prospect uses.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="px-5 py-3 sm:px-8 sm:py-4 bg-[#c0ff33] text-slate-900 font-bold rounded-xl hover:bg-[#a8e62c] transition-colors shadow-lg shadow-[#c0ff33]/20 text-xs sm:text-sm">
                Get a Free Sample Report →
              </button>
              <button className="px-5 py-3 sm:px-8 sm:py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-xs sm:text-sm">
                See How It Works
              </button>
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
                <div className="flex items-center gap-3">
                  <Database className="text-[#004ab0]" size={20} />
                  <span className="font-bold text-[#0f172a]">CRM Record — Acme Corp.</span>
                </div>
                <span className="text-xs font-bold text-white bg-[#004ab0] px-3 py-1 rounded-full">
                  Enriched ✓
                </span>
              </div>

              <div className="space-y-4">
                {[
                  { label: "Company", value: "Acme Corp.", status: "green" },
                  { label: "CRM", value: "Salesforce", status: "green", checked: true },
                  { label: "ERP", value: "SAP S/4HANA", status: "green", checked: true },
                  { label: "Cloud", value: "AWS + Azure", status: "green", checked: true },
                  { label: "Decision Maker", value: "VP Technology • Verified Email", status: "blue" }
                ].map((row, index) => (
                  <div key={index} className="flex items-center justify-between py-2 border-b border-slate-100 last:border-0">
                    <span className="text-sm text-slate-500 flex items-center gap-2">
                      <span className={`w-2 h-2 rounded-full ${row.status === 'green' ? 'bg-[#c0ff33]' : 'bg-[#004ab0]'}`}></span>
                      {row.label}
                    </span>
                    <span className="text-sm font-bold text-[#0f172a] flex items-center gap-2">
                      {row.checked && <span className="text-[#c0ff33]">✓</span>}
                      {row.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Floating Badge */}
            <div className="absolute -bottom-6 -left-6 bg-[#0f172a] text-white p-4 rounded-xl flex items-center gap-3 shadow-lg">
              <Zap className="text-[#c0ff33]" size={20} />
              <div>
                <div className="text-sm font-bold">48hr Turnaround</div>
                <div className="text-xs text-white/50">20+ fields enriched</div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            SIMPLE PROCESS
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            How Stack Data Append Works
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Three simple steps to turn your inactive prospect database into a goldmine of actionable intelligence.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Steps */}
          <div className="space-y-8">
            {[
              {
                num: 1,
                title: "Share Your Prospect List",
                desc: "Upload a simple spreadsheet with company names or website domains from your CRM — even partial or outdated data works perfectly.",
                badge: "Excel / CSV / CRM Export"
              },
              {
                num: 2,
                title: "We Enrich with Tech Stack Data",
                desc: "Our team cross-references 45,000+ technology signals across 35,000+ global vendors to identify what tech each company uses — verified and current.",
                badge: "Verified across 45,000+ tech categories"
              },
              {
                num: 3,
                title: "Receive Enriched Report in 48hrs",
                desc: "Get back a fully enriched dataset with 20+ data points per contact including tech stack, decision-maker contacts, firmographics, and competitor install insights.",
                badge: "20+ fields per record — ready to import"
              }
            ].map((step, index) => (
              <div key={index} className="flex gap-6 items-start">
                <div className="w-10 h-10 bg-[#004ab0] text-white rounded-lg flex items-center justify-center font-bold shrink-0">
                  {step.num}
                </div>
                <div>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h3>
                  <p className="text-sm text-slate-500 mb-2">{step.desc}</p>
                  <span className="text-xs font-semibold text-[#004ab0] bg-[#e8f0fe] px-3 py-1 rounded-full">
                    {step.badge}
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Diagram */}
          <div className="bg-[#f8faff] p-8 rounded-3xl border border-slate-100">
            <div className="text-sm font-bold text-slate-400 mb-6">LIVE ENRICHMENT PREVIEW</div>
            <div className="space-y-4">
              <div className="bg-white p-4 rounded-xl border border-slate-200 flex items-center justify-between">
                <span className="text-sm font-bold text-[#0f172a]">Input: Your CRM List</span>
                <span className="text-xs text-slate-500">company.csv — 200 records uploaded</span>
              </div>
              <div className="text-center text-slate-400">↓</div>
              <div className="bg-white p-4 rounded-xl border border-[#004ab0] flex items-center justify-between">
                <span className="text-sm font-bold text-[#0f172a]">Revnity Enrichment Engine</span>
                <span className="text-xs text-[#004ab0] font-semibold">Matching against 45k+ tech signals</span>
              </div>
              <div className="text-center text-slate-400">↓</div>
              <div className="bg-[#e6f4ea] p-4 rounded-xl border border-[#137333] flex items-center justify-between">
                <span className="text-sm font-bold text-[#137333]">Output: Enriched Dataset</span>
                <span className="text-xs text-[#137333] font-semibold">196 records enriched · 4 skipped</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Data Points Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            WHAT YOU GET
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            20+ Data Points <span className="text-[#c0ff33]">Per Record</span>
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every enriched record comes packed with verified intelligence to power your sales and marketing teams.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <Wrench size={24} />, title: "Primary Tech Stack", desc: "CRM, ERP, Cloud, BI, HR, Marketing tools — the complete picture of what they run." },
            { icon: <User size={24} />, title: "Decision-Maker Contact", desc: "Verified email, LinkedIn, phone for CTO, VP Tech, IT Director and more." },
            { icon: <Building2 size={24} />, title: "Firmographics", desc: "Company size, revenue band, industry vertical, HQ location and subsidiary info." },
            { icon: <Target size={24} />, title: "Competitor Installs", desc: "See which competing solutions they use — identify displacement opportunities instantly." },
            { icon: <Calendar size={24} />, title: "Contract Renewal Signals", desc: "Estimated renewal windows for key software subscriptions to time your outreach." },
            { icon: <Globe size={24} />, title: "Tech Intent Score", desc: "Behavioral signals showing who is actively researching solutions like yours right now." },
            { icon: <Clock size={24} />, title: "Tech Stack Age", desc: "How long they've used each solution — longer tenure = stronger displacement signal." },
            { icon: <Shield size={24} />, title: "GDPR Compliant Data", desc: "All data collected and delivered in full compliance with GDPR & CCPA regulations." }
          ].map((item, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="w-12 h-12 bg-[#e8f0fe] rounded-xl flex items-center justify-center text-[#004ab0] mb-6">
                {item.icon}
              </div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500">{item.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* GTM Teams Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            USE CASES
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Built for <span className="text-[#004ab0]">Every</span> GTM Team
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            From sales development to channel strategy — see how teams use Stack Data Append.
          </p>
        </div>

        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-6 py-3 rounded-full font-bold text-sm transition-colors ${
                  activeTab === tab.id
                    ? "bg-[#0f172a] text-white"
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center bg-[#f8faff] p-8 rounded-3xl border border-slate-100">
            <div>
              <h3 className="text-2xl font-bold text-[#0f172a] mb-4">
                Stop Asking Prospects What Tools They Use
              </h3>
              <p className="text-slate-600 mb-6">
                Your reps waste precious discovery time asking basic qualification questions. With Stack Data Append, they walk in knowing the full tech stack — and can open with a personalized, relevant pitch that instantly builds credibility.
              </p>
              <ul className="space-y-3">
                {[
                  "Reduce discovery call time by up to 40%",
                  "Identify upsell paths from existing installs",
                  "Prioritize outreach to accounts using competitor tools",
                  "Improve connect rates with relevant openers"
                ].map((item, index) => (
                  <li key={index} className="flex gap-3 items-center text-sm text-slate-600">
                    <Check size={16} className="text-[#c0ff33]" />
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
              <div className="text-xs font-bold text-slate-400 mb-4">RSP INTELLIGENCE CARD</div>
              <div className="space-y-3 text-sm">
                <div className="flex justify-between"><span className="text-slate-500">Prospect:</span><span className="font-bold text-[#0f172a]">Nexus Global Ltd.</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Current CRM:</span><span className="font-bold text-[#0f172a]">Salesforce Sales Cloud</span></div>
                <div className="flex justify-between"><span className="text-slate-500">ERP:</span><span className="font-bold text-[#0f172a]">SAP S/4HANA — 4 yrs</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Displacement Opp:</span><span className="font-bold text-[#137333]">HubSpot — Competitor Gap Detected</span></div>
                <div className="flex justify-between"><span className="text-slate-500">Decision Maker:</span><span className="font-bold text-[#0f172a]">Priya Sharma, VP Sales Ops</span></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-[#f8faff] border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            TRUSTED BY INDUSTRY LEADERS
          </div>
          <div className="flex flex-wrap justify-center gap-8 max-w-4xl mx-auto text-lg font-bold text-slate-400">
            <span>EPICOR</span>
            <span>ORACLE</span>
            <span>POWERSCHOOL</span>
            <span>SAP</span>
            <span>SPH</span>
            <span>SAGE</span>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            WHY REVNITY
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Why B2B SaaS Companies Choose Us
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We're not a data aggregator selling stale lists. We're a team obsessed with accuracy and actionability.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { stat: "95%", title: "Accuracy Guarantee", desc: "Every data point is validated by our research team — not just scraped and sold. We guarantee 95% accuracy or we re-deliver.", icon: <Target className="text-[#004ab0]" size={24} /> },
            { stat: "48h", title: "Lightning Fast Delivery", desc: "Most projects are completed within 48 hours. Enterprise lists delivered in under 5 business days with live project tracking.", icon: <Zap className="text-[#004ab0]" size={24} /> },
            { stat: "GDPR", title: "Full Legal Compliance", desc: "All data is collected and delivered in alignment with GDPR, CCPA, and CAN-SPAM. Your compliance team will breathe easy.", icon: <Lock className="text-[#004ab0]" size={24} /> },
            { stat: "45k+", title: "Global Coverage", desc: "Track technology installs across 35,000+ global vendors including enterprise software, cloud platforms, marketing tools, and emerging SaaS.", icon: <Globe className="text-[#004ab0]" size={24} /> },
            { stat: "100%", title: "No Cookie-Cutter Lists", desc: "Every engagement is custom. We don't resell generic databases — we build your enrichment from your specific accounts and ICP.", icon: <Sparkles className="text-[#004ab0]" size={24} /> },
            { stat: "Free", title: "Sample Report Available", desc: "Not sure? Request a free sample report on a handful of your accounts before committing. See the quality for yourself — zero risk.", icon: <File className="text-[#004ab0]" size={24} /> }
          ].map((item, index) => (
            <div key={index} className="bg-[#f8faff] p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="text-4xl font-bold text-[#004ab0] mb-2">{item.stat}</div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">{item.title}</h3>
              <p className="text-sm text-slate-500 mb-6">{item.desc}</p>
              <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center shadow-sm">
                {item.icon}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Sample Output Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            SAMPLE OUTPUT
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            See What a Real Enriched Record Looks Like
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every account comes back with structured, CRM-ready data across 20+ fields.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-1 space-y-6">
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">What you send us:</h3>
              <div className="bg-white p-4 rounded-xl border border-slate-200 text-xs font-mono text-slate-600">
                company_name, website<br />
                Nexus Global, nexusglobal.com<br />
                Acme Corp, acme.com<br />
                TechFlow Inc, techflow.io<br />
                ... 200 more rows
              </div>
            </div>
            <div>
              <h3 className="text-lg font-bold text-[#0f172a] mb-2">What you get back:</h3>
              <div className="flex flex-wrap gap-2">
                {["Tech Stack (20+ tools)", "Decision Makers", "Verified Emails", "Competitor Installs", "Renewal Dates", "Company Size", "Revenue Band", "Intent Score"].map((badge, index) => (
                  <span key={index} className="text-xs font-semibold text-[#004ab0] bg-[#e8f0fe] px-3 py-1 rounded-full">
                    {badge}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column (Table) */}
          <div className="lg:col-span-2 bg-white rounded-2xl border border-slate-100 shadow-sm overflow-hidden">
            <div className="bg-[#0f172a] text-white p-4 text-sm font-bold flex items-center gap-2">
              <Database size={16} /> Enriched Output — Sample Records
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-slate-50 text-slate-500 border-b border-slate-100">
                    <th className="p-4 text-left">Company</th>
                    <th className="p-4 text-left">CRM</th>
                    <th className="p-4 text-left">ERP</th>
                    <th className="p-4 text-left">Decision Maker</th>
                    <th className="p-4 text-left">Confidence</th>
                  </tr>
                </thead>
                <tbody>
                  {[
                    { name: "Nexus Global", crm: "Salesforce", erp: "SAP", dm: "Priya Sharma\nVP Sales Ops", conf: "High" },
                    { name: "Acme Corp", crm: "HubSpot", erp: "Oracle", dm: "James Liu\nCTO", conf: "High" },
                    { name: "TechFlow Inc", crm: "Salesforce", erp: "NetSuite", dm: "Sarah Kean\nHead of IT", conf: "High" },
                    { name: "Bright Systems", crm: "Pipedrive", erp: "SAP", dm: "Mark Deal\nVP Operations", conf: "Medium" }
                  ].map((row, index) => (
                    <tr key={index} className="border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors">
                      <td className="p-4 font-bold text-[#0f172a]">{row.name}</td>
                      <td className="p-4 text-slate-600">{row.crm}</td>
                      <td className="p-4 text-slate-600">{row.erp}</td>
                      <td className="p-4 text-slate-600 whitespace-pre-line">{row.dm}</td>
                      <td className="p-4">
                        <span className={`text-xs font-bold px-2 py-1 rounded-full ${row.conf === 'High' ? 'bg-[#e6f4ea] text-[#137333]' : 'bg-[#fef7e0] text-[#b06000]'}`}>
                          {row.conf}
                        </span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
