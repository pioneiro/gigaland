import React, { useState } from "react";

const NFT = ({ image, avatar, timeLeft, name, price, rank, likes, width }) => {
  const [like, setLike] = useState(false);

  return (
    <div className={`group p-2 ${width}`}>
      <div className="w-full p-3 rounded-2xl border-2 border-gray-200 transition hover:shadow-lg">
        <div className="h-80 w-full p-2 relative">
          <img
            className="h-full w-full object-cover rounded-lg transition group-hover:opacity-90"
            src={image}
            alt=""
          />
          <img
            className="h-14 w-14 absolute top-0 left-0 border-2 border-gray-100 rounded-full"
            src={avatar}
            alt=""
          />
          <svg
            className="z-10 h-4 w-4 absolute top-10 left-10 bg-gray-200 text-purple-600 rounded-full"
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
          {timeLeft && (
            <span className="absolute top-0 right-0 bg-gray-100 text-purple-800 font-semibold px-2 rounded-full ring-2 ring-purple-800">
              {timeLeft}
            </span>
          )}
        </div>
        <div className="h-24 p-2 w-full">
          <h4 className="text-lg  text-gray-800 font-bold">{name}</h4>
          <p className="space-x-2">
            <span className="text-gray-500 font-semibold">{`${price} ETH`}</span>
            <span className="text-gray-800 font-bold">{rank}</span>
          </p>
          <p className="flex justify-between mt-3">
            <button className="text-purple-800 font-semibold">
              Place a Bid
            </button>
            <button
              className="flex justify-around items-center space-x-1 text-gray-400"
              onClick={() => setLike(!like)}
            >
              <svg
                className={`h-5 w-5 ${like ? "text-red-500" : ""}`}
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z"
                  clipRule="evenodd"
                />
              </svg>
              <span>{likes}</span>
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NFT;
