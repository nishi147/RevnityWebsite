import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion"
import { Shield, FileText, Lock, RefreshCw, Mail } from "lucide-react"

export const Route = createFileRoute('/privacy-policy')({
  component: PrivacyPage,
})

function PrivacyPage() {
  const sections = [
    {
      id: 1,
      title: "Introduction",
      icon: FileText,
      content: "This Privacy Policy explains the collection, usage, verification, and compilation of data by Revnity Marketing. It applies to all data shared via email, phone, physical mail, and visitors to our website. However, it does not cover third-party practices. As a marketing firm, Revnity Marketing provides data-driven marketing services to help clients reach target audiences—businesses or individuals."
    },
    {
      id: 2,
      title: "Data-Related Services",
      icon: Shield,
      content: "We provide services involving business contact information, mailing addresses, phone numbers, email IDs, demographics, intents, and technographics. Typical data includes: Name, Job Title, Email, Phone, Business Address, Website, Industry, Revenue, SIC Code, Employee Size, and Technographics. We do not collect or handle credit card or banking data."
    },
    {
      id: 3,
      title: "Purpose of Data Collection",
      icon: Lock,
      content: "Revnity Marketing collects and licenses business-related data for marketing and data enrichment. Personal information is processed to supply commercial data to other organizations for B2B marketing and internal data management."
    },
    {
      id: 4,
      title: "Data Usage and Sharing",
      icon: RefreshCw,
      content: "We license business data to other businesses for their marketing and targeting purposes. Occasionally, we match collected information with other sources to build anonymous audience segments that do not reveal PII (Personally Identifiable Information)."
    },
    {
      id: 5,
      title: "When We Collect Personal Information",
      icon: Mail,
      content: "Personal data may be collected through: marketing campaigns, webinars, conferences, trainings, landing pages, and resource downloads. We use this for: Creating data segments for market research, Helping businesses connect with potential clients, and Executing personalized campaigns with legitimate interest."
    },
    {
      id: 6,
      title: "Data Security",
      icon: Shield,
      content: "Revnity Marketing ensures data protection through access control, encryption, firewalls, data hashing, malware protection, and regular security audits. While no system is fully immune to cyber threats, we strive for the highest security standards including: Restricted access to confidential data, Use of firewalls and SIEM, MD5 encryption & hashing, Endpoint protection, SSL certification, and regular audits."
    }
  ]

  return (
    <div className="bg-slate-50 min-h-screen">
      {/* Header */}
      <section className="bg-background pt-24 pb-12 px-6">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-4xl md:text-6xl font-black text-white uppercase tracking-tighter mb-4">
              Privacy <span className="text-[#c0ff33]">Policy</span>
            </h1>
            <p className="text-white/50 font-bold uppercase tracking-[0.3em] text-sm">
              Effective Date: 4/4/2025
            </p>
          </motion.div>
        </div>
      </section>

      {/* Content */}
      <section className="py-20 px-6">
        <div className="max-w-4xl mx-auto space-y-12">
          {sections.map((s, i) => (
            <motion.div
              key={s.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-[2.5rem] shadow-sm border border-slate-100"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="h-12 w-12 rounded-xl bg-[#004ab0]/5 flex items-center justify-center text-[#004ab0]">
                  <s.icon className="h-6 w-6" />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">{s.id}. {s.title}</h2>
              </div>
              <p className="text-lg text-slate-600 leading-relaxed">
                {s.content}
              </p>
            </motion.div>
          ))}

          {/* Contact Section */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            className="bg-[#004ab0] p-12 rounded-[3rem] text-white text-center"
          >
            <h2 className="text-3xl font-black uppercase mb-6">Questions?</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              For any questions or concerns regarding our privacy policy, our data protection officer is ready to help.
            </p>
            <a 
              href="mailto:Info@revnitymarketing.com"
              className="inline-block bg-[#c0ff33] text-black px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform"
            >
              Info@revnitymarketing.com
            </a>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
