import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Features } from "@/components/Features";
import { CtaFooter } from "@/components/CtaFooter";
import { motion } from "framer-motion";

export const Route = createFileRoute("/services/")({
  component: ServicesPage,
});

function ServicesPage() {
  return (
    <main className="min-h-screen bg-white">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative pt-24 pb-12 px-6 bg-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_-20%,#3b82f633,transparent)]" />
        <div className="max-w-7xl mx-auto relative z-10 text-center">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-3xl xs:text-4xl md:text-7xl font-black text-white uppercase tracking-tighter"
          >
            Our <span className="text-[#c0ff33]">Services</span>
          </motion.h1>
          <p className="mt-6 text-base sm:text-lg text-white/60 max-w-2xl mx-auto">
            High-fidelity data strategies and marketing solutions designed to scale your revenue.
          </p>
        </div>
      </section>

      <Features />
      
      <div className="py-20">
        <CtaFooter />
      </div>
    </main>
  );
}
