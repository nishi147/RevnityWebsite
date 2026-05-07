import { createFileRoute } from '@tanstack/react-router'
import { motion, AnimatePresence } from "framer-motion"
import { Check, Plus, Minus, BarChart3, Mail, Globe2, ArrowRight } from "lucide-react"
import { useState } from "react"

export const Route = createFileRoute('/why-revnity')({
  component: WhyRevnityPage,
})

function WhyRevnityPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const stats = [
    { label: "Company Insights", value: "+25M", icon: BarChart3 },
    { label: "Email Deliverability Rate", value: "98%", icon: Mail },
    { label: "Countries", value: "140+", icon: Globe2 },
  ]

  const faqs = [
    {
      q: "Do I get a platform login to search/download my data?",
      a: "We’re not a contact data platform—and that’s intentional. Our model doesn’t rely on reselling outdated, overused data. Instead, we focus on delivering custom, high-impact strategies tailored to each client’s unique needs. Many of our clients already subscribe to CDPs—and they still work with us regularly because they recognize that we offer something different: a hands-on, strategic approach."
    },
    {
      q: "What is the accuracy and refresh frequency of data?",
      a: "Our data is verified every 45-90 days, ensuring the highest accuracy in the industry. We also perform a mandatory pre-delivery verification for every single project."
    },
    {
      q: "Can I decide my own filters?",
      a: "Absolutely. We specialize in custom segmentation. You can define your own filters based on technology adoption, SIC/NAICS codes, geography, employee size, and custom job titles."
    },
    {
      q: "Is the data compliant?",
      a: "Yes. All our data points are vetted by our privacy team to ensure 100% compliance with applicable laws like GDPR and CCPA."
    },
    {
      q: "How many technologies have been mapped with userbase?",
      a: "We have mapped over 35,000+ software products, technologies, and vendors globally."
    },
    {
      q: "How can you help us in identifying partners?",
      a: "We provide detailed insights into MSPs, channel partners, and resellers across 100+ industry-specific classifications, helping you build a high-performing partner ecosystem."
    }
  ]

  return (
    <div className="bg-white">
      {/* Hero Section */}
      <section className="relative pt-24 pb-16 px-6 sm:px-12 overflow-hidden bg-background">
        <div className="max-w-7xl mx-auto relative z-10">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <h1 className="text-5xl md:text-7xl font-black text-white uppercase tracking-tighter mb-8 leading-none">
                Why <span className="text-[#c0ff33]">Revnity</span> <br /> Marketing?
              </h1>
              <p className="text-xl text-white/80 leading-relaxed mb-10">
                Revnity Marketing empowers IT & Technology companies to connect with high-value customers through data-driven precision. We ensure your outreach reaches the right decision-makers at the right time.
              </p>
              <div className="flex flex-wrap gap-4">
                <button className="bg-[#c0ff33] text-black px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:scale-105 transition-transform shadow-xl">
                  Get A Free Quote
                </button>
                <button className="border border-white/20 text-white px-8 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-white/5 transition-all">
                  Get Your Free Sample
                </button>
              </div>
            </motion.div>
            
            <div className="grid gap-6">
              {stats.map((s, i) => (
                <motion.div
                  key={s.label}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-6 p-6 rounded-[2rem] bg-white/5 border border-white/10 backdrop-blur-md"
                >
                  <div className="h-16 w-16 rounded-2xl bg-[#c0ff33]/10 flex items-center justify-center text-[#c0ff33]">
                    <s.icon className="h-8 w-8" />
                  </div>
                  <div>
                    <div className="text-4xl font-black text-white">{s.value}</div>
                    <div className="text-sm font-bold text-white/50 uppercase tracking-widest">{s.label}</div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className="py-24 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white rounded-[3rem] p-12 md:p-20 shadow-2xl relative overflow-hidden">
            <div className="absolute top-0 right-0 w-64 h-64 bg-[#004ab0]/5 rounded-full blur-[100px] -mr-32 -mt-32" />
            <div className="max-w-3xl relative z-10">
              <h2 className="text-4xl font-black uppercase tracking-tighter mb-8 text-slate-950">
                The <span className="text-[#004ab0]">Revnity</span> Difference
              </h2>
              <p className="text-xl text-slate-600 leading-relaxed mb-8">
                Our expert consultation and expansive global network enable businesses to scale efficiently and optimize marketing.
              </p>
              <div className="space-y-6">
                {[
                  "100% custom-built strategies for every client",
                  "Deep-dive technographic insights you won't find on standard platforms",
                  "Proactive data enrichment and manual verification",
                  "Compliant, high-deliverability B2B contact intelligence"
                ].map((item, i) => (
                  <div key={i} className="flex items-start gap-4">
                    <div className="h-6 w-6 rounded-full bg-[#c0ff33]/20 flex items-center justify-center shrink-0 mt-1">
                      <Check className="h-4 w-4 text-[#004ab0]" />
                    </div>
                    <p className="text-lg font-medium text-slate-800">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-4xl font-black uppercase tracking-tighter mb-16 text-center">
            Common <span className="text-[#004ab0]">Questions</span>
          </h2>
          <div className="space-y-4">
            {faqs.map((faq, i) => (
              <div 
                key={i}
                className={`rounded-3xl border transition-all duration-300 ${openFaq === i ? 'border-[#004ab0] bg-slate-50' : 'border-slate-100 hover:border-[#004ab0]/30'}`}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === i ? null : i)}
                  className="w-full flex items-center justify-between p-6 text-left"
                >
                  <span className="text-lg font-bold text-slate-950">{faq.q}</span>
                  {openFaq === i ? (
                    <Minus className="h-5 w-5 text-[#004ab0] shrink-0" />
                  ) : (
                    <Plus className="h-5 w-5 text-slate-400 shrink-0" />
                  )}
                </button>
                <AnimatePresence>
                  {openFaq === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      className="overflow-hidden"
                    >
                      <div className="px-6 pb-6 text-slate-600 leading-relaxed border-t border-slate-100 pt-4">
                        {faq.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}
