import React from "react";

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

const Select = ({ children, name, id }) => (
  <select
    className="px-1 md:px-3 py-1 bg-gray-200 text-gray-700 placeholder-gray-500 border-2 border-gray-300 hover:border-purple-700 focus:border-purple-700 rounded-lg transition"
    name={name}
    id={id}
  >
    {children}
  </select>
);

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
        <div className="w-full sm:w-auto flex gap-2 justify-between flex-wrap">
          <Select name="category" id="category">
            <option value="all">All Categories</option>
          </Select>
          <Select name="buy" id="buy">
            <option value="now">Buy Now</option>
          </Select>
          <Select name="items" id="items">
            <option value="all">All Items</option>
          </Select>
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
