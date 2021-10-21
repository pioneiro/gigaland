import React from "react";

const Collection = ({ image, avatar, name, code }) => (
  <div className="group h-72 md:h-96 p-2">
    <div className="h-full w-full rounded-2xl border-2 border-gray-200 overflow-hidden transition hover:shadow-md">
      <div className="h-2/3 overflow-hidden flex items-center justify-center group-hover:opacity-90 transition">
        <img className="bg-gray-300" src={image} alt="" />
      </div>
      <div className="h-1/3 flex flex-col items-center justify-end relative">
        <img
          className="h-12 w-12 md:h-20 md:w-20 bg-gray-300 absolute top-0 right-1/2 transform translate-x-1/2 -translate-y-1/2 border-4 border-gray-200 rounded-full overflow-hidden"
          src={avatar}
          alt=""
        />
        <svg
          className="z-10 h-4 w-4 md:h-6 md:w-6 absolute top-0 bg-gray-200 text-purple-600 rounded-full transform translate-x-4 translate-y-2 md:translate-x-6 md:translate-y-3"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
            clipRule="evenodd"
          />
        </svg>
        <p className="text-sm md:text-xl font-bold text-gray-800">{name}</p>
        <span className="text-sm md:text-lg text-gray-600 mb-5">{code}</span>
      </div>
    </div>
  </div>
);

export default Collection;
