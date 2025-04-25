import React from "react";

interface LogoIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 24, 
  color = "#7c3aed", // Default purple color matching the image
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 200 200"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Background square with rounded corners */}
      <rect
        width="200"
        height="200"
        rx="20"
        fill={color}
      />
      
      {/* Top triangle with rounded corners */}
      <path
        d="M60 60 C60 60, 140 60, 140 60 C147 60, 145 66, 140 70 L100 100 L60 70 C55 66, 53 60, 60 60 Z"
        fill="white"
      />
      
      {/* Bottom triangle with rounded corners */}
      <path
        d="M60 140 C60 140, 140 140, 140 140 C147 140, 145 134, 140 130 L100 100 L60 130 C55 134, 53 140, 60 140 Z"
        fill="white"
      />
    </svg>
  );
};

export default LogoIcon;