import React from "react";
import { Link } from "react-router-dom";

import NFT from "../assets/NFT.png";

const radius = window.innerHeight;
const diameter = radius * 2;

const Landing = () => {
  return (
    <main className="h-screen w-full relative overflow-hidden">
      <img
        src={NFT}
        alt=""
        className="z-10 hidden lg:block h-3/5 xl:h-5/6 w-auto absolute top-24 right-24"
      />
      <div
        className="z-0 hidden lg:block absolute bg-gray-200 rounded-full top-0 right-0 transform translate-x-1/2 -translate-y-1/2"
        style={{ height: diameter, width: diameter }}
      ></div>
      <div className="z-20 h-full w-full md:max-w-2xl lg:w-2/5 xl:w-1/3 2xl:w-3/5 flex flex-col px-16 py-32 justify-center items-start space-y-4">
        <h4 className="z-20 text-xl uppercase font-semibold text-purple-700">
          Gigaland Market
        </h4>
        <h1 className="z-20 font-semibold text-5xl">
          Create, sell or collect digital items.
        </h1>
        <p className="z-20 text-gray-700 py-4">
          Unit of data stored on a digital ledger, called a blockchain, that
          certifies a digital asset to be unique and therefore non
          interchangeale
        </p>
        <Link to="/explore">
          <button className="z-20 text-xl bg-purple-800 hover:bg-purple-600 active:bg-purple-800 px-8 py-1 text-white rounded">
            Explore
          </button>
        </Link>
      </div>
    </main>
  );
};

export default Landing;
