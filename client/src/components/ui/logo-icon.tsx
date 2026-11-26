interface LogoIconProps {
  size?: number;
  className?: string;
}

export function LogoIcon({ size = 24, className }: LogoIconProps) {
  return (
    <picture>
      <source srcSet="/brand/mark-dark.svg" media="(prefers-color-scheme: dark)" />
      <img
        src="/brand/mark-light.svg"
        alt=""
        width={size}
        height={size}
        className={className}
      />
    </picture>
  );
}

export default LogoIcon;
