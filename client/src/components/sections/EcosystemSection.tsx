import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { GradientText } from "@/components/ui/gradient-text";
import { Laptop, Smartphone, Globe, Cpu, Database, LucideIcon } from "lucide-react";

interface EcosystemCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  delay?: number;
}

const EcosystemCard = ({ title, description, icon: Icon, delay = 0 }: EcosystemCardProps) => {
  return (
    <motion.div
      className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-6 shadow-sm"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ 
        y: -5, 
        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
        borderColor: "#9945FF20"
      }}
      viewport={{ once: true }}
    >
      <div className="flex items-center mb-4">
        <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center mr-4">
          <Icon className="text-purple-600 h-5 w-5" />
        </div>
        <h3 className="font-bold text-lg">{title}</h3>
      </div>
      <p className="text-neutral-500 text-sm">{description}</p>
    </motion.div>
  );
};

const EcosystemSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-neutral-50 to-white">
      <Container>
        <motion.div
          className="text-center mb-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">
            The <GradientText>Lazor.kit</GradientText> Ecosystem
          </h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            Our comprehensive solution extends across the entire Solana ecosystem, providing reliable tools for both end-users and developers.
          </p>
        </motion.div>

        <div className="px-4">
          {/* Ecosystem Diagram */}
          <motion.div
            className="relative bg-white rounded-xl border border-neutral-200 shadow-sm p-6 mb-12 overflow-hidden"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-purple-50/50 to-transparent"></div>
            
            <div className="relative">
              <h3 className="text-xl font-bold mb-8 text-center">How Components Work Together</h3>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 text-center">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Laptop className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">dApp</h4>
                  <p className="text-xs text-neutral-500">User-facing application that integrates with Lazor.kit SDK</p>
                </div>
                
                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Smartphone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Passkey Authentication</h4>
                  <p className="text-xs text-neutral-500">Device-based biometric authentication using secure enclave</p>
                </div>
                
                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Solana Network</h4>
                  <p className="text-xs text-neutral-500">Blockchain infrastructure where all transactions are processed</p>
                </div>
              </div>
              
              <div className="hidden md:block h-20 relative">
                <svg className="absolute inset-0 w-full h-full" viewBox="0 0 800 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M133 40H400M667 40H400M400 40V80" stroke="#9945FF" strokeWidth="2" strokeDasharray="4 4"/>
                </svg>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-violet-50 border border-violet-100 rounded-lg p-4 text-center md:mr-12">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Cpu className="h-6 w-6 text-violet-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Secp256r1 Native Program</h4>
                  <p className="text-xs text-neutral-500">On-chain program that verifies signatures from passkeys</p>
                </div>
                
                <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-lg p-4 text-center md:ml-12">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Database className="h-6 w-6 text-fuchsia-600" />
                  </div>
                  <h4 className="font-semibold mb-2">PDA Management Program</h4>
                  <p className="text-xs text-neutral-500">Creates and manages programmable deposit accounts for users</p>
                </div>
              </div>

              <div className="text-center mt-8 bg-purple-900/5 p-4 rounded-lg border border-purple-100">
                <p className="text-sm font-medium text-purple-700">Relayer Infrastructure for Gasless Transactions</p>
              </div>
            </div>
          </motion.div>
          
          {/* Integration Points */}
          <h3 className="text-xl font-bold mb-6 text-center">Key Integration Points</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
            <EcosystemCard
              title="Solana dApps"
              description="Easily integrate with any Solana-based decentralized application using our seamless SDK. Works with major frameworks including React, Vue, and vanilla JavaScript."
              icon={Globe}
              delay={0.1}
            />
            
            <EcosystemCard
              title="Native Mobile Apps"
              description="Native SDKs for iOS and Android provide seamless integration with your mobile applications, leveraging device biometrics for authentication."
              icon={Smartphone}
              delay={0.2}
            />
            
            <EcosystemCard
              title="Web Applications"
              description="Our JavaScript SDK makes it simple to add Lazor.kit authentication to any web application, with cross-browser and cross-platform support."
              icon={Laptop}
              delay={0.3}
            />
          </div>
          
          {/* Partners & Integrations */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4">Lazor.kit Integrations</h3>
            <p className="text-sm text-neutral-500 max-w-2xl mx-auto mb-8">
              Our integration partners support a seamless authentication experience across the Solana ecosystem.
            </p>

            <div className="grid grid-cols-2 md:grid-cols-5 gap-6 md:gap-8">
              {/* Jupiter */}
              <motion.div
                className="bg-white h-24 rounded-lg border border-neutral-200 flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-r from-orange-400 to-amber-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <circle cx="12" cy="12" r="10"></circle>
                    <path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
                    <line x1="9" y1="9" x2="9.01" y2="9"></line>
                    <line x1="15" y1="9" x2="15.01" y2="9"></line>
                  </svg>
                </div>
                <span className="font-bold text-sm text-neutral-800">Jupiter</span>
                <span className="text-xs text-neutral-500 mt-1">Swap Aggregator</span>
              </motion.div>

              {/* Meteora */}
              <motion.div
                className="bg-white h-24 rounded-lg border border-neutral-200 flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-r from-blue-400 to-indigo-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M15 5v2"></path>
                    <path d="M9 5v6"></path>
                    <path d="M19 5h1v6a4 4 0 0 1-4 4H4"></path>
                    <path d="M4 11V5h4"></path>
                    <path d="M4 15h11a4 4 0 0 1 4 4v.5"></path>
                    <path d="M9 19h6"></path>
                  </svg>
                </div>
                <span className="font-bold text-sm text-neutral-800">Meteora</span>
                <span className="text-xs text-neutral-500 mt-1">Liquidity Provider</span>
              </motion.div>

              {/* Birdeye */}
              <motion.div
                className="bg-white h-24 rounded-lg border border-neutral-200 flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-r from-sky-400 to-cyan-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path>
                    <polyline points="14 2 14 8 20 8"></polyline>
                    <circle cx="10" cy="13" r="2"></circle>
                    <path d="m17 13-2.4 2.4"></path>
                  </svg>
                </div>
                <span className="font-bold text-sm text-neutral-800">Birdeye</span>
                <span className="text-xs text-neutral-500 mt-1">Analytics Platform</span>
              </motion.div>

              {/* Raydium */}
              <motion.div
                className="bg-white h-24 rounded-lg border border-neutral-200 flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-r from-purple-400 to-fuchsia-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M11.767 19.089c4.924.868 6.14-6.025 1.216-6.894m-1.216 6.894L5.86 18.047m5.908 1.042-.347 1.97m1.563-8.864c4.924.869 6.14-6.025 1.215-6.893m-1.215 6.893-3.94-.694m5.155-6.2L8.29 5.26"></path>
                    <path d="M7.43 8.243c1.345-7.62 13.674-7.62 15.019 0C23.773 15.862 11.444 15.862 10.1 8.243"></path>
                  </svg>
                </div>
                <span className="font-bold text-sm text-neutral-800">Raydium</span>
                <span className="text-xs text-neutral-500 mt-1">DEX & Yield Farming</span>
              </motion.div>

              {/* Pump.fun */}
              <motion.div
                className="bg-white h-24 rounded-lg border border-neutral-200 flex flex-col items-center justify-center p-4 shadow-sm hover:shadow-md transition-shadow"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="bg-gradient-to-r from-pink-400 to-rose-500 text-white rounded-full w-8 h-8 flex items-center justify-center mb-2">
                  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4">
                    <path d="M12 2v4"></path>
                    <path d="m10 13 2-1 2 1"></path>
                    <path d="M5 10h14"></path>
                    <path d="M5 14h14"></path>
                    <path d="M19 10c0-3.3-2.7-6-6-6-3.4 0-6 2.7-6 6"></path>
                    <path d="M5 14c0 3.3 2.7 6 6 6 3.4 0 6-2.7 6-6"></path>
                  </svg>
                </div>
                <span className="font-bold text-sm text-neutral-800">Pump.fun</span>
                <span className="text-xs text-neutral-500 mt-1">Token Creation</span>
              </motion.div>
            </div>

            <div className="flex justify-center mt-10">
              <button className="px-4 py-2 bg-white border border-neutral-200 rounded-md text-sm font-medium text-neutral-800 hover:bg-neutral-50 transition-colors flex items-center shadow-sm">
                Become a Partner
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="ml-2">
                  <path d="M5 12h14"></path>
                  <path d="m12 5 7 7-7 7"></path>
                </svg>
              </button>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;