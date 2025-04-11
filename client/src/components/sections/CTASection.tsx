import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { CodeBlock } from "@/components/ui/code-block";
import { motion } from "framer-motion";
import { fadeIn, slideIn } from "@/lib/animations";

const CTASection = () => {
  return (
    <section className="py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-neutral-100 transform -skew-y-6 origin-top-right z-0"></div>
      <Container className="relative z-10">
        <motion.div
          className="bg-white rounded-2xl shadow-xl overflow-hidden"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <div className="md:flex items-stretch">
            <motion.div
              className="md:w-1/2 p-8 md:p-12 lg:p-16 flex flex-col justify-center"
              variants={slideIn("left")}
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Ready to simplify your Solana authentication?
              </h2>
              <p className="text-neutral-400 mb-8">
                Get started with Lazor.kit today and provide your users with the fastest, simplest, and most secure sign-in experience on Solana.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button className="px-6 py-6 bg-primary text-white rounded-lg font-medium hover:bg-neutral-700 transition-colors h-12">
                  Get Started Today
                </Button>
                <Button variant="outline" className="px-6 py-6 border border-neutral-200 rounded-lg font-medium hover:bg-neutral-100 transition-colors h-12">
                  View Documentation
                </Button>
              </div>
            </motion.div>
            <motion.div
              className="md:w-1/2 bg-accent/10 p-8 md:p-12 lg:p-16"
              variants={slideIn("right")}
            >
              <CodeBlock withTerminal>
{`$ npm install @lazorkit/auth

# Installing dependencies...
# Installation complete!

$ cat index.js
import { LazorKit } from '@lazorkit/auth';

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
            </motion.div>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default CTASection;
