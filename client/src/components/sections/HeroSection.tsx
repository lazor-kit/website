import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { Fingerprint, ArrowRight, CheckCircle, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";

const HeroSection = () => {
  return (
    <section id="home" className="pt-28 pb-16 md:pt-32 md:pb-24">
      <Container>
        <div className="flex flex-col md:flex-row items-center">
          {/* Hero Content */}
          <motion.div
            className="md:w-1/2 md:pr-12"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
          >
            <motion.h1
              className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6"
              variants={slideIn("up", 0.1)}
            >
              Sign-in-with-Solana, <GradientText>simplified</GradientText>
            </motion.h1>
            <motion.p
              className="text-lg md:text-xl text-neutral-400 mb-8"
              variants={slideIn("up", 0.2)}
            >
              The easiest, fastest, and most secure solution for Solana authentication. No wallet apps needed—just your biometrics.
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4"
              variants={slideIn("up", 0.3)}
            >
              <Button className="px-6 py-6 bg-primary text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors flex items-center justify-center h-12">
                Get Started <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" className="px-6 py-6 border border-neutral-200 rounded-lg font-medium hover:bg-neutral-100 transition-colors flex items-center justify-center h-12">
                View Documentation
              </Button>
            </motion.div>
            <motion.div
              className="mt-8 flex items-center gap-2 text-neutral-300"
              variants={slideIn("up", 0.4)}
            >
              <ShieldCheck className="h-5 w-5" />
              <span>Built with Secp256r1 Native Program for maximum security</span>
            </motion.div>
          </motion.div>

          {/* Hero Image/Animation */}
          <motion.div
            className="md:w-1/2 mt-12 md:mt-0"
            initial="hidden"
            animate="visible"
            variants={fadeIn}
            transition={{ delay: 0.3 }}
          >
            <div className="relative bg-neutral-100 rounded-xl p-8 border border-neutral-200">
              {/* Authentication Visualization */}
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6">
                  <Fingerprint className="h-8 w-8 text-accent" />
                </div>
                {/* Code representation */}
                <CodeBlock>
{`// Easy authentication with Lazor.kit
const userWallet = await lazorKit.signIn();
console.log("Authenticated!", userWallet.address);`}
                </CodeBlock>
                {/* Success state */}
                <div className="w-full bg-white rounded-lg p-4 border border-success flex items-center mt-4">
                  <CheckCircle className="h-5 w-5 text-success mr-3" />
                  <span>Authentication successful</span>
                  <div className="ml-auto">
                    <div className="bg-neutral-100 rounded px-2 py-1 text-xs font-mono text-neutral-400">Xd3j...8Fk2</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};

export default HeroSection;
