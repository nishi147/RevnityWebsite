import { createFileRoute } from "@tanstack/react-router";
import { blogApi } from "@/lib/api";
import { useState, useEffect } from "react";
import { Navbar } from "@/components/Navbar";
import { CtaFooter } from "@/components/CtaFooter";
import { Calendar, Tag, ChevronLeft } from "lucide-react";
import { Link } from "@tanstack/react-router";
import DOMPurify from "dompurify";
import { motion } from "framer-motion";

export const Route = createFileRoute("/blog/$slug")({
  component: BlogPostPage,
});

function BlogPostPage() {
  const { slug } = Route.useParams();
  const [post, setPost] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchPost = async () => {
      setLoading(true);
      setError(null);
      try {
        const data = await blogApi.getPostBySlug(slug);
        if (data) {
          setPost(data);
        } else {
          setError("Post not found");
        }
      } catch (err: any) {
        console.error("Failed to fetch post:", err);
        setError(err.message || "Failed to load article");
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-10 w-10 animate-spin rounded-full border-4 border-[#c0ff33] border-t-transparent" />
      </div>
    );
  }

  if (error || !post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          className="max-w-md"
        >
          <h1 className="text-5xl font-black text-white uppercase tracking-tighter mb-4">
            Post <span className="text-[#c0ff33]">Not Found</span>
          </h1>
          <p className="text-white/60 mb-8 text-lg">
            {error === "Post not found" 
              ? "The article you're looking for doesn't exist or has been moved." 
              : "There was a problem connecting to our insights database."}
          </p>
          <Link 
            to="/blog" 
            className="rounded-full bg-[#c0ff33] px-8 py-4 font-bold text-black transition hover:shadow-[0_0_30px_rgba(192,255,51,0.4)]"
          >
            Explore Other Articles
          </Link>
        </motion.div>
      </div>
    );
  }

  return (
    <main className="min-h-screen bg-background">
      <Navbar />
      
      <article className="mx-auto max-w-4xl px-6 pt-32 pb-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <Link to="/blog" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition">
            <ChevronLeft className="h-4 w-4" /> Back to blog
          </Link>

          <div className="mb-10 flex flex-wrap items-center gap-4 text-sm text-muted-foreground">
            <span className="flex items-center gap-2 rounded-full bg-primary/10 px-3 py-1 font-semibold text-primary">
              <Tag className="h-3.5 w-3.5" /> {post.tag}
            </span>
            <span className="flex items-center gap-2">
              <Calendar className="h-4 w-4" /> {post.date}
            </span>
            <span>· 5 min read</span>
          </div>

          <h1 className="mb-10 text-4xl font-bold leading-tight sm:text-5xl md:text-6xl">
            {post.title}
          </h1>

          <div className="relative mb-12 aspect-video overflow-hidden rounded-[2rem] shadow-2xl">
            <img src={post.img} alt={post.title} className="h-full w-full object-cover" />
          </div>

          <div 
            className="prose prose-invert prose-lime max-w-none prose-headings:font-bold prose-p:text-lg prose-p:leading-relaxed prose-p:text-slate-300 prose-img:rounded-3xl prose-img:my-12 prose-iframe:rounded-3xl prose-iframe:my-12 prose-iframe:aspect-video prose-iframe:w-full"
            dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(post.content) }}
          />
        </motion.div>
      </article>

      <CtaFooter />
    </main>
  );
}
