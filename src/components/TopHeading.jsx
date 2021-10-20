import React from "react";

const TopHeading = ({ title }) => (
  <div
    className="h-80 w-full bg-purple-900 grid place-items-center bg-cover bg-center"
    style={{
      backgroundImage: "url('https://wallpaperaccess.com/full/17494.jpg')",
    }}
  >
    <h1 className="text-gray-200 text-5xl font-semibold">{title}</h1>
  </div>
);

export default TopHeading;
