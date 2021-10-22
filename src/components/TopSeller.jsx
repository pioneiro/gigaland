import React from "react";
import { Link } from "react-router-dom";

import avatar from "../assets/mr bean.png";

const Seller = ({ rank, avatar, name, value }) => (
  <Link
    to="/profile"
    className="group hover:bg-gray-200 w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 h-full p-4 rounded-xl flex justify-start items-center space-x-4"
  >
    <span className="w-1/12 font-medium text-gray-700">{`${rank}.`}</span>
    <div className="h-16 w-16 lg:h-20 lg:w-20 relative">
      <img
        className="h-full w-full rounded-full bg-gray-400 border-0 group-hover:border-4 border-purple-400 transition-all"
        src={avatar}
        alt=""
      />
      <svg
        className="h-5 w-5 bg-gray-100 text-purple-700 rounded-full absolute bottom-0 right-0"
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
    </div>
    <div className="flex flex-col justify-around">
      <span className="font-bold text-gray-700 text-lg">{name}</span>
      <span className="font-medium text-gray-500">{`${value} ETH`}</span>
    </div>
  </Link>
);

const TopSeller = () => (
  <div className="flex flex-wrap justify-center items-center">
    <Seller rank="1" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="2" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="3" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="4" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="5" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="6" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="7" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="8" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="9" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="10" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="11" avatar={avatar} name="Mr. Bean" value="22.22" />
    <Seller rank="12" avatar={avatar} name="Mr. Bean" value="22.22" />
  </div>
);

export default TopSeller;
