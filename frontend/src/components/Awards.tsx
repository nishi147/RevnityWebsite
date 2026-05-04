import { motion } from "framer-motion";
import professional from "@/assets/professional.jpg";
import singleBrand from "@/assets/single.png";

export function Awards() {
  return (
    <section className="relative overflow-hidden bg-deep py-24">
      <div className="absolute inset-0 bg-hero opacity-70" />
      <div className="pointer-events-none absolute -left-20 top-20 h-80 w-80 rounded-full bg-accent/30 blur-3xl animate-blob" />

      <div className="relative mx-auto grid max-w-6xl gap-12 px-6 md:grid-cols-2 md:items-center">
        <div>
          <motion.div
            initial={{ scale: 0.6, opacity: 0, rotate: -8 }}
            whileInView={{ scale: 1, opacity: 1, rotate: 0 }}
            viewport={{ once: true }}
            transition={{ type: "spring", stiffness: 120 }}
            className="inline-flex flex-col items-start gap-2 rounded-3xl bg-lime-grad p-6 text-lime-foreground shadow-glow animate-tilt"
          >
            <span className="text-xs font-semibold uppercase tracking-wider">★ Awards</span>
            <span className="font-display text-5xl font-bold leading-none">+10</span>
            <span className="text-sm opacity-80">won this year</span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="mt-8 max-w-md text-3xl font-bold sm:text-4xl"
          >
            More than 100+ companies trusted{" "}
            <span className="text-primary">Revnity Platform</span>
          </motion.h2>

          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-8 flex items-center gap-4 rounded-2xl border border-white/5 bg-white/5 p-3"
          >
            <img src={professional} alt="Expert" className="h-12 w-12 rounded-full object-cover shadow-glow" />
            <div>
              <p className="text-sm font-semibold">Sarah Jenkins</p>
              <p className="text-xs text-muted-foreground">Lead Marketing Strategist</p>
            </div>
          </motion.div>
        </div>

        <div className="flex items-center justify-center rounded-[2rem] bg-white p-6 shadow-xl border border-slate-100 md:p-8">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="w-full"
          >
            <img 
              src={singleBrand} 
              alt="Trusted Companies" 
              className="w-full object-contain" 
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
