import React, { useContext } from "react";

import Navbar from "../components/Navbar.jsx";
import Cover from "../components/Cover.jsx";
import Footer from "../components/Footer.jsx";

import { Web3Context } from "../utils/web3context.js";

import getKey from "../utils/functions/getKey.js";

const Wallet = () => {
  const { walletData, data, isConnected } = useContext(Web3Context);
  const { address, wallet } = data;

  return (
    <>
      <Navbar theme="dark" />
      <Cover title="Wallet" />
      <main className="mx-auto mt-8 p-8 lg:p-16 w-full flex flex-wrap justify-center">
        {walletData.map((thisWallet) => {
          const { name, logo, description, highlight, connect, disconnect } =
            thisWallet;

          return (
            <div
              key={getKey(name)}
              className="group relative w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 p-2 lg:p-4 select-none"
            >
              <div
                onClick={!isConnected() ? connect?.bind(null, name) : null}
                className={`h-full w-full rounded-3xl p-4 md:p-6 border-2 border-gray-200 flex items-start flex-col gap-2 ${
                  connect ? !isConnected() && "cursor-pointer" : "opacity-50"
                }`}
              >
                <img
                  className="h-12 w-12 lg:h-16 lg:w-16 rounded-full transform group-hover:scale-125 transition"
                  src={logo}
                  alt="logo"
                />
                <h3 className="mt-2 text-lg font-bold">
                  {name}
                  <div className="h-0.5 w-0 group-hover:w-full bg-purple-700 transition-all"></div>
                </h3>
                <p className="text-gray-500 flex items-center">
                  {wallet === name && isConnected() ? (
                    <>
                      <span>{`Address: ${address.slice(0, 4)}`}</span>
                      <button
                        className="bg-red-600 text-gray-100 text-sm w-5 ml-1 rounded-full"
                        onClick={disconnect?.bind(null, name)}
                      >
                        x
                      </button>
                    </>
                  ) : (
                    <span>Address: -</span>
                  )}
                </p>
                <p className="text-gray-500">{description}</p>
              </div>
              {highlight && (
                <span className="absolute top-6 right-6 lg:top-12 lg:right-12 px-3 bg-gray-200 text-sm lg:text-base text-gray-500 rounded-full">
                  {highlight}
                </span>
              )}
            </div>
          );
        })}
      </main>
      <Footer />
    </>
  );
};

export default Wallet;
