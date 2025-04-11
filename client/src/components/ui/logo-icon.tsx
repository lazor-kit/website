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
      {/* Complete Z with thunder styling */}
      <path
        d="M3 4H21V8H15V10H11L9 12H15V14H8L6 16H21V20H3V16H9V14H13L15 12H9V10H16L14 8H3V4Z"
        fill={color}
      />
    </svg>
  );
};

export default LogoIcon;