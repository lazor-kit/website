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
      viewBox="0 0 400 400"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* Exact Z outline from the image */}
      <path
        d="M83 85L276 85L317 132L212 192L317 255L276 315L83 315L125 255L229 196L125 132L83 85Z"
        stroke={color}
        strokeWidth="6"
        fill="none"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default LogoIcon;