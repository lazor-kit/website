import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { FloatingParticles } from "@/components/ui/floating-particles";
import { Fingerprint, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section id="home" className="pt-24 pb-12 md:pt-32 md:pb-24 relative overflow-hidden">
      {/* Floating particles background */}
      <FloatingParticles className="opacity-30" />
      
      <Container className="relative z-10">
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <motion.div
            className="w-full md:w-1/2 md:pr-12 text-center md:text-left"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1
              className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-4 md:mb-6"
              variants={slideIn("up", 0.1)}
            >
              Sign-in-with-Solana, <GradientText>simplified</GradientText>
            </motion.h1>
            <motion.p
              className="text-base sm:text-lg md:text-xl text-neutral-400 mb-6 md:mb-8 px-4 md:px-0"
              variants={slideIn("up", 0.2)}
            >
              The easiest, fastest, and most secure solution for Solana authentication. No wallet apps needed—just your biometrics.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start"
              variants={slideIn("up", 0.3)}
            >
              <Button 
                className="px-6 py-6 bg-primary text-white rounded-lg font-medium hover:bg-neutral-700 transition-all flex items-center justify-center h-12 w-full sm:w-auto hover:scale-105"
              >
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button 
                variant="outline" 
                className="px-6 py-6 border border-neutral-200 rounded-lg font-medium hover:bg-neutral-100 transition-all flex items-center justify-center h-12 w-full sm:w-auto hover:scale-105"
              >
                View Documentation
              </Button>
            </motion.div>
            <motion.div
              className="mt-6 md:mt-8 flex items-center gap-2 text-neutral-300 justify-center md:justify-start"
              variants={slideIn("up", 0.4)}
            >
              <ShieldCheck className="h-5 w-5 flex-shrink-0" />
              <span className="text-sm sm:text-base">Built with Secp256r1 Native Program for maximum security</span>
            </motion.div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            className="w-full md:w-1/2 mt-10 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
            whileHover={{ scale: 1.02 }}
          >
            <div className="relative bg-neutral-100 rounded-xl p-4 sm:p-6 md:p-8 border border-neutral-200 mx-4 md:mx-0 shadow-lg">
              {/* Authentication Visualization */}
              <div className="flex flex-col items-center">
                <motion.div 
                  className="w-12 h-12 sm:w-16 sm:h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-4 sm:mb-6 shadow-md"
                  animate={{ 
                    y: [0, -10, 0],
                    boxShadow: [
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)",
                      "0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)",
                      "0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)"
                    ]
                  }}
                  transition={{ 
                    duration: 2,
                    repeat: Infinity,
                    repeatType: "reverse"
                  }}
                >
                  <Fingerprint className="h-6 w-6 sm:h-8 sm:w-8 text-accent" />
                </motion.div>
                {/* Code representation */}
                <div className="w-full overflow-x-auto">
                  <CodeBlock>
{`// Easy authentication with Lazor.kit
const userWallet = await lazorKit.signIn();
console.log("Authenticated!", userWallet.address);`}
                  </CodeBlock>
                </div>
                {/* Success state */}
                <motion.div 
                  className="w-full bg-white rounded-lg p-2 sm:p-4 border border-success flex flex-wrap sm:flex-nowrap items-center mt-4 text-sm sm:text-base"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.8 }}
                >
                  <CheckCircle className="h-4 w-4 sm:h-5 sm:w-5 text-success mr-2 sm:mr-3 flex-shrink-0" />
                  <span className="mr-2">Authentication successful</span>
                  <div className="w-full sm:w-auto sm:ml-auto mt-2 sm:mt-0">
                    <div className="bg-neutral-100 rounded px-2 py-1 text-xs font-mono text-neutral-400 w-full sm:w-auto text-center sm:text-left">Xd3j...8Fk2</div>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
