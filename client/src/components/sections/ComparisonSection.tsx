import { Container } from "@/components/ui/container";
import { GradientText } from "@/components/ui/gradient-text";
import { CheckCircle, XCircle, Clock, Star, Code, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { fadeIn } from "@/lib/animations";

const ComparisonSection = () => {
  const features = [
    {
      name: "Authentication Speed",
      lazorKit: { text: "Milliseconds", icon: <Zap className="inline-block h-4 w-4" />, isPositive: true },
      traditional: { text: "5-15 seconds", icon: <Clock className="inline-block h-4 w-4" />, isPositive: false }
    },
    {
      name: "Additional Apps Required",
      lazorKit: { text: "None", icon: <XCircle className="inline-block h-4 w-4" />, isPositive: true },
      traditional: { text: "Wallet extension/app", icon: <CheckCircle className="inline-block h-4 w-4" />, isPositive: false }
    },
    {
      name: "Biometric Authentication",
      lazorKit: { text: "Native FaceID/Touch", icon: <CheckCircle className="inline-block h-4 w-4" />, isPositive: true },
      traditional: { text: "Varies by wallet", icon: <XCircle className="inline-block h-4 w-4" />, isPositive: false }
    },
    {
      name: "Developer Integration",
      lazorKit: { text: "Simple SDK", icon: <CheckCircle className="inline-block h-4 w-4" />, isPositive: true },
      traditional: { text: "Complex adapters", icon: <Code className="inline-block h-4 w-4" />, isPositive: false }
    },
    {
      name: "User Experience",
      lazorKit: { text: "Seamless", icon: <Star className="inline-block h-4 w-4" />, isPositive: true },
      traditional: { text: "Multiple steps", icon: <Star className="inline-block h-4 w-4 opacity-50" />, isPositive: false }
    }
  ];

  return (
    <section className="py-16 bg-neutral-100">
      <Container>
        <motion.div
          className="text-center mb-16"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Why Choose Lazor.kit?</h2>
          <p className="text-neutral-400 max-w-2xl mx-auto">
            See how Lazor.kit compares to traditional Solana wallet authentication methods.
          </p>
        </motion.div>

        <motion.div
          className="overflow-x-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <table className="w-full bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="px-6 py-4 text-left text-sm font-medium">Features</th>
                <th className="px-6 py-4 text-center text-sm font-medium">
                  <GradientText className="font-bold">Lazor.kit</GradientText>
                </th>
                <th className="px-6 py-4 text-center text-sm font-medium">Traditional Wallet Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 text-sm">{feature.name}</td>
                  <td className="px-6 py-4 text-center text-success">
                    {feature.lazorKit.icon} {feature.lazorKit.text}
                  </td>
                  <td className="px-6 py-4 text-center text-neutral-300">
                    {feature.traditional.icon} {feature.traditional.text}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </motion.div>
      </Container>
    </section>
  );
};

export default ComparisonSection;
