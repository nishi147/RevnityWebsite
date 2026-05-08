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
  const cardVariants = {
    initial: { backgroundColor: "rgb(248, 250, 252)" },
    active: { backgroundColor: "#ffffff" }
  };

  const iconVariants = {
    initial: { backgroundColor: "#ffffff", color: "#004ab0" },
    active: { backgroundColor: "#c0ff33", color: "#004ab0" }
  };

  const titleVariants = {
    initial: { color: "rgb(15, 23, 42)" },
    active: { color: "#004ab0" }
  };

  return (
    <section id="portfolio" className="relative py-8 px-6 sm:px-12 bg-white overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 70, 0], 
            y: [0, -50, 0],
            scale: [1, 1.25, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute left-0 bottom-0 h-[300px] sm:h-[550px] w-[300px] sm:w-[550px] rounded-full bg-[#c0ff33]/5 blur-[80px] sm:blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -90, 0], 
            y: [0, 60, 0],
            scale: [1, 1.15, 1] 
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "linear" }}
          className="absolute right-10 top-20 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#004ab0]/5 blur-[90px] sm:blur-[130px]" 
        />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.015] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:70px_70px]" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        {/* Header */}
        <div className="mb-6 space-y-2">
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
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold text-slate-950 leading-tight"
          >
            Industries and <span className="text-[#004ab0]">Specialties</span> <br />
            We Empower
          </motion.h2>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {industryItems.map((item, index) => (
            <motion.div
              key={item.title}
              initial="initial"
              whileHover="active"
              whileTap="active"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.5 }}
              variants={cardVariants}
              className="group relative p-4 md:p-5 rounded-[1.5rem] border border-slate-100 transition-all duration-300 hover:shadow-xl cursor-pointer"
            >
              <div className="relative z-10">
                <motion.div 
                  variants={iconVariants}
                  className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm transition-all duration-500"
                >
                  <item.icon className="h-5 w-5" />
                </motion.div>
                <motion.h3 
                  variants={titleVariants}
                  className="mt-4 text-lg font-bold transition-colors duration-500"
                >
                  {item.title}
                </motion.h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500">
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
