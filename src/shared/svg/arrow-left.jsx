import React from "react";

export const ArrowLeft = ({ width = 24, height = 24, ...props }) => {
  return (
    <svg
      width={width}
      height={height}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <g id="arrows">
        <path
          id="Vector"
          d="M4 11.0001V13.0001H16L10.5 18.5001L11.92 19.9201L19.84 12.0001L11.92 4.08008L10.5 5.50008L16 11.0001H4Z"
          fill="#D93B32"
        />
      </g>
    </svg>
  );
};
