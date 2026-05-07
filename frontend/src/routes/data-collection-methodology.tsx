import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion"
import { Search, Layers, Columns, ShieldCheck, Database, FileCheck, RefreshCcw, TrendingUp } from "lucide-react"

export const Route = createFileRoute('/data-collection-methodology')({
  component: MethodologyPage,
})

function MethodologyPage() {
  const steps = [
    {
      id: "01",
      title: "Collection of Primary Data",
      desc: "Search Analyze and Collect millions of public documents for technology specific, technographic, firmographic, demographic Primary Data. Technology usage information is collected from tech Association memberships, user group communities, millions of tech-specific job boards/portals, and more.",
      icon: Search
    },
    {
      id: "02",
      title: "Data Sorting and Segmentation",
      desc: "The Data is then supplemented with appending by our teams and sorting it out it categories and specific fields.",
      icon: Layers
    },
    {
      id: "03",
      title: "Data Standardization",
      desc: "Data is Standardized, structured, and categorized by our proprietary AI based, Rule based algorithms into the actionable formats.",
      icon: Columns
    },
    {
      id: "04",
      title: "Data Validation",
      desc: "Each data points are validated, vetted, and verified by the team. All incorrect data is removed for a cleaner Masterfile.",
      icon: ShieldCheck
    },
    {
      id: "05",
      title: "Data Loading",
      desc: "The relevant data types are identified to load the relevant fields in each data type where it makes sense.",
      icon: Database
    },
    {
      id: "06",
      title: "Data Compliance",
      desc: "Each of the data points are checked by our privacy team to make sure all information points are compliant as per the applicable laws.",
      icon: FileCheck
    },
    {
      id: "07",
      title: "Periodic Data Refresh",
      desc: "In a frequency from 45-90 days all data points are verified and incorrect and stale data is removed. Pre-delivery verification is mandatory.",
      icon: RefreshCcw
    },
    {
      id: "08",
      title: "Data Enhancement",
      desc: "As a part of data maintenance and continuous cycle of data compilation, more companies and contacts are added to the Master Data.",
      icon: TrendingUp
    }
  ]

  return (
    <div className="bg-white min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 sm:px-12 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-3xl"
          >
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
              Data Collection <br /> <span className="text-[#c0ff33]">Methodology</span>
            </h1>
            <p className="text-xl text-white/80 leading-relaxed">
              So, what does it take to deliver highly accurate and actionable information? Our multi-disciplinary teams work in tandem to ensure the highest standards of data integrity.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Methodology Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {steps.map((step, i) => (
              <motion.div
                key={step.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 hover:bg-white hover:shadow-2xl hover:border-[#004ab0]/20 transition-all duration-500"
              >
                <div className="flex justify-between items-start mb-8">
                  <div className="h-14 w-14 rounded-2xl bg-[#004ab0] text-white flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                    <step.icon className="h-7 w-7" />
                  </div>
                  <span className="text-4xl font-black text-slate-200 group-hover:text-[#004ab0]/10 transition-colors">
                    {step.id}
                  </span>
                </div>
                <h3 className="text-xl font-bold mb-4 text-slate-950 group-hover:text-[#004ab0] transition-colors">
                  {step.title}
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  {step.desc}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer Note */}
      <section className="py-20 px-6 bg-slate-950 text-white text-center overflow-hidden relative">
        <div className="absolute inset-0 bg-[#004ab0]/20 blur-[100px] -translate-y-1/2" />
        <div className="max-w-4xl mx-auto relative z-10">
          <h2 className="text-3xl font-black uppercase tracking-tighter mb-6">
            Guaranteed <span className="text-[#c0ff33]">Data Integrity</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            Our Research Analysts, Data Specialists, Verification Team, Quality Team and Data Sourcing Teams work in tandem for each of the steps of Compilation, Verification and Refresh Methodology.
          </p>
        </div>
      </section>
    </div>
  )
}
