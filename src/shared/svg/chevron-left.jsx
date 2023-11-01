import React from "react";

export const ChevronLeft = ({ className, fill }) => {
  return (
    <svg
      width="24"
      className={className}
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chebron">
        <path
          id="Vector"
          d="M15.41 16.58L10.83 12L15.41 7.41L14 6L8 12L14 18L15.41 16.58Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
