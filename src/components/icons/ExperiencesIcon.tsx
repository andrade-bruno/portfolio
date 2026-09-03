import React from "react";
import { SvgIcon } from "./SvgIcon";

export const ExperiencesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3" y="4" width="18" height="16" rx="2" />
    <circle cx="9" cy="10" r="2" />
    <path d="M6 20v-1a3 3 0 0 1 6 0v1M14 10h4M14 14h4" />
  </SvgIcon>
);

