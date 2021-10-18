import React from "react";

const Arrow = ({ onClick, direction }) => (
  <button
    className={`z-10 h-6 w-6 md:h-12 md:w-12 absolute top-1/2 -${direction}-2 md:-${direction}-6 transform -translate-y-1/2  bg-purple-600 hover:bg-purple-700 active:bg-purple-600 text-gray-200 ring-4 ring-gray-200 rounded-full`}
    onClick={onClick}
  >
    <svg
      xmlns="http://www.w3.org/2000/svg"
      className="h-full w-full"
      viewBox="0 0 20 20"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d={
          direction === "left"
            ? "M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z"
            : "M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
        }
        clipRule="evenodd"
      />
    </svg>
  </button>
);

const ArrowRight = ({ onClick }) => <Arrow onClick={onClick} direction="right" />;

const ArrowLeft = ({ onClick }) => <Arrow onClick={onClick} direction="left" />;

export { ArrowLeft, ArrowRight };
