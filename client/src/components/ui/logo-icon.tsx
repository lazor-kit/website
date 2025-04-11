import React from "react";
import zLogo from "@assets/_CaAuTmm_400x400.jpg";

interface LogoIconProps {
  size?: number;
  color?: string; // Not used with image but kept for compatibility
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 24, 
  color = "#6C22C8", // Not used with image but kept for compatibility
  className = "" 
}) => {
  // Style to make the dark image background transparent and colorize the white parts
  const logoStyle = {
    width: size,
    height: size,
    filter: "brightness(0) invert(19%) sepia(85%) saturate(5036%) hue-rotate(268deg) brightness(85%) contrast(108%)",
    objectFit: "contain" as "contain"
  };

  return (
    <img 
      src={zLogo} 
      alt="Z Logo" 
      style={logoStyle}
      className={className}
    />
  );
};

export default LogoIcon;