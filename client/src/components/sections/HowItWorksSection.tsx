import { Container } from "@/components/ui/container";
import { CodeBlock } from "@/components/ui/code-block";
import { Fingerprint, CheckCircle } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

interface StepProps {
  number: number;
  title: string;
  description: string;
  code?: string;
  children?: React.ReactNode;
}

const Step = ({ number, title, description, code, children }: StepProps) => (
  <motion.div
    className="relative pb-6 sm:pb-0"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -5,
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
    }}
    transition={{ duration: 0.5 }}
    viewport={{ once: true }}
  >
    <div className="absolute left-0 top-0 -ml-2 sm:-ml-3 mt-2 bg-gradient-to-br from-purple-500 to-accent rounded-full w-7 h-7 sm:w-9 sm:h-9 flex items-center justify-center text-white text-sm sm:text-base font-bold shadow-md border-2 border-white">
      {number}
    </div>
    <div className="bg-white rounded-xl border border-neutral-200 p-4 sm:p-6 ml-5 sm:ml-6">
      <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-4">{title}</h3>
      <p className="text-sm sm:text-base text-neutral-400 mb-3 sm:mb-4">{description}</p>
      {code && (
        <div className="bg-neutral-100 p-2 sm:p-3 rounded-lg font-mono text-xs sm:text-sm overflow-x-auto">
          <pre><code>{code}</code></pre>
        </div>
      )}
      {children}
    </div>
  </motion.div>
);

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-12 sm:py-16">
      <Container>
        <motion.div
          className="text-center mb-10 sm:mb-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">How It Works</h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Lazor.kit simplifies the Solana authentication process down to a few simple steps.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 relative px-4 sm:px-0">
          <Step
            number={1}
            title="Integrate Lazor.kit"
            description="Add our lightweight SDK to your application with a simple npm install."
            code="npm install @lazorkit/auth"
          />

          <Step
            number={2}
            title="Initialize Authentication"
            description="Add the authentication button to your application's login flow."
            code="const wallet = await lazorKit.signIn();"
          />

          <Step
            number={3}
            title="Biometric Verification"
            description="Users authenticate with FaceID or fingerprint via their device's secure enclave."
          >
            <div className="flex justify-center">
              <div className="flex items-center bg-neutral-100 p-2 sm:p-3 rounded-lg">
                <Fingerprint className="text-accent text-xl sm:text-2xl mr-2" />
                <span className="text-xs sm:text-sm">or</span>
                <svg
                  className="text-accent h-5 w-5 sm:h-6 sm:w-6 ml-2"
                  fill="none"
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                  <circle cx="12" cy="12" r="3" />
                </svg>
              </div>
            </div>
          </Step>
        </div>

        <motion.div
          className="mt-8 sm:mt-12 text-center px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <div className="inline-block bg-neutral-100 rounded-full px-4 sm:px-6 py-2 sm:py-3 font-medium text-sm sm:text-base">
            <CheckCircle className="inline-block text-success mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            Authenticated and ready to use Solana dApps!
          </div>
        </motion.div>

        <motion.div
          className="mt-10 sm:mt-16 mx-4 sm:mx-auto sm:max-w-3xl"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          viewport={{ once: true }}
        >
          <div className="overflow-x-auto">
            <CodeBlock withTerminal fileName="Full Implementation Example">
{`import { LazorKit } from '@lazorkit/auth';

// Initialize Lazor.kit with your API key
const lazorKit = new LazorKit({
  apiKey: 'your_api_key',
  network: 'mainnet'
});

// Handle user sign-in
async function handleSignIn() {
  try {
    // Authenticate user with biometrics
    const wallet = await lazorKit.signIn();
    
    // Access the user's Solana wallet
    console.log('User authenticated!');
    console.log('Wallet address:', wallet.address);
    
    // Execute a transaction
    const transaction = await wallet.sendTransaction({
      to: 'destination_address',
      amount: 0.1,
    });
    
    console.log('Transaction sent:', transaction.signature);
  } catch (error) {
    console.error('Authentication failed:', error);
  }
}`}
            </CodeBlock>
          </div>
        </motion.div>
      </Container>
    </section>
  );
};

export default HowItWorksSection;
