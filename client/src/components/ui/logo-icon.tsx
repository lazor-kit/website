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
      <g>
        {/* Main Z shape with top and bottom */}
        <path
          d="M3 5H21V8H13L3 18V15H11L21 5"
          fill={color}
          fillRule="evenodd"
        />
        {/* Lightning bolt in the middle */}
        <path
          d="M13.5 8L10 12H14.5L11 16"
          stroke={color}
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="bevel"
        />
      </g>
    </svg>
  );
};

export default LogoIcon;