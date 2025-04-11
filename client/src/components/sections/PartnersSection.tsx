import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { SiSolana, SiOpensea, SiFigma, SiShopify, SiSlack, SiDiscord, SiVercel, SiNetlify, SiBinance, SiStripe, SiAmazon, SiGoogle } from "react-icons/si";

const PartnersSection = () => {
  // Icons row 1 and 2 to create an offset effect
  const iconRow1 = [
    { icon: <SiSolana className="text-accent/80" />, name: "Solana" },
    { icon: <SiOpensea className="text-accent/80" />, name: "OpenSea" },
    { icon: <SiFigma className="text-accent/80" />, name: "Figma" },
    { icon: <SiShopify className="text-accent/80" />, name: "Shopify" },
    { icon: <SiSlack className="text-accent/80" />, name: "Slack" },
    { icon: <SiDiscord className="text-accent/80" />, name: "Discord" },
    { icon: <SiSolana className="text-accent/80" />, name: "Solana" },
    { icon: <SiOpensea className="text-accent/80" />, name: "OpenSea" },
    { icon: <SiFigma className="text-accent/80" />, name: "Figma" },
    { icon: <SiShopify className="text-accent/80" />, name: "Shopify" },
    { icon: <SiSlack className="text-accent/80" />, name: "Slack" },
    { icon: <SiDiscord className="text-accent/80" />, name: "Discord" },
  ];

  const iconRow2 = [
    { icon: <SiVercel className="text-accent/80" />, name: "Vercel" },
    { icon: <SiNetlify className="text-accent/80" />, name: "Netlify" },
    { icon: <SiBinance className="text-accent/80" />, name: "Binance" },
    { icon: <SiStripe className="text-accent/80" />, name: "Stripe" },
    { icon: <SiAmazon className="text-accent/80" />, name: "Amazon" },
    { icon: <SiGoogle className="text-accent/80" />, name: "Google" },
    { icon: <SiVercel className="text-accent/80" />, name: "Vercel" },
    { icon: <SiNetlify className="text-accent/80" />, name: "Netlify" },
    { icon: <SiBinance className="text-accent/80" />, name: "Binance" },
    { icon: <SiStripe className="text-accent/80" />, name: "Stripe" },
    { icon: <SiAmazon className="text-accent/80" />, name: "Amazon" },
    { icon: <SiGoogle className="text-accent/80" />, name: "Google" },
  ];

  return (
    <section className="py-12 sm:py-16 overflow-hidden">
      <Container>
        <motion.div
          className="text-center mb-10 sm:mb-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Trusted By</h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Join the growing ecosystem of dApps and platforms using Lazor.kit for seamless Solana authentication.
          </p>
        </motion.div>
      </Container>
      
      {/* Infinite scrolling logos - Row 1 */}
      <div className="relative w-full overflow-hidden py-6 bg-neutral-50">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-transparent to-neutral-50 z-10"></div>
        <div className="inline-flex animate-marquee">
          {iconRow1.map((item, index) => (
            <div 
              key={`row1-${index}`} 
              className="flex flex-col items-center justify-center mx-8 sm:mx-12"
            >
              <div className="text-4xl sm:text-5xl">{item.icon}</div>
              <span className="mt-2 text-xs sm:text-sm text-neutral-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Infinite scrolling logos - Row 2 (reversed) */}
      <div className="relative w-full overflow-hidden py-6 bg-neutral-50">
        <div className="absolute inset-0 bg-gradient-to-r from-neutral-50 via-transparent to-neutral-50 z-10"></div>
        <div className="inline-flex animate-marquee-reverse">
          {iconRow2.map((item, index) => (
            <div 
              key={`row2-${index}`} 
              className="flex flex-col items-center justify-center mx-8 sm:mx-12"
            >
              <div className="text-4xl sm:text-5xl">{item.icon}</div>
              <span className="mt-2 text-xs sm:text-sm text-neutral-400">{item.name}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PartnersSection;