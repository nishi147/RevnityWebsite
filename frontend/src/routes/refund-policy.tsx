import { createFileRoute } from '@tanstack/react-router'
import { motion } from "framer-motion"
import { ShieldCheck, XCircle, RefreshCw, CreditCard, Mail } from "lucide-react"

export const Route = createFileRoute('/refund-policy')({
  component: RefundPage,
})

function RefundPage() {
  const policies = [
    {
      id: 1,
      title: "Data Refund Policy",
      icon: ShieldCheck,
      content: "With more than 50% repeated customers, Revnity Marketing takes pride in complete customer satisfaction and quick resolution of any service issues. In the unlikely and rare event where a customer is displeased with the services provided, we will provide a refund, provided the reasons are genuine and proven after an internal investigation of the issue."
    },
    {
      id: 2,
      title: "Cancellation of the Project",
      icon: XCircle,
      content: "Please contact us through our Reach Us page or by sending an email to support@revnitymarketing.com. You may also contact your Account Manager with Revnity Marketing. Please ensure you outline the reason for cancellation with appropriate proof. Also, attach the signed SOW (Statement of Work) in the cancellation request email."
    },
    {
      id: 3,
      title: "Refund Process",
      icon: RefreshCw,
      content: "We will strive our best to ensure the service provided meets all the client’s needs and requirements. We take swift action on any service issues within 12–48 business hours. If the client is still not fully satisfied with the resolution, we can proceed with the refund process."
    },
    {
      id: 4,
      title: "Payment Gateways",
      icon: CreditCard,
      content: "If the payment was made via credit card, the refund will be processed to the same card. For payments through other gateways, the refund will be issued to the original payment account."
    },
    {
      id: 5,
      title: "Refund and Cancellation Charges",
      icon: RefreshCw,
      content: "Although the charges for refunds are nominal and depend on conversion rates for international clients, Revnity Marketing may update refund charge policies from time to time. Any such changes will be reflected on this page."
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
              Refund <span className="text-[#c0ff33]">Policy</span>
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
          {policies.map((s, i) => (
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
            <h2 className="text-3xl font-black uppercase mb-6">Support Team</h2>
            <p className="text-white/70 mb-8 max-w-lg mx-auto">
              If you have any questions regarding this policy, feel free to contact us via the following email addresses.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a 
                href="mailto:support@revnitymarketing.com"
                className="bg-[#c0ff33] text-black px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:scale-105 transition-transform"
              >
                support@revnitymarketing.com
              </a>
              <a 
                href="mailto:Info@revnitymarketing.com"
                className="border border-white/20 text-white px-8 py-3 rounded-xl font-bold uppercase tracking-widest hover:bg-white/5 transition-all"
              >
                Info@revnitymarketing.com
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
