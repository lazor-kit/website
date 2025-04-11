import React from "react";

interface LogoIconProps {
  size?: number;
  color?: string;
  className?: string;
}

export const LogoIcon: React.FC<LogoIconProps> = ({ 
  size = 24, 
  color = "#6C22C8", // Default purple color
  className = "" 
}) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Stylized Z based on provided image */}
      <path
        d="M30 60L170 60L210 110L150 110L150 140L90 140L90 170L210 170L170 220L30 220L70 170L130 170L130 140L190 140L190 110L70 110L30 60Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;