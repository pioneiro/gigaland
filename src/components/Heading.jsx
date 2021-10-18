import React from "react";

const Heading = ({ children }) => (
  <div className="mt-20 mb-8 flex flex-col items-center justify-center group">
    <h1 className="text-3xl font-bold">{children}</h1>
    <div className="mt-5 w-16 group-hover:w-48 transition-all h-0.5 bg-purple-700"></div>
  </div>
);
export default Heading;
