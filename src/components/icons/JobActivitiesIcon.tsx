import React from "react";
import { SvgIcon } from "./SvgIcon";

export const JobActivitiesIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon fill="none" stroke="currentColor" strokeWidth={0.1} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect x="1" y="1" width="22" height="22" rx="3" fill="none" stroke="currentColor" strokeWidth="1.5" />
    <g fill="currentColor">
      <rect x="5" y="6" width="2" height="2" rx="0.3" />
      <rect x="9" y="6" width="10" height="2" rx="0.3" />

      <rect x="5" y="10" width="2" height="2" rx="0.3" />
      <rect x="9" y="10" width="10" height="2" rx="0.3" />

      <rect x="5" y="14" width="2" height="2" rx="0.3" />
      <rect x="9" y="14" width="10" height="2" rx="0.3" />
    </g>
  </SvgIcon>
);
