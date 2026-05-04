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

  useEffect(() => {
    const fetchPost = async () => {
      try {
        const data = await blogApi.getPostBySlug(slug);
        setPost(data);
      } catch (error) {
        console.error("Failed to fetch post:", error);
      } finally {
        setLoading(false);
      }
    };
    fetchPost();
  }, [slug]);

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-background">
        <div className="h-8 w-8 animate-spin rounded-full border-4 border-primary border-t-transparent" />
      </div>
    );
  }

  if (!post) {
    return (
      <div className="flex min-h-screen flex-col items-center justify-center bg-background p-6 text-center">
        <h1 className="text-4xl font-bold">Post Not Found</h1>
        <p className="mt-4 text-muted-foreground">The article you're looking for doesn't exist.</p>
        <Link to="/" className="mt-8 rounded-full bg-primary px-8 py-3 font-semibold text-primary-foreground transition hover:opacity-90">
          Back to Home
        </Link>
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
          <Link to="/" className="mb-8 inline-flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-primary transition">
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
