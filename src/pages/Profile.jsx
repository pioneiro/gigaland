import React, { useState } from "react";

import image from "../assets/black hole.jpg";
import avatar from "../assets/mr bean.png";

import Navbar from "../components/Navbar.jsx";
import Cover from "../components/Cover.jsx";
import Footer from "../components/Footer.jsx";
import NFT from "../components/NTF.jsx";

const copyToClipboard = (text) => {
  const tempText = document.createElement("textarea");
  tempText.innerText = text;
  document.body.appendChild(tempText);
  tempText.select();
  document.execCommand("copy");
  tempText.remove();
};

const repeat = (component, times) => {
  const content = [];

  for (let i = 0; i < times; i++) content.push(component);

  return content;
};

const filters = ["On Sale", "Created", "Liked"];

const ProfileDetails = ({ avatar, name, username, address, followers }) => (
  <div className="flex flex-col sm:flex-row justify-between items-center gap-4 sm:gap-0 mb-8 md:mb-16">
    <div className="flex items-center space-x-6">
      <div className="relative">
        <img
          className="h-20 w-20 sm:h-24 sm:w-24 lg:h-32 lg:w-32 border-4 border-gray-100 rounded-full"
          src={avatar}
          alt=""
        />
        <svg
          className="h-5 w-5 sm:h-6 sm:w-6 lg:h-8 lg:w-8 absolute bottom-0 right-0 bg-gray-200 text-purple-600 rounded-full"
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
      <div className="flex flex-col space-y-1 text-sm md:text-base">
        <h3 className="text-lg md:text-xl text-gray-900 font-bold">{name}</h3>
        <h4 className="font-medium text-purple-800">@{username}</h4>
        <p className="flex items-end space-x-2">
          <span className="text-xs md:text-sm text-gray-500">
            {address.slice(0, 12)}...
          </span>
          <button
            className="bg-gray-200 hover:bg-gray-300 active:bg-gray-200 text-gray-500 hover:text-gray-700 px-2 rounded-lg relative"
            onClick={(e) => {
              copyToClipboard(address);
              e.target.querySelector("span").classList.remove("opacity-0");
              setTimeout(
                () => e.target.querySelector("span").classList.add("opacity-0"),
                1000
              );
            }}
          >
            Copy
            <span className="absolute -right-4 opacity-0 transition">✔</span>
          </button>
        </p>
      </div>
    </div>
    <div className="flex sm:flex-col lg:flex-row items-center gap-2 lg:gap-4">
      <span className="text-gray-500 text-sm sm:text-xs md:text-sm lg:text-base sm:order-1">
        {followers} followers
      </span>
      <button className="bg-purple-700 hover:bg-purple-800 active:bg-purple-700 text-gray-100 md:text-lg lg:text-xl px-3 lg:px-6 lg:py-2 rounded-full lg:order-2">
        Follow
      </button>
    </div>
  </div>
);

const Profile = () => {
  const [activeFilter, setActiveFilter] = useState(filters[0]);

  return (
    <>
      <Navbar opaque />
      <Cover
        src="https://image.cnbcfm.com/api/v1/image/106857916-Thumbnail-Explains-NFTs-01-CLEAN-jpg?v=1616503168"
        margin="mt-20"
      />
      <main className="p-8 lg:p-16 w-full">
        <ProfileDetails
          avatar={avatar}
          name="Mr Bean"
          username="mrbean"
          address="4240fc98c9952e2fc2e0e763c35e39915c3dc4404ae10735edd3e617f74112a2"
          followers="1024"
        />
        <div className="flex flex-wrap justify-center sm:justify-start items-center gap-2">
          {filters.map((filter) => (
            <button
              className={`${
                activeFilter === filter
                  ? "bg-purple-700 hover:bg-purple-500 active:bg-purple-700 text-gray-100"
                  : "bg-gray-200 hover:bg-gray-300 active:bg-gray-200 text-purple-700"
              } transition px-4 py-1 rounded-md`}
              onClick={(e) => setActiveFilter(filter)}
            >
              {filter}
            </button>
          ))}
        </div>
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
            4
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};
export default Profile;
