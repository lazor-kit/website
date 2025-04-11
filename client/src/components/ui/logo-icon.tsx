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
      viewBox="0 0 240 240"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
    >
      {/* More accurate representation based on the provided image */}
      <path
        d="M40 60 L180 60 L240 120 M240 120 L160 200 L80 200 M80 200 L40 160 L100 120 M100 120 L40 60 M100 120 L160 200 M100 120 L180 60"
        stroke={color}
        strokeWidth="3"
        strokeLinejoin="round"
        strokeLinecap="round"
        fill="none"
      />
    </svg>
  );
};

export default LogoIcon;