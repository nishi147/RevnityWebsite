import { motion } from "framer-motion";
import { Monitor, Network, UserCheck, Database, Factory, Search } from "lucide-react";

const features = [
  { 
    icon: Monitor, 
    title: "Technographic Intelligence", 
    desc: "Access in-depth insights on the customer base of over 45,000 technologies to refine and optimize your targeting strategy." 
  },
  { 
    icon: Network, 
    title: "Channel Partner Insights", 
    desc: "Empower your channel strategy with in-depth partner profiles tailored to boost recruitment and success." 
  },
  { 
    icon: UserCheck, 
    title: "Title Based Database", 
    desc: "Identify and engage key decision-makers by segmenting your target audience based on job titles." 
  },
  { 
    icon: Database, 
    title: "Stack Data Append", 
    desc: "Add technology usage information from target accounts to get insights on the tech stack of your MHAs." 
  },
  { 
    icon: Factory, 
    title: "Industry Database", 
    desc: "Power your pipeline with AI-driven industry segmentation. Maps SIC and NAICS data to deliver vertical insights." 
  },
  { 
    icon: Search, 
    title: "Data Appending & Discovery", 
    desc: "Unlock better outreach results by appending updated and right decision-makers information to your existing data." 
  },
];

export function Features() {
  return (
    <section id="features" className="bg-slate-50 py-20 sm:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 max-w-3xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-3xl font-bold leading-tight text-slate-900 sm:text-5xl"
          >
            Explore Our Professional <span className="text-primary">Data & Marketing</span> Services
          </motion.h2>
          <p className="mt-6 text-lg text-slate-600">
            Empowering growth and strategy teams with data-driven insights for exponential success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -5 }}
              className="group relative overflow-hidden rounded-[2.5rem] bg-white p-8 shadow-sm border border-slate-100 hover:shadow-xl transition-all duration-300"
            >
              {/* Subtle background gradient */}
              <div className="absolute -right-20 -top-20 h-64 w-64 rounded-full bg-primary/5 blur-3xl group-hover:bg-primary/10 transition-colors" />
              
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-slate-50 text-slate-400 group-hover:bg-primary/10 group-hover:text-primary transition-colors">
                  <f.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-xl font-bold text-slate-900 sm:text-2xl">{f.title}</h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500 sm:text-base">
                  {f.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
