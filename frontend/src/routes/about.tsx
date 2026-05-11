import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion"
import { Shield, Target, Rocket, Eye, Database, Users, Globe, Building2 } from "lucide-react"
import { Navbar } from "@/components/Navbar"
import { CtaFooter } from "@/components/CtaFooter"

export const Route = createFileRoute('/about')({
  component: AboutPage,
})

function AboutPage() {
  const stats = [
    { label: "Tech Vendors Around the World", value: "35k+", icon: Database },
    { label: "Personas", value: "200M+", icon: Users },
    { label: "Insights for each Company", value: "138+", icon: Target },
    { label: "MSP & Partner profiles globally", value: "300K+", icon: Globe },
    { label: "Company Profiles", value: "45M+", icon: Building2 },
  ]

  const features = [
    {
      title: "Unmatched Precision & Reliability",
      desc: "Our advanced verification process ensures that every technographic, firmographic, and demographic insight is fully accurate—guaranteed.",
      icon: Shield
    },
    {
      title: "Pinpoint Your Ideal Audience",
      desc: "Refine your targeting with precise ICP selection based on geography, company size, technology adoption, and personas—enhanced by advanced filters and expert guidance.",
      icon: Target
    },
    {
      title: "Up-to-Date Tech Stacks",
      desc: "Harness the power of AI-driven automation to access the latest technology stack insights, updated in real time.",
      icon: Rocket
    },
    {
      title: "Tailored B2B Prospect Data",
      desc: "Customize your prospect database with industry-specific filters, personas, technologies, and channel partnerships to maximize engagement and precision targeting.",
      icon: Eye
    }
  ]

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 sm:px-12 overflow-hidden bg-gradient-to-br from-[#f0f4f8] to-white">
        {/* Grid Pattern Simulation */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-6">
              <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
              ABOUT US
            </div>
            <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] mb-6 leading-tight">
              About <span className="text-[#004ab0]">Revnity</span>
            </h1>
            <p className="text-xl text-slate-600 leading-relaxed max-w-3xl">
              Revnity Marketing helps Technology and B2B companies cut through the noise with precise audience targeting, TAM insights, and intelligent data solutions. Whether you need Technographics, Channel Targeting, or Data Enrichment, we’ve got you covered—across Software, Hardware, Cloud, and beyond.
            </p>
          </motion.div>
        </div>
      </section>

      {/* What We Do */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div>
              <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
                OUR MISSION
              </div>
              <h2 className="text-4xl font-bold text-[#0f172a] mb-6">
                What We Do
              </h2>
              <p className="text-lg text-slate-600 leading-relaxed mb-12">
                Delivering tailored insights on technology adoption, market trends, and target audience profiling to fuel business expansion.
              </p>
              <div className="grid sm:grid-cols-2 gap-8">
                {features.map((f, i) => (
                  <motion.div
                    key={f.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    className="p-6 rounded-2xl bg-[#f8faff] border border-slate-100 shadow-sm"
                  >
                    <f.icon className="h-10 w-10 text-[#004ab0] mb-4" />
                    <h3 className="text-lg font-bold text-[#0f172a] mb-2">{f.title}</h3>
                    <p className="text-sm text-slate-500">{f.desc}</p>
                  </motion.div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-3xl bg-[#004ab0] p-12 text-white flex flex-col justify-center shadow-xl">
                <h3 className="text-3xl font-bold mb-6">Our Goal</h3>
                <p className="text-lg text-white/80 leading-relaxed">
                  We revolutionize how technology and B2B enterprises position their offerings by providing unparalleled data intelligence, advanced market analytics, and precise customer insights—fueling sustained growth and competitive advantage.
                </p>
              </div>
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                className="absolute -bottom-10 -right-10 w-64 h-64 bg-[#c0ff33] rounded-2xl p-8 text-slate-900 flex flex-col justify-center shadow-xl border border-[#c0ff33]"
              >
                <h3 className="text-xl font-bold mb-4">Our Vision</h3>
                <p className="text-sm font-semibold leading-tight text-slate-700">
                  To shape the future of B2B marketing by equipping technology companies with state-of-the-art data intelligence.
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-24 px-6 bg-[#f8faff] relative overflow-hidden">
        {/* Grid Pattern Simulation */}
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-4">
            OUR SCALE
          </div>
          <h2 className="text-4xl font-bold text-[#0f172a] mb-16">
            What We Have
          </h2>
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-8">
            {stats.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex flex-col items-center"
              >
                <div className="h-16 w-16 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm border border-slate-100">
                  <s.icon className="h-8 w-8 text-[#004ab0]" />
                </div>
                <div className="text-4xl font-bold text-[#0f172a] mb-2">{s.value}</div>
                <div className="text-xs uppercase tracking-widest text-slate-500 font-bold max-w-[120px] mx-auto leading-relaxed">
                  {s.label}
                </div>
              </motion.div>
            ))}
          </div>
          <p className="mt-20 text-slate-500 max-w-3xl mx-auto italic text-sm">
            Specialists in transforming digital identities. Empowered by AI, ML, NLP, and data mining, we extract intelligence from billions of public assets, leveraging webhooks and big data analytics to deliver real-time, precise technology stack insights and B2B intelligence.
          </p>
        </div>
      </section>

      <CtaFooter />
    </main>
  )
}
