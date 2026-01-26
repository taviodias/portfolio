import React from "react";

type FlagProps = React.ComponentProps<"svg">;

export const FlagBR = (props: FlagProps) => (
  <svg viewBox="0 0 72 72" {...props}>
    <rect fill="#5DA465" width="72" height="72" />
    <path fill="#F1FF64" d="M36,9 L65,36 L36,63 L7,36 Z" />
    <circle fill="#45618E" cx="36" cy="36" r="14" />
    <path
      fill="#FFF"
      d="M24.7,39.6 C24.7,39.6 30.6,35 47.3,35"
      stroke="#FFF"
      strokeWidth="2"
    />
  </svg>
);

export const FlagUS = (props: FlagProps) => (
  <svg viewBox="0 0 72 72" {...props}>
    <rect fill="#B22234" width="72" height="72" />
    <path
      fill="#FFF"
      d="M0,10 H72 M0,24 H72 M0,38 H72 M0,52 H72 M0,66 H72"
      stroke="#FFF"
      strokeWidth="5"
    />
    <rect fill="#3C3B6E" width="32" height="34" />
    <path
      fill="#FFF"
      d="M5,5h22M5,16h22M5,27h22"
      stroke="#FFF"
      strokeWidth="2"
      strokeDasharray="2 6"
    />
  </svg>
);

export const FlagES = (props: FlagProps) => (
  <svg viewBox="0 0 72 72" {...props}>
    <rect fill="#C60B1E" width="72" height="72" />
    <rect fill="#FFC400" y="18" width="72" height="36" />
  </svg>
);
