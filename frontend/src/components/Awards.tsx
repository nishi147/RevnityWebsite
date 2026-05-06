import { motion } from "framer-motion";
import professional from "@/assets/professional.jpg";
import section2 from "@/assets/section2.png";
import singleBrand from "@/assets/Single.png";

export function Awards() {
  return (
    <section className="relative min-h-[50vh] sm:min-h-screen w-full overflow-hidden flex items-center py-12 sm:py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={section2} 
          alt="Section Background" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Abstract Graphics */}
      <div className="absolute top-1/4 -left-20 h-96 w-96 rounded-full bg-primary/20 blur-[120px] animate-pulse" />
      <div className="absolute bottom-1/4 -right-20 h-96 w-96 rounded-full bg-[#004ab0]/30 blur-[120px] animate-pulse delay-1000" />

      <div className="relative z-10 mx-auto grid max-w-7xl gap-16 px-6 md:grid-cols-2 md:items-center">
        <div className="relative">
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="inline-flex flex-col items-start gap-2 rounded-3xl bg-lime-grad p-6 text-lime-foreground shadow-glow mb-10"
          >
            <span className="text-xs font-semibold uppercase tracking-wider">★ Awards</span>
            <span className="font-display text-5xl font-bold leading-none">+10</span>
            <span className="text-sm opacity-80">won this year</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.2 }}
            className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
          >
            Dedicated to the{" "}
            <span className="text-shimmer">growth and success</span>{" "}
            of modern digital businesses.
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
            className="mt-12 flex items-center gap-4 rounded-3xl border border-white/10 bg-white/5 p-4 backdrop-blur-md max-w-xs"
          >
            <img src={professional} alt="Expert" className="h-14 w-14 rounded-full object-cover border-2 border-primary/20 shadow-glow" />
            <div>
              <p className="text-base font-semibold text-white">Sarah Jenkins</p>
              <p className="text-sm text-white/60">Lead Marketing Strategist</p>
            </div>
          </motion.div>
        </div>

        <div className="relative">
          {/* Logo Box with 3D presentation style */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, rotateY: 20, rotateX: 10 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: -15, rotateX: 5 }}
            viewport={{ once: true }}
            transition={{ duration: 1.2, ease: "easeOut" }}
            whileHover={{ rotateY: -5, rotateX: 0, scale: 1.02 }}
            className="relative z-10 w-full rounded-[3rem] bg-white p-8 shadow-[0_30px_60px_-15px_rgba(0,0,0,0.3)] md:p-14 border border-white/20 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-white via-white to-slate-100 opacity-50" />
            <img 
              src={singleBrand} 
              alt="Partner Logos" 
              className="relative z-10 w-full object-contain filter drop-shadow-sm" 
            />
          </motion.div>
          
          {/* Decorative floating element */}
          <motion.div 
            animate={{ y: [0, -20, 0], rotate: [0, 5, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-10 -left-10 h-32 w-32 rounded-3xl bg-lime-grad/20 blur-2xl z-0"
          />
        </div>
      </div>
    </section>
  );
}
