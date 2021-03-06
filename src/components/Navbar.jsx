import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";

import siteData from "../utils/data/siteData.js";
import { Web3Context } from "../utils/web3context.js";

const scrollBreakpoint = 256;

const Search = ({ customClass }) => (
  <input
    type="text"
    placeholder="search items here..."
    className={`transition-all rounded-full bg-gray-200 dark:bg-opacity-25 text-gray-700 dark:text-gray-200 placeholder-gray-500 dark:placeholder-gray-300 text-center sm:text-left ${customClass} hover:ring-2 focus:ring-2 ring-purple-500 dark:ring-gray-200`}
  />
);

const Navbar = ({ theme = "light", opaque }) => {
  const { name, logoURL, logoIconClass } = siteData;

  const [navColor, setNavColor] = useState("");
  const [search, setSearch] = useState(false);
  const [menu, setMenu] = useState(false);

  const { data, isConnected, disconnect } = useContext(Web3Context);
  const { address } = data;

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= scrollBreakpoint) {
        document.documentElement.classList.remove("dark");
        setNavColor("bg-gray-100");
      } else setNavColor("bg-transparent");
    };

    window.onresize = () => {
      if (window.innerWidth > 1024) {
        setMenu(false);
        setSearch(false);
      }
    };

    !opaque && window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  });

  if (!menu && window.scrollY < scrollBreakpoint && theme === "dark")
    document.documentElement.classList.add("dark");
  else document.documentElement.classList.remove("dark");

  return (
    <nav
      className={
        (menu
          ? `h-screen ${!opaque && "bg-gray-100"} dark:bg-purple-900`
          : `h-20 ${opaque && "bg-gray-100"}`) +
        ` w-full z-30 fixed top-0 px-3 text-gray-700 dark:text-gray-200 transition lg:h-20 ${
          !menu && navColor
        }`
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
          <Link to="/" className="h-20 flex items-center p-2">
            {logoURL ? (
              <img
                className="h-12 w-12 mr-2 object-cover rounded-full"
                src={logoURL}
                alt=""
              />
            ) : (
              <span className="text-5xl mr-2 text-purple-800 dark:text-gray-200">
                <i className={logoIconClass}></i>
              </span>
            )}
            <span className="text-gray-700 dark:text-gray-200 text-3xl font-semibold lowercase">
              {name}
            </span>
          </Link>
          <div className="h-12 flex items-center space-x-2">
            <div className="hidden sm:flex items-center relative">
              <Search
                customClass={
                  (search ? "w-56 pl-5 pr-12" : "mr-4 px-0 w-0") +
                  " h-10 focus:w-72 lg:w-56 lg:px-5"
                }
              />
              <button
                className="h-12 w-12 bg-purple-700 active:bg-purple-900 dark:bg-gray-200 dark:active:bg-white text-gray-200 dark:text-purple-700 rounded-full lg:hidden absolute right-0"
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
              className="lg:hidden h-12 w-12 bg-purple-700 dark:bg-gray-200 dark:active:bg-white text-gray-200 dark:text-purple-700 rounded-full active:bg-purple-900"
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
          } lg:static lg:h-full lg:w-auto lg:text-lg xl:text-xl`}
        >
          <nav className="h-full w-full flex flex-col items-center space-y-4 lg:flex-row lg:space-x-4 lg:space-y-0">
            <Search customClass="sm:hidden h-8 w-1/2 focus:w-3/4 px-5" />
            <Link to="/" className="lg:transform lg:hover:scale-105">
              <span>Home</span>
            </Link>
            <Link to="/explore" className="lg:transform lg:hover:scale-105">
              <span>Explore</span>
            </Link>
            <Link to="#" className="lg:transform lg:hover:scale-105">
              <span>Pages</span>
            </Link>
            <Link to="#" className="lg:transform lg:hover:scale-105">
              <span>Stats</span>
            </Link>
            <Link to="#" className="lg:transform lg:hover:scale-105">
              <span>Elements</span>
            </Link>
            <Link to={!isConnected() ? "/wallet" : "#"}>
              <button className="bg-purple-700 hover:bg-purple-800 active:bg-purple-700 dark:bg-white dark:hover:bg-gray-100 dark:active:bg-white text-gray-100 dark:text-purple-900 rounded-2xl font-medium px-5 py-1 lg:px-3 relative">
                <span>
                  {isConnected()
                    ? address.slice(0, 4) + "****" + address.slice(-4)
                    : "Connect Wallet"}
                </span>
                {isConnected() && (
                  <span
                    onClick={() => disconnect()}
                    className="absolute top-0 left-0 w-full py-1 text-center bg-purple-700 active:bg-purple-700 dark:bg-white dark:active:bg-white rounded-2xl opacity-0 hover:opacity-100"
                  >
                    Disconnect
                  </span>
                )}
              </button>
            </Link>
          </nav>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
