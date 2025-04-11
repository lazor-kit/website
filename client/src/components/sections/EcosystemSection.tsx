import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";
import { GradientText } from "@/components/ui/gradient-text";
import { Laptop, Smartphone, Globe, Cpu, Database } from "lucide-react";

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
            Our comprehensive solution extends across the entire Solana
            ecosystem, providing reliable tools for both end-users and
            developers.
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
              <h3 className="text-xl font-bold mb-8 text-center">
                How Components Work Together
              </h3>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 my-8">
                <div className="bg-purple-50 border border-purple-100 rounded-lg p-4 text-center">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Laptop className="h-6 w-6 text-purple-600" />
                  </div>
                  <h4 className="font-semibold mb-2">dApp</h4>
                  <p className="text-xs text-neutral-500">
                    User-facing application that integrates with Lazor.kit SDK
                  </p>
                </div>

                <div className="bg-indigo-50 border border-indigo-100 rounded-lg p-4 text-center">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Smartphone className="h-6 w-6 text-indigo-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Passkey Authentication</h4>
                  <p className="text-xs text-neutral-500">
                    Device-based biometric authentication using secure enclave
                  </p>
                </div>

                <div className="bg-blue-50 border border-blue-100 rounded-lg p-4 text-center">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Globe className="h-6 w-6 text-blue-600" />
                  </div>
                  <h4 className="font-semibold mb-2">Solana Network</h4>
                  <p className="text-xs text-neutral-500">
                    Blockchain infrastructure where all transactions are
                    processed
                  </p>
                </div>
              </div>

              <div className="hidden md:block h-20 relative">
                <svg
                  className="absolute inset-0 w-full h-full"
                  viewBox="0 0 800 80"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M133 40H400M667 40H400M400 40V80"
                    stroke="#9945FF"
                    strokeWidth="2"
                    strokeDasharray="4 4"
                  />
                </svg>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-violet-50 border border-violet-100 rounded-lg p-4 text-center md:mr-12">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Cpu className="h-6 w-6 text-violet-600" />
                  </div>
                  <h4 className="font-semibold mb-2">
                    Secp256r1 Native Program
                  </h4>
                  <p className="text-xs text-neutral-500">
                    On-chain program that verifies signatures from passkeys
                  </p>
                </div>

                <div className="bg-fuchsia-50 border border-fuchsia-100 rounded-lg p-4 text-center md:ml-12">
                  <div className="inline-block bg-white p-3 rounded-full mb-3 shadow-sm">
                    <Database className="h-6 w-6 text-fuchsia-600" />
                  </div>
                  <h4 className="font-semibold mb-2">PDA Management Program</h4>
                  <p className="text-xs text-neutral-500">
                    Creates and manages programmable deposit accounts for users
                  </p>
                </div>
              </div>

              <div className="text-center mt-8 bg-purple-900/5 p-4 rounded-lg border border-purple-100">
                <p className="text-sm font-medium text-purple-700">
                  Relayer Infrastructure for Gasless Transactions
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default EcosystemSection;
