import React, { useState, useRef } from "react";

import image from "../assets/black hole.jpg";
import avatar from "../assets/mr bean.png";

import Navbar from "../components/Navbar.jsx";
import Cover from "../components/Cover.jsx";
import Footer from "../components/Footer.jsx";
import NFT from "../components/NTF.jsx";

const Search = () => (
  <div className="w-full sm:w-auto flex items-center rounded-full">
    <input
      className="w-full px-1 md:px-3 py-1 bg-gray-200 text-gray-700 placeholder-gray-500 border-2 border-r-0 border-gray-300 hover:border-purple-700 focus:border-purple-700 rounded-l-lg transition"
      placeholder="search items here..."
      type="text"
    />
    <button
      className="px-2 py-1 bg-purple-700 text-gray-200 border-2 border-purple-700 rounded-r-lg"
      type="submit"
    >
      <i className="fas fa-search"></i>
    </button>
  </div>
);

const Select = ({ name, id, options }) => {
  const [option, setOption] = useState(options?.length ? options[0] : null);
  const [drop, setDrop] = useState(false);

  const ref = useRef(null);

  if (!option) return null;

  const maxContent = options.sort((a, b) => b.length - a.length)[0];

  document.addEventListener(
    "click",
    (e) => !ref.current?.contains(e.target) && setDrop(false)
  );

  return (
    <div ref={ref} className="flex flex-col relative">
      <div
        onClick={() => setDrop(!drop)}
        className={`select-none px-2 md:px-3 py-1 bg-gray-200 text-gray-700 border-2 hover:border-purple-700 focus:border-purple-700 ${
          drop
            ? "rounded-t-lg border-purple-700"
            : "rounded-lg border-gray-300 "
        } cursor-pointer`}
      >
        <span className="invisible">{maxContent}</span>
        <span
          id={id}
          aria-label={name}
          className="absolute top-0 left-0 w-full h-full px-2 md:px-3 py-1 border-2 border-transparent bg-transparent"
        >
          {option}
        </span>
        <span className="ml-4">
          <i class="fas fa-angle-down"></i>
        </span>
      </div>
      <div
        className={`${
          drop ? "flex" : "hidden"
        } flex-col absolute top-full left-0 z-30 w-full bg-purple-700 text-gray-200 border-2 border-t-0 border-purple-700 rounded-b-lg cursor-pointer overflow-hidden`}
      >
        {options?.map((e) => (
          <span
            className="block px-2 md:px-3 py-1 hover:bg-gray-200 hover:text-gray-900"
            onClick={() => {
              setOption(e);
              setDrop(false);
            }}
          >
            {e}
          </span>
        ))}
      </div>
    </div>
  );
};

const repeat = (component, times) => {
  const content = [];

  for (let i = 0; i < times; i++) content.push(component);

  return content;
};

const Explore = () => (
  <>
    <Navbar theme="dark" />
    <Cover title="Explore" />
    <main className="mx-auto p-4 lg:p-8">
      <div className="flex flex-wrap items-center gap-2 px-4">
        <Search />
        <div className="w-full sm:w-auto flex gap-2 justify-start flex-wrap">
          <Select
            name="category"
            id="category"
            options={[
              "All Categories",
              "Art",
              "Music",
              "Domain Names",
              "Trading Cards",
              "Virtual Worlds",
              "Collectibles",
            ]}
          />
          <Select name="buy" id="buy" options={["Buy Now"]} />
          <Select name="items" id="items" options={["All Items"]} />
        </div>
      </div>
      <div className="flex flex-col items-center">
        <div className="flex justify-center flex-wrap py-8">
          {repeat(
            <NFT
              image={image}
              avatar={avatar}
              timeLeft="24d 13h 37m 47s"
              name="Black Hole"
              price="0.05"
              rank="1/22"
              likes="65"
              width="w-full sm:w-1/2 lg:w-1/3 xl:w-1/4 2xl:w-1/5"
            />,
            8
          )}
        </div>
        <button className="px-4 py-1 bg-purple-700 hover:bg-purple-900 active:bg-purple-700 text-gray-200 text-lg rounded-lg">
          Load More
        </button>
      </div>
    </main>
    <Footer />
  </>
);

export default Explore;
