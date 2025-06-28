import React, { useState } from "react";

type TooltipProps = {
  content: string;
  position?: "top" | "bottom" | "left" | "right";
  children: React.ReactNode;
};

export const Tooltip = ({
  content,
  position = "top",
  children,
}: TooltipProps) => {
  const [visible, setVisible] = useState(false);

  const positionClasses = {
    top: "bottom-full left-1/2 -translate-x-1/2 mb-2",
    bottom: "top-full left-1/2 -translate-x-1/2 mt-2",
    left: "right-full top-1/2 -translate-y-1/2 mr-2",
    right: "left-full top-1/2 -translate-y-1/2 ml-2",
  };

  const arrowClasses = {
    top: `
      absolute top-full left-1/2 -translate-x-1/2
      border-l-4 border-r-4 border-t-4
      border-transparent border-t-gray-800
      `,
    bottom: `
      absolute bottom-full left-1/2 -translate-x-1/2
      border-l-4 border-r-4 border-b-4
      border-transparent border-b-gray-800
    `,
    left: `
      absolute left-full top-1/2 -translate-y-1/2
      border-t-4 border-b-4 border-l-4
      border-transparent border-l-gray-800
    `,
    right: `
      absolute right-full top-1/2 -translate-y-1/2
      border-t-4 border-b-4 border-r-4
      border-transparent border-r-gray-800
    `,
  };

  return (
    <div
      className="relative inline-block"
      onMouseEnter={() => setVisible(true)}
      onMouseLeave={() => setVisible(false)}
    >
      {children}
      <div
        className={`
    absolute z-50 px-2 py-1 text-sm text-white bg-gray-800 rounded
    whitespace-nowrap pointer-events-none
    ${positionClasses[position]}
    transition-all duration-200 ease-in-out transform
    ${visible ? "opacity-100 scale-100" : "opacity-0 scale-95"}
  `}
      >
        {content}

        <div className={arrowClasses[position]} />
      </div>
    </div>
  );
};
