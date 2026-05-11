import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion"
import { Navbar } from "@/components/Navbar"
import { CtaFooter } from "@/components/CtaFooter"
import { 
  Shield, 
  Target, 
  Rocket, 
  Eye, 
  Database, 
  Users, 
  Globe, 
  Building2,
  Check,
  ArrowRight,
  Search,
  Lock,
  RefreshCw,
  File,
  Settings,
  Package,
  Bot,
  Truck,
  Power,
  Utensils,
  Gavel,
  Wifi,
  Film,
  ShoppingBag,
  Briefcase,
  CheckCircle2,
  AlertTriangle,
  Scale,
  Brain,
  Layers,
  Server,
  Zap,
  Clock,
  Mail,
  User,
  Filter,
  Wrench,
  Calendar,
  Sparkles,
  Swords,
  Heart
} from "lucide-react"

export const Route = createFileRoute('/data-collection-methodology')({
  component: DataCollectionMethodology,
})

function DataCollectionMethodology() {
  const pipelineSteps = [
    { num: "STEP 01", title: "Collection of Primary Data", desc: "We search, analyze, and collect millions of public documents for technology-specific, technographic, firmographic, and demographic data. Sources include tech association memberships, user group communities, job boards, magazine subscriptions, tech blogs, case studies, white papers, and featured customer entitlements.", tag: "FOUNDATION", icon: <Globe size={20} /> },
    { num: "STEP 02", title: "Data Sorting & Segmentation", desc: "Raw data is supplemented with expert appending by our specialist teams, then systematically sorted into precise categories and specific fields aligned with B2B intelligence schemas.", tag: "ORGANIZATION", icon: <Database size={20} /> },
    { num: "STEP 03", title: "AI-Powered Standardization", desc: "Data is standardized, structured, and categorized by our proprietary AI-based, rule-based algorithms. The result: clean, consistent, actionable formats ready for B2B SaaS targeting and segmentation workflows.", tag: "AI PROCESSING", icon: <Bot size={20} /> },
    { num: "STEP 04", title: "Multi-Point Data Validation", desc: "Every individual data point is validated, vetted, and verified by our quality team. Incorrect, outdated, or inconsistent data is flagged and removed — resulting in a cleaner, high-integrity master file.", tag: "QUALITY CONTROL", icon: <CheckCircle2 size={20} /> },
    { num: "STEP 05", title: "Data Loading into Relevant Types", desc: "Relevant data types are identified and matched to load the right fields in each data type where it makes sense — ensuring your data arrives in the most usable, integration-ready format for your CRM or marketing stack.", tag: "STRUCTURING", icon: <Package size={20} /> },
    { num: "STEP 06", title: "Privacy & Compliance Review", desc: "Every data point is reviewed by our dedicated privacy team to ensure full alignment with GDPR, CCPA, and all applicable privacy laws and legislation — giving you confidence to engage prospects without legal risk.", tag: "COMPLIANCE", icon: <Shield size={20} /> },
    { num: "STEP 07", title: "Periodic Data Refresh", desc: "Every 45–90 days, all data points are re-verified and stale or incorrect records are removed. Additionally, every project file undergoes a mandatory pre-delivery verification pass — so what you receive is always fresh.", tag: "ONGOING MAINTENANCE", icon: <RefreshCw size={20} /> },
    { num: "STEP 08", title: "Continuous Data Enhancement", desc: "As part of an ongoing data maintenance cycle, our enhancement team continuously adds new companies and contacts to the master database — expanding your total addressable market coverage over time.", tag: "GROWTH", icon: <Rocket size={20} /> }
  ];

  const dataSources = [
    { title: "Tech Associations", desc: "Memberships & certifications", icon: <Building2 size={20} /> },
    { title: "Job Boards & Portals", desc: "Millions of listings analyzed", icon: <Briefcase size={20} /> },
    { title: "Tech Magazines", desc: "Subscription & editorial signals", icon: <File size={20} /> },
    { title: "User Communities", desc: "Group memberships & forums", icon: <Users size={20} /> },
    { title: "Case Studies", desc: "Featured customers & testimonials", icon: <Search size={20} /> },
    { title: "White Papers", desc: "Industry publications", icon: <File size={20} /> },
    { title: "Certifications", desc: "Tech specializations & badges", icon: <Shield size={20} /> },
    { title: "Tech Blogs", desc: "Vendor & practitioner content", icon: <File size={20} /> }
  ];

  const specialistTeams = [
    { title: "Research Analysts", desc: "Identify, locate, and gather intelligence from authoritative public sources across the web.", icon: <Search size={20} /> },
    { title: "Data Specialists", desc: "Append, enrich, and categorize raw data into structured, field-specific intelligence.", icon: <Database size={20} /> },
    { title: "Verification Team", desc: "Manually verify every data point — catching errors that automation misses.", icon: <CheckCircle2 size={20} /> },
    { title: "Quality Team", desc: "Conduct systematic audits of the master file to maintain and raise accuracy benchmarks.", icon: <Shield size={20} /> },
    { title: "Privacy & Compliance", desc: "Ensure every data point meets GDPR, CCPA, and global privacy regulations before delivery.", icon: <Lock size={20} /> },
    { title: "Data Sourcing Team", desc: "Continuously scout and onboard new data streams to expand coverage and freshness.", icon: <Globe size={20} /> }
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
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
              DATA COLLECTION METHODOLOGY
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
              How We Build <span className="text-[#004ab0]">Verified</span> <br />B2B Intelligence
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mb-8">
              Our multi-layered data pipeline transforms millions of raw signals into verified, compliant, and actionable intelligence — refreshed every 45–90 days for peak accuracy.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#c0ff33] text-slate-900 font-bold rounded-xl hover:bg-[#a8e62c] transition-colors shadow-lg shadow-[#c0ff33]/20">
                Request a Free Sample →
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                See the Process
              </button>
            </div>
          </div>

          {/* Right Column (Card) */}
          <div className="relative">
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 bg-[#e8f0fe] rounded-lg flex items-center justify-center text-[#004ab0]">
                  <Database size={20} />
                </div>
                <div>
                  <div className="text-sm font-bold text-[#0f172a]">Data Pipeline Engine</div>
                  <div className="text-xs text-slate-400">Processing millions of signals...</div>
                </div>
              </div>

              <div className="space-y-3">
                {[
                  { label: "Primary Data Collection", status: "Done", statusColor: "green" },
                  { label: "AI Standardization", status: "AI Active", statusColor: "blue" },
                  { label: "Multi-Point Validation", status: "Done", statusColor: "green" },
                  { label: "Compliance Review", status: "Done", statusColor: "green" },
                  { label: "Periodic Refresh Cycle", status: "Live", statusColor: "orange" }
                ].map((row, index) => (
                  <div key={index} className="bg-[#f8faff] p-3 rounded-lg border border-slate-100 flex justify-between items-center">
                    <span className="text-sm font-semibold text-[#0f172a]">{row.label}</span>
                    <span className={`text-xs font-bold px-2 py-1 rounded-full ${
                      row.statusColor === 'green' ? 'bg-[#e6f4ea] text-[#137333]' :
                      row.statusColor === 'blue' ? 'bg-[#e8f0fe] text-[#004ab0]' :
                      'bg-[#fef7e0] text-[#b06000]'
                    }`}>
                      {row.statusColor === 'green' && '✓ '}{row.status}
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
              <Shield className="text-[#c0ff33]" size={20} />
              <div>
                <div className="text-sm font-bold">GDPR</div>
                <div className="text-xs text-white/50">Fully Compliant</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8-Stage Data Pipeline */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            OUR METHODOLOGY
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            8-Stage Data Pipeline
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every data point goes through our rigorous multi-stage process — from raw collection to AI-verified, compliance-checked delivery.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pipelineSteps.map((step, index) => (
            <div key={index} className="bg-[#f8faff] p-6 rounded-2xl border border-slate-100 flex flex-col justify-between">
              <div>
                <div className="text-xs font-bold text-slate-400 mb-2">{step.num}</div>
                <div className="w-10 h-10 bg-white rounded-lg flex items-center justify-center text-[#004ab0] mb-4 shadow-sm">
                  {step.icon}
                </div>
                <h3 className="text-base font-bold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{step.desc}</p>
              </div>
              <div>
                <span className="text-xs font-semibold text-[#004ab0] bg-[#e8f0fe] px-2 py-1 rounded-full">
                  {step.tag}
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Where Our Data Comes From */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            PRIMARY SOURCES
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Where Our Data Comes From
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We collect from a broad ecosystem of authoritative, public, and industry-specific sources — no guesswork, no synthetic signals.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dataSources.map((source, index) => (
            <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 flex items-center gap-4 hover:shadow-md transition-shadow">
              <div className="w-10 h-10 bg-[#e8f0fe] rounded-lg flex items-center justify-center text-[#004ab0] shrink-0">
                {source.icon}
              </div>
              <div>
                <h3 className="text-base font-bold text-[#0f172a] mb-0.5">{source.title}</h3>
                <p className="text-xs text-slate-500">{source.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Specialist Teams */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            THE PEOPLE BEHIND THE DATA
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Specialist Teams, Working in Tandem
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our data accuracy is a result of distinct expert teams, each focused on a specific layer of the pipeline — ensuring no step is ever rushed or overlooked.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {specialistTeams.map((team, index) => (
            <div key={index} className="bg-[#f8faff] p-6 rounded-2xl border border-slate-100 flex flex-col items-center text-center">
              <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#004ab0] mb-4 shadow-sm">
                {team.icon}
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-2">{team.title}</h3>
              <p className="text-xs text-slate-500">{team.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Built to Perform at Scale (Dark Section) */}
      <section className="py-16 px-6 bg-[#0f172a] text-white">
        <div className="max-w-7xl mx-auto text-center mb-12">
          <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-semibold text-[#c0ff33] mb-4">
            PERFORMANCE BENCHMARKS
          </div>
          <h2 className="text-4xl font-bold mb-4">
            Built to Perform at Scale
          </h2>
        </div>

        <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
          {[
            { label: "DATA ACCURACY", val: "95%+", desc: "Verified, validated records delivered" },
            { label: "EMAIL DELIVERABILITY", val: "90%+", desc: "Bounce rates consistently below industry avg" },
            { label: "DATA FRESHNESS", val: "45-90d", desc: "Max days between full dataset refresh" }
          ].map((stat, i) => (
            <div key={i} className="space-y-2">
              <div className="text-xs font-bold text-white/50">{stat.label}</div>
              <div className="text-5xl font-bold text-[#c0ff33]">{stat.val}</div>
              <div className="text-xs text-white/70">{stat.desc}</div>
              <div className="w-full h-1 bg-white/10 rounded-full mt-2">
                <div className="h-full bg-[#004ab0] rounded-full" style={{ width: i === 0 ? '95%' : i === 1 ? '90%' : '75%' }}></div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Always Fresh, Always Reliable */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            REFRESH CYCLE
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Always Fresh, Always Reliable
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Our 45–90 day refresh cycle combined with pre-delivery verification ensures every dataset you receive is current, clean, and campaign-ready.
          </p>
        </div>

        {/* Process Timeline */}
        <div className="max-w-7xl mx-auto relative hidden md:block">
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-slate-100 -translate-y-1/2"></div>
          <div className="grid grid-cols-6 gap-4 relative z-10">
            {[
              { label: "Live Collection", desc: "Ongoing signal capture", icon: <Globe size={16} /> },
              { label: "New Data Ingested", desc: "Into master pipeline", icon: <Database size={16} /> },
              { label: "AI Re-Verification", desc: "Every 45-90 days", icon: <Bot size={16} /> },
              { label: "Stale Data Removed", desc: "Master file cleaned", icon: <Wrench size={16} /> },
              { label: "Pre-Delivery Check", desc: "Mandatory final pass", icon: <Search size={16} /> },
              { label: "Delivered to You", desc: "Campaign-ready file", icon: <CheckCircle2 size={16} /> }
            ].map((step, i) => (
              <div key={i} className="flex flex-col items-center text-center">
                <div className="w-10 h-10 bg-white rounded-full border-2 border-[#004ab0] flex items-center justify-center text-[#004ab0] mb-4 bg-white">
                  {step.icon}
                </div>
                <div className="text-sm font-bold text-[#0f172a] mb-1">{step.label}</div>
                <div className="text-xs text-slate-500">{step.desc}</div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Mobile vertical timeline */}
        <div className="space-y-6 md:hidden">
          {[
            { label: "Live Collection", desc: "Ongoing signal capture" },
            { label: "New Data Ingested", desc: "Into master pipeline" },
            { label: "AI Re-Verification", desc: "Every 45-90 days" },
            { label: "Stale Data Removed", desc: "Master file cleaned" },
            { label: "Pre-Delivery Check", desc: "Mandatory final pass" },
            { label: "Delivered to You", desc: "Campaign-ready file" }
          ].map((step, i) => (
            <div key={i} className="flex gap-4 items-center">
              <div className="w-8 h-8 bg-[#e8f0fe] rounded-full flex items-center justify-center text-[#004ab0] font-bold text-sm">{i+1}</div>
              <div>
                <div className="text-sm font-bold text-[#0f172a]">{step.label}</div>
                <div className="text-xs text-slate-500">{step.desc}</div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Trust & Compliance */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
              TRUST & COMPLIANCE
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Data You Can Use with Confidence
            </h2>
            <p className="text-lg text-slate-600 mb-6">
              Every dataset we deliver is screened against applicable global privacy laws. Our dedicated compliance team ensures you never have to worry about regulatory exposure when running outreach campaigns.
            </p>
            <p className="text-sm text-slate-500">
              We align with GDPR, CCPA, and CAN-SPAM frameworks — and continuously monitor regulatory changes to keep our practices current. Your legal and marketing teams can trust the provenance of every record.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "EU", subtitle: "GDPR", desc: "European data regulation aligned" },
              { title: "US", subtitle: "CCPA", desc: "California Consumer Privacy Act" },
              { title: "CAN-SPAM", subtitle: "Email Compliance", desc: "Email compliance framework" },
              { title: "Privacy First", subtitle: "Ongoing Monitoring", desc: "Ongoing regulatory monitoring" }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 text-center flex flex-col items-center justify-center min-h-[120px]">
                <div className="text-xs font-bold text-slate-400 mb-1">{item.title}</div>
                <div className="text-base font-bold text-[#0f172a] mb-1">{item.subtitle}</div>
                <div className="text-xs text-slate-500">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
