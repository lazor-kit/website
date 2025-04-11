import { Container } from "@/components/ui/container";
import { motion } from "framer-motion";
import { fadeIn, staggerContainer } from "@/lib/animations";
import { AlertTriangle, CheckCircle, Users, Code, Key, Zap, ShieldCheck, Clock } from "lucide-react";

const ProblemSolutionSection = () => {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-neutral-50">
      <Container>
        <motion.div
          className="text-center mb-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">Current Challenges & Our Solutions</h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            We've identified key pain points in the current wallet ecosystem and developed targeted solutions to address them.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 px-4 sm:px-0">
          {/* Problems Column */}
          <motion.div
            className="bg-white rounded-xl border border-red-100 shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-red-50 p-4 border-b border-red-100">
              <h3 className="text-xl font-bold flex items-center text-red-800">
                <AlertTriangle className="w-5 h-5 mr-2 text-red-500" />
                Current Problems
              </h3>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-red-400" />
                  For End-users
                </h4>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Unreliable Under Traffic</p>
                      <p className="text-neutral-500 text-sm mt-1">Wallets often fail during high network traffic, making transactions unreliable when they matter most.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Key Management Stress</p>
                      <p className="text-neutral-500 text-sm mt-1">Private key management is complex and stressful for users, creating anxiety about security.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Unfamiliar User Experience</p>
                      <p className="text-neutral-500 text-sm mt-1">Externally Owned Accounts (EOAs) feel unfamiliar and complicated to non-technical users.</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-red-400" />
                  For Developers
                </h4>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Unstable Wallet Integration</p>
                      <p className="text-neutral-500 text-sm mt-1">Deep link integrations are unreliable across different wallet providers and devices.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-red-100 rounded-full p-1 mr-3 mt-0.5">
                      <AlertTriangle className="w-4 h-4 text-red-500" />
                    </div>
                    <div>
                      <p className="font-medium">Poor User Experience</p>
                      <p className="text-neutral-500 text-sm mt-1">Inconsistent wallet connectivity creates frustrating experiences for app users, leading to abandonment.</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
          
          {/* Solutions Column */}
          <motion.div
            className="bg-white rounded-xl border border-green-100 shadow-sm overflow-hidden"
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="bg-green-50 p-4 border-b border-green-100">
              <h3 className="text-xl font-bold flex items-center text-green-800">
                <CheckCircle className="w-5 h-5 mr-2 text-green-500" />
                Our Solutions
              </h3>
            </div>
            
            <div className="p-6">
              <div className="mb-8">
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Users className="w-5 h-5 mr-2 text-green-500" />
                  For End-users
                </h4>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.1 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Always Accessible</p>
                      <p className="text-neutral-500 text-sm mt-1">Our solution remains reliable even under high traffic conditions, ensuring consistent access.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">2FA-like Experience</p>
                      <p className="text-neutral-500 text-sm mt-1">Familiar authentication flow with biometrics, eliminating private key management stress.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Simple Recovery</p>
                      <p className="text-neutral-500 text-sm mt-1">Effortless wallet recovery with familiar authentication methods, no seed phrases needed.</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
              
              <div>
                <h4 className="text-lg font-semibold mb-4 flex items-center">
                  <Code className="w-5 h-5 mr-2 text-green-500" />
                  For Developers
                </h4>
                <ul className="space-y-4">
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.4 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Stable Integration</p>
                      <p className="text-neutral-500 text-sm mt-1">Reliable and seamless wallet integration without deep link failures or compatibility issues.</p>
                    </div>
                  </motion.li>
                  
                  <motion.li 
                    className="flex items-start"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 }}
                    viewport={{ once: true }}
                  >
                    <div className="bg-green-100 rounded-full p-1 mr-3 mt-0.5">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                    </div>
                    <div>
                      <p className="font-medium">Effortless Implementation</p>
                      <p className="text-neutral-500 text-sm mt-1">Simple SDK implementation with fewer support issues, reducing development headaches.</p>
                    </div>
                  </motion.li>
                </ul>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default ProblemSolutionSection;