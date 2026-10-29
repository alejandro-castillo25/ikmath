import type { SVGProps } from "react";

type LogoProps = Omit<SVGProps<SVGSVGElement>, "width" | "height"> & {
  size?: number;
};

export function Logo({ size = 48, ...props }: LogoProps) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 100 100"
      fill="none"
      {...props}
    >
      <defs>
        <clipPath id="deltaClip">
          <rect x="8" y="8" width="84" height="82.98" />
        </clipPath>
      </defs>

      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        transform="scale(1.18)"
        style={{ transformOrigin: "center" }}
        clipPath="url(#deltaClip)"
        d={`
          M 10 90 L 90 90 L 50 10 Z

          M 11 88 L 89 88
          M 12 86 L 88 86
          M 13 84 L 87 84

          M 88 88 L 50 12
          M 87 89 L 49 13
          M 86 90 L 48 14
          M 85 91 L 47 15
        `}
      />

      <text
        x="50"
        y="68"
        textAnchor="middle"
        dominantBaseline="central"
        fill="currentColor"
        style={{
          fontSize: "2.75rem",
          userSelect: "none",
        }}
        fontFamily="Libron, Georgia, 'Times New Roman', serif"
      >
        ik
      </text>
    </svg>
  );
}