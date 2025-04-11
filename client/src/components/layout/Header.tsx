import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { motion, AnimatePresence } from "framer-motion";
import logoImage from "@assets/_CaAuTmm_400x400.jpg";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      setIsScrolled(scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    // Close mobile menu when location changes
    setIsOpen(false);
  }, [location]);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
      
      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <header
      className={`fixed w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
      } border-b border-neutral-200`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="h-8 w-8 overflow-hidden rounded-md transition-transform group-hover:scale-105">
                <img 
                  src={logoImage} 
                  alt="Lazor.kit Logo" 
                  className="h-full w-full object-cover" 
                />
              </div>
              <span className="text-xl font-bold">
                Lazor<GradientText>.kit</GradientText>
              </span>
            </Link>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex space-x-6">
            <button
              onClick={() => scrollToSection("home")}
              className="font-medium text-neutral-600 hover:text-purple-700 transition-colors"
            >
              Home
            </button>
            <button
              onClick={() => scrollToSection("features")}
              className="font-medium text-neutral-600 hover:text-purple-700 transition-colors"
            >
              Features
            </button>
            <button
              onClick={() => scrollToSection("demo")}
              className="font-medium text-neutral-600 hover:text-purple-700 transition-colors"
            >
              Demo
            </button>
            <button
              onClick={() => scrollToSection("how-it-works")}
              className="font-medium text-neutral-600 hover:text-purple-700 transition-colors"
            >
              How It Works
            </button>
            <Link href="/" className="font-medium text-neutral-600 hover:text-purple-700 transition-colors">
              Docs
            </Link>
            <button
              onClick={() => scrollToSection("about")}
              className="font-medium text-neutral-600 hover:text-purple-700 transition-colors"
            >
              About Us
            </button>
          </nav>

          {/* Get Started Button (Desktop) */}
          <div className="hidden md:flex items-center">
            <Button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-neutral-700 transition-colors">
              Get Started
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button 
              type="button" 
              className="text-neutral-600 hover:text-purple-700 focus:outline-none transition-colors"
              onClick={toggleMenu}
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-white border-t border-neutral-200 overflow-hidden"
          >
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <button
                onClick={() => scrollToSection("home")}
                className="block w-full text-left px-3 py-2 rounded-md font-medium text-neutral-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("features")}
                className="block w-full text-left px-3 py-2 rounded-md font-medium text-neutral-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                Features
              </button>
              <button
                onClick={() => scrollToSection("demo")}
                className="block w-full text-left px-3 py-2 rounded-md font-medium text-neutral-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                Demo
              </button>
              <button
                onClick={() => scrollToSection("how-it-works")}
                className="block w-full text-left px-3 py-2 rounded-md font-medium text-neutral-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                How It Works
              </button>
              <Link
                href="/"
                className="block px-3 py-2 rounded-md font-medium text-neutral-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                Docs
              </Link>
              <button
                onClick={() => scrollToSection("about")}
                className="block w-full text-left px-3 py-2 rounded-md font-medium text-neutral-600 hover:text-purple-700 hover:bg-purple-50 transition-colors"
              >
                About Us
              </button>
              <Button className="w-full mt-4 bg-primary text-white rounded-md font-medium hover:bg-neutral-700">
                Get Started
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
