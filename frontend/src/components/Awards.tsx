import { motion } from "framer-motion";
import section2 from "@/assets/section2.png";
import autodesk from "@/assets/autodesk.png";
import epicore from "@/assets/epicore.png";
import fortinet from "@/assets/fortinet.png";
import jtodesk from "@/assets/jtodesk.png";
import oracle from "@/assets/oracle.png";
import powerschool from "@/assets/powerschool.png";
import sap from "@/assets/sap.png";
import sonicwall from "@/assets/sonicwall.png";
import sph from "@/assets/sph.png";
import twilio from "@/assets/twilio.png";
import zerofox from "@/assets/zerofox.png";

const companies = [
  { name: "SonicWall", img: sonicwall },
  { name: "Epicor", img: epicore },
  { name: "Oracle", img: oracle },
  { name: "PowerSchool", img: powerschool },
  { name: "SAP", img: sap },
  { name: "SPH", img: sph },
  { name: "Twilio", img: twilio },
  { name: "ZeroFox", img: zerofox },
  { name: "Fortinet", img: fortinet },
  { name: "Autodesk", img: autodesk },
  { name: "Jtodesk", img: jtodesk },
];

export function Awards() {
  return (
    <section className="relative w-full overflow-hidden bg-[#001b3d] py-10 sm:py-12">
      {/* Premium Blue Background Layering */}
      <div className="absolute inset-0 z-0">
        <img 
          src={section2} 
          alt="Section Background" 
          className="h-full w-full object-cover opacity-30 mix-blend-soft-light"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#001b3d] via-[#004ab0]/10 to-[#001b3d]" />
      </div>

      {/* Dynamic Atmospheric Orbs (Vibrant Blue & Lime) */}
      <div className="absolute top-1/2 left-0 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#c0ff33]/10 blur-[140px] animate-pulse" />
      
      {/* Animated Grid lines (Subtle Light) */}
      <div className="absolute inset-0 z-0 opacity-[0.05] [background-image:linear-gradient(to_right,#ffffff_1px,transparent_1px),linear-gradient(to_bottom,#ffffff_1px,transparent_1px)] [background-size:100px_100px]" />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="text-center mb-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 rounded-full bg-white/5 border border-white/10 px-4 py-1.5 text-xs font-bold text-white/60 uppercase tracking-[0.3em] mb-3"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-[#c0ff33] animate-pulse" />
            Global Reach & Trust
          </motion.div>
          
          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="text-2xl font-black leading-tight text-white sm:text-4xl uppercase tracking-tighter"
          >
            Trusted by <span className="text-[#c0ff33]">Industry Leaders</span> <br />
            Across the Globe
          </motion.h2>
        </div>
      </div>

      {/* High-Performance Infinite Marquee - Full Width */}
      <div className="relative mt-4 flex overflow-hidden py-6">
        <motion.div 
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
          className="flex min-w-full shrink-0 items-center justify-around gap-12 sm:gap-20"
        >
          {[...companies, ...companies].map((company, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: (i % companies.length) * 0.05 }}
              whileHover={{ scale: 1.08, y: -5 }}
              className="group relative flex flex-col items-center gap-4"
            >
              {/* Premium White Card */}
              <div className="relative h-16 w-36 sm:h-20 sm:w-44 flex items-center justify-center rounded-xl bg-white border border-white/20 shadow-[0_15px_35px_-10px_rgba(0,0,0,0.2)] transition-all duration-500 group-hover:scale-105 group-hover:shadow-[0_25px_60px_-15px_rgba(192,255,51,0.2)] overflow-hidden">
                {/* Subtle Internal Glow */}
                <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent opacity-50 transition-opacity" />
                
                {/* Logo Image */}
                <img 
                  src={company.img} 
                  alt={company.name}
                  className="h-10 w-auto max-w-[90%] object-contain relative z-10 transition-transform duration-500 group-hover:scale-110"
                />
              </div>
              
              {/* Label */}
              <span className="text-xs font-bold text-white/30 uppercase tracking-widest transition-colors group-hover:text-[#c0ff33]">
                {company.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
