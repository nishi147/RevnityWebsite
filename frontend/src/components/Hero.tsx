import { motion } from "framer-motion";
import { ArrowUpRight, Play } from "lucide-react";
import heroImage from "@/assets/Heroimage.png";
import { Globe } from "./Globe";

const word = {
  hidden: { y: "120%", opacity: 0 },
  show: (i: number) => ({
    y: 0,
    opacity: 1,
    transition: { delay: 0.1 + i * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] as const },
  }),
};

export function Hero() {
  const headline = "Technographic Intent Insights";

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
        delayChildren: 0.5,
      },
    },
  };

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        damping: 12,
        stiffness: 200,
      },
    },
  };

  return (
    <section id="home" className="relative h-[100dvh] w-full overflow-hidden flex items-center justify-center pt-20 pb-4 sm:pt-24">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={heroImage} 
          alt="Revnity Hero" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      {/* Content Overlay */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 sm:px-12 grid lg:grid-cols-[1.2fr_0.8fr] gap-12 lg:gap-20 items-center">
        <div className="flex flex-col items-start text-left order-1 lg:max-w-xl xl:max-w-2xl">
          <motion.p
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="text-sm sm:text-lg md:text-xl font-bold text-white uppercase tracking-wider opacity-80"
          >
            Scale Your Go-To-Market Strategy with
          </motion.p>

          <motion.h1 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            style={{ fontFamily: "'Outfit', sans-serif" }}
            className="mt-4 font-black uppercase leading-[0.95] tracking-tighter text-white text-2xl sm:text-4xl md:text-5xl lg:text-6xl"
          >
            {headline.split(" ").map((word, wordIndex) => (
              <span key={wordIndex} className="inline-block sm:whitespace-nowrap mr-[0.3em] last:mr-0">
                {word.split("").map((char, charIndex) => (
                  <motion.span
                    key={charIndex}
                    variants={letterVariants}
                    className={`inline-block ${wordIndex === 1 || wordIndex === 2 ? "text-shimmer" : ""}`}
                  >
                    {char}
                  </motion.span>
                ))}
              </span>
            ))}
          </motion.h1>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.2, duration: 0.7 }}
            className="mt-4 sm:mt-12 flex flex-wrap items-center gap-4 sm:gap-8"
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
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-4 sm:mt-12 max-w-3xl text-xs sm:text-base font-medium leading-relaxed text-white/90"
          >
            Target high-fit accounts and uncover competitor displacement opportunities with verified intelligence across 35,000+ global vendors. Scale your GTM efficiency and define your market using actionable, data-driven technographic insights.
          </motion.p>
        </div>

        {/* Globe Section */}
        <div className="flex justify-center items-center order-2 w-full h-[150px] sm:h-[450px] lg:h-auto lg:aspect-square">
          <Globe />
        </div>
      </div>
    </section>
  );
}
