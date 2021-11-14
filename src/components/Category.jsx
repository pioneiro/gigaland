import React from "react";

import getKey from "../utils/functions/getKey.js";

const categories = [
  {
    name: "Art",
    iconClass: "fas fa-image",
  },
  {
    name: "Music",
    iconClass: "fas fa-music",
  },
  {
    name: "Domain Names",
    iconClass: "fas fa-search",
  },
  {
    name: "Virtual Worlds",
    iconClass: "fas fa-globe-americas",
  },
  {
    name: "Trading Cards",
    iconClass: "fas fa-id-card",
  },
  {
    name: "Collectibles",
    iconClass: "fas fa-qrcode",
  },
];

const Category = () => (
  <div className="w-full flex flex-wrap justify-center">
    {categories.map((e) => (
      <div
        key={getKey(e.name)}
        className="w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/6 p-2 lg:p-4 group"
      >
        <div className="h-full w-full p-6 bg-gray-200 flex flex-col justify-center items-center space-y-2 rounded-xl">
          <span className="text-3xl sm:text-4xl text-purple-700 transition transform group-hover:scale-125">
            <i className={e.iconClass}></i>
          </span>
          <span className="text-gray-700 group-hover:text-purple-900 text-center font-medium">
            {e.name}
          </span>
        </div>
      </div>
    ))}
  </div>
);

export default Category;
