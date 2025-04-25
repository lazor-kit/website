import React from "react";

interface LogoIconProps {
  size?: number;
  color?: string; // Not used with image but kept for compatibility
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 24, 
  color = "#7c3aed", // Not used but kept for compatibility
  className = "" 
}) => {
  const logoStyle = {
    width: size,
    height: size,
    objectFit: "contain" as "contain"
  };

  // Using the logo.png file directly from the public directory
  return (
    <img 
      src="/logo.png" 
      alt="Logo" 
      style={logoStyle}
      className={className}
    />
  );
};

export default LogoIcon;