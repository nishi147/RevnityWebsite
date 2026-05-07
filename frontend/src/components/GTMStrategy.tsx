import { motion } from "framer-motion";
import { Zap, Search, UserPlus, Calendar, ShieldCheck, ArrowRight } from "lucide-react";

const gtmItems = [
  {
    icon: Zap,
    title: "Pinpoint High-Intent Prospects",
    desc: "Identify active buyers the moment they enter the market. Use high-fidelity intent signals to reach prospects exactly when they are looking to solve their problems.",
    className: "md:col-span-6 lg:col-span-6",
    gradient: "from-lime-500/10 to-transparent"
  },
  {
    icon: Search,
    title: "Market & Competitor Intelligence",
    desc: "Gain deep insights into existing technology stacks to position your product as the ideal solution and strengthen your GTM strategy.",
    className: "md:col-span-6 lg:col-span-6",
    gradient: "from-[#004ab0]/10 to-transparent"
  },
  {
    icon: UserPlus,
    title: "Hyper-Accurate Profiling",
    desc: "Accurately map your TAM and refine your ICP to focus your resources on the most impactful accounts with human-verified precision.",
    className: "md:col-span-7 lg:col-span-7",
    gradient: "from-lime-500/10 to-transparent"
  },
  {
    icon: Calendar,
    title: "Renewal Intelligence",
    desc: "Gain crucial visibility into technology lifecycles. Track renewal dates to introduce your solution at the perfect evaluation window.",
    className: "md:col-span-5 lg:col-span-5",
    gradient: "from-[#004ab0]/10 to-transparent"
  },
  {
    icon: ShieldCheck,
    title: "AI + Human-Verified Compliance",
    desc: "Bridge the gap between scale and accuracy. Delivering GDPR-compliant, permission-based data that ensures your outreach is both legal and highly deliverable.",
    className: "md:col-span-12",
    gradient: "from-lime-500/10 via-[#004ab0]/5 to-transparent"
  }
];

export function GTMStrategy() {
  return (
    <section id="gtm" className="relative overflow-hidden bg-white py-24 sm:py-32">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, -100, 0], 
            y: [0, 80, 0],
            scale: [1, 1.4, 1] 
          }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute right-0 top-0 h-[300px] sm:h-[600px] w-[300px] sm:w-[600px] rounded-full bg-[#004ab0]/5 blur-[80px] sm:blur-[130px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 60, 0], 
            y: [0, -40, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute left-10 bottom-20 h-[300px] sm:h-[500px] w-[300px] sm:w-[500px] rounded-full bg-[#c0ff33]/5 blur-[80px] sm:blur-[110px]" 
        />
        
        {/* Animated Grid Overlay */}
        <div className="absolute inset-0 opacity-[0.02] [background-image:linear-gradient(to_right,#000_1px,transparent_1px),linear-gradient(to_bottom,#000_1px,transparent_1px)] [background-size:80px_80px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-20 max-w-4xl">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.1 }}
            transition={{ duration: 0.8 }}
            className="text-4xl font-bold leading-[1.1] text-slate-950 sm:text-6xl"
          >
            The Future of GTM Combining{" "}
            <span className="bg-[#c0ff33] px-2 text-[#004ab0]">AI Efficiency</span> and{" "}
            <span className="text-[#004ab0]">Human Accuracy</span>
          </motion.h2>
          <p className="mt-6 text-lg text-slate-600 max-w-2xl">
            Precision-engineered data strategies for modern revenue teams looking to scale with certainty and speed.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-12">
          {gtmItems.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              whileHover={{ y: -8 }}
              whileTap={{ scale: 0.98, y: -4 }}
              className={`group relative overflow-hidden rounded-[2.5rem] bg-white p-8 md:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.04)] border border-slate-100 transition-all duration-500 ${item.className}`}
            >
              {/* Subtle Gradient Accent */}
              <div className={`absolute inset-0 bg-gradient-to-br ${item.gradient} opacity-0 transition-opacity group-hover:opacity-100`} />
              
              <div className="relative z-10">
                <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-2xl bg-[#c0ff33] text-[#004ab0] shadow-[0_8px_20px_rgba(192,255,51,0.3)] transition-transform duration-500 group-hover:scale-110">
                  <item.icon className="h-7 w-7" />
                </div>
                
                <h3 className="text-2xl font-bold tracking-tight text-slate-900 sm:text-3xl">
                  {item.title}
                </h3>
                
                <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">
                  {item.desc}
                </p>

              </div>

              {/* Decorative corner accent */}
              <div className="absolute -right-10 -top-10 h-32 w-32 rounded-full bg-[#c0ff33]/10 blur-2xl transition-opacity group-hover:opacity-40" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
