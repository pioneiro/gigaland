import React, { useState } from "react";

import { name } from "../../package.json";

const Search = ({ customClass }) => (
  <input
    type="text"
    placeholder="search items here..."
    className={`transition-all rounded-full bg-gray-200 text-gray-700 placeholder-gray-500 text-center sm:text-left ${customClass} focus:ring-1 ring-purple-500`}
  />
);

const Navbar = () => {
  const [navBlur, setNavBlur] = useState("");
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  window.addEventListener("scroll", () =>
    setNavBlur(
      window.scrollY >= 144
        ? "bg-gray-100"
        : ""
    )
  );

  window.onresize = () => {
    if (window.innerWidth > 1024) {
      setMenu(false);
      setSearch(false);
    }
  };

  return (
    <nav
      className={
        (menu ? "h-screen bg-gray-100" : `h-20`) +
        ` w-full z-30 fixed top-0 px-3 text-gray-700 transition lg:h-20 ${!menu && navBlur}`
      }
    >
      <div
        id="nav-container"
        className={
          (menu ? "h-full" : "h-20") +
          " w-full overflow-hidden max-w-7xl mx-auto flex flex-col items-center lg:h-20 lg:flex-row lg:justify-between"
        }
      >
        <div
          id="nav-logo"
          className="h-20 w-full lg:w-auto flex justify-between items-center space-x-2"
        >
          <a href="/" className="h-20 flex items-center p-2">
            <svg
              className="h-12 w-12 mr-1 text-purple-700"
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
          <div className="h-12 flex items-center space-x-2">
            <div className="hidden sm:flex items-center relative">
              <Search
                customClass={
                  (search ? "w-56 pl-5 pr-12" : "mr-6 px-0 w-0") +
                  " h-10 focus:w-72 lg:w-56 lg:px-5"
                }
              />
              <button
                className="h-12 w-12 bg-purple-700 text-gray-200 rounded-full lg:hidden absolute right-0 active:bg-purple-900"
                onClick={() => setSearch(!search)}
              >
                <svg
                  className={`h-12 w-6 mx-auto transition transform ${
                    search ? "rotate-90" : ""
                  }`}
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                  fill="currentColor"
                >
                  <path
                    fillRule="evenodd"
                    d={
                      search
                        ? "M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z"
                        : "M8 4a4 4 0 100 8 4 4 0 000-8zM2 8a6 6 0 1110.89 3.476l4.817 4.817a1 1 0 01-1.414 1.414l-4.816-4.816A6 6 0 012 8z"
                    }
                    clipRule="evenodd"
                  />
                </svg>
              </button>
            </div>
            <button
              className="lg:hidden h-12 w-12 bg-purple-700 text-gray-200 rounded-full active:bg-purple-900"
              onClick={() => setMenu(!menu)}
            >
              <svg
                className={`h-12 w-6 mx-auto transition transform ${
                  menu ? "rotate-90" : ""
                }`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d={
                    menu
                      ? "M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                      : "M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  }
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>
        </div>

        <div
          className={`h-screen w-screen py-4 transition-all relative ${
            menu ? "bottom-0" : "-bottom-full"
          } lg:static lg:w-auto lg:text-lg xl:text-xl`}
        >
          <nav className="h-full w-full flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <Search customClass="sm:hidden h-8 w-1/2 focus:w-3/4 px-5" />
            <a href="home" className="hover:text-purple-700">
              <span>Home</span>
            </a>
            <a href="explore" className="hover:text-purple-700">
              <span>Explore</span>
            </a>
            <a href="pages" className="hover:text-purple-700">
              <span>Pages</span>
            </a>
            <a href="stats" className="hover:text-purple-700">
              <span>Stats</span>
            </a>
            <a href="elements" className="hover:text-purple-700">
              <span>Elements</span>
            </a>
            <button className="bg-purple-700 hover:bg-purple-800 active:bg-purple-900 text-gray-100 rounded-2xl px-5 py-1 lg:px-3">
              <span>Connect Wallet</span>
            </button>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
