import { useState } from "react";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CodeBlock } from "@/components/ui/code-block";
import { Fingerprint, ArrowRight, CheckCircle, ShieldCheck, Zap, Server, Code } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const DemoSection = () => {
  const [isAuthenticating, setIsAuthenticating] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [selectedTab, setSelectedTab] = useState("secp256r1");

  const handleAuthenticate = () => {
    setIsAuthenticating(true);
    setTimeout(() => {
      setIsAuthenticating(false);
      setIsAuthenticated(true);
    }, 1500);
  };

  const handleReset = () => {
    setIsAuthenticated(false);
  };

  return (
    <section id="demo" className="py-16 bg-neutral-50">
      <Container>
        <motion.div
          className="text-center mb-12 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">See How It Works</h2>
          <p className="text-sm sm:text-base text-neutral-500 max-w-2xl mx-auto">
            Experience our seamless authentication flow and explore the key technical components that power Lazor.kit.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-12 px-4 sm:px-0">
          {/* Demo Animation */}
          <motion.div
            className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-center">Try the Authentication</h3>
            
            <div className="bg-neutral-50 rounded-lg p-6 border border-neutral-200 flex flex-col items-center mb-6">
              {!isAuthenticated ? (
                <>
                  <div className="w-16 h-16 rounded-full bg-white border border-neutral-200 flex items-center justify-center mb-6 shadow-md">
                    <Fingerprint className="h-8 w-8 text-purple-600" />
                  </div>
                  
                  <p className="text-sm text-neutral-500 mb-6 text-center">
                    Click the button below to simulate our fast, secure authentication process
                  </p>
                  
                  <Button 
                    onClick={handleAuthenticate}
                    disabled={isAuthenticating}
                    className="w-full"
                  >
                    {isAuthenticating ? (
                      <div className="flex items-center">
                        <div className="animate-spin h-4 w-4 border-2 border-white border-t-transparent rounded-full mr-2"></div>
                        Authenticating...
                      </div>
                    ) : (
                      <div className="flex items-center">
                        <Fingerprint className="h-4 w-4 mr-2" />
                        Authenticate with Lazor.kit
                      </div>
                    )}
                  </Button>
                </>
              ) : (
                <>
                  <div className="w-16 h-16 rounded-full bg-green-50 border border-green-200 flex items-center justify-center mb-6 shadow-md">
                    <CheckCircle className="h-8 w-8 text-green-500" />
                  </div>
                  
                  <div className="bg-white rounded-lg p-4 border border-green-200 w-full mb-6">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">Wallet Address</span>
                      <code className="text-xs bg-neutral-100 py-1 px-2 rounded">4zJ...8aFq</code>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm font-medium">Authentication Type</span>
                      <span className="text-xs bg-purple-100 text-purple-700 py-1 px-2 rounded">Passkey</span>
                    </div>
                    
                    <div className="flex justify-between items-center mt-3">
                      <span className="text-sm font-medium">Timestamp</span>
                      <span className="text-xs">{new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>
                  
                  <Button 
                    onClick={handleReset}
                    variant="outline"
                    className="w-full"
                  >
                    Reset Demo
                  </Button>
                </>
              )}
            </div>
            
            <div className="text-sm text-neutral-500 bg-neutral-100 p-4 rounded">
              <p className="mb-2 font-medium text-neutral-700">How it works:</p>
              <ol className="list-decimal pl-5 space-y-1">
                <li>User clicks "Authenticate with Lazor.kit"</li>
                <li>A passkey prompt appears (biometric authentication)</li>
                <li>User authenticates with fingerprint/FaceID</li>
                <li>A programmable wallet is created or accessed</li>
                <li>The application receives the wallet credentials</li>
              </ol>
            </div>
          </motion.div>
          
          {/* Technical Components */}
          <motion.div
            className="bg-white rounded-xl border border-neutral-200 shadow-sm p-6"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <h3 className="text-xl font-bold mb-4 text-center">Key Technical Components</h3>
            
            <Tabs 
              defaultValue="secp256r1" 
              value={selectedTab}
              onValueChange={setSelectedTab}
              className="w-full"
            >
              <TabsList className="grid grid-cols-2 md:grid-cols-4 mb-6">
                <TabsTrigger value="secp256r1" className="text-xs sm:text-sm">Secp256r1</TabsTrigger>
                <TabsTrigger value="relayer" className="text-xs sm:text-sm">Relayer</TabsTrigger>
                <TabsTrigger value="pda" className="text-xs sm:text-sm">PDA Program</TabsTrigger>
                <TabsTrigger value="sdk" className="text-xs sm:text-sm">dApps SDK</TabsTrigger>
              </TabsList>
              
              <TabsContent value="secp256r1" className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <ShieldCheck className="text-purple-600 mr-2 h-5 w-5" />
                  <h4 className="font-semibold">Native Program for Secp256r1</h4>
                </div>
                <p className="text-sm text-neutral-500 mb-4">
                  Our custom native program verifies Secp256r1 signatures on-chain, enabling secure authentication using device biometrics.
                </p>
                <CodeBlock className="text-xs" withTerminal fileName="verify-signature.js" showLineNumbers>
{`// Verify a Secp256r1 signature on-chain
const tx = new Transaction();
tx.add(
  secpProgram.verify({
    pubkey: userPubkey,
    message: Buffer.from("Login request"),
    signature: userSignature,
  })
);
const result = await sendAndConfirmTransaction(connection, tx, []);`}
                </CodeBlock>
              </TabsContent>
              
              <TabsContent value="relayer" className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Zap className="text-yellow-500 mr-2 h-5 w-5" />
                  <h4 className="font-semibold">Relayer for Gasless Transactions</h4>
                </div>
                <p className="text-sm text-neutral-500 mb-4">
                  Our relayer infrastructure enables gasless transactions, allowing users to interact with dApps without holding SOL for fees.
                </p>
                <CodeBlock className="text-xs" withTerminal fileName="relayer-transaction.js" showLineNumbers>
{`// Submit a transaction via the Lazor relayer
const transaction = await wallet.createTransaction({
  to: "destination_address",
  amount: 0.5,
  // No gas fees for the user
});

// Relayer handles the fee payment
const result = await lazorKit.relayer.sendTransaction(transaction);
console.log("Transaction sent:", result.signature);`}
                </CodeBlock>
              </TabsContent>
              
              <TabsContent value="pda" className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Server className="text-blue-500 mr-2 h-5 w-5" />
                  <h4 className="font-semibold">Program for Handle PDA</h4>
                </div>
                <p className="text-sm text-neutral-500 mb-4">
                  Our PDA program manages wallet accounts on-chain, providing a secure and programmable wallet experience.
                </p>
                <CodeBlock className="text-xs" withTerminal fileName="pda-wallet.js" showLineNumbers>
{`// Derive the user's PDA wallet address
const [walletAddress] = await PublicKey.findProgramAddress(
  [
    Buffer.from("wallet"),
    userIdentifier.toBuffer(),
  ],
  lazorProgramId
);

// Execute a transaction using the PDA wallet
const tx = await program.methods
  .executeTransaction(params)
  .accounts({
    wallet: walletAddress,
    // Other accounts...
  })
  .rpc();`}
                </CodeBlock>
              </TabsContent>
              
              <TabsContent value="sdk" className="border rounded-lg p-4">
                <div className="flex items-center mb-3">
                  <Code className="text-green-500 mr-2 h-5 w-5" />
                  <h4 className="font-semibold">SDK for dApps</h4>
                </div>
                <p className="text-sm text-neutral-500 mb-4">
                  Our SDK provides developers with an easy integration path for implementing Lazor.kit authentication.
                </p>
                <CodeBlock className="text-xs" withTerminal fileName="sdk-integration.js" showLineNumbers>
{`// Initialize Lazor.kit in your application
import { LazorKit } from '@lazorkit/auth';

const lazorKit = new LazorKit({
  apiKey: 'your_api_key',
  network: 'mainnet'
});

// Easy authentication with one line
document.getElementById('login-button').addEventListener('click', async () => {
  try {
    const wallet = await lazorKit.signIn();
    console.log("User authenticated with wallet:", wallet.address);
    
    // Ready to use for transactions
    const balance = await wallet.getBalance();
  } catch (error) {
    console.error("Authentication failed:", error);
  }
});`}
                </CodeBlock>
              </TabsContent>
            </Tabs>
            
            <div className="mt-6 flex justify-center">
              <Button variant="outline" className="text-sm">
                <a href="https://docs.lazorkit.com" target="_blank" rel="noopener noreferrer" className="flex items-center">
                  View Technical Documentation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </a>
              </Button>
            </div>
          </motion.div>
        </div>
        
        {/* Call to Action */}
        <motion.div
          className="text-center px-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
          viewport={{ once: true }}
        >
          <p className="text-sm sm:text-base text-neutral-500 mb-6 max-w-2xl mx-auto">
            Ready to integrate Lazor.kit's innovative authentication solution into your own application?
          </p>
          <Button className="bg-primary text-white rounded-lg font-medium hover:bg-neutral-700 transition-all flex items-center justify-center mx-auto hover:scale-105">
            Get Started with Lazor.kit <ArrowRight className="ml-2 h-4 w-4" />
          </Button>
        </motion.div>
      </Container>
    </section>
  );
};

export default DemoSection;