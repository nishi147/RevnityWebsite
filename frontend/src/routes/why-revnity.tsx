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
  Package,
  Bot,
  Briefcase,
  CheckCircle2
} from "lucide-react"
import { useState } from 'react'

export const Route = createFileRoute('/why-revnity')({
  component: WhyRevnity,
})

function WhyRevnity() {
  const [activeTab, setActiveTab] = useState('quality');
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  const services = [
    { title: "Technographic Intelligence", desc: "Get insights on current customers of 35,000+ technologies. Know exactly what tech your prospects use — and where the displacement opportunity is.", tag: "CORE SERVICE", icon: <Globe size={20} /> },
    { title: "Title Based Database", desc: "Filter your ICP down to the exact personas and job titles you sell to — from CTO to VP of Engineering to IT Director.", tag: "CORE SERVICE", icon: <Users size={20} /> },
    { title: "Channel Partner Insights", desc: "Map the MSP ecosystem, identify ideal partner profiles, and recruit VARs, resellers, and MSPs based on actual technology expertise.", tag: "CHANNEL", icon: <Database size={20} /> },
    { title: "Stack Data Append", desc: "Add technology usage information to your existing CRM accounts for deeper insight into your Most High-Value Accounts (MHIAs).", tag: "ENRICHMENT", icon: <Package size={20} /> },
    { title: "Data Appending & Discovery", desc: "Find the right decision-makers from your target account list for better account penetration and higher response rates.", tag: "DISCOVERY", icon: <Search size={20} /> },
    { title: "Industry Database", desc: "Customize your prospect database to a specific industry vertical with SIC/NAICS codes for a complete vertical-based overview.", tag: "VERTICAL", icon: <Building2 size={20} /> }
  ];

  const faqs = [
    { q: "Do I get a platform login to access my data?", a: "Revnity delivers data directly to your preferred format or CRM. We focus on providing the data rather than making you learn another platform." },
    { q: "How accurate is the data you deliver?", a: "We guarantee 95%+ accuracy. Every data point is multi-verified by our AI engine and human quality teams before delivery." },
    { q: "Can I apply my own custom filters?", a: "Yes, you can specify exact ICP filters including geography, company size, revenue, technology stack, and specific personas." },
    { q: "Is your data GDPR and CCPA compliant?", a: "Yes, all our data is 100% compliant with GDPR, CCPA, and CASL regulations." },
    { q: "How many technologies have been mapped?", a: "We track over 35,000+ technologies across hardware, software, and cloud services." },
    { q: "How do you help identify channel partners?", a: "We map the entire MSP and reseller ecosystem, identifying partners based on their technology certifications and customer portfolios." }
  ];

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f4f8] to-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
              TRUSTED BY 200+ TECH COMPANIES
            </div>
            <h1 className="text-5xl md:text-6xl font-bold text-[#0f172a] mb-6 leading-tight">
              Why B2B Teams <br />Choose <span className="text-[#004ab0]">Revnity</span> <br />Over CDPs
            </h1>
            <p className="text-lg text-slate-600 max-w-xl mb-8">
              We don't resell stale, recycled data. We deliver custom, AI-verified intelligence re-verified 3 days before delivery — tailored to your exact ICP, in 140+ countries.
            </p>
            <div className="flex gap-4">
              <button className="px-8 py-4 bg-[#0f172a] text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/20">
                Get a Free Sample →
              </button>
              <button className="px-8 py-4 border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                See How It Works →
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="bg-white p-8 rounded-3xl shadow-xl shadow-slate-100 border border-slate-100 grid grid-cols-2 gap-6">
              <div>
                <div className="text-3xl font-bold text-[#004ab0]">+25M</div>
                <div className="text-xs text-slate-500">COMPANY INSIGHTS</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#004ab0]">98%</div>
                <div className="text-xs text-slate-500">EMAIL DELIVERABILITY</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#004ab0]">140+</div>
                <div className="text-xs text-slate-500">COUNTRIES COVERED</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-[#004ab0]">35K+</div>
                <div className="text-xs text-slate-500">TECHNOLOGIES MAPPED</div>
              </div>
              
              <div className="col-span-2 flex gap-2 border-top pt-4 mt-2">
                <span className="text-xs font-semibold text-[#137333] bg-[#e6f4ea] px-2 py-1 rounded-full">✓ GDPR Aligned</span>
                <span className="text-xs font-semibold text-[#137333] bg-[#e6f4ea] px-2 py-1 rounded-full">✓ CCPA Compliant</span>
                <span className="text-xs font-semibold text-[#b06000] bg-[#fef7e0] px-2 py-1 rounded-full">✓ CASL Certified</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Not a CDP */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <div className="text-xs font-bold text-[#004ab0] mb-2 uppercase">WHAT SETS US APART</div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Not a CDP. <br />A Smarter Way <br />to Win Pipeline.
            </h2>
          </motion.div>

          <div>
            <p className="text-slate-600 mb-6">
              Most of our clients already use CDPs — and still work with us. Because we offer what no platform can: a human-verified, freshly re-validated dataset built exclusively around your ICP.
            </p>
            <div className="flex gap-2 bg-[#f8faff] p-1 rounded-lg w-max border border-slate-100">
              {['quality', 'process', 'reach'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-4 py-2 text-sm font-semibold rounded-md transition-colors ${
                    activeTab === tab ? 'bg-white text-[#004ab0] shadow-sm' : 'text-slate-500 hover:text-slate-700'
                  }`}
                >
                  {tab === 'quality' ? 'Data Quality' : tab === 'process' ? 'Our Process' : 'Global Reach'}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-12 grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Left Large Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="col-span-1 lg:col-span-2 bg-[#f8faff] p-8 rounded-2xl border border-slate-100"
          >
            <span className="text-xs font-bold text-[#004ab0] bg-[#e8f0fe] px-2 py-1 rounded-full">ACCURACY</span>
            <div className="text-6xl font-bold text-[#0f172a] mt-4 mb-2">100%</div>
            <h3 className="text-lg font-bold text-[#0f172a] mb-2">Accuracy Across All Data Attributes</h3>
            <p className="text-sm text-slate-500 mb-6">No other CDP matches this. Every contact, company, and technology field is validated before it reaches your hands.</p>
            
            {/* Bar Chart Simulation */}
            <div className="space-y-3">
              {[
                { label: 'Revnity', val: '100%' },
                { label: 'CDPs avg.', val: '72%' },
                { label: 'Scrapers', val: '55%' }
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                  <span className="text-sm font-semibold text-slate-600 w-20">{item.label}</span>
                  <div className="flex-1 h-2 bg-white rounded-full overflow-hidden border border-slate-100">
                    <div className={`h-full ${i === 0 ? 'bg-[#004ab0]' : 'bg-slate-300'} rounded-full`} style={{ width: item.val }}></div>
                  </div>
                  <span className="text-sm font-bold text-slate-700">{item.val}</span>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right Column Stack */}
          <div className="space-y-6">
            {/* Top Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#e6f4ea] p-6 rounded-2xl border border-[#ceead6]"
            >
              <span className="text-xs font-bold text-[#137333] bg-white px-2 py-1 rounded-full">DELIVERABILITY</span>
              <div className="text-5xl font-bold text-[#137333] mt-4 mb-1">98%</div>
              <h3 className="text-base font-bold text-[#137333] mb-1">Email Deliverability Rate</h3>
              <p className="text-xs text-[#137333]/80">Protect your sender reputation. Every email address is re-verified 72 hours before delivery.</p>
            </motion.div>

            {/* Bottom Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-[#0f172a] p-6 rounded-2xl text-white"
            >
              <span className="text-xs font-bold text-[#c0ff33] bg-white/10 px-2 py-1 rounded-full">RE-VERIFICATION</span>
              <h3 className="text-xl font-bold mt-4 mb-1">T-72 Final Check</h3>
              <p className="text-xs text-white/70 mb-4">We re-verify your entire dataset 3 days before delivery — not 6 months ago like traditional CDPs.</p>
              <div className="flex gap-2">
                <span className="text-xs bg-white/10 px-2 py-1 rounded-full">CDPs: refresh every 6mo</span>
                <span className="text-xs bg-[#004ab0] px-2 py-1 rounded-full">Revnity: 72hr before delivery</span>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Everything Your GTM Team Needs to Win */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-[#004ab0] mb-2 uppercase">OUR SERVICES</div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Everything Your GTM Team Needs to Win
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Precision data intelligence services purpose-built for tech and IT companies targeting high-value B2B buyers.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-6 rounded-2xl border border-slate-100 flex flex-col justify-between hover:shadow-md transition-shadow"
            >
              <div>
                <div className="w-10 h-10 bg-[#e8f0fe] rounded-lg flex items-center justify-center text-[#004ab0] mb-4">
                  {service.icon}
                </div>
                <span className="text-xs font-bold text-[#004ab0] bg-[#e8f0fe] px-2 py-1 rounded-full">{service.tag}</span>
                <h3 className="text-base font-bold text-[#0f172a] mt-3 mb-2">{service.title}</h3>
                <p className="text-xs text-slate-500 mb-4">{service.desc}</p>
              </div>
              <button className="text-sm font-semibold text-[#004ab0] flex items-center gap-1 hover:gap-2 transition-all">
                Explore Service <ArrowRight size={14} />
              </button>
            </motion.div>
          ))}
        </div>
      </section>

      {/* How Revnity Delivers Results */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-[#004ab0] mb-2 uppercase">OUR PROCESS</div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            How Revnity Delivers Results
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Four clear stages from initial brief to pipeline-ready intelligence — no guesswork, no middle-men.
          </p>
        </div>

        {/* Process Steps */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 relative">
          <div className="absolute top-12 left-0 w-full h-0.5 bg-slate-100 hidden md:block"></div>
          
          {[
            { step: '01', title: 'Discover Your ICP', desc: 'We consult with you to define your ideal customer profile and Total Addressable Market with precision.', icon: <Search size={16} /> },
            { step: '02', title: 'Build Custom Database', desc: 'Our team constructs a bespoke dataset filtered to your exact specifications from 25M+ company records.', icon: <Database size={16} /> },
            { step: '03', title: '8-Stage Verification', desc: 'Every record passes our rigorous multi-layer verification — including a final check 72 hours before delivery.', icon: <Check size={16} /> },
            { step: '04', title: 'Activate & Scale', desc: 'Receive campaign-ready data with white-glove onboarding support from your dedicated account manager.', icon: <Rocket size={16} /> }
          ].map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="relative flex flex-col items-center text-center"
            >
              <div className="w-10 h-10 bg-white rounded-full border-2 border-[#004ab0] flex items-center justify-center text-[#004ab0] font-bold z-10 mb-4">
                {item.icon}
              </div>
              <h3 className="text-base font-bold text-[#0f172a] mb-1">{item.title}</h3>
              <p className="text-xs text-slate-500 max-w-[200px]">{item.desc}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* 8-Stage Verification Framework */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-[#004ab0] mb-2 uppercase">DATA METHODOLOGY</div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            8-Stage Verification Framework
          </h2>
          <p className="text-lg text-slate-600 max-w-3xl mx-auto">
            Every prospect company and contact persona is vetted through 8 rigorous stages before reaching your pipeline.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            "Primary Data Collection", "Data Sorting & Segmentation", "Data Standardization", "Data Validation",
            "Loading into Data Types", "Data Compliance Check", "Periodic Data Refresh", "Data Enhancement & Delivery"
          ].map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.05 }}
              className="bg-white p-4 rounded-xl border border-slate-100 text-center flex flex-col items-center"
            >
              <div className="text-xs font-bold text-slate-300 mb-1">0{index + 1}</div>
              <div className="w-8 h-8 bg-[#e8f0fe] rounded-lg flex items-center justify-center text-[#004ab0] mb-2">
                <Check size={16} />
              </div>
              <div className="text-xs font-semibold text-[#0f172a]">{step}</div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Built for Serious GTM Teams */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Visual */}
          <div className="relative flex justify-center items-center">
            <div className="w-64 h-64 border-4 border-[#004ab0] rounded-full flex items-center justify-center">
              <div className="w-48 h-48 border-4 border-[#c0ff33] rounded-full flex items-center justify-center">
                <div className="text-center">
                  <div className="text-4xl font-bold text-[#0f172a]">25M</div>
                  <div className="text-xs text-slate-500">Company Records</div>
                </div>
              </div>
            </div>
            <div className="absolute top-0 right-10 bg-white shadow-md p-2 rounded-lg text-xs font-bold text-[#004ab0]">100% Accuracy</div>
            <div className="absolute bottom-10 left-10 bg-white shadow-md p-2 rounded-lg text-xs font-bold text-[#137333]">98% Deliverability</div>
          </div>

          {/* Right Content */}
          <div>
            <div className="text-xs font-bold text-[#004ab0] mb-2 uppercase">WHY WE'RE TRUSTED</div>
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Built for Serious GTM Teams
            </h2>
            <p className="text-slate-600 mb-8">
              When accuracy and freshness are non-negotiable, B2B tech leaders choose Revnity over platforms that recycle the same stale lists to hundreds of clients.
            </p>

            <div className="space-y-6">
              {[
                { title: "We Don't Sell to Everyone — By Design", desc: "Unlike CDPs that resell the same data to thousands of clients simultaneously, every dataset we build is exclusive to you — your ICP, your filters, your strategy.", tag: "No list recycling" },
                { title: "Zero Data Decay at Delivery", desc: "Industry data decays at 2.5% per month. Our T-72 re-verification model means the data you receive is verified within 72 hours of reaching your team — not 6 months ago.", tag: "98%+ deliverability guaranteed" },
                { title: "AI-Assisted + Human-Verified", desc: "Our 8-stage pipeline combines intelligent automation with specialist human validation — the combination no pure-AI scraper can replicate for accuracy or depth.", tag: "8 verification checkpoints" },
                { title: "Compliant in Every Market You Target", desc: "GDPR, CCPA, CASL — and regional equivalents across APAC, LATAM and EMEA. Scale globally without compliance risk.", tag: "Fully compliant" }
              ].map((item, index) => (
                <div key={index} className="flex gap-4 border-l-2 border-slate-100 pl-4 hover:border-[#004ab0] transition-colors">
                  <div>
                    <h3 className="text-base font-bold text-[#0f172a] mb-1">{item.title}</h3>
                    <p className="text-xs text-slate-500 mb-2">{item.desc}</p>
                    <span className="text-xs font-semibold text-[#004ab0] bg-[#e8f0fe] px-2 py-0.5 rounded-full">{item.tag}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 px-6 bg-[#f8faff]">
        <div className="max-w-7xl mx-auto text-center mb-16">
          <div className="text-xs font-bold text-[#004ab0] mb-2 uppercase">FAQ</div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
            Questions We Always Get Asked
          </h2>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="bg-white border border-slate-100 rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenFaq(openFaq === index ? null : index)}
                className="w-full px-6 py-4 text-left flex justify-between items-center"
              >
                <span className="font-semibold text-[#0f172a]">{faq.q}</span>
                <span className="text-[#004ab0]">{openFaq === index ? '-' : '+'}</span>
              </button>
              {openFaq === index && (
                <div className="px-6 pb-4 text-sm text-slate-500">
                  {faq.a}
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-gradient-to-br from-[#f0f4f8] to-[#e8f0fe] p-12 rounded-3xl text-center border border-slate-100 relative overflow-hidden">
          <div className="absolute -top-32 -left-32 w-64 h-64 bg-[#c0ff33] opacity-30 rounded-full blur-3xl"></div>
          
          <div className="relative z-10">
            <h2 className="text-4xl font-bold text-[#0f172a] mb-4">
              Ready to Target the Right Buyers?
            </h2>
            <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
              Get a free sample of our data — custom-built for your ICP. No generic lists. No recycled contacts. Just precision intelligence your pipeline actually needs.
            </p>
            <div className="flex justify-center gap-4">
              <button className="px-8 py-4 bg-[#0f172a] text-white font-bold rounded-xl hover:bg-slate-800 transition-colors shadow-lg">
                Get Your Free Sample Today →
              </button>
              <button className="px-8 py-4 bg-white border-2 border-slate-200 text-slate-700 font-semibold rounded-xl hover:bg-slate-50 transition-colors">
                Talk to an Expert
              </button>
            </div>
            <div className="flex justify-center gap-4 mt-6 text-xs text-slate-500">
              <span>✓ No commitment required</span>
              <span>✓ Delivered within 48-72 hours</span>
              <span>✓ GDPR & CCPA compliant</span>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
