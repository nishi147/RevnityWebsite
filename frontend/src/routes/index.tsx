import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { GTMStrategy } from "@/components/GTMStrategy";
import { Awards } from "@/components/Awards";
import { Features } from "@/components/Features";
import { Platform } from "@/components/Platform";
import { Portfolio } from "@/components/Portfolio";
import { MarketIntelligence } from "@/components/MarketIntelligence";
import { Blog } from "@/components/Blog";
import { CtaFooter } from "@/components/CtaFooter";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Revnity — Industry-leading Marketing Solutions" },
      { name: "description", content: "Revnity helps businesses identify, engage, and expand their customer base with data-driven marketing and technographic intelligence." },
      { property: "og:title", content: "Revnity — Industry-leading Marketing Solutions" },
      { property: "og:description", content: "Identify, engage, and expand your customer base with our comprehensive database and global market intelligence." },
    ],
  }),
});

function Index() {
  return (
    <main className="min-h-screen overflow-x-hidden bg-background text-foreground">
      <Navbar />
      <Hero />
      <GTMStrategy />
      <Awards />
      <Features />
      <Platform />
      <Portfolio />
      <MarketIntelligence />

      <Blog />
      <CtaFooter />
    </main>
  );
}
