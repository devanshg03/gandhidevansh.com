"use client";

import React from "react";

type CursorIconProps = React.SVGProps<SVGSVGElement> & { size?: number };

export default function CursorIcon({
  size = 16,
  ...props
}: CursorIconProps): React.ReactElement {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 1024 1024"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
      focusable="false"
      {...props}
    >
      <g clipPath="url(#clip0_4_67)">
        <rect width="1024" height="1024" rx="236" fill="black" />
        <path
          d="M500 179.928C507.426 175.641 516.574 175.641 524 179.928L793.583 335.572C801.008 339.859 805.583 347.782 805.583 356.357V667.644C805.583 676.218 801.008 684.141 793.583 688.428L524 844.072C516.574 848.359 507.426 848.359 500 844.072L230.417 688.428C222.992 684.141 218.417 676.218 218.417 667.644V356.357C218.417 347.782 222.992 339.859 230.417 335.572L500 179.928Z"
          fill="white"
        />
        <path
          d="M781.383 359.999L518.464 815.566C516.419 819.111 511 817.659 511 813.567V512.5L250.848 361.459C247.313 359.407 248.769 354 252.856 354H777.918C780.997 354 782.922 357.333 781.383 359.999Z"
          fill="black"
        />
      </g>
      <defs>
        <clipPath id="clip0_4_67">
          <rect width="1024" height="1024" fill="white" />
        </clipPath>
      </defs>
    </svg>
  );
}
