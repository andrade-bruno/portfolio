import React from "react";
import { SvgIcon } from "./SvgIcon";

export const BuildingIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 20V8.5a1.5 1.5 0 0 1 1.5-1.5H9V5.5A1.5 1.5 0 0 1 10.5 4h3A1.5 1.5 0 0 1 15 5.5V7h3.5A1.5 1.5 0 0 1 20 8.5V20" />
    <path d="M8 20v-5h8v5" />
    <path d="M10 8h1M13 8h1M10 11h1M13 11h1M10 14h1M13 14h1" />
  </SvgIcon>
);

