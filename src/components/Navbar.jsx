import React, { useState } from "react";

import { name } from "../../package.json";

const Navbar = () => {
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  return (
    <nav className="bg-gray-100 text-gray-700 py-3 px-3 w-screen mb-5">
      <div className="max-w-7xl mx-auto lg:flex justify-between">
        <div className="flex justify-between items-center space-x-2">
          <a href="/#" className="flex items-center px-2 py-2 text-purple-700">
            <svg
              className="h-12 w-12 mr-1"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
            <span className="text-3xl font-semibold">{name}</span>
          </a>
          <div className="h-11 flex items-center space-x-2">
            <div className="hidden sm:flex items-center relative">
              <input
                className={
                  (search ? "" : "hidden") +
                  " lg:block h-10 rounded-full pl-5 pr-12 lg:px-5 bg-gray-300 text-gray-900 placeholder-gray-900"
                }
                type="text"
                placeholder="search items here..."
              />
              <div
                className="lg:hidden h-11 w-11 absolute right-0 bg-purple-700 text-gray-200 rounded-full"
                onClick={() => setSearch(!search)}
              >
                <svg
                  className="h-11 w-6 mx-auto"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d="M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    clipRule="evenodd"
                  />
                </svg>
              </div>
            </div>
            <div
              className="lg:hidden h-11 w-11 bg-purple-700 text-gray-200 rounded-full"
              onClick={() => setMenu(!menu)}
            >
              <svg
                className="h-11 w-6 mx-auto"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </div>
          </div>
        </div>

        <div
          className={
            (menu ? "flex" : "hidden") +
            " flex-col items-center space-y-4 h-full w-full py-10 lg:flex lg:flex-row lg:h-auto lg:w-auto lg:py-0 lg:space-y-0 lg:space-x-4 lg:text-lg xl:text-xl"
          }
        >
          <a className="hover:text-purple-700" href="/#">
            <span>Home</span>
          </a>
          <a className="hover:text-purple-700" href="/#">
            <span>Explore</span>
          </a>
          <a className="hover:text-purple-700" href="/#">
            <span>Pages</span>
          </a>
          <a className="hover:text-purple-700" href="/#">
            <span>Stats</span>
          </a>
          <a className="hover:text-purple-700" href="/#">
            <span>Elements</span>
          </a>
          <div className="bg-purple-700 hover:bg-purple-900 text-gray-100 rounded-2xl px-2 py-1">
            <span>Connect Wallet</span>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
