import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { SiSolana, SiMagento } from "react-icons/si";
import { CircleDollarSign, Wallet, Landmark, BarChart3, Coins, Gem, ArrowRightLeft, ShoppingBag, Zap, PiggyBank } from "lucide-react";

const PartnersSection = () => {
  // Icons row 1 and 2 to create an offset effect - Solana dApps
  const iconRow1 = [
    { icon: <SiSolana className="text-purple-600" />, name: "Solana" },
    { icon: <CircleDollarSign className="text-orange-500" />, name: "Jupiter" },
    { icon: <Wallet className="text-blue-500" />, name: "Phantom" },
    { icon: <Landmark className="text-indigo-500" />, name: "Marinade" },
    { icon: <BarChart3 className="text-cyan-500" />, name: "Birdeye" },
    { icon: <ArrowRightLeft className="text-purple-500" />, name: "Raydium" },
    { icon: <SiSolana className="text-purple-600" />, name: "Solana" },
    { icon: <CircleDollarSign className="text-orange-500" />, name: "Jupiter" },
    { icon: <Wallet className="text-blue-500" />, name: "Phantom" },
    { icon: <Landmark className="text-indigo-500" />, name: "Marinade" },
    { icon: <BarChart3 className="text-cyan-500" />, name: "Birdeye" },
    { icon: <ArrowRightLeft className="text-purple-500" />, name: "Raydium" },
  ];

  const iconRow2 = [
    { icon: <Coins className="text-amber-500" />, name: "Meteora" },
    { icon: <Gem className="text-fuchsia-500" />, name: "Magic Eden" },
    { icon: <ShoppingBag className="text-green-500" />, name: "Tensor" },
    { icon: <Zap className="text-pink-500" />, name: "Pump.fun" },
    { icon: <PiggyBank className="text-teal-500" />, name: "Kamino" },
    { icon: <SiMagento className="text-red-500" />, name: "Drift" },
    { icon: <Coins className="text-amber-500" />, name: "Meteora" },
    { icon: <Gem className="text-fuchsia-500" />, name: "Magic Eden" },
    { icon: <ShoppingBag className="text-green-500" />, name: "Tensor" },
    { icon: <Zap className="text-pink-500" />, name: "Pump.fun" },
    { icon: <PiggyBank className="text-teal-500" />, name: "Kamino" },
    { icon: <SiMagento className="text-red-500" />, name: "Drift" },
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