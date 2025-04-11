import { Link } from "wouter";
import { GradientText } from "@/components/ui/gradient-text";
import { Container } from "@/components/ui/container";

const Footer = () => {
  return (
    <footer id="about" className="bg-neutral-100 pt-12 sm:pt-16 pb-6 sm:pb-8">
      <Container>
        <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-8 mb-10 sm:mb-12 px-4 sm:px-0">
          {/* Company Info */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <div className="flex items-center mb-4 sm:mb-6">
              <span className="text-lg sm:text-xl font-bold">
                Lazor<GradientText>.kit</GradientText>
              </span>
            </div>
            <p className="text-sm sm:text-base text-neutral-400 mb-4">
              The easiest, fastest, and most secure sign-in-with-Solana solution.
            </p>
            <div className="flex space-x-4">
              <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path>
                  <path d="M9 18c-4.51 2-5-2-7-2"></path>
                </svg>
              </a>
              <a href="https://discord.com" target="_blank" rel="noopener noreferrer" className="text-neutral-400 hover:text-accent transition-colors">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-5 w-5">
                  <circle cx="9" cy="12" r="1"></circle>
                  <circle cx="15" cy="12" r="1"></circle>
                  <path d="M7.5 7.2c3.2-1 5.8-1 9 0"></path>
                  <path d="M7.5 16.8c3.2 1 5.8 1 9 0"></path>
                  <path d="M18 8.5v7c0 1-1 2-2 2h-8c-1 0-2-1-2-2v-7c0-1 1-2 2-2h8c1 0 2 1 2 2z"></path>
                </svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Product</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Features</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Pricing</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Integrations</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Enterprise</Link></li>
            </ul>
          </div>

          {/* Documentation */}
          <div className="col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Documentation</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Getting Started</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">API Reference</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Examples</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">SDK Guides</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div className="col-span-2 sm:col-span-2 md:col-span-1">
            <h3 className="font-semibold mb-3 sm:mb-4 text-sm sm:text-base">Company</h3>
            <ul className="space-y-1 sm:space-y-2">
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">About Us</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Blog</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Careers</Link></li>
              <li><Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Contact</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-neutral-200 pt-6 sm:pt-8 flex flex-col md:flex-row justify-between items-center px-4 sm:px-0">
          <div className="text-neutral-400 text-xs sm:text-sm mb-4 md:mb-0 text-center md:text-left">
            &copy; {new Date().getFullYear()} Lazor.kit. All rights reserved.
          </div>
          <div className="flex flex-wrap justify-center md:flex-nowrap md:justify-start space-x-4 sm:space-x-6">
            <Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Privacy Policy</Link>
            <Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Terms of Service</Link>
            <Link href="/" className="text-neutral-400 hover:text-accent transition-colors text-xs sm:text-sm">Cookies</Link>
          </div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
