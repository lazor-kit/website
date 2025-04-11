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

  // Mobile card comparison component
  const MobileComparisonCard = ({ feature, index }: { feature: typeof features[0], index: number }) => (
    <motion.div
      className="bg-white rounded-lg border border-neutral-200 overflow-hidden mb-3 sm:hidden"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
    >
      <div className="bg-neutral-50 px-4 py-3 border-b border-neutral-200">
        <h3 className="font-medium text-sm">{feature.name}</h3>
      </div>
      <div className="grid grid-cols-2 divide-x divide-neutral-200">
        <div className="px-4 py-3">
          <div className="text-xs text-neutral-400 mb-1">Lazor.kit</div>
          <div className="text-success text-sm">
            {feature.lazorKit.icon} {feature.lazorKit.text}
          </div>
        </div>
        <div className="px-4 py-3">
          <div className="text-xs text-neutral-400 mb-1">Traditional</div>
          <div className="text-neutral-300 text-sm">
            {feature.traditional.icon} {feature.traditional.text}
          </div>
        </div>
      </div>
    </motion.div>
  );

  return (
    <section className="py-12 sm:py-16 bg-neutral-100">
      <Container>
        <motion.div
          className="text-center mb-10 sm:mb-16 px-4"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeIn}
        >
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 sm:mb-4">Why Choose Lazor.kit?</h2>
          <p className="text-sm sm:text-base text-neutral-400 max-w-2xl mx-auto">
            See how Lazor.kit compares to traditional Solana wallet authentication methods.
          </p>
        </motion.div>

        {/* Mobile Comparison Cards */}
        <div className="px-4 sm:hidden">
          {features.map((feature, index) => (
            <MobileComparisonCard key={index} feature={feature} index={index} />
          ))}
        </div>

        {/* Desktop Table */}
        <motion.div
          className="hidden sm:block overflow-x-auto px-4 sm:px-0"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          <table className="w-full bg-white rounded-xl border border-neutral-200 overflow-hidden">
            <thead>
              <tr className="bg-neutral-100">
                <th className="px-4 sm:px-6 py-3 sm:py-4 text-left text-xs sm:text-sm font-medium">Features</th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-medium">
                  <GradientText className="font-bold">Lazor.kit</GradientText>
                </th>
                <th className="px-3 sm:px-6 py-3 sm:py-4 text-center text-xs sm:text-sm font-medium">Traditional Wallet Apps</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-neutral-200">
              {features.map((feature, index) => (
                <tr key={index}>
                  <td className="px-4 sm:px-6 py-3 sm:py-4 text-xs sm:text-sm">{feature.name}</td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-success text-xs sm:text-sm">
                    {feature.lazorKit.icon} {feature.lazorKit.text}
                  </td>
                  <td className="px-3 sm:px-6 py-3 sm:py-4 text-center text-neutral-300 text-xs sm:text-sm">
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
