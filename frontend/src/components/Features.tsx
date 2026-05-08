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
  const cardVariants = {
    initial: { backgroundColor: "#ffffff" },
    active: { backgroundColor: "rgba(192, 255, 51, 0.05)" }
  };

  const iconVariants = {
    initial: { backgroundColor: "rgb(248, 250, 252)", color: "rgb(148, 163, 184)", rotate: 0 },
    active: { backgroundColor: "#c0ff33", color: "#000", rotate: 10 }
  };

  const titleVariants = {
    initial: { color: "rgb(2, 6, 23)" },
    active: { color: "#004ab0" }
  };

  const lineVariants = {
    initial: { width: "0%" },
    active: { width: "100%" }
  };

  return (
    <section id="features" className="relative bg-white py-8 sm:py-10 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 100, 0], 
            y: [0, 50, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 top-0 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#c0ff33]/5 blur-[80px] sm:blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -80, 0], 
            y: [0, 100, 0],
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 bottom-0 h-[350px] sm:h-[600px] w-[350px] sm:w-[600px] rounded-full bg-[#004ab0]/5 blur-[100px] sm:blur-[140px]" 
        />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.03] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:60px_60px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 sm:px-12">
        <div className="mb-6 max-w-3xl">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 px-4 py-1.5 text-xs font-black text-[#004ab0] mb-3 border border-[#004ab0]/20"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#004ab0] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#004ab0]"></span>
            </span>
            Core Expertise
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-black leading-tight text-slate-950 uppercase tracking-tighter"
          >
            Explore Our Professional <br />
            <span className="text-[#004ab0] italic">Data & Marketing</span> Services
          </motion.h2>
          <p className="mt-2 text-base text-slate-600 font-medium leading-relaxed">
            Empowering growth and strategy teams with precision-engineered data insights for exponential market success.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <motion.div
              key={f.title}
              initial="initial"
              whileHover="active"
              whileTap="active"
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.7 }}
              variants={cardVariants}
              className="group relative overflow-hidden rounded-[1.5rem] p-4 md:p-5 shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-slate-100 hover:shadow-[0_40px_80px_rgba(0,0,0,0.06)] transition-all duration-500 cursor-pointer"
            >
              {/* Individual Card Background Glow */}
              <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-[#c0ff33]/0 blur-3xl group-hover:bg-[#c0ff33]/10 transition-all duration-500" />
              
              <div className="relative z-10">
                <motion.div 
                  variants={iconVariants}
                  className="flex h-10 w-10 items-center justify-center rounded-xl shadow-sm transition-all duration-500"
                >
                  <f.icon className="h-5 w-5" />
                </motion.div>
                <motion.h3 
                  variants={titleVariants}
                  className="mt-4 text-lg font-bold tracking-tight transition-all duration-500"
                >
                  {f.title}
                </motion.h3>
                <p className="mt-2 text-sm leading-relaxed text-slate-500 font-medium">
                  {f.desc}
                </p>
                
                <motion.div 
                  variants={lineVariants}
                  className="mt-4 h-0.5 bg-[#c0ff33] transition-all duration-500" 
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
