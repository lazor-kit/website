import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";

const CTASection = () => {
  return (
    <section className="py-16 sm:py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-100 transform -skew-y-6 origin-top-right z-0"></div>
      <Container className="relative z-10">
        <motion.div
          className="bg-white rounded-xl sm:rounded-2xl shadow-lg sm:shadow-xl overflow-hidden mx-4 sm:mx-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="flex flex-col md:flex-row items-stretch">
            <motion.div
              className="w-full md:w-1/2 p-6 sm:p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              variants={slideIn("left")}
            >
              <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4 sm:mb-6">
                Ready to simplify your Solana authentication?
              </h2>
              <p className="text-sm sm:text-base text-neutral-400 mb-6 sm:mb-8">
                Get started with Lazor.kit today and provide your users with the fastest, simplest, and most secure sign-in experience on Solana.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                <a 
                  href="https://www.npmjs.com/package/@lazorkit/wallet" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto"
                >
                  <Button className="w-full px-4 sm:px-6 py-5 sm:py-6 bg-primary text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors h-10 sm:h-12 text-sm sm:text-base">
                    Get Started Today
                  </Button>
                </a>
                <Button variant="outline" className="w-full sm:w-auto px-4 sm:px-6 py-5 sm:py-6 border border-neutral-200 rounded-lg font-medium hover:bg-neutral-100 transition-colors h-10 sm:h-12 mt-2 sm:mt-0 text-sm sm:text-base">
                  View Documentation
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="w-full md:w-1/2 bg-accent/10 p-4 sm:p-6 md:p-8 lg:p-12"
              variants={slideIn("right")}
            >
              <div className="overflow-x-auto">
                <CodeBlock withTerminal>
{`$npm install @lazorkit/wallet

# Installing dependencies...
# Installation complete!

$ cat index.js
import { LazorKit } from '@lazorkit/wallet';

const lazorKit = new LazorKit({
  apiKey: 'YOUR_API_KEY'
});

document.getElementById('login').addEventListener('click', async () => {
  const wallet = await lazorKit.signIn();
  console.log(\`User authenticated: \${wallet.address}\`);
});

$ npm start

Server running at http://localhost:3000
✨ Your Lazor.kit integration is ready!`}
                </CodeBlock>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
