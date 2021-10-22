import React from "react";
import { Link } from "react-router-dom";

const Tile = ({ to, children, title, description }) => (
  <Link
    to={to}
    className="group w-full md:w-1/2 xl:w-1/3 p-2 md:p-4 overflow-hidden"
  >
    <div className="flex items-center md:block bg-gray-200 p-6 md:p-12 rounded-xl space-x-3 md:space-x-0 md:space-y-3">
      <div className="h-12 w-12 p-2 rounded-md bg-purple-700 text-gray-100 group-hover:bg-gray-200 group-hover:text-purple-700 transition">
        {children}
      </div>
      <h4 className="text-xl text-gray-700 inline-block font-bold">
        {title}
        <div className="h-0.5 w-0 group-hover:w-full bg-purple-700 transition-all"></div>
      </h4>
      <p className="hidden md:block text-gray-700">{description}</p>
    </div>
  </Link>
);

const Options = () => {
  return (
    <section className="mx-auto w-full md:my-12 flex flex-row flex-wrap justify-center">
      <Tile
        to="/wallet"
        title="Setup your wallet"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus. Atque, autem. Maiores, ducimus inventore cumque cupiditate aperiam distinctio officia adipisci voluptate eaque! Ex placeat cumque, vero inventore delectus tempora."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"
          />
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
          />
        </svg>
      </Tile>
      <Tile
        to="/create"
        title="Add your NFTs"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus. Atque, autem. Maiores, ducimus inventore cumque cupiditate aperiam distinctio officia adipisci voluptate eaque! Ex placeat cumque, vero inventore delectus tempora."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M7 16a4 4 0 01-.88-7.903A5 5 0 1115.9 6L16 6a5 5 0 011 9.9M15 13l-3-3m0 0l-3 3m3-3v12"
          />
        </svg>
      </Tile>
      <Tile
        to="#"
        title="Sell your NFTs"
        description="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quis, delectus. Atque, autem. Maiores, ducimus inventore cumque cupiditate aperiam distinctio officia adipisci voluptate eaque! Ex placeat cumque, vero inventore delectus tempora."
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      </Tile>
    </section>
  );
};

export default Options;
