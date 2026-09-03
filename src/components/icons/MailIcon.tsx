import React from "react";
import { SvgIcon } from "./SvgIcon";

export const MailIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon fill="none" stroke="currentColor" strokeWidth={1.8} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="2" y="4" width="20" height="16" rx="2" />
    <polyline points="2,4 12,13 22,4" />
  </SvgIcon>
);
