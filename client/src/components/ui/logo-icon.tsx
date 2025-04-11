import React from "react";

interface LogoIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 24, 
  color = "currentColor",
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 300 300"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* The geometric Z design based on the provided image */}
      <path
        d="M80 60L220 60L280 120L160 120L80 60Z"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M280 120L160 240L80 240L220 120L280 120Z"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M160 240L20 180L80 240L160 240Z"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />
      <path
        d="M80 60L20 180L80 240L160 120L220 120L80 60Z"
        stroke={color}
        strokeWidth="6"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoIcon;