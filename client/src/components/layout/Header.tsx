import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";
import { Menu, X, Github, Twitter, Mail, MessageCircle, ExternalLink, Copy } from "lucide-react";
import { GradientText } from "@/components/ui/gradient-text";
import { motion, AnimatePresence } from "framer-motion";
import LogoIcon from "@/components/ui/logo-icon";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [location] = useLocation();
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

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
      className={`fixed w-full z-50 transition-all duration-300 ${isScrolled ? "bg-white/95 backdrop-blur-sm shadow-sm" : "bg-white"
        } border-b border-neutral-200`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center">
            <Link href="/" className="flex items-center gap-2 group">
              <div className="transition-transform group-hover:scale-105">
                <LogoIcon
                  size={28}
                  color="#6C22C8"
                  className="drop-shadow-sm"
                />
              </div>
              <span className="text-xl font-bold">
                Lazor<GradientText>Kit</GradientText>
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

          {/* Social Links & Get Started Button (Desktop) */}
          <div className="hidden md:flex items-center space-x-4">
            <div className="flex items-center space-x-3">
              <a 
                href="https://github.com/lazor-kit/lazor-kit" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-purple-700 transition-colors"
                aria-label="GitHub"
              >
                <Github className="h-5 w-5" />
              </a>
              <a 
                href="https://x.com/acclazor" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-neutral-600 hover:text-purple-700 transition-colors"
                aria-label="Twitter"
              >
                <Twitter className="h-5 w-5" />
              </a>
              <a 
                href="mailto:dev-support@lazor.sh"
                className="text-neutral-600 hover:text-purple-700 transition-colors"
                aria-label="Email"
              >
                <Mail className="h-5 w-5" />
              </a>
              <Dialog>
                <DialogTrigger asChild>
                  <button
                    className="text-neutral-600 hover:text-purple-700 transition-colors"
                    aria-label="Contact Business Development"
                  >
                    <img src="/telegram-icon.png" alt="Telegram" className="h-5 w-5" />
                  </button>
                </DialogTrigger>
                <DialogContent className="sm:max-w-md">
                  <DialogHeader>
                    <DialogTitle className="text-center">Connect with our Head of DevRel BD</DialogTitle>
                  </DialogHeader>
                  <div className="flex flex-col items-center space-y-6 p-6">
                    <div className="text-center">
                      <h3 className="text-lg font-semibold mb-2">Metasal</h3>
                      <p className="text-neutral-600 text-sm">Head of Developer Relations & Business Development</p>
                    </div>
                    
                    <div className="w-48 h-48 bg-white rounded-lg p-4 border-2 border-neutral-200">
                      <img 
                        src="/metasal-qr.png" 
                        alt="Metasal Telegram QR Code" 
                        className="w-full h-full object-contain"
                        loading="eager"
                        decoding="async"
                      />
                    </div>
                    
                    <div className="flex flex-col space-y-3 w-full">
                      <div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3">
                        <span className="text-sm font-mono">@metasal</span>
                        <button
                          onClick={() => copyToClipboard("@metasal")}
                          className="text-purple-600 hover:text-purple-700 transition-colors"
                        >
                          {copied ? "Copied!" : <Copy className="h-4 w-4" />}
                        </button>
                      </div>
                      
                      <a
                        href="https://t.me/metasal"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full"
                      >
                        <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                          <MessageCircle className="h-4 w-4 mr-2" />
                          Open in Telegram
                          <ExternalLink className="h-4 w-4 ml-2" />
                        </Button>
                      </a>
                    </div>
                  </div>
                </DialogContent>
              </Dialog>
            </div>
            <a 
              href="https://www.npmjs.com/package/@lazorkit/wallet" 
              target="_blank" 
              rel="noopener noreferrer"
            >
              <Button className="px-4 py-2 bg-primary text-white rounded-lg hover:bg-neutral-700 transition-colors">
                Get Started
              </Button>
            </a>
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
              
              {/* Social Links (Mobile) */}
              <div className="flex items-center justify-center space-x-6 mt-4 pt-4 border-t border-neutral-200">
                <a 
                  href="https://github.com/lazor-kit/lazor-kit" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-purple-700 transition-colors"
                  aria-label="GitHub"
                >
                  <Github className="h-6 w-6" />
                </a>
                <a 
                  href="https://x.com/acclazor" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-neutral-600 hover:text-purple-700 transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-6 w-6" />
                </a>
                <a 
                  href="mailto:dev-support@lazor.sh"
                  className="text-neutral-600 hover:text-purple-700 transition-colors"
                  aria-label="Email"
                >
                  <Mail className="h-6 w-6" />
                </a>
                <Dialog>
                  <DialogTrigger asChild>
                    <button
                      className="text-neutral-600 hover:text-purple-700 transition-colors"
                      aria-label="Contact Business Development"
                    >
                      <img src="/telegram-icon.png" alt="Telegram" className="h-6 w-6" />
                    </button>
                  </DialogTrigger>
                  <DialogContent className="sm:max-w-md w-[90vw] max-h-[80vh] overflow-y-auto">
                    <DialogHeader>
                      <DialogTitle className="text-center text-lg">Connect with our Head of DevRel BD</DialogTitle>
                    </DialogHeader>
                    <div className="flex flex-col items-center space-y-4 p-4">
                      <div className="text-center">
                        <h3 className="text-lg font-semibold mb-1">Metasal</h3>
                        <p className="text-neutral-600 text-sm">Head of Developer Relations & Business Development</p>
                      </div>
                      
                      <div className="w-40 h-40 sm:w-48 sm:h-48 bg-white rounded-lg p-3 border-2 border-neutral-200">
                        <img 
                          src="/metasal-qr.png" 
                          alt="Metasal Telegram QR Code" 
                          className="w-full h-full object-contain"
                          loading="eager"
                          decoding="async"
                        />
                      </div>
                      
                      <div className="flex flex-col space-y-3 w-full">
                        <div className="flex items-center justify-between bg-neutral-50 rounded-lg p-3">
                          <span className="text-sm font-mono">@metasal</span>
                          <button
                            onClick={() => copyToClipboard("@metasal")}
                            className="text-purple-600 hover:text-purple-700 transition-colors"
                          >
                            {copied ? <span className="text-xs">Copied!</span> : <Copy className="h-4 w-4" />}
                          </button>
                        </div>
                        
                        <a
                          href="https://t.me/metasal"
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full"
                        >
                          <Button className="w-full bg-blue-500 hover:bg-blue-600 text-white">
                            <MessageCircle className="h-4 w-4 mr-2" />
                            Open in Telegram
                            <ExternalLink className="h-4 w-4 ml-2" />
                          </Button>
                        </a>
                      </div>
                    </div>
                  </DialogContent>
                </Dialog>
              </div>
              
              <a 
                href="https://www.npmjs.com/package/@lazorkit/wallet" 
                target="_blank" 
                rel="noopener noreferrer"
                className="w-full"
              >
                <Button className="w-full mt-4 bg-primary text-white rounded-md font-medium hover:bg-neutral-700">
                  Get Started
                </Button>
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Header;
