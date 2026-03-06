import React from 'react';

interface LogoProps extends React.SVGProps<SVGSVGElement> {
  className?: string;
}

export default function Logo({ className = '', ...props }: LogoProps) {
  return (
    <svg
      viewBox="0 0 160 85"
      xmlns="http://www.w3.org/2000/svg"
      className={`h-12 w-auto ${className}`}
      {...props}
    >
      <g
        fontFamily="system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif"
        fontWeight="800"
        fontSize="38"
        fill="currentColor"
        letterSpacing="-0.03em"
      >
        <text x="0" y="34">Air</text>
        <text x="0" y="74">Calibre</text>
      </g>

      <g>
        {/* Largest circle (right/bottom) */}
        <circle cx="120" cy="36" r="22" className="fill-zinc-400 dark:fill-zinc-500" />
        {/* Medium circle (middle) */}
        <circle cx="88" cy="30" r="16" className="fill-zinc-300 dark:fill-zinc-400" />
        {/* Smallest circle (left/top) */}
        <circle cx="68" cy="24" r="10" className="fill-zinc-200 dark:fill-zinc-300" />
      </g>
    </svg>
  );
}
