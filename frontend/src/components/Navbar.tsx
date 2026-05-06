import { motion, AnimatePresence, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ArrowUpRight, Menu, Search, X } from "lucide-react";
import { useState, useEffect } from "react";
import { Link, useLocation } from "@tanstack/react-router";
import logoImg from "@/assets/Revnity Marketing.png";

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === "/";
  const { scrollY } = useScroll();

  // Scroll-based transforms for the Home page
  const headerBg = useTransform(
    scrollY,
    [0, 50],
    isHome ? ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.95)"] : ["rgba(255, 255, 255, 0.95)", "rgba(255, 255, 255, 0.95)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    isHome ? ["rgba(255, 255, 255, 0)", "rgba(0, 0, 0, 0.05)"] : ["rgba(0, 0, 0, 0.05)", "rgba(0, 0, 0, 0.05)"]
  );

  const textColor = useTransform(
    scrollY,
    [0, 50],
    isHome ? ["#ffffff", "#0f172a"] : ["#0f172a", "#0f172a"]
  );

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services" },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  return (
    <>
      <motion.header
        style={{ 
          backgroundColor: headerBg,
          borderBottomColor: headerBorder,
          color: textColor 
        }}
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50 px-6 py-4 transition-all duration-300 border-b"
      >
        <div className="mx-auto flex max-w-screen-2xl items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Revnity Marketing Logo" 
              className="h-14 w-auto transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <Link 
                key={link.name} 
                to={link.to} 
                className="group flex items-center gap-1 text-[15px] font-bold transition-colors hover:opacity-70"
                activeProps={{ className: "opacity-100 underline decoration-2 underline-offset-8" }}
              >
                {link.name}
                <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <motion.button 
              style={{ color: textColor }}
              className="hidden sm:grid h-10 w-10 place-items-center rounded-full transition hover:bg-black/5"
            >
              <Search className="h-5 w-5" />
            </motion.button>
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
            >
              <Link
                to="/contact"
                className="hidden items-center gap-2 rounded-xl bg-[#c0ff33] px-6 py-2.5 text-sm font-bold text-black transition-shadow hover:shadow-[0_0_20px_rgba(192,255,51,0.4)] sm:inline-flex"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </motion.div>
            <button 
              onClick={() => setIsOpen(!isOpen)}
              className="grid h-10 w-10 place-items-center rounded-full md:hidden"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="fixed inset-x-4 top-24 z-50 rounded-[2rem] bg-white p-8 border border-slate-100 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <Link 
                  key={link.name} 
                  to={link.to} 
                  onClick={() => setIsOpen(false)}
                  className="flex items-center justify-between text-lg font-bold text-slate-900 transition hover:text-[#004ab0]"
                  activeProps={{ className: "text-[#004ab0]" }}
                >
                  {link.name}
                  <ArrowUpRight className="h-5 w-5 opacity-40" />
                </Link>
              ))}
              <hr className="border-slate-100" />
              <Link 
                to="/contact" 
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-2xl bg-[#c0ff33] py-4 text-sm font-bold text-black"
              >
                Get Started <ArrowRight className="h-4 w-4" />
              </Link>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
