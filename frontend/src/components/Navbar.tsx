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
    isHome ? ["rgba(0, 26, 61, 0)", "rgba(0, 26, 61, 0.95)"] : ["rgba(0, 26, 61, 0.95)", "rgba(0, 26, 61, 0.95)"]
  );

  const headerBorder = useTransform(
    scrollY,
    [0, 50],
    isHome ? ["rgba(255, 255, 255, 0)", "rgba(255, 255, 255, 0.1)"] : ["rgba(255, 255, 255, 0.1)", "rgba(255, 255, 255, 0.1)"]
  );

  const textColor = useTransform(
    scrollY,
    [0, 50],
    ["#ffffff", "#ffffff"]
  );

  const services = [
    { name: "Technographic Intelligence", to: "/services/technographic-intelligence" },
    { name: "Title Based Database", to: "/services/title-based-database" },
    { name: "Channel Partner Insight", to: "/services/channel-partner-insights" },
    { name: "Stack Data Append", to: "/services/stack-data-append" },
    { name: "Data Appending & Discovery", to: "/services/data-appending-and-discovery" },
    { name: "Industry Database", to: "/services/industry-database" },
    { name: "ALL Services", to: "/services" }
  ];

  const companyLinks = [
    { name: "About Us", to: "/about" },
    { name: "Data Collection Methodology", to: "/data-collection-methodology" },
    { name: "Why Revnity Marketing?", to: "/why-revnity" },
    { name: "Privacy Policy", to: "/privacy-policy" },
    { name: "Refund Policy", to: "/refund-policy" },
  ];

  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);

  const navLinks = [
    { name: "Home", to: "/" },
    { name: "Services", to: "/services", dropdown: services },
    { name: "Company", to: "/about", dropdown: companyLinks },
    { name: "Blog", to: "/blog" },
    { name: "Contact", to: "/contact" },
  ];

  const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

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
        className="fixed inset-x-0 top-0 z-50 py-4 transition-all duration-300 border-b"
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 sm:px-12">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 group">
            <img 
              src={logoImg} 
              alt="Revnity Marketing Logo" 
              className="h-16 sm:h-20 w-auto transition-all"
            />
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden items-center gap-8 md:flex">
            {navLinks.map((link) => (
              <div 
                key={link.name} 
                className="relative"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.name)}
                onMouseLeave={() => link.dropdown && setActiveDropdown(null)}
              >
                <Link 
                  to={link.to} 
                  className="group flex items-center gap-1 text-[15px] font-bold transition-colors hover:opacity-70"
                  activeProps={{ className: "opacity-100 underline decoration-2 underline-offset-8" }}
                >
                  {link.name}
                  {link.dropdown ? (
                    <motion.span
                      animate={{ rotate: activeDropdown === link.name ? 180 : 0 }}
                      transition={{ duration: 0.2 }}
                    >
                      <ArrowRight className="h-3.5 w-3.5 rotate-90 opacity-40" />
                    </motion.span>
                  ) : (
                    <ArrowUpRight className="h-3.5 w-3.5 opacity-40 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
                  )}
                </Link>

                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.name && (
                      <motion.div
                        initial={{ opacity: 0, y: 10, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 10, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="absolute left-0 top-full pt-4 w-72"
                      >
                        <div className="rounded-3xl bg-deep p-6 shadow-2xl overflow-hidden border border-white/10">
                          <ul className="flex flex-col gap-1">
                            {link.dropdown.map((item) => (
                              <li key={item.name}>
                                <Link
                                  to={item.to}
                                  className={`block py-2 text-sm font-bold text-white transition-colors hover:opacity-70 ${item.name === "ALL Services" ? "mt-4 pt-4 border-t border-white/20" : ""}`}
                                >
                                  {item.name}
                                </Link>
                              </li>
                            ))}
                          </ul>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
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
            className="fixed inset-x-4 top-24 z-50 rounded-[2rem] bg-deep/95 p-8 border border-white/10 shadow-2xl backdrop-blur-2xl md:hidden"
          >
            <nav className="flex flex-col gap-6">
              {navLinks.map((link) => (
                <div key={link.name}>
                  <Link 
                    to={link.to} 
                    onClick={(e) => {
                      if (link.dropdown) {
                        e.preventDefault();
                        setMobileDropdown(mobileDropdown === link.name ? null : link.name);
                      } else {
                        setIsOpen(false);
                      }
                    }}
                    className="flex items-center justify-between text-lg font-bold text-white transition hover:text-[#c0ff33]"
                    activeProps={{ className: "text-[#c0ff33]" }}
                  >
                    {link.name}
                    {link.dropdown ? (
                      <ArrowRight 
                        className={`h-5 w-5 transition-transform ${mobileDropdown === link.name ? "rotate-90" : ""}`}
                      />
                    ) : (
                      <ArrowUpRight className="h-5 w-5 opacity-40" />
                    )}
                  </Link>
                  {link.dropdown && mobileDropdown === link.name && (
                    <motion.div 
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      className="mt-4 flex flex-col gap-3 pl-4 overflow-hidden"
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item.name}
                          to={item.to}
                          onClick={() => setIsOpen(false)}
                          className="text-sm font-bold text-white/60 hover:text-[#c0ff33]"
                        >
                          {item.name}
                        </Link>
                      ))}
                    </motion.div>
                  )}
                </div>
              ))}
              <hr className="border-white/5" />
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
