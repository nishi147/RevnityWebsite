import { useState } from "react";
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
  HeartHandshake,
  ArrowRight,
  Check,
  ShieldCheck,
  RefreshCw,
  FileText
} from "lucide-react";
import section2 from "@/assets/section2.png";

export const Route = createFileRoute("/services/title-based-database")({
  component: TitleBasedDatabase,
});

function TitleBasedDatabase() {
  const [activeTab, setActiveTab] = useState('IT');
  return (
    <main className="min-h-screen bg-white text-slate-950">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 overflow-hidden bg-white text-slate-950">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#004ab0]/10 blur-[100px] rounded-full opacity-70" />
          <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#004ab0]/10/50 blur-[100px] rounded-full opacity-50" />
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:40px_40px]" />
        </div>
        
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="lg:col-span-6 space-y-8 w-full max-w-full"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              <span className="w-2 h-2 rounded-full bg-[#004ab0]"></span>
              210M+ Verified B2B Contacts
            </div>
            
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-7xl font-black uppercase tracking-tighter leading-none text-slate-950 break-words">
              Target the Right <span className="text-[#004ab0]">Decision-Makers</span> by Job Title
            </h1>
            
            <p className="text-xs sm:text-base text-slate-600 max-w-xl font-medium leading-relaxed break-words">
              Precision-filtered B2B contact data organized by job title, department, and seniority. Reach the exact personas your business sells to — zero noise, maximum pipeline.
            </p>
            
            <div className="flex flex-wrap gap-3 sm:gap-4 pt-4">
              <button className="px-5 py-3 sm:px-8 sm:py-4 rounded-xl bg-[#c0ff33] text-[#0f172a] font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-[#b0f022] transition-colors shadow-lg shadow-[#c0ff33]/20">
                Request Free Sample
              </button>
              <button className="px-5 py-3 sm:px-8 sm:py-4 rounded-xl border border-slate-200 text-slate-700 font-bold uppercase tracking-wider text-xs sm:text-sm hover:bg-slate-50 transition-all flex items-center gap-2">
                Browse Titles <ArrowRight size={16} />
              </button>
            </div>
          </motion.div>

          
          {/* Right Column (The Graphic) */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* Persona Targeting Engine Card */}
            <div className="bg-white border border-slate-100 rounded-2xl p-6 shadow-xl space-y-4 max-w-lg mx-auto">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#004ab0] rounded-xl flex items-center justify-center text-white">
                  <Target size={20} />
                </div>
                <div>
                  <h3 className="font-bold text-slate-950 text-sm">Persona Targeting Engine</h3>
                  <p className="text-xs text-slate-400 font-medium">Matching against 210M+ contacts...</p>
                </div>
              </div>
              
              <div className="space-y-3">
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                  <span className="text-xs font-bold text-slate-700">Chief Information Officer</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">✓ Match</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                  <span className="text-xs font-bold text-slate-700">VP of Sales</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">✓ Match</span>
                </div>
                <div className="flex justify-between items-center bg-slate-50 p-3 rounded-lg">
                  <span className="text-xs font-bold text-slate-700">Director of Marketing</span>
                  <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">✓ Match</span>
                </div>
              </div>
            </div>

            {/* Floating Badges */}
            <div className="hidden lg:flex absolute top-1/4 -right-8 bg-white border border-slate-100 rounded-xl p-4 shadow-lg items-center gap-3">
              <div className="text-[#004ab0] font-black text-lg">95%</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Deliverability<br />Guarantee</div>
            </div>
            
            <div className="hidden lg:flex absolute bottom-1/4 -left-8 bg-white border border-slate-100 rounded-xl p-4 shadow-lg items-center gap-3">
              <div className="w-8 h-8 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-600">
                <Check size={16} />
              </div>
              <div>
                <div className="text-xs font-bold text-slate-950">GDPR</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Fully Compliant</div>
              </div>
            </div>

            <div className="hidden lg:flex absolute bottom-4 right-12 bg-white border border-slate-100 rounded-xl p-4 shadow-lg items-center gap-3">
              <div className="text-[#004ab0] font-black text-lg">190+</div>
              <div className="text-[10px] font-bold uppercase tracking-wider text-slate-500">Countries<br />Covered</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="py-12 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <div className="text-center">
            <div className="text-3xl font-black text-[#004ab0]">210M+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Verified B2B Contacts</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[#004ab0]">95%</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Email Deliverability Rate</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[#004ab0]">1,000+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Job Title Filters</div>
          </div>
          <div className="text-center">
            <div className="text-3xl font-black text-[#004ab0]">190+</div>
            <div className="text-xs font-bold uppercase tracking-wider text-slate-500 mt-1">Countries & Regions</div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              How It Works
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              From Persona Definition <br /> to Pipeline in 3 Steps
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
              Our dedicated Account Managers define, filter, and deliver the exact contacts aligned to your ICP and revenue objectives.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Step 1 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="text-8xl font-black text-slate-100 absolute top-4 right-4">01</div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004ab0] relative z-10 shadow-sm">
                <Target size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 relative z-10">Define Your ICP Personas</h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                Share your ideal customer profile — departments, seniority levels, and specific job title keywords. Our team maps your entire target universe from 210M+ contacts.
              </p>
            </div>

            {/* Step 2 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="text-8xl font-black text-slate-100 absolute top-4 right-4">02</div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004ab0] relative z-10 shadow-sm">
                <Search size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 relative z-10">Precision Filtering & Validation</h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                Keyword-driven title filters, department segmentation, and seniority layering. Every record is triple-validated for accuracy and GDPR/CCPA compliance.
              </p>
            </div>

            {/* Step 3 */}
            <div className="bg-slate-50 border border-slate-100 rounded-2xl p-8 space-y-4 relative overflow-hidden">
              <div className="text-8xl font-black text-slate-100 absolute top-4 right-4">03</div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004ab0] relative z-10 shadow-sm">
                <ArrowRight size={24} />
              </div>
              <h3 className="text-xl font-bold text-slate-950 relative z-10">Receive & Activate</h3>
              <p className="text-slate-600 text-sm leading-relaxed relative z-10">
                Get CRM-ready data in your preferred format. Plug directly into Salesforce, HubSpot, or Marketo — and start generating pipeline immediately.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Precision Targeting */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
          {/* Left Column (Graphic) */}
          <div className="lg:col-span-6 relative flex justify-center items-center h-[400px]">
            <div className="w-64 h-64 border-4 border-dashed border-[#004ab0]/20 rounded-full flex items-center justify-center relative">
              <div className="w-40 h-40 border-4 border-dashed border-blue-200 rounded-full flex items-center justify-center">
                <div className="w-20 h-20 bg-[#004ab0] rounded-full flex items-center justify-center text-white shadow-lg">
                  <Target size={32} />
                </div>
              </div>
              
              <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-slate-100 rounded-full px-3 py-1 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-[#004ab0]/100"></span> CIO
              </div>
              <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/2 bg-white border border-slate-100 rounded-full px-3 py-1 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-emerald-500"></span> CFO
              </div>
              <div className="absolute right-0 top-1/2 translate-x-1/2 -translate-y-1/2 bg-white border border-slate-100 rounded-full px-3 py-1 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-orange-500"></span> VP Sales
              </div>
              <div className="absolute left-0 top-1/2 -translate-x-1/2 -translate-y-1/2 bg-white border border-slate-100 rounded-full px-3 py-1 text-xs font-bold text-slate-700 shadow-sm flex items-center gap-1">
                <span className="w-2 h-2 rounded-full bg-violet-500"></span> CMO
              </div>
            </div>
            
            <div className="absolute bottom-0 left-0 right-0 flex justify-center gap-4">
              <div className="bg-white border border-slate-100 rounded-xl px-4 py-2 text-center shadow-sm">
                <div className="text-xl font-black text-[#004ab0]">8+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Departments</div>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl px-4 py-2 text-center shadow-sm">
                <div className="text-xl font-black text-[#004ab0]">1,000+</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Title Filters</div>
              </div>
              <div className="bg-white border border-slate-100 rounded-xl px-4 py-2 text-center shadow-sm">
                <div className="text-xl font-black text-[#004ab0]">Keyword</div>
                <div className="text-[10px] font-bold uppercase tracking-wider text-slate-400 mt-1">Custom Filters</div>
              </div>
            </div>
          </div>

          {/* Right Column (Text) */}
          <div className="lg:col-span-6 space-y-8">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Precision Targeting
            </div>
            <h2 className="text-4xl font-black uppercase tracking-tighter text-slate-950">
              Every Persona. <br /> Every Level. <br /> Every Department.
            </h2>
            <p className="text-slate-600 text-lg leading-relaxed">
              We go beyond standard department lists — keyword-driven job title filtering lets you pinpoint the niche roles that buy your product.
            </p>
            
            <div className="space-y-6 pt-4">
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] flex-shrink-0 shadow-sm">
                  <Search size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">Keyword-Driven Title Filtering</h3>
                  <p className="text-slate-600 text-sm mt-1">Find exact roles like "Head of Cloud Security" or "ERP Implementation Director" using custom keyword combinations unique to your ICP.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] flex-shrink-0 shadow-sm">
                  <Users size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">All Seniority Levels Covered</h3>
                  <p className="text-slate-600 text-sm mt-1">From C-Suite to Directors, Managers, and Individual Contributors — reach every stakeholder in the buying committee.</p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] flex-shrink-0 shadow-sm">
                  <Briefcase size={20} />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-950">Dedicated Account Manager</h3>
                  <p className="text-slate-600 text-sm mt-1">Every project includes a dedicated expert who refines targeting with you — a true intelligence partner, not a self-serve portal.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Job Title Database */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Job Title Database
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              Thousands of Titles <br /> Across Every Department
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl font-medium leading-relaxed">
              Browse our comprehensive job title coverage. Click any tab to explore titles within that department.
            </p>
          </div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-2">
            {['IT', 'Finance', 'HR', 'Sales', 'Marketing', 'Engineering', 'Operations', 'Legal'].map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wider transition-all ${
                  activeTab === tab
                    ? 'bg-[#004ab0] text-white shadow-lg shadow-[#004ab0]/20'
                    : 'bg-slate-50 text-slate-600 hover:bg-slate-100 border border-slate-100'
                }`}
              >
                {tab}
              </button>
            ))}
          </div>

          {/* Grid of Titles */}
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
            {activeTab === 'IT' ? (
              <>
                {[
                  "Chief Information Officer", "Chief Technology Officer", "Chief Information Security Officer", "VP of Information Technology", "Head of IT",
                  "Director of Information Technology", "IT Manager", "Senior IT Manager", "Global Manager IT", "Director IT Infrastructure",
                  "Cloud Architecture Manager", "DevOps Manager", "Cybersecurity Director", "Head of IT Security", "Network Administrator",
                  "ERP Manager", "CRM Director", "Database Administrator", "IT Project Manager", "Applications Director",
                  "Systems Manager", "Chief Data Officer", "VP Applications", "Technology Architect", "IT Operations Manager",
                  "Helpdesk Manager", "IT Service Manager (ITSM)", "Business Intelligence Lead", "Data Center Manager", "IoT / IIoT Manager",
                  "Network Security Manager", "SAP / Oracle Admin", "AWS / Azure Cloud Manager"
                ].map((title) => (
                  <div key={title} className="bg-slate-50 border border-slate-100 rounded-lg p-3 text-xs font-medium text-slate-700 hover:bg-white hover:shadow-sm transition-all flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#004ab0]/100"></span> {title}
                  </div>
                ))}
                <div className="bg-[#004ab0]/10 border border-[#004ab0]/20 rounded-lg p-3 text-xs font-bold text-[#004ab0] flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#004ab0]"></span> + Hundreds More
                </div>
              </>
            ) : (
              <div className="col-span-full py-12 text-center text-slate-400 text-sm font-bold uppercase tracking-widest">
                Titles for {activeTab} available upon request
              </div>
            )}
          </div>
        </div>
      </section>

      {/* Data Pipeline */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto space-y-16">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Data Pipeline
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              Your Data Journey <br /> from ICP to Pipeline
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl font-medium leading-relaxed">
              See how raw targeting criteria transforms into verified, activated contact intelligence ready for your revenue teams.
            </p>
          </div>

          {/* Timeline */}
          <div className="relative">
            <div className="absolute top-1/2 left-0 right-0 h-0.5 bg-[#004ab0]/20 -translate-y-1/2 hidden md:block" />
            <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
              {[
                { title: "ICP Definition", desc: "Persona brief", icon: Target },
                { title: "Title Filtering", desc: "Keyword match", icon: Search },
                { title: "Triple Validation", desc: "Email + data QA", icon: Check },
                { title: "Compliance Check", desc: "GDPR / CCPA", icon: Users },
                { title: "CRM Delivery", desc: "Plug & activate", icon: ArrowRight }
              ].map((step, index) => (
                <div key={step.title} className="bg-white border border-slate-100 rounded-2xl p-6 text-center space-y-3 shadow-sm flex flex-col items-center">
                  <div className="w-12 h-12 bg-[#004ab0]/10 rounded-full flex items-center justify-center text-[#004ab0] font-bold border-2 border-[#004ab0]/20">
                    <step.icon size={20} />
                  </div>
                  <div>
                    <h3 className="text-sm font-bold text-slate-950">{step.title}</h3>
                    <p className="text-xs text-slate-400 font-medium">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Use Cases
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              Built for B2B SaaS <br /> Go-To-Market Teams
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl font-medium leading-relaxed">
              Whether you're prospecting, running ABM, or mapping your total addressable market — our title-based data powers every revenue motion.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-4 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] shadow-sm">
                <Target size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Outbound Sales Prospecting</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Build laser-targeted prospect lists by the exact job titles your sales reps convert. Eliminate spray-and-pray — go straight to decision-makers who actually buy.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-4 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] shadow-sm">
                <Users size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Account-Based Marketing (ABM)</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Layer title targeting onto your ABM account list to engage every stakeholder — champions, influencers, and economic buyers — within each target account.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-4 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] shadow-sm">
                <Search size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">Demand Generation Campaigns</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Run email nurture, LinkedIn ads, and content campaigns to specific personas like CISOs, Heads of HR, or VP Sales — with verified contact data that delivers.
              </p>
            </div>
            <div className="bg-gradient-to-br from-[#c0ff33]/20 to-white border border-slate-100 rounded-2xl p-8 space-y-4 hover:shadow-sm transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer">

              <div className="w-10 h-10 bg-white rounded-xl flex items-center justify-center text-[#004ab0] shadow-sm">
                <Globe size={20} />
              </div>
              <h3 className="text-xl font-bold text-slate-950">TAM Sizing & Market Research</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Quantify your total addressable market by mapping contacts matching your ICP personas globally. Drive strategic planning with real data, not estimates.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Revnity */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Why Revnity
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              Data You Can Trust. <br /> Results You Can Measure.
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl font-medium leading-relaxed">
              We don't just sell lists — we deliver precision-engineered B2B intelligence that turns targeting into closed revenue.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 bg-[#004ab0]/10 rounded-xl flex items-center justify-center text-[#004ab0]">
                <Search size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Keyword-Driven Title Filtering</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Go beyond broad department filters. Use custom keyword combinations to find niche roles that exactly match your ICP — down to sub-specializations.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <Check size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">95% Deliverability Guarantee</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every email is triple-verified. We guarantee 95%+ deliverability or replace bounced contacts — protecting your sender reputation and campaign ROI.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 bg-[#004ab0]/10 rounded-xl flex items-center justify-center text-[#004ab0]">
                <Globe size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Global Coverage – 190+ Countries</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Fortune 500 in North America, SMBs in APAC, enterprises in Europe — consistent depth and quality across 190+ countries worldwide.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 bg-emerald-50 rounded-xl flex items-center justify-center text-emerald-600">
                <Check size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">GDPR & CCPA Compliant</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                All data is collected and maintained in full compliance with global privacy regulations. You market with confidence, fully legal at every step.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 bg-[#004ab0]/10 rounded-xl flex items-center justify-center text-[#004ab0]">
                <ArrowRight size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">CRM-Ready Delivery</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Clean, formatted data ready to import into Salesforce, HubSpot, Marketo, or any CRM. No data wrangling — just plug in and activate your pipeline.
              </p>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 space-y-4">
              <div className="w-10 h-10 bg-[#004ab0]/10 rounded-xl flex items-center justify-center text-[#004ab0]">
                <Users size={20} />
              </div>
              <h3 className="text-lg font-bold text-slate-950">Dedicated Account Manager</h3>
              <p className="text-slate-600 text-sm leading-relaxed">
                Every engagement includes a dedicated Account Manager who refines persona targeting with you — a true data partner, not a self-serve portal.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Client Results */}
      <section className="py-24 bg-white px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Client Results
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              B2B SaaS Teams <br /> Love Revnity Data
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl font-medium leading-relaxed">
              Trusted by marketing and sales teams at technology companies, healthcare SaaS, and financial services worldwide.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-gradient-to-br from-[#c0ff33]/15 to-white border border-slate-100 rounded-2xl p-8 space-y-4 flex flex-col justify-between hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">

              <p className="text-slate-600 text-sm leading-relaxed italic">
                "Revnity's title-based targeting helped us cut prospecting time in half. The CISO and VP IT contacts were exactly the personas we needed — clean data, fast delivery."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#004ab0] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  MR
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Marcus R.</h4>
                  <p className="text-xs text-slate-400 font-medium">Head of Sales Ops - Cybersecurity SaaS</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#c0ff33]/15 to-white border border-slate-100 rounded-2xl p-8 space-y-4 flex flex-col justify-between hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">

              <p className="text-slate-600 text-sm leading-relaxed italic">
                "We used Revnity for our ABM campaign targeting CFOs and Finance Directors across APAC. The data quality was exceptional — 94% deliverability on our first send."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#004ab0] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  SP
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Sarah P.</h4>
                  <p className="text-xs text-slate-400 font-medium">Demand Gen Director - Fintech Platform</p>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-br from-[#c0ff33]/15 to-white border border-slate-100 rounded-2xl p-8 space-y-4 flex flex-col justify-between hover:shadow-sm transition-all duration-300 hover:scale-[1.02]">

              <p className="text-slate-600 text-sm leading-relaxed italic">
                "The keyword-driven filtering is a game changer. We could target 'Salesforce Implementation Manager' specifically — no other data vendor offers that level of granularity."
              </p>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-[#004ab0] rounded-full flex items-center justify-center text-white font-bold text-sm">
                  JL
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-950">Jason L.</h4>
                  <p className="text-xs text-slate-400 font-medium">VP Marketing - ERP Software Company</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Trust & Compliance */}
      <section className="py-24 bg-slate-50 px-6">
        <div className="max-w-7xl mx-auto space-y-12">
          <div className="space-y-4 text-center">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 border border-[#004ab0]/20 px-4 py-1.5 text-xs font-bold text-[#004ab0] uppercase tracking-wider">
              Trust & Compliance
            </div>
            <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter text-slate-950">
              Enterprise-Grade <br /> Data Governance
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto font-medium leading-relaxed">
              Our data standards meet the strictest requirements of B2B SaaS, enterprise, and regulated industry customers globally.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center space-y-4 shadow-sm flex flex-col items-center justify-between">
              <div className="w-12 h-12 bg-[#004ab0]/10 rounded-full flex items-center justify-center text-[#004ab0]">
                <ShieldCheck size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">GDPR Aligned</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">Full EU General Data Protection Regulation compliance for all European contact data.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center space-y-4 shadow-sm flex flex-col items-center justify-between">
              <div className="w-12 h-12 bg-[#004ab0]/10 rounded-full flex items-center justify-center text-[#004ab0]">
                <Globe size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">CCPA Compliant</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">California Consumer Privacy Act compliant, protecting your US market operations fully.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center space-y-4 shadow-sm flex flex-col items-center justify-between">
              <div className="w-12 h-12 bg-[#004ab0]/10 rounded-full flex items-center justify-center text-[#004ab0]">
                <RefreshCw size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">Continuously Refreshed</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">Database is updated and re-validated continuously ensuring contacts stay accurate and current.</p>
              </div>
            </div>
            <div className="bg-white border border-slate-100 rounded-2xl p-6 text-center space-y-4 shadow-sm flex flex-col items-center justify-between">
              <div className="w-12 h-12 bg-[#004ab0]/10 rounded-full flex items-center justify-center text-[#004ab0]">
                <FileText size={24} />
              </div>
              <div>
                <h3 className="text-lg font-bold text-slate-950">Transparent Methodology</h3>
                <p className="text-slate-500 text-xs mt-2 leading-relaxed">Fully documented data collection methodology available for compliance and procurement review.</p>
              </div>
            </div>
          </div>

          {/* Badges */}
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            {['GDPR', 'CCPA', 'CAN-SPAM', 'CASL', 'ISO Aligned', 'SOC 2 Ready'].map((badge) => (
              <div key={badge} className="px-4 py-2 bg-white border border-slate-100 rounded-lg text-xs font-bold text-slate-600 flex items-center gap-2 shadow-sm">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> {badge}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Ready to Fill Pipeline CTA */}
      <section className="relative py-24 bg-[#004ab0] text-white px-6 overflow-hidden">
        {/* Grid overlay */}
        <div className="absolute inset-0 opacity-10 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:40px_40px]" />
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#004ab0]/100 blur-[100px] rounded-full opacity-50 -mr-48 -mt-48" />
        
        <div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 border border-white/20 px-4 py-1.5 text-xs font-bold text-white uppercase tracking-wider">
            Get Started
          </div>
          <h2 className="text-4xl md:text-6xl font-black uppercase tracking-tighter leading-none">
            Ready to Fill Your Pipeline <br /> with Decision-Makers?
          </h2>
          <p className="text-xl text-blue-100 max-w-2xl mx-auto font-medium leading-relaxed">
            Request a free sample list tailored to your ICP personas — see the quality before committing. No credit card. No commitment.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4 pt-4">
            <button className="px-8 py-4 rounded-xl bg-white text-[#004ab0] font-bold uppercase tracking-wider text-sm hover:bg-[#004ab0]/10 transition-colors shadow-lg shadow-blue-900/20">
              Get Free Sample List
            </button>
            <button className="px-8 py-4 rounded-xl border border-white/30 text-white font-bold uppercase tracking-wider text-sm hover:bg-white/10 transition-all flex items-center gap-2">
              Talk to an Expert <ArrowRight size={16} />
            </button>
          </div>
          
          <p className="text-sm text-blue-200 font-medium pt-4">
            Trusted by B2B SaaS companies across tech, healthcare & finance
          </p>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
