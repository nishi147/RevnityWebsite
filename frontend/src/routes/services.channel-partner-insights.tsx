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
  Shield
} from "lucide-react";

export const Route = createFileRoute("/services/channel-partner-insights")({
  component: ChannelPartnerInsights,
});

function ChannelPartnerInsights() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);

  const faqs = [
    {
      question: "How is Revnity's MSP database different from ZoomInfo or Apollo?",
      answer: "Platforms like ZoomInfo are built for volume. Revnity is built for the channel. We provide niche attributes—partner tier, technology certifications, vendor affiliations, and service specialization—that generic contact databases simply don't capture. You get context, not just contact info."
    },
    {
      question: "How quickly can I receive my partner data?",
      answer: "Typically within 3-5 business days depending on the complexity of your ideal partner profile."
    },
    {
      question: "Is the data GDPR and CCPA compliant?",
      answer: "Yes, full compliance is embedded into our data collection and processing workflows."
    },
    {
      question: "Can I request a sample dataset before purchasing?",
      answer: "Yes, we offer sample data reports tailored to your ICP to demonstrate data quality."
    },
    {
      question: "What CRM formats do you support?",
      answer: "We support major CRMs including Salesforce, HubSpot, and custom CSV formats."
    }
  ];

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f4f8] to-white overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center w-full overflow-hidden">
          {/* Left Column */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="space-y-8 w-full max-w-full"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-xs font-semibold text-[#004ab0]">
              <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
              CHANNEL PARTNER INTELLIGENCE
            </div>
            <h1 className="text-lg sm:text-4xl md:text-5xl lg:text-6xl font-bold text-[#0f172a] leading-tight break-words">
              Find the <span className="text-[#004ab0] italic">Right</span> MSP Partners. Build Revenue.
            </h1>
            <p className="text-xs sm:text-base text-slate-600 max-w-xl break-words">
              Revnity's Channel Partner Insights gives you 100+ classification attributes on MSPs, resellers, and channel partners—so your team always targets the highest-value partnerships.
            </p>
            <div className="flex flex-wrap gap-3 pt-4">
              <button className="px-5 py-3 sm:px-8 sm:py-4 bg-[#c0ff33] text-slate-900 font-bold rounded-xl hover:bg-[#a8e62c] transition-colors shadow-lg shadow-[#c0ff33]/20 text-xs sm:text-sm">
                Request Sample Data →
              </button>
              <button className="px-5 py-3 sm:px-8 sm:py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors text-xs sm:text-sm">
                See How It Works
              </button>
            </div>

            
            <div className="pt-8 border-t border-slate-200 grid grid-cols-3 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#0f172a]">100+</div>
                <div className="text-sm text-slate-500">Classification Attributes</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0f172a]">105</div>
                <div className="text-sm text-slate-500">Countries Covered</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#0f172a]">90-Day</div>
                <div className="text-sm text-slate-500">Data Refresh Cycle</div>
              </div>
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
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 bg-[#004ab0] text-white flex items-center justify-center rounded-xl font-bold text-xl">
                  AP
                </div>
                <div>
                  <div className="text-lg font-bold text-[#0f172a]">Apex Solutions Inc.</div>
                  <div className="text-sm text-slate-500">MSP · Mid-Market · AMER</div>
                </div>
              </div>

              <div className="flex flex-wrap gap-2 mb-6">
                <span className="px-3 py-1 bg-[#e8f0fe] text-[#004ab0] text-xs font-semibold rounded-full">Microsoft Gold Partner</span>
                <span className="px-3 py-1 bg-[#e6f4ea] text-[#137333] text-xs font-semibold rounded-full">Cybersecurity Specialist</span>
                <span className="px-3 py-1 bg-[#fef7e0] text-[#b06000] text-xs font-semibold rounded-full">AWS Advanced</span>
                <span className="px-3 py-1 bg-[#e8f0fe] text-[#004ab0] text-xs font-semibold rounded-full">500-1000 Endpoints</span>
                <span className="px-3 py-1 bg-[#e8f0fe] text-[#004ab0] text-xs font-semibold rounded-full">Tier-1 Distributor</span>
              </div>

              <div className="grid grid-cols-3 gap-4 text-center">
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="text-xl font-bold text-[#0f172a]">142</div>
                  <div className="text-xs text-slate-500">Employees</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="text-xl font-bold text-[#0f172a]">$18M</div>
                  <div className="text-xs text-slate-500">Revenue</div>
                </div>
                <div className="bg-slate-50 p-4 rounded-xl">
                  <div className="text-xl font-bold text-[#0f172a]">9</div>
                  <div className="text-xs text-slate-500">Vendors</div>
                </div>
              </div>
            </div>

            {/* Score Card */}
            <div className="mt-4 bg-[#0f172a] text-white p-6 rounded-2xl flex items-center justify-between shadow-lg shadow-slate-200">
              <div>
                <div className="text-sm text-white/70 font-semibold mb-1">Partner Match Score</div>
                <div className="text-4xl font-bold text-[#c0ff33]">92%</div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-24 h-3 bg-white/20 rounded-full overflow-hidden">
                  <div className="w-[92%] h-full bg-[#c0ff33]"></div>
                </div>
                <BarChart3 size={24} className="text-[#c0ff33]" />
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Logos Section */}
      <section className="py-16 bg-white border-y border-slate-100">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <div className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-8">
            TRUSTED BY GLOBAL TECHNOLOGY COMPANIES
          </div>
          <div className="flex flex-wrap justify-center gap-4 max-w-4xl mx-auto">
            {['Microsoft', 'Cisco', 'Fortinet', 'Freshworks', 'Nutanix', 'Okta', 'Veeam', 'Splunk', 'SAP', 'Qualys', 'Workday', 'Proofpoint'].map((brand) => (
              <div key={brand} className="px-6 py-3 border border-slate-200 rounded-lg text-sm font-semibold text-slate-600 hover:border-slate-300 transition-colors">
                {brand}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Precision Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Left Cards */}
          <div className="space-y-6 order-2 lg:order-1">
            {[
              {
                icon: <Sparkles className="text-[#004ab0]" size={24} />,
                title: "AI-Verified Data Points",
                desc: "Every partner record is validated through multi-source verification and AI-assisted quality checks before delivery."
              },
              {
                icon: <Users className="text-[#004ab0]" size={24} />,
                title: "Direct Decision-Maker Access",
                desc: "Get verified emails and direct contacts for channel heads, CTOs, and procurement leads at MSP firms."
              },
              {
                icon: <Activity className="text-[#004ab0]" size={24} />,
                title: "Live Competitive Intelligence",
                desc: "See which MSPs are currently partnered with your competitors and map displacement opportunities."
              }
            ].map((item, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 flex gap-4 items-start hover:shadow-md transition-shadow"
              >
                <div className="w-12 h-12 bg-[#e8f0fe] rounded-xl flex items-center justify-center shrink-0">
                  {item.icon}
                </div>
                <div>
                  <h3 className="font-bold text-[#0f172a] mb-1">{item.title}</h3>
                  <p className="text-sm text-slate-500">{item.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Right Content */}
          <div className="space-y-6 order-1 lg:order-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0]">
              WHY REVNITY
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] leading-tight">
              Precision Matters in Channel Sales
            </h2>
            <p className="text-lg text-slate-600">
              Generic IT directories leave you guessing. Revnity delivers deep, structured intelligence so every outreach is informed by verified data—not assumptions.
            </p>
            <ul className="space-y-4">
              {[
                "Skip manual research—receive CRM-ready, structured partner data within days of your brief",
                "Filter partners by tech stack, region, industry focus, company size, and 97 other attributes",
                "Identify Total Addressable Market (TAM) for your ideal partner profile before campaigns launch",
                "Confidently assign Account Managers and Channel Sales Executives to high-potential accounts"
              ].map((item, index) => (
                <li key={index} className="flex gap-3 items-start">
                  <div className="w-5 h-5 bg-[#e6f4ea] text-[#137333] rounded-full flex items-center justify-center shrink-0 mt-1">
                    <Check size={14} className="text-[#137333]" />
                  </div>
                  <p className="text-slate-600 font-medium">{item}</p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Data Solutions Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            WHAT WE DELIVER
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Data Solutions Built for Channel Growth
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Six intelligence modules, each engineered to accelerate a specific part of your partner recruitment and development workflow.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              id: "01",
              tag: "MOST USED",
              icon: <FolderOpen className="text-amber-500" size={24} />,
              title: "Verified MSP & Partner Database",
              desc: "A curated list of MSPs with verified direct emails, revenue estimates, headcount, and decision-maker contacts. Built for high-volume channel outreach with near-zero bounce rates.",
              badges: ["Verified Emails", "Revenue Data", "Decision Makers"]
            },
            {
              id: "02",
              icon: <Microscope className="text-indigo-500" size={24} />,
              title: "Tech Stack & Ecosystem Mapping",
              desc: "Understand which software, platforms, and tools each MSP already manages. Identify integration synergies and displacement opportunities with rivals' installed bases.",
              badges: ["500+ Tech Stacks", "Vendor Alignment"]
            },
            {
              id: "03",
              icon: <Globe className="text-blue-500" size={24} />,
              title: "Regional MSP Segmentation",
              desc: "Enter new markets confidently. Segment partners across AMER, EMEA, and APAC with sub-regional breakdowns, enabling precise geographic expansion.",
              badges: ["3 Global Regions", "105 Countries"]
            },
            {
              id: "04",
              icon: <Target className="text-rose-500" size={24} />,
              title: "Competitor Partner Intelligence",
              desc: "Discover which MSPs are already partnered with your direct competitors. Get actionable insights to craft hyper-targeted competitive displacement campaigns.",
              badges: ["Competitor Mapping", "Displacement Intel"]
            },
            {
              id: "05",
              icon: <BarChart className="text-emerald-500" size={24} />,
              title: "TAM & ICP Discovery",
              desc: "Quantify the true size of your partner opportunity. We map your Ideal Channel Partner Profile (IPP) across the full addressable market before you invest in recruitment.",
              badges: ["Market Sizing", "IPP Modeling"]
            },
            {
              id: "06",
              icon: <Settings className="text-slate-500" size={24} />,
              title: "Custom Build & CRM Delivery",
              desc: "Every dataset is tailored to your brief. Receive clean, CRM-ready files formatted for Salesforce, HubSpot, or any platform—no cleanup required.",
              badges: ["CRM-Ready", "Custom Build", "Salesforce / HubSpot"]
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={`bg-white p-8 rounded-3xl border ${item.tag ? 'border-[#004ab0]' : 'border-slate-100'} shadow-sm hover:shadow-md transition-shadow relative flex flex-col`}
            >
              <div className="flex justify-between items-center mb-6">
                <span className="text-sm font-bold text-slate-400">{item.id}</span>
                {item.tag && (
                  <span className="text-xs font-bold text-white bg-[#004ab0] px-3 py-1 rounded-full">
                    {item.tag}
                  </span>
                )}
              </div>
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 mb-6 flex-grow">{item.desc}</p>
              <div className="flex flex-wrap gap-2 mt-auto">
                {item.badges.map((badge, bIndex) => (
                  <span key={bIndex} className="px-3 py-1 bg-slate-50 text-slate-600 text-xs font-semibold rounded-full border border-slate-100">
                    {badge}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Strategic Value Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            WHO BENEFITS
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Strategic Value for Every Team
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Whether you're driving revenue, expanding market reach, or building a sticky ecosystem—Channel Partner Insights has a use case for your role.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8">
          {[
            {
              icon: <Rocket className="text-amber-500" size={24} />,
              title: "Channel Sales Teams",
              desc: "Accelerate pipeline by targeting pre-qualified MSP leads with verified contacts and full context on their capabilities and vendor affiliations.",
              list: [
                "Quickly identify high-fit partners with precision",
                "Assign Channel Sales Execs to key accounts",
                "Reduce research time from weeks to hours",
                "Understand competitors' partner affiliations"
              ]
            },
            {
              icon: <Megaphone className="text-indigo-500" size={24} />,
              title: "Channel Marketing Teams",
              desc: "Power ABM and co-marketing programs with hyper-targeted segments based on partner capabilities, tech stacks, and competitor engagement history.",
              list: [
                "Identify partners engaged with competitors",
                "Analyze TAM for potential partner recruitment",
                "Segment by capabilities for targeted campaigns",
                "Drive high-conversion partner recruitment"
              ]
            },
            {
              icon: <Gem className="text-rose-500" size={24} />,
              title: "Alliances & Partnerships",
              desc: "Build a complementary ecosystem. Find partners whose technology and service focus fits your own, creating integrations customers can't leave behind.",
              list: [
                "Identify ideal technology alliance partners",
                "Map ecosystem gaps and whitespace opportunities",
                "Build sticky partner programs at scale",
                "Measure partner ecosystem health metrics"
              ]
            },
            {
              icon: <TrendingUp className="text-emerald-500" size={24} />,
              title: "GTM & Revenue Leaders",
              desc: "Make strategic territory decisions backed by data. Understand market density, partner concentration, and competitive dynamics before committing budget.",
              list: [
                "Quantify total channel market opportunity",
                "Prioritize regions with highest partner density",
                "Reduce partner churn with better fit matching",
                "Accelerate time-to-revenue with new partners"
              ]
            }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="w-12 h-12 bg-slate-50 rounded-xl flex items-center justify-center mb-6">
                {item.icon}
              </div>
              <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
              <p className="text-sm text-slate-500 mb-6">{item.desc}</p>
              <ul className="space-y-3">
                {item.list.map((li, lIndex) => (
                  <li key={lIndex} className="flex gap-3 items-center text-sm text-slate-600">
                    <span className="text-[#004ab0]">→</span>
                    {li}
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Data Points Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto mb-16 flex flex-col md:flex-row justify-between items-start gap-8">
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
              DATA ATTRIBUTES
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              100+ Data Points on Every Partner
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl">
              Each MSP record comes enriched with a comprehensive set of firmographic, technographic, and behavioral intelligence.
            </p>
          </div>
          <div className="bg-[#0f172a] text-white p-6 rounded-2xl flex flex-col items-center justify-center min-w-[200px] shadow-lg shadow-slate-200">
            <div className="text-4xl font-bold text-[#c0ff33]">100+</div>
            <div className="text-xs text-white/70 font-semibold mt-1">Unique Data Attributes</div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
          {[
            { icon: <Building2 size={20} />, title: "Company Profile", desc: "Name, size, HQ, revenue band" },
            { icon: <User size={20} />, title: "Decision Maker", desc: "CIO, Channel Head, CEO contacts" },
            { icon: <Mail size={20} />, title: "Verified Email", desc: "Direct, deliverable, 8-stage verified" },
            { icon: <Laptop size={20} />, title: "Tech Stack", desc: "500+ technologies mapped" },
            { icon: <Trophy size={20} />, title: "Vendor Partnerships", desc: "Tier, badges, certifications" },
            { icon: <Globe size={20} />, title: "Regional Coverage", desc: "Territory and market focus" },
            { icon: <Factory size={20} />, title: "Industry Focus", desc: "Vertical specialization" },
            { icon: <Cloud size={20} />, title: "Service Capabilities", desc: "NOC, SOC, helpdesk, cloud" },
            { icon: <Smartphone size={20} />, title: "Endpoint Count", desc: "Managed device volume bands" },
            { icon: <TrendingUp size={20} />, title: "Growth Signals", desc: "Hiring trends, expansion signals" },
            { icon: <Swords size={20} />, title: "Competitor Affiliation", desc: "Current rival partnerships" },
            { icon: <LinkIcon size={20} />, title: "LinkedIn & Web", desc: "Social profile and domain" }
          ].map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-[#f8faff] p-4 rounded-xl border border-slate-100 flex gap-3 items-start hover:shadow-sm transition-shadow"
            >
              <div className="text-[#004ab0] mt-1">
                {item.icon}
              </div>
              <div>
                <div className="text-sm font-bold text-[#0f172a]">{item.title}</div>
                <div className="text-xs text-slate-500 mt-0.5">{item.desc}</div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            THE PROCESS
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            From Brief to Pipeline-Ready Data in 4 Steps
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            We don't believe in one-size-fits-all. Every dataset is built to your exact partner profile.
          </p>
        </div>

        <div className="max-w-7xl mx-auto relative">
          {/* Connecting Line */}
          <div className="absolute top-7 left-0 w-full h-0.5 bg-[#004ab0]/20 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative z-10">
            {[
              { num: 1, title: "Define Your IPP", desc: "Share your ideal partner profile—target tech stacks, regions, certifications, and firmographic requirements." },
              { num: 2, title: "We Curate & Build", desc: "Our analysts build your list from scratch using multi-source research and proprietary classification methodology." },
              { num: 3, title: "8-Stage Verification", desc: "Every contact goes through an 8-stage quality process including email deliverability, firmographic accuracy, and tech validation." },
              { num: 4, title: "CRM-Ready Delivery", desc: "Receive clean files formatted for your CRM. No cleanup. No guesswork. Just load and launch your channel campaign." }
            ].map((step, index) => (
              <motion.div 
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
                className="flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 bg-[#004ab0] text-white rounded-full flex items-center justify-center font-bold text-xl mb-6 shadow-lg shadow-[#004ab0]/20">
                  {step.num}
                </div>
                <h3 className="text-lg font-bold text-[#0f172a] mb-2">{step.title}</h3>
                <p className="text-sm text-slate-500">{step.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Data Quality Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            OUR COMMITMENT
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-12">
            Data Quality You Can Build a Business On
          </h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
            <div>
              <div className="text-4xl font-bold text-[#0f172a]">90-Day</div>
              <div className="text-sm text-slate-500 mt-1">Data Refresh Cycle</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0f172a]">8-Stage</div>
              <div className="text-sm text-slate-500 mt-1">Verification Process</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0f172a]">GDPR</div>
              <div className="text-sm text-slate-500 mt-1">& CCPA Compliant</div>
            </div>
            <div>
              <div className="text-4xl font-bold text-[#0f172a]">&lt;3%</div>
              <div className="text-sm text-slate-500 mt-1">Data Decay Rate Managed</div>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-left">
            {[
              {
                icon: <TrendingUp className="text-[#004ab0]" size={24} />,
                title: "Freshness as a Feature",
                desc: "The MSP channel moves fast—partnerships shift, vendors change tiers, companies pivot. Our 90-day refresh cycle combats the 2–3% monthly data decay rate, keeping your outreach accurate and bounce-free."
              },
              {
                icon: <Check className="text-[#004ab0]" size={24} />,
                title: "Full Compliance Built In",
                desc: "GDPR and CCPA compliance are embedded into our data collection and processing workflows—not bolted on afterward. Your brand reputation and legal standing are protected at every step."
              },
              {
                icon: <Sparkles className="text-[#004ab0]" size={24} />,
                title: "Beyond Data Scraping",
                desc: "We combine multi-source intelligence, human analyst review, and AI-assisted validation to deliver partner insights you simply can't get from platforms like ZoomInfo—niche channel-specific attributes included."
              }
            ].map((item, index) => (
              <div key={index} className="bg-[#f8faff] p-8 rounded-2xl border border-slate-100 hover:shadow-md transition-shadow">
                <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold text-[#0f172a] mb-3">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Industries Served Section */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            INDUSTRIES SERVED
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            MSP Partner Intelligence Across Every Vertical
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl">
            Whether you sell cybersecurity, ERP, cloud, or AI solutions—we have the partner ecosystem data you need.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {[
            { name: "Cybersecurity Companies", icon: <ShieldCheck size={16} /> },
            { name: "IT Storage Providers", icon: <Database size={16} /> },
            { name: "Cloud Service Providers", icon: <Cloud size={16} /> },
            { name: "ITSM Software Companies", icon: <Laptop size={16} /> },
            { name: "ERP Resellers", icon: <Boxes size={16} /> },
            { name: "AI Consulting & Resellers", icon: <Cpu size={16} /> },
            { name: "Telecom & TSPs", icon: <Radio size={16} /> },
            { name: "System Integrators", icon: <LinkIcon size={16} /> },
            { name: "BI & Analytics Firms", icon: <BarChart size={16} /> },
            { name: "MSSP Providers", icon: <Shield size={16} /> },
            { name: "Software VARs", icon: <Package size={16} /> },
            { name: "SaaS Companies", icon: <Globe size={16} /> }
          ].map((item, index) => (
            <div key={index} className="bg-white p-4 rounded-xl border border-slate-100 flex items-center gap-3 hover:shadow-sm transition-shadow">
              <div className="w-8 h-8 bg-[#e8f0fe] rounded-lg flex items-center justify-center text-[#004ab0] shrink-0">
                {item.icon}
              </div>
              <div className="text-sm font-bold text-[#0f172a]">{item.name}</div>
            </div>
          ))}
        </div>
      </section>

      {/* FAQs Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Left Column (FAQs) */}
          <div className="lg:col-span-2">
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
              FAQS
            </div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-8">
              Common Questions
            </h2>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border-b border-slate-200 pb-4">
                  <button
                    className="flex justify-between items-center w-full text-left py-2"
                    onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  >
                    <span className="font-bold text-[#0f172a]">{faq.question}</span>
                    <span className="text-[#004ab0]">
                      {openFaq === index ? "−" : "+"}
                    </span>
                  </button>
                  {openFaq === index && (
                    <motion.div 
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      className="mt-2 text-sm text-slate-500 leading-relaxed overflow-hidden"
                    >
                      {faq.answer}
                    </motion.div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Column (CTA Card) */}
          <div className="lg:col-span-1">
            <div className="bg-[#0f172a] text-white p-8 rounded-3xl shadow-xl shadow-slate-200">
              <h3 className="text-2xl font-bold mb-4">
                Ready to Find Your Next Channel Partner?
              </h3>
              <p className="text-sm text-white/70 mb-6 leading-relaxed">
                Tell us about your ideal partner profile and we'll show you exactly what we can deliver—with a sample data report tailored to your ICP.
              </p>
              <button className="w-full py-3 bg-[#c0ff33] text-slate-900 font-bold rounded-xl hover:bg-[#a8e62c] transition-colors mb-6">
                Get Sample Data →
              </button>
              
              <div className="grid grid-cols-3 gap-2 text-center text-xs">
                <div className="bg-white/10 p-2 rounded-lg">
                  <div className="font-bold text-[#c0ff33]">GDPR</div>
                  <div className="text-white/50 text-[10px]">Aligned</div>
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <div className="font-bold text-[#c0ff33]">CCPA</div>
                  <div className="text-white/50 text-[10px]">Compliant</div>
                </div>
                <div className="bg-white/10 p-2 rounded-lg">
                  <div className="font-bold text-[#c0ff33]">8-Stage</div>
                  <div className="text-white/50 text-[10px]">Verified</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
