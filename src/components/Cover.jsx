import React from "react";

const Cover = ({ src, title }) => (
  <header
    className="h-96 w-full bg-purple-900 grid place-items-center bg-cover bg-center"
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
