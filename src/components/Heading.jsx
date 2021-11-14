import React from "react";

const Heading = ({ children }) => (
  <div className="mt-20 mb-8 flex justify-center group">
    <h1 className="text-3xl font-bold inline-flex flex-col items-center">
      <span className="px-2">{children}</span>
      <div className="mt-5 w-1/2 group-hover:w-full transition-all h-0.5 bg-purple-700"></div>
    </h1>
  </div>
);

export default Heading;
