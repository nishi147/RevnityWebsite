import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, Calendar, Clock, Sparkles } from "lucide-react";
import { useEffect, useState, useRef } from "react";
import { blogApi } from "@/lib/api";
import { Link } from "@tanstack/react-router";

export function Blog() {
  const [posts, setPosts] = useState<any[]>([]);
  const [featuredPost, setFeaturedPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const containerRef = useRef(null);

  useEffect(() => {
    const fetchPosts = async () => {
      setLoading(true);
      try {
        const dynamicPosts = await blogApi.getPosts();
        if (dynamicPosts && dynamicPosts.length > 0) {
          setFeaturedPost(dynamicPosts[0]);
          setPosts(dynamicPosts.slice(1, 4));
        }
      } catch (error) {
        console.error("Failed to load blog posts:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  if (loading) {
    return (
      <div className="flex justify-center py-32 bg-white">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#004ab0] border-t-transparent" />
      </div>
    );
  }

  if (!featuredPost && posts.length === 0) return null;

  return (
    <section ref={containerRef} className="relative bg-white py-24 sm:py-32 overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute inset-0 z-0 pointer-events-none opacity-40">
        <motion.div 
          animate={{ scale: [1, 1.1, 1], x: [0, 20, 0] }}
          transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
          className="absolute -left-20 top-0 h-[500px] w-[500px] rounded-full bg-[#004ab0]/5 blur-[100px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.2, 1], y: [0, 30, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute -right-20 bottom-0 h-[600px] w-[600px] rounded-full bg-[#c0ff33]/5 blur-[120px]" 
        />
        <div className="absolute inset-0 [background-image:linear-gradient(to_right,#004ab011_1px,transparent_1px),linear-gradient(to_bottom,#004ab011_1px,transparent_1px)] [background-size:60px_60px] opacity-[0.2]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-10 mb-16">
          <div className="max-w-2xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 rounded-full bg-[#004ab0]/10 px-4 py-1.5 text-sm font-bold text-[#004ab0] mb-6"
            >
              <Sparkles size={16} />
              Insights & Intelligence
            </motion.div>
            <motion.h2
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="text-4xl font-black leading-tight text-slate-950 sm:text-6xl uppercase tracking-tighter"
            >
              Blogs, our <span className="text-[#004ab0]">internal</span> <br /> 
              <span className="text-shimmer">activities</span>
            </motion.h2>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <Link
              to="/blog"
              className="group flex items-center gap-4 rounded-2xl bg-slate-950 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-[#004ab0] hover:scale-105 active:scale-95 shadow-xl"
            >
              Discover More
              <ArrowUpRight className="h-5 w-5 transition-transform group-hover:translate-x-1 group-hover:-translate-y-1" />
            </Link>
          </motion.div>
        </div>

        <div className="grid gap-8 lg:grid-cols-12">
          {/* Featured Post */}
          {featuredPost && (
            <motion.div 
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="lg:col-span-7"
            >
              <Link 
                to="/blog/$slug" 
                params={{ slug: featuredPost.slug }} 
                className="group block relative overflow-hidden rounded-[3rem] shadow-2xl bg-white border border-slate-100"
              >
                <div className="relative h-[400px] sm:h-[500px] md:h-[550px] overflow-hidden">
                  <img
                    src={featuredPost.img}
                    alt={featuredPost.title}
                    className="h-full w-full object-cover transition-transform duration-1000 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />
                  
                  <div className="absolute inset-x-0 bottom-0 p-10 md:p-14">
                    <motion.span 
                      whileHover={{ scale: 1.05 }}
                      className="inline-block rounded-full bg-[#c0ff33] px-5 py-1.5 text-xs font-black uppercase tracking-widest text-black mb-6"
                    >
                      {featuredPost.tag}
                    </motion.span>
                    <h3 className="text-3xl font-bold leading-tight text-white md:text-5xl group-hover:text-[#c0ff33] transition-colors">
                      {featuredPost.title}
                    </h3>
                    <div className="mt-6 flex items-center gap-6 text-sm text-white/60 font-medium">
                      <span className="flex items-center gap-2"><Clock size={16} /> 5 min read</span>
                      <span className="flex items-center gap-2"><Calendar size={16} /> {featuredPost.date}</span>
                    </div>
                  </div>
                  
                  <div className="absolute right-10 top-10 flex h-16 w-16 items-center justify-center rounded-full bg-white/10 text-white backdrop-blur-xl border border-white/20 transition-all duration-500 group-hover:bg-[#c0ff33] group-hover:text-black group-hover:scale-110">
                    <ArrowUpRight className="h-7 w-7" />
                  </div>
                </div>
              </Link>
            </motion.div>
          )}

          {/* Side List */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            {posts.map((p, i) => (
              <motion.div
                key={p.id}
                initial={{ opacity: 0, x: 40 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: i * 0.15 }}
              >
                <Link to="/blog/$slug" params={{ slug: p.slug }} className="group block h-full">
                  <article className="flex flex-col sm:flex-row gap-6 p-4 rounded-[2.5rem] bg-slate-50/50 hover:bg-white border border-slate-100 hover:border-[#004ab0]/20 hover:shadow-2xl transition-all duration-500 h-full relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-[#004ab0]/5 rounded-full blur-3xl group-hover:bg-[#004ab0]/10 transition-colors" />
                    
                    <div className="relative h-40 w-full shrink-0 overflow-hidden rounded-[2rem] sm:w-48 shadow-lg">
                      <img
                        src={p.img}
                        alt={p.title}
                        className="h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                      />
                    </div>
                    
                    <div className="flex flex-1 flex-col justify-center py-2 space-y-4 relative z-10">
                      <span className="w-fit rounded-full bg-[#004ab0]/10 px-4 py-1 text-[10px] font-black uppercase tracking-widest text-[#004ab0]">
                        {p.tag}
                      </span>
                      <h4 className="text-xl font-bold leading-snug text-slate-950 transition group-hover:text-[#004ab0]">
                        {p.title}
                      </h4>
                      <div className="flex items-center gap-4 text-xs text-slate-500 font-medium">
                        <span className="flex items-center gap-1.5"><Clock size={12} /> 3 min read</span>
                        <span className="flex items-center gap-1.5"><Calendar size={12} /> {p.date}</span>
                      </div>
                    </div>
                  </article>
                </Link>
              </motion.div>
            ))}
            
          </div>
        </div>
      </div>
    </section>
  );
}
