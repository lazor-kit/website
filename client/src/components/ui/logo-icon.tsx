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
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Traditional Z with lightning bolt in diagonal */}
      <path
        d="M3 5H21V8H12L13 10L11 14L21 14V19H3V16H12L11 14L13 10L3 10V5Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;