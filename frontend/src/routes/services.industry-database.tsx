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
  Filter,
  Wrench,
  Calendar,
  Clock,
  File,
  Settings,
  Package,
  Target,
  Search as SearchIcon,
  Sparkles,
  Bot,
  Truck,
  Power,
  Utensils,
  Gavel,
  Wifi,
  Film,
  ShoppingBag,
  Users
} from "lucide-react";

export const Route = createFileRoute("/services/industry-database")({
  component: IndustryDatabase,
});

function IndustryDatabase() {
  const [searchQuery, setSearchQuery] = useState("");

  const industries = [
    { name: "Software & IT", sub: "8 sub-verticals", tags: ["BI Software", "CRM Software", "ERP Software", "Security Software", "Cloud & SaaS"], icon: <Laptop size={20} /> },
    { name: "Manufacturing", sub: "7 sub-verticals", tags: ["Aerospace & Defense", "Automotive Parts", "Electronics", "Medical Devices", "Pharmaceuticals"], icon: <Building2 size={20} /> },
    { name: "Healthcare & Pharma", sub: "7 sub-verticals", tags: ["Hospitals & Clinics", "Medical Labs", "Dental & Optical", "Mental Health", "Veterinary"], icon: <Heart size={20} /> },
    { name: "Finance & Banking", sub: "8 sub-verticals", tags: ["Banking", "Investment Banking", "Venture Capital", "Insurance", "Credit Unions"], icon: <Database size={20} /> },
    { name: "Retail & eCommerce", sub: "6 sub-verticals", tags: ["Apparel & Accessories", "Consumer Electronics", "Drug Stores", "Home Improvement", "Specialty Stores"], icon: <ShoppingBag size={20} /> },
    { name: "Business Services", sub: "6 sub-verticals", tags: ["Management Consulting", "HR & Staffing", "Accounting", "Advertising & Marketing", "Legal Services"], icon: <Users size={20} /> },
    { name: "Real Estate", sub: "5 sub-verticals", tags: ["Construction", "Real Estate Agents", "Property Management", "Commercial Real Estate", "Homebuilders"], icon: <Building2 size={20} /> },
    { name: "Education", sub: "5 sub-verticals", tags: ["Universities & Colleges", "K-12 Schools", "Online Learning", "Training Institutes", "Community Colleges"], icon: <File size={20} /> },
    { name: "Transportation", sub: "5 sub-verticals", tags: ["Freight & Logistics", "Airlines & Airports", "Trucking & Storage", "Marine Shipping", "Supply Chain"], icon: <Truck size={20} /> },
    { name: "Energy & Utilities", sub: "5 sub-verticals", tags: ["Oil & Gas", "Electricity & Power", "Environmental Services", "Waste Management", "Renewable Energy"], icon: <Power size={20} /> },
    { name: "Hospitality", sub: "5 sub-verticals", tags: ["Hotels & Resorts", "Restaurants", "Travel Agencies", "Amusement Parks", "Sports & Leagues"], icon: <Utensils size={20} /> },
    { name: "Government", sub: "4 sub-verticals", tags: ["Federal", "State", "Local Municipalities", "Chambers of Commerce"], icon: <Gavel size={20} /> },
    { name: "Telecommunications", sub: "4 sub-verticals", tags: ["Wireless & Telephony", "Internet Service Providers", "Broadband & Fiber", "Cable & Satellite"], icon: <Wifi size={20} /> },
    { name: "Media & Internet", sub: "4 sub-verticals", tags: ["Broadcasting", "News Services", "Data & Internet Portals", "Digital Media"], icon: <Film size={20} /> },
    { name: "Consumer Services", sub: "5 sub-verticals", tags: ["Auto Repair", "Salons & Barbers", "Cleaning Services", "Landscape Services", "Health Management"], icon: <Users size={20} /> },
    { name: "Organizations", sub: "4 sub-verticals", tags: ["Non-Profits", "Religious Organizations", "Membership Organizations", "Trade Associations"], icon: <Building2 size={20} /> }
  ];

  const filteredIndustries = industries.filter(ind => 
    ind.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    ind.tags.some(tag => tag.toLowerCase().includes(searchQuery.toLowerCase()))
  );

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f4f8] to-white overflow-hidden relative">
        {/* Grid Pattern Simulation */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10 w-full overflow-hidden">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-xs font-semibold text-[#004ab0] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
            INDUSTRY DATABASE
          </div>
          <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-7xl font-bold text-[#0f172a] mb-6 leading-tight break-words">
            Target Every <span className="text-[#004ab0]">Industry</span> Vertical with Precision
          </h1>
          <p className="text-xs sm:text-base text-slate-600 max-w-3xl mx-auto mb-10 break-words">
            Comprehensive B2B contact data segmented across 16+ major industries and 150+ sub-verticals — filtered by SIC codes, NAICS codes, or custom keywords to match your exact ICP.
          </p>
          <div className="flex flex-wrap justify-center gap-3 sm:gap-4">
            <button className="px-5 py-3 sm:px-8 sm:py-4 bg-[#c0ff33] text-slate-900 font-bold rounded-xl hover:bg-[#a8e62c] transition-colors shadow-lg shadow-[#c0ff33]/20 text-xs sm:text-sm">
              Request a Free Sample →
            </button>
            <button className="px-5 py-3 sm:px-8 sm:py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-xs sm:text-sm">
              Browse Industries ↓
            </button>
          </div>
        </div>
      </section>


      {/* How It Works Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            HOW IT WORKS
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Three steps to your ideal prospect list
          </h2>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            Our account managers work with you to build a laser-targeted list. No guesswork, no wasted spend.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { num: "01", label: "DEFINE", title: "Define Your ICP", desc: "Tell us your target industries, geographies, company size, and revenue range. We identify your Ideal Customer Profile with precision.", icon: <Target size={24} /> },
            { num: "02", label: "FILTER", title: "Filter by SIC / NAICS", desc: "We slice the database using industry keywords, SIC codes, or NAICS codes so you get vertically aligned contacts — not a generic dump.", icon: <Settings size={24} /> },
            { num: "03", label: "DELIVER", title: "Get Verified Data", desc: "Receive AI-verified, human-reviewed contact records ready for outreach — with name, title, email, direct dial, company, and firmographics.", icon: <Package size={24} /> }
          ].map((step, index) => (
            <div key={index} className="bg-[#f8faff] p-8 rounded-2xl border border-slate-100 relative">
              <div className="text-xs font-bold text-slate-400 mb-4">{step.num} — {step.label}</div>
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-[#004ab0] mb-6 shadow-sm">
                {step.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-2">{step.title}</h3>
              <p className="text-sm text-slate-500">{step.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Smart Targeting Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
              SMART TARGETING
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Slice and filter any industry to match your GTM motion
            </h2>
            <p className="text-lg text-slate-600 mb-8">
              Whether you're targeting CFOs in mid-market SaaS or procurement managers in manufacturing — we segment with precision.
            </p>
            <div className="flex flex-wrap gap-3">
              {[
                "Industry Keywords", "SIC Codes", "NAICS Codes", "Company Size",
                "Geography", "Revenue Range", "Job Title", "Employee Count", "Tech Stack"
              ].map((filter, index) => (
                <span key={index} className={`px-4 py-2 rounded-full text-sm font-semibold ${index === 0 ? 'bg-[#004ab0] text-white' : 'bg-white text-slate-600 border border-slate-200'}`}>
                  {filter}
                </span>
              ))}
            </div>
          </div>

          {/* Right Column (Preview) */}
          <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
            <div className="text-xs font-bold text-slate-400 mb-4">LIVE FILTER PREVIEW</div>
            <div className="space-y-4 mb-6">
              {[
                { label: "Industry", val: "Healthcare & Pharma" },
                { label: "Sub-vertical", val: "Hospitals & Clinics" },
                { label: "Geography", val: "North America" },
                { label: "Company Size", val: "200-2000 employees" },
                { label: "Job Title", val: "VP of Operations" }
              ].map((row, index) => (
                <div key={index} className="flex justify-between items-center py-2 border-b border-slate-100 last:border-0">
                  <span className="text-sm text-slate-500">{row.label}</span>
                  <span className="text-sm font-semibold text-[#0f172a] bg-[#e8f0fe] px-3 py-1 rounded-full">{row.val}</span>
                </div>
              ))}
            </div>
            <div className="bg-[#0f172a] text-white p-6 rounded-xl text-center">
              <div className="text-4xl font-bold text-[#c0ff33] mb-1">4,820</div>
              <div className="text-xs text-white/50">Verified contacts match your filters</div>
            </div>
          </div>
        </div>
      </section>

      {/* Grid Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            FULL COVERAGE
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            16 Major Industries. 150+ Sub-verticals.
          </h2>
          
          {/* Search Bar */}
          <div className="max-w-md mx-auto relative mt-6">
            <SearchIcon className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400" size={18} />
            <input
              type="text"
              placeholder="Search an industry..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-xl border border-slate-200 focus:outline-none focus:border-[#004ab0] text-sm"
            />
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredIndustries.map((ind, index) => (
            <div key={index} className="bg-[#f8faff] p-6 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#004ab0] shadow-sm">
                  {ind.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0f172a]">{ind.name}</h3>
                  <div className="text-xs text-slate-400">{ind.sub}</div>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                {ind.tags.map((tag, i) => (
                  <span key={i} className="text-xs font-semibold text-[#004ab0] bg-[#e8f0fe] px-2 py-1 rounded-full">
                    {tag}
                  </span>
                ))}
                <span className="text-xs font-semibold text-slate-400 bg-white border border-slate-100 px-2 py-1 rounded-full">
                  + more
                </span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Why Revnity Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 items-center">
          <div className="lg:col-span-1">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
              WHY REVNITY
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Data quality you can sell with confidence
            </h2>
            <p className="text-lg text-slate-600">
              Every record is AI-enriched and human-verified. We don't just aggregate — we validate, clean, and maintain freshness at the record level.
            </p>
          </div>

          <div className="lg:col-span-2 grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { title: "AI-Verified Accuracy", desc: "Every contact record passes through our AI validation layer before delivery — no stale or bounced emails.", icon: <Bot size={20} /> },
              { title: "Continuous Refresh", desc: "Data is updated on a rolling basis so your outreach always hits active, current decision-makers.", icon: <RefreshCw size={20} /> },
              { title: "Custom Segmentation", desc: "Our Account Managers tailor each database to your exact ICP — no one-size-fits-all lists.", icon: <Target size={20} /> },
              { title: "CRM-Ready Delivery", desc: "Delivered in your preferred format — CSV, XLSX, or direct CRM push — ready to activate immediately.", icon: <File size={20} /> },
              { title: "Firmographic Depth", desc: "Beyond contacts — get company revenue, headcount, HQ location, tech stack, and buying signals.", icon: <BarChart size={20} /> },
              { title: "GDPR & CCPA Compliant", desc: "Full regulatory compliance baked in. Use our data with confidence across global campaigns.", icon: <Shield size={20} /> }
            ].map((item, index) => (
              <div key={index} className="bg-white p-6 rounded-2xl border border-slate-100 flex gap-4">
                <div className="w-10 h-10 bg-[#e8f0fe] rounded-lg flex items-center justify-center text-[#004ab0] shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="text-base font-bold text-[#0f172a] mb-1">{item.title}</h3>
                  <p className="text-xs text-slate-500">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Footer */}
      <section className="py-12 px-6 bg-white border-t border-slate-100">
        <div className="max-w-7xl mx-auto flex flex-wrap justify-between items-center gap-6 text-sm text-slate-500">
          <div className="flex items-center gap-3">
            <ShieldCheck className="text-[#004ab0]" size={20} />
            <div>
              <div className="font-bold text-[#0f172a]">GDPR Aligned</div>
              <div className="text-xs">European data protection standards</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="text-[#004ab0]" size={20} />
            <div>
              <div className="font-bold text-[#0f172a]">CCPA Compliant</div>
              <div className="text-xs">California Consumer Privacy Act</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <CheckCircle2 className="text-[#137333]" size={20} />
            <div>
              <div className="font-bold text-[#0f172a]">CAN-SPAM Ready</div>
              <div className="text-xs">Safe for email outreach</div>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Lock className="text-[#004ab0]" size={20} />
            <div>
              <div className="font-bold text-[#0f172a]">SOC 2 Practices</div>
              <div className="text-xs">Enterprise-grade data security</div>
            </div>
          </div>
          <div className="text-xs text-slate-400">
            Full compliance with all global data laws & legislation
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
