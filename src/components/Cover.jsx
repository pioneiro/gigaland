import React from "react";

const Cover = ({ src, title, margin, fit = "cover" }) => (
  <header
    className={`h-72 lg:h-96 w-full bg-purple-900 grid place-items-center bg-${fit} bg-center ${margin}`}
    style={{
      backgroundImage: `url(${
        src || "https://wallpaperaccess.com/full/17494.jpg"
      })`,
    }}
  >
    {title && <h1 className="text-gray-200 text-5xl font-semibold">{title}</h1>}
  </header>
);

export default Cover;
