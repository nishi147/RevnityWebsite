import { motion } from "framer-motion";
import { ScanText, BarChart3, Users2, SearchCode, LayoutPanelLeft, Share2 } from "lucide-react";
import section2 from "@/assets/section2.png";

const intelligenceItems = [
  {
    icon: ScanText,
    title: "Scan Public Case Studies",
    desc: "Identify technology adoption through vendor case studies and customer success stories."
  },
  {
    icon: BarChart3,
    title: "Analyse Whitepapers & Surveys",
    desc: "Extract adoption signals from research reports, testimonials, and customer surveys."
  },
  {
    icon: Users2,
    title: "Track User Communities",
    desc: "Monitor user groups, conferences, and communities for technology usage signals."
  },
  {
    icon: SearchCode,
    title: "Scan Job Postings",
    desc: "Detect technology adoption through hiring trends and technical skill requirements."
  },
  {
    icon: LayoutPanelLeft,
    title: "Inspect Websites & Networks",
    desc: "AI-powered scanning detects technologies across millions of websites globally."
  },
  {
    icon: Share2,
    title: "Monitor News & Social Signals",
    desc: "Capture adoption trends using social listening and industry news intelligence."
  }
];

export function MarketIntelligence() {
  return (
    <section className="relative py-8 sm:py-10 overflow-hidden">
      {/* Dynamic Background Elements */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ 
            x: [0, 80, 0], 
            y: [0, -60, 0],
            scale: [1, 1.2, 1] 
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute left-1/4 top-0 h-[200px] w-[200px] rounded-full bg-[#004ab0]/10 blur-[80px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -50, 0], 
            y: [0, 90, 0],
            scale: [1, 1.3, 1] 
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute right-1/4 bottom-0 h-[300px] w-[300px] rounded-full bg-[#c0ff33]/10 blur-[100px]" 
        />
        
        {/* Animated Grid Lines - Pulsing */}
        <motion.div 
          animate={{ opacity: [0.03, 0.08, 0.03] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
          className="absolute inset-0 [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:100px_100px]" 
        />
      </div>

      {/* Background Image */}
      <div className="absolute inset-0 z-0 opacity-80">
        <img 
          src={section2} 
          alt="Section Background" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="text-center mb-6">
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6 }}
            className="text-2xl md:text-4xl font-bold tracking-tight text-white"
          >
            How Market Intelligence is Built for GTM Teams?
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mt-2 text-sm leading-relaxed text-white/80 max-w-3xl mx-auto"
          >
            The combination of large-scale technographics with multi-layer verification is curated to make revenue teams identify, prioritise, and engage high-intent accounts.
          </motion.p>
        </div>

        <div className="relative mt-6 border border-white/10 rounded-[1.5rem] overflow-hidden bg-white/5 backdrop-blur-xl shadow-2xl">
          {/* Vertical and Horizontal lines for the grid effect */}
          <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-3 pointer-events-none">
            <div className="border-r border-white/10 hidden md:block" />
            <div className="border-r border-white/10 hidden md:block" />
          </div>
          <div className="absolute inset-0 grid grid-rows-6 md:grid-rows-2 pointer-events-none">
            <div className="border-b border-white/10" />
            <div className="border-b border-white/10 md:hidden" />
            <div className="border-b border-white/10 md:hidden" />
            <div className="border-b border-white/10 md:hidden" />
            <div className="border-b border-white/10 md:hidden" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 relative z-10">
            {intelligenceItems.map((item, i) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.5, delay: i * 0.05 }}
                className="p-4 md:p-6 hover:bg-white/5 transition-colors group border-b md:border-b-0 last:border-b-0 border-white/10"
              >
                <div className="flex flex-col gap-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-white/10 text-white transition-all duration-300 group-hover:scale-110 group-hover:bg-[#c0ff33] group-hover:text-black group-hover:shadow-[0_0_20px_rgba(192,255,51,0.4)]">
                    <item.icon className="h-5 w-5" />
                  </div>
                  <div className="space-y-2">
                    <h3 className="text-lg font-bold text-white leading-tight group-hover:text-[#c0ff33] transition-colors">{item.title}</h3>
                    <p className="text-xs leading-relaxed text-white/60 group-hover:text-white/90 transition-colors">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
