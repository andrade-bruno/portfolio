import React from "react";
import { SvgIcon } from "./SvgIcon";

export const CalendarIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="3.5" y="5.5" width="17" height="15" rx="2" />
    <path d="M8 3.5v4M16 3.5v4M3.5 9.5h17" />
    <path d="M8 13h2M12 13h2M16 13h0M8 17h2M12 17h2" />
  </SvgIcon>
);
