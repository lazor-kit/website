import React from "react";
import logoImage from "@assets/Logo-app.png";

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
  // Style to maintain the exact image appearance
  const logoStyle = {
    width: size,
    height: size,
    objectFit: "contain" as "contain"
  };

  return (
    <img 
      src={logoImage} 
      alt="Logo" 
      style={logoStyle}
      className={className}
    />
  );
};

export default LogoIcon;