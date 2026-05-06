import { motion } from "framer-motion";
import { Target, Globe, TrendingUp, BarChart3 } from "lucide-react";
import section3 from "@/assets/section3.png";

export function Platform() {
  return (
    <section id="platform" className="relative min-h-[50vh] sm:min-h-screen w-full overflow-hidden flex items-center py-12 sm:py-24 md:py-32">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={section3} 
          alt="Section Background" 
          className="h-full w-full object-cover object-center"
        />
      </div>

      <div className="relative z-20 mx-auto max-w-7xl px-6 w-full">
        {/* Main Container with Ultra-transparent Glassmorphism */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="relative overflow-hidden rounded-[2.5rem] border border-white/10 bg-white/5 p-8 md:p-16 shadow-2xl backdrop-blur-xl"
        >
          {/* Subtle border glow */}
          <div className="absolute inset-0 rounded-[2.5rem] border border-indigo-500/20 pointer-events-none" />

          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            {/* Left Column */}
            <div className="space-y-12">
              <div className="max-w-md">
                <motion.h2
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-4xl font-bold leading-tight text-white sm:text-5xl lg:text-6xl"
                >
                  Strategies that power revenue <span className="text-shimmer">growth</span>
                </motion.h2>
                <div className="mt-4 h-1.5 w-24 bg-indigo-500 rounded-full" />
              </div>

              <div className="grid gap-6 sm:grid-cols-2">
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.2 }}
                  className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-indigo-500/20 text-indigo-400">
                    <TrendingUp className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-4xl font-bold text-white">+95%</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    B2B marketers use technographics to gain a competitive edge.
                  </p>
                </motion.div>

                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="rounded-3xl border border-white/5 bg-white/5 p-6 backdrop-blur-sm"
                >
                  <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-purple-500/20 text-purple-400">
                    <BarChart3 className="h-6 w-6" />
                  </div>
                  <p className="mt-6 text-4xl font-bold text-white">+85%</p>
                  <p className="mt-2 text-sm leading-relaxed text-white/50">
                    Accurate data helps companies outperform competitors 23x and boost customer retention 6x.
                  </p>
                </motion.div>
              </div>
            </div>

            {/* Vertical Divider (Desktop Only) */}
            <div className="hidden lg:block absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-4/5 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent">
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-3 w-3 rounded-full bg-indigo-500 shadow-[0_0_15px_rgba(99,102,241,0.8)]" />
            </div>

            {/* Right Column */}
            <div className="space-y-12 lg:pl-12">
              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4 }}
                className="flex gap-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-400 shadow-[0_0_20px_rgba(99,102,241,0.1)]">
                  <Target className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Tailored Data Strategy</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    We personalize data solutions for every client, ensuring a consultative approach that aligns with unique niches and ideal customer profiles—never a one-size-fits-all model.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.5 }}
                className="flex gap-6"
              >
                <div className="flex h-16 w-16 shrink-0 items-center justify-center rounded-full border border-purple-500/30 bg-purple-500/10 text-purple-400 shadow-[0_0_20px_rgba(168,85,247,0.1)]">
                  <Globe className="h-8 w-8" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white">Worldwide Data Reach</h3>
                  <p className="mt-3 text-base leading-relaxed text-white/60">
                    Covering 105+ countries, we deliver precise technographics, channel insights, and persona data to fuel your global growth—whether for new clients or partners.
                  </p>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
