import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { motion } from "framer-motion";
import { 
  Search, 
  ArrowRight, 
  Globe, 
  Database, 
  Users, 
  Shield, 
  BarChart, 
  Mail,
  Zap,
  TrendingUp,
  FileText,
  Clock,
  Calendar
} from "lucide-react";
import { useState, useEffect } from 'react';
import { blogApi } from "@/lib/api";
import { Link } from "@tanstack/react-router";

export const Route = createFileRoute("/blog/")({
  component: BlogPage,
});

function BlogPage() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [posts, setPosts] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const dynamicPosts = await blogApi.getPosts();
        setPosts(dynamicPosts);
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  const stats = [
    { label: "VENDORS TRACKED", val: "45K+", icon: <Globe size={16} /> },
    { label: "USER RECORDS", val: "200M+", icon: <Users size={16} /> },
    { label: "COUNTRIES COVERED", val: "105+", icon: <Globe size={16} /> },
    { label: "GLOBAL DATA POINTS", val: "3B+", icon: <Database size={16} /> }
  ];

  const topics = [
    "Technographics", "Data Enrichment", "B2B Lead Gen", "Channel Insights", "MQL & SQL", "Market Intelligence"
  ];

  const filters = [
    "All", "Technographics", "ABM", "GTM Strategy", "Data Intelligence", "Channel & MSP", "Compliance"
  ];

  // Derive posts for layout
  const featuredPost = posts.length > 0 ? posts[0] : null;
  const sidebarPosts = posts.slice(1, 4);
  const latestPosts = posts.slice(4, 10);

  // Fallback content if no posts from admin panel
  const fallbackFeatured = {
    title: "How Technographics Fix ABM Targeting Gaps — And Eliminate Wasted Pipeline",
    tag: "ABM STRATEGY",
    date: "May 2025",
    slug: "fallback-1",
    img: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3",
    description: "Most ABM programs fail not from bad intent, but from incomplete data. When you can't see what technologies your prospects actually run, you're targeting blind. Technographic intelligence changes that — here's how to use it to build a winning account-based strategy in 2025."
  };

  return (
    <main className="min-h-screen bg-[#f8faff] text-slate-900 font-sans">
      <Navbar />

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 bg-gradient-to-br from-[#f0f4f8] to-white overflow-hidden relative">
        <div className="absolute inset-0 opacity-5" style={{ backgroundImage: "linear-gradient(#000 1px, transparent 1px), linear-gradient(90deg, #000 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
        
        <div className="max-w-7xl mx-auto text-center relative z-10">
          <div className="inline-flex items-center gap-2 rounded-full bg-[#c0ff33]/10 px-4 py-1.5 text-sm font-semibold text-[#004ab0] mb-6">
            <span className="w-2 h-2 rounded-full bg-[#c0ff33]"></span>
            INTELLIGENCE HUB
          </div>
          <h1 className="text-5xl md:text-7xl font-bold text-[#0f172a] mb-6 leading-tight">
            B2B Marketing <span className="text-[#004ab0] italic">Insights</span> <br />That Drive Pipeline
          </h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto mb-8">
            Expert thinking on technographics, account-based marketing, and data-driven GTM strategy — built for B2B SaaS teams.
          </p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto mb-16 flex bg-white rounded-full shadow-lg border border-slate-100 overflow-hidden p-1">
            <input 
              type="text" 
              placeholder="Search articles — ABM, technographics, ICP..." 
              className="flex-1 px-6 py-3 text-sm focus:outline-none"
            />
            <button className="bg-[#004ab0] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-blue-700 transition-colors">
              Search
            </button>
          </div>

          {/* Stats */}
          <div className="max-w-4xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, i) => (
              <div key={i} className="border-r border-slate-100 last:border-0">
                <div className="text-3xl font-bold text-[#004ab0] mb-1">{stat.val}</div>
                <div className="text-xs font-bold text-slate-400">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Topics We Cover */}
      <section className="py-6 px-6 bg-slate-50 border-y border-slate-100">
        <div className="max-w-7xl mx-auto flex items-center gap-6 overflow-x-auto">
          <span className="text-xs font-bold text-[#004ab0] shrink-0">TOPICS WE COVER</span>
          <div className="flex gap-3">
            {topics.map((topic, i) => (
              <span key={i} className="text-xs font-semibold text-slate-600 bg-white px-3 py-1.5 rounded-full border border-slate-100 shrink-0">
                {topic}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="py-6 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex items-center gap-4 overflow-x-auto">
          <span className="text-sm font-semibold text-slate-500 shrink-0">Filter by:</span>
          <div className="flex gap-2">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-1.5 text-sm font-semibold rounded-full transition-colors shrink-0 ${
                  activeFilter === filter 
                    ? 'bg-[#004ab0] text-white' 
                    : 'bg-[#f8faff] text-slate-600 hover:bg-slate-100'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Loading State */}
      {loading && (
        <div className="flex justify-center py-20 bg-white">
          <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#004ab0] border-t-transparent" />
        </div>
      )}

      {/* Featured Article & Sidebar */}
      {!loading && (
        <section className="py-12 px-6 bg-white">
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Card */}
            <div className="col-span-1 lg:col-span-2 bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
              <Link 
                to={featuredPost ? "/blog/$slug" : "/blog"} 
                params={featuredPost ? { slug: featuredPost.slug } : undefined}
                className="block flex-1 flex flex-col"
              >
                <div className="h-64 relative overflow-hidden">
                  <img 
                    src={featuredPost?.img || fallbackFeatured.img} 
                    alt={featuredPost?.title || fallbackFeatured.title}
                    className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
                  />
                  <span className="absolute top-4 left-4 text-xs font-bold bg-[#004ab0] text-white px-2 py-1 rounded-full">
                    {featuredPost?.tag || fallbackFeatured.tag}
                  </span>
                </div>
                <div className="p-8 flex-1 flex flex-col justify-between">
                  <div>
                    <div className="text-xs text-slate-400 mb-2">
                      {featuredPost?.date || fallbackFeatured.date} • 5 min read
                    </div>
                    <h2 className="text-2xl font-bold text-[#0f172a] mb-4">
                      {featuredPost?.title || fallbackFeatured.title}
                    </h2>
                    <p className="text-sm text-slate-600 mb-6">
                      {featuredPost?.description || fallbackFeatured.description}
                    </p>
                  </div>
                  <div className="text-sm font-semibold text-[#004ab0] flex items-center gap-1">
                    Read Article <ArrowRight size={14} />
                  </div>
                </div>
              </Link>
            </div>

            {/* Sidebar */}
            <div className="space-y-4">
              <div className="flex justify-between items-center mb-4">
                <h3 className="text-lg font-bold text-[#0f172a]">Featured Articles</h3>
                <Link to="/blog" className="text-sm font-semibold text-[#004ab0]">View all articles →</Link>
              </div>

              {sidebarPosts.length > 0 ? (
                sidebarPosts.map((p, i) => (
                  <Link key={p.id} to="/blog/$slug" params={{ slug: p.slug }} className="block">
                    <div className="bg-white p-4 rounded-xl border border-slate-100 flex gap-4 hover:shadow-sm transition-shadow">
                      <div className={`w-12 h-12 rounded-lg shrink-0 overflow-hidden`}>
                        <img src={p.img} alt={p.title} className="w-full h-full object-cover" />
                      </div>
                      <div>
                        <div className="text-xs font-bold text-[#004ab0] mb-0.5">{p.tag}</div>
                        <h4 className="text-sm font-bold text-[#0f172a] mb-1 leading-tight">{p.title}</h4>
                        <div className="text-xs text-slate-400">{p.date}</div>
                      </div>
                    </div>
                  </Link>
                ))
              ) : (
                <div className="text-sm text-slate-500">No additional featured articles found.</div>
              )}
            </div>
          </div>
        </section>
      )}

      {/* Latest Intelligence */}
      {!loading && latestPosts.length > 0 && (
        <section className="py-12 px-6 bg-[#f8faff]">
          <div className="max-w-7xl mx-auto mb-8">
            <h2 className="text-2xl font-bold text-[#0f172a]">Latest Intelligence</h2>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {latestPosts.map((article, index) => (
              <div key={article.id} className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-md transition-shadow flex flex-col">
                <Link to="/blog/$slug" params={{ slug: article.slug }} className="flex-1 flex flex-col">
                  <div className="h-40 relative overflow-hidden">
                    <img src={article.img} alt={article.title} className="w-full h-full object-cover transition-transform duration-700 hover:scale-105" />
                    <span className="absolute top-3 left-3 text-xs font-bold bg-[#c0ff33] text-slate-900 px-2 py-0.5 rounded-full">
                      NEW
                    </span>
                  </div>
                  <div className="p-6 flex-1 flex flex-col justify-between">
                    <div>
                      <div className="text-xs font-bold text-[#004ab0] mb-1">{article.tag}</div>
                      <h3 className="text-base font-bold text-[#0f172a] mb-2 leading-tight">{article.title}</h3>
                    </div>
                    <div className="flex justify-between items-center text-xs text-slate-400">
                      <span>{article.date}</span>
                      <span className="w-8 h-8 rounded-full border border-slate-100 flex items-center justify-center hover:bg-slate-50">
                        →
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Newsletter */}
      <section className="py-24 px-6 bg-white">
        <div className="max-w-5xl mx-auto bg-[#004ab0] p-12 rounded-3xl text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "radial-gradient(circle at center, #fff 1px, transparent 1px)", backgroundSize: "20px 20px" }}></div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center relative z-10">
            <div>
              <span className="text-xs font-bold bg-white/10 px-2 py-1 rounded-full text-[#c0ff33]">WEEKLY NEWSLETTER</span>
              <h2 className="text-3xl font-bold mt-4 mb-2">
                Get B2B Intelligence Delivered Weekly
              </h2>
              <p className="text-sm text-white/80">
                Join 5,000+ marketers who get our best thinking on technographics, GTM strategy, and market data every Tuesday.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Your work email address" 
                className="px-4 py-3 rounded-xl text-slate-900 focus:outline-none"
              />
              <button className="bg-[#c0ff33] text-slate-900 font-bold py-3 rounded-xl hover:bg-[#a8e62c] transition-colors">
                Subscribe — It's Free
              </button>
              <div className="text-xs text-white/50 text-center">
                No spam. Unsubscribe anytime. GDPR compliant.
              </div>
            </div>
          </div>
        </div>
      </section>

      <CtaFooter />
    </main>
  );
}
