import { Container } from "@/components/ui/container";
import { Fingerprint, ShieldCheck, Zap, Code, Wrench, Shield } from "lucide-react";
import { motion } from "framer-motion";
import { staggerContainer, fadeIn } from "@/lib/animations";

interface FeatureCardProps {
  icon: JSX.Element;
  title: string;
  description: string;
  delay?: number;
}

const FeatureCard = ({ icon, title, description, delay = 0 }: FeatureCardProps) => (
  <motion.div
    className="bg-white p-4 sm:p-6 rounded-xl border border-neutral-200 hover:shadow-lg transition-all"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    whileHover={{ 
      y: -5, 
      boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
      borderColor: "#9945FF20"
    }}
    transition={{ duration: 0.5, delay }}
    viewport={{ once: true }}
  >
    <div className="w-10 h-10 sm:w-12 sm:h-12 bg-purple-100 rounded-lg flex items-center justify-center mb-3 sm:mb-4 shadow-sm">
      {icon}
    </div>
    <h3 className="text-lg sm:text-xl font-semibold mb-2 sm:mb-3">{title}</h3>
    <p className="text-sm sm:text-base text-neutral-400">{description}</p>
  </motion.div>
);

const FeaturesSection = () => {
  const features = [
    {
      icon: <Fingerprint className="text-purple-600 text-lg sm:text-xl" />,
      title: "Passkey Authentication",
      description: "Use FaceID or fingerprint biometrics for secure, passwordless authentication with no wallet applications needed."
    },
    {
      icon: <ShieldCheck className="text-indigo-600 text-lg sm:text-xl" />,
      title: "Secp256r1 Native Program",
      description: "Built on secure standards used by major financial institutions, ensuring enterprise-grade security for your applications."
    },
    {
      icon: <Zap className="text-violet-600 text-lg sm:text-xl" />,
      title: "Lightning Fast",
      description: "Authentication in milliseconds without the usual wallet connection delays or approval popups."
    },
    {
      icon: <Code className="text-fuchsia-600 text-lg sm:text-xl" />,
      title: "Programmable Wallets",
      description: "Create customizable programmable wallets that execute any on-chain logic per your application's needs."
    },
    {
      icon: <Wrench className="text-purple-600 text-lg sm:text-xl" />,
      title: "Easy Integration",
      description: "Simple SDK that integrates into your app with just a few lines of code, with support for all major frameworks."
    },
    {
      icon: <Shield className="text-indigo-600 text-lg sm:text-xl" />,
      title: "Enhanced UX",
      description: "Improve user experience with seamless authentication that doesn't interrupt your application flow."
    }
  ];

  return (
    <section id="features" className="py-12 sm:py-16 bg-neutral-100">
      <Container>
        <motion.div
          className="text-center mb-10 sm:mb-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Key Features</h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            Lazor.kit delivers a seamless sign-in experience while maintaining enterprise-grade security.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8 px-4 sm:px-0"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={staggerContainer}
        >
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
              delay={index * 0.1}
            />
          ))}
        </motion.div>
      </Container>
    </section>
  );
};

export default FeaturesSection;
