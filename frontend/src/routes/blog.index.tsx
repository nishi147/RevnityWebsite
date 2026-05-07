import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Blog as BlogSection } from "@/components/Blog";
import { CtaFooter } from "@/components/CtaFooter";
import { motion } from "framer-motion";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
});

function BlogPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#c0ff3315,transparent)]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl xs:text-4xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Revnity <span className="text-[#c0ff33]">Insights</span>
          </motion.h1>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            Stay ahead with the latest in technographic intelligence and B2B marketing strategy.
          </p>
        </div>
      </section>

      <div className="py-12">
        <BlogSection />
      </div>
      
      <CtaFooter />
    </main>
  );
}
