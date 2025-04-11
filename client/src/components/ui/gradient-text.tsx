import { ReactNode } from "react";

interface GradientTextProps {
  children: ReactNode;
  className?: string;
}

export function GradientText({ children, className = "" }: GradientTextProps) {
  return (
    <span
      className={`bg-gradient-to-r from-[#9945FF] to-[#663399] bg-clip-text text-transparent ${className}`}
    >
      {children}
    </span>
  );
}
