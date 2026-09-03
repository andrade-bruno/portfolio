import React from "react";
import { SvgIcon } from "./SvgIcon";

export const RoleIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <SvgIcon fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M9 8.5a3 3 0 1 1 6 0v1.5a3 3 0 0 1-6 0V8.5Z" />
    <path d="M5 17.5a7 7 0 0 1 14 0" />
    <path d="M15.5 12.5 19 16l-2 2-3.5-3.5" />
  </SvgIcon>
);
