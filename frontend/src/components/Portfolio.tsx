import { motion } from "framer-motion";
import { Cloud, Cpu, Settings, Phone, Building2, MonitorPlay } from "lucide-react";

const industryItems = [
  {
    icon: Cloud,
    title: "Cloud & Software Solutions",
    desc: "Optimize your operations with advanced cloud-based software and SaaS platforms.",
  },
  {
    icon: Cpu,
    title: "Advanced IT Infrastructure",
    desc: "Enhance performance and reliability with cutting-edge IT hardware solutions tailored for modern business needs.",
  },
  {
    icon: Settings,
    title: "Managed IT & Consulting Services",
    desc: "Optimize operations with expert-managed services and strategic IT consulting for seamless business growth.",
  },
  {
    icon: Phone,
    title: "Telecom & Connectivity Solutions",
    desc: "Enhance communication networks with cutting-edge telecom technologies and seamless connectivity solutions.",
  },
  {
    icon: Building2,
    title: "Enterprise B2B Solutions",
    desc: "Empowering businesses with data-driven insights, strategic partnerships, and market intelligence for sustainable growth.",
  },
  {
    icon: MonitorPlay,
    title: "Digital Media & Publishing",
    desc: "Delivering data-driven insights to enhance audience engagement, content strategy, and market reach.",
  },
];

export function Portfolio() {
  return (
    <section id="portfolio" className="py-24 px-6 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-16 space-y-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="flex items-center gap-2 text-[#004ab0] font-bold tracking-widest text-xs uppercase"
          >
            <span className="h-2 w-2 rounded-full bg-[#c0ff33]" />
            Focus Area
          </motion.div>
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-4xl md:text-6xl font-bold text-slate-950 leading-tight"
          >
            Industries and <span className="text-[#004ab0]">Specialties</span> <br />
            We Empower
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {industryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              whileHover={{ y: -5 }}
              className="group relative p-8 rounded-[2rem] bg-slate-50 border border-slate-100 transition-all duration-300 hover:bg-white hover:shadow-xl"
            >
              <div className="relative z-10">
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-[#004ab0] shadow-sm group-hover:bg-[#c0ff33] group-hover:shadow-[0_8px_20px_rgba(192,255,51,0.3)] transition-all duration-500">
                  <item.icon className="h-7 w-7" />
                </div>
                <h3 className="mt-8 text-xl font-bold text-slate-900 group-hover:text-[#004ab0] transition-colors">
                  {item.title}
                </h3>
                <p className="mt-4 text-sm leading-relaxed text-slate-500">
                  {item.desc}
                </p>
              </div>
              
              {/* Decorative corner glow */}
              <div className="absolute -right-10 -bottom-10 h-32 w-32 rounded-full bg-[#c0ff33]/0 blur-2xl group-hover:bg-[#c0ff33]/10 transition-colors" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
