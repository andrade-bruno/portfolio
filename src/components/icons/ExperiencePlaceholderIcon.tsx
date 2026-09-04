import React from "react";
import { SvgIcon } from "./SvgIcon";

export const ExperiencePlaceholderIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon viewBox="0 0 480 320" {...props}>
    <defs>
      <linearGradient id="experience-placeholder-gradient" x1="0%" x2="100%" y1="0%" y2="100%">
        <stop offset="0%" stopColor="currentColor" stopOpacity="0.2" />
        <stop offset="100%" stopColor="currentColor" stopOpacity="0.05" />
      </linearGradient>
    </defs>

    <rect x="0" y="0" width="480" height="320" rx="18" fill="rgba(255,255,255,0.03)" />
    <circle cx="340" cy="72" r="120" fill="url(#experience-placeholder-gradient)" />
    <circle cx="120" cy="250" r="140" fill="rgba(255,255,255,0.04)" />

    <g fill="currentColor" opacity="0.9">
      <rect x="72" y="76" width="178" height="14" rx="7" fill="currentColor" opacity="0.2" />
      <rect x="72" y="104" width="136" height="14" rx="7" fill="currentColor" opacity="0.14" />
      <rect x="72" y="146" width="226" height="18" rx="9" fill="currentColor" opacity="0.18" />
      <rect x="72" y="182" width="190" height="18" rx="9" fill="currentColor" opacity="0.12" />
    </g>

    <g>
      <rect x="282" y="140" width="112" height="22" rx="11" fill="currentColor" opacity="0.18" />
      <rect x="282" y="176" width="142" height="22" rx="11" fill="currentColor" opacity="0.12" />
      <rect x="282" y="212" width="94" height="22" rx="11" fill="currentColor" opacity="0.1" />
    </g>

    <g>
      <circle cx="322" cy="245" r="34" fill="currentColor" opacity="0.8" />
      <path d="M314 246l7 7 18-22" stroke="#fff" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
    </g>
  </SvgIcon>
);
