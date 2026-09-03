import React from "react";
import { SvgIcon } from "./SvgIcon";

export const SearchIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </SvgIcon>
);

