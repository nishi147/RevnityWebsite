import { motion } from "framer-motion";

const coreServices = [
  {
    title: "Technographic Intelligence",
    desc: "Access in-depth insights on the customer base of over 45,000 technologies, including software, cloud, and hardware solutions."
  },
  {
    title: "Channel Partner Insights",
    desc: "Empower your channel strategy with in-depth partner profiles tailored to boost recruitment and long-term success."
  },
  {
    title: "Title Based Database",
    desc: "Identify and engage key decision-makers by segmenting your target audience based on job titles."
  },
  {
    title: "Stack Data Append",
    desc: "Add technology usage information from the list of target accounts or accounts in your CRM to get more insights."
  },
  {
    title: "Industry Database",
    desc: "Power your pipeline with AI-driven industry segmentation. Our solution maps SIC and NAICS data to deliver vertical insights."
  },
  {
    title: "Data Appending & Discovery",
    desc: "Unlock better outreach results by appending updated and right decision-makers information to your existing account data."
  }
];

export function Services() {
  return (
    <section id="service" className="relative bg-white py-16 sm:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6">
        {/* Centered Heading */}
        <div className="text-center mb-16">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-black uppercase tracking-tight text-slate-900 sm:text-5xl"
          >
            Explore Our Professional <br className="hidden sm:block" />
            <span className="text-[#004ab0]">Data & Marketing</span> Services
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-6 text-sm sm:text-base text-slate-600 max-w-2xl mx-auto font-medium"
          >
            Empowering growth and strategy teams with precision-engineered data insights for exponential market success.
          </motion.p>
        </div>

        {/* Floating Grid of Boxes */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {coreServices.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              whileHover={{ y: -4 }}
              whileTap={{ scale: 0.98, y: -2 }}
              className="group relative overflow-hidden rounded-[1.5rem] bg-[#004ab0] p-6 md:p-8 text-white border border-white/10 shadow-lg transition-all duration-500"
            >
              <div className="relative z-10 flex flex-col h-full justify-between min-h-[140px]">
                <div>
                  <h3 className="text-xl font-bold group-hover:text-[#c0ff33] transition-colors">{item.title}</h3>
                  <p className="mt-3 text-xs leading-relaxed text-white/70">
                    {item.desc}
                  </p>
                </div>
                
                {/* Subtle arrow indicator */}
                <div className="mt-4 flex justify-end">
                  <div className="h-8 w-8 rounded-full bg-white/10 flex items-center justify-center group-hover:bg-[#c0ff33] group-hover:text-black transition-all">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </div>
                </div>
              </div>

              {/* Decorative background glow */}
              <div className="absolute -bottom-10 -right-10 h-32 w-32 rounded-full bg-white/5 blur-2xl transition-opacity group-hover:opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
