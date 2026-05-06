import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import heroImage from "@/assets/Heroimage.png";

const word = {
  hidden: { y: "120%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const headline = ["Technographic", "Intent", "Insights"];

  return (
    <section id="home" className="relative min-h-screen w-full overflow-hidden flex items-center justify-center pt-24 pb-12 sm:pb-16">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Revnity Hero" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-screen-2xl mx-auto px-6 flex flex-col items-start text-left">
        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.2 }}
          style={{ fontFamily: "'Outfit', sans-serif" }}
          className="text-xl sm:text-3xl md:text-4xl font-bold text-white uppercase tracking-tight"
        >
          Scale Your Go-To-Market Strategy with
        </motion.p>

        <h1 
          style={{ fontFamily: "'Caveat', cursive" }}
          className="mt-2 flex flex-col font-bold leading-[0.9] tracking-tight text-white text-5xl xs:text-6xl sm:text-8xl md:text-9xl lg:text-[10rem] xl:text-[11rem]"
        >
          <div className="flex flex-wrap gap-x-3 gap-y-1 sm:gap-x-5 sm:gap-y-2">
            {headline.map((w, i) => (
              <span key={w + i} className="inline-block align-bottom">
                <motion.span variants={word} initial="hidden" animate="show" custom={i} className="inline-block">
                  {i === 1 ? <span className="text-shimmer">{w}</span> : w}
                </motion.span>
              </span>
            ))}
          </div>
        </h1>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.05, duration: 0.7 }}
          className="mt-8 sm:mt-12 flex flex-row items-center gap-4 sm:gap-8"
        >
          <motion.a
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.96 }}
            href="#contact"
            className="group inline-flex items-center justify-center gap-2 rounded-full bg-lime-grad px-8 py-3 sm:py-4 text-sm sm:text-base font-semibold text-lime-foreground shadow-glow"
          >
            Subscribe →
          </motion.a>
          <a href="#platform" className="group flex items-center gap-3 text-white">
            <span className="relative grid h-10 w-10 sm:h-12 sm:w-12 place-items-center rounded-full bg-white/10 border border-white/20 text-white transition-all group-hover:bg-white/20">
              <Play className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 fill-current" />
            </span>
            <span className="text-sm sm:text-base font-medium">How it Work</span>
          </a>
        </motion.div>

        <motion.p
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 1.3, duration: 0.8 }}
          className="mt-10 sm:mt-12 max-w-2xl text-sm sm:text-lg lg:text-xl font-medium leading-relaxed text-white/90"
        >
          Target high-fit accounts and uncover competitor displacement opportunities with verified intelligence across 35,000+ global vendors. Scale your GTM efficiency and define your market using actionable, data-driven technographic insights.
        </motion.p>
      </div>
    </section>
  );
}
