import React from "react";

export const ChevronRight = ({ className, fill }) => {
  return (
    <svg
      width="24"
      overflow="visible"
      className={className}
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g id="chebron">
        <path
          id="Vector"
          d="M8.59 16.58L13.17 12L8.59 7.41L10 6L16 12L10 18L8.59 16.58Z"
          fill={fill}
        />
      </g>
    </svg>
  );
};
