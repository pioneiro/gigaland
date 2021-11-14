import React, { useState } from "react";

import defaultImage from "../assets/default image.png";
import avatar from "../assets/mr bean.png";

import Navbar from "../components/Navbar.jsx";
import Cover from "../components/Cover.jsx";
import NFT from "../components/NTF.jsx";
import Footer from "../components/Footer.jsx";

const Methods = [
  {
    id: "fixed",
    name: "Fixed Price",
    iconClass: "fas fa-tag",
  },
  {
    id: "auction",
    name: "Timed Auction",
    iconClass: "fas fa-hourglass-half",
  },
  {
    id: "bid",
    name: "Open for Bids",
    iconClass: "fas fa-users",
  },
];

const Crete = () => {
  const [method, setMethod] = useState(Methods[0].id);
  const [file, setFile] = useState(null);

  const Preview = () => (
    <NFT
      image={file ? URL.createObjectURL(file) : defaultImage}
      avatar={avatar}
      width="w-96 lg:w-80 xl:w-96"
      name="Black Hole"
      price="0.05"
      rank="1/22"
      likes="65"
    />
  );

  const textInputClass =
    "w-full px-2 md:px-3 py-1 bg-gray-100 text-gray-700 placeholder-gray-500 border-2 border-gray-300 hover:border-purple-700 focus:border-purple-700 transition rounded-lg";

  const FormElements = [
    {
      label: "Upload File",
      input: (
        <div className="w-full h-48 px-4 flex flex-col justify-center items-center border-4 border-dashed border-gray-300 rounded-xl">
          <span className="mb-6 text-sm sm:text-base text-center">
            PNG, JPG, GIF, WEBP or MP4 (max 200 MB)
          </span>
          <label
            className="px-3 py-1 bg-purple-700 hover:bg-purple-900 active:bg-purple-700 text-gray-100 rounded-lg cursor-pointer mb-1"
            htmlFor="fileUpload"
          >
            Choose File
          </label>
          <span className="text-sm">
            {file && file.name.length ? (
              <>
                <span>{file.name}</span>
                <button
                  className="text-sm w-5 ml-1 bg-red-600 text-gray-100 rounded-full"
                  onClick={() => {
                    setFile(null);
                    document.querySelector("input#fileUpload").value = null;
                  }}
                >
                  x
                </button>
              </>
            ) : (
              "No file chosen"
            )}
          </span>
          <input
            hidden
            type="file"
            id="fileUpload"
            accept="image/*"
            onChange={(e) => setFile(e.target.files[0] || null)}
          />
        </div>
      ),
    },
    {
      label: "Select Method",
      input: (
        <div className="flex gap-4">
          <input type="text" value={method} disabled hidden />
          {Methods.map(({ id, name, iconClass }) => (
            <button
              className={`h-32 px-2 lg:px-4 w-1/3 lg:w-1/4 xl:w-1/5 border-2 ${
                method === id
                  ? "border-purple-500 text-purple-700"
                  : "border-gray-300 hover:border-purple-500"
              } rounded-xl transition font-medium flex flex-col justify-center items-center gap-2`}
              onClick={() => setMethod(id)}
            >
              <span className="text-3xl sm:text-4xl">
                <i className={iconClass}></i>
              </span>
              <span className="text-sm sm:text-base">{name}</span>
            </button>
          ))}
        </div>
      ),
    },
    {
      label: "Price",
      input: (
        <input
          className={textInputClass}
          name="price"
          type="number"
          placeholder="enter price for one item (in ETH)"
        />
      ),
    },
    {
      label: "Title",
      input: (
        <input
          className={textInputClass}
          name="title"
          type="text"
          placeholder="eg. `Crypto Funk`"
        />
      ),
    },
    {
      label: "Description",
      input: (
        <textarea
          className={textInputClass}
          name="description"
          placeholder="eg. `This is very limited item`"
        ></textarea>
      ),
    },
    {
      label: "Royalties",
      input: (
        <input
          className={textInputClass}
          name="royalty"
          type="text"
          placeholder="suggested: 0%, 10%, 20%, 30%. Maximum is 70%"
        />
      ),
    },
  ];

  return (
    <>
      <Navbar theme="dark" />
      <Cover title="Create" />
      <main className="mx-auto w-full px-8 py-16 sm:p-16 xl:p-32 flex justify-around">
        <form
          className="w-full lg:w-3/5 flex flex-col items-start gap-6"
          onSubmit={(e) => e.preventDefault()}
        >
          {FormElements.map(({ label, input }) => (
            <div className="w-full flex flex-col text-gray-500">
              <h4 className="my-2 text-lg font-semibold text-gray-700">
                {label}
              </h4>
              {input}
            </div>
          ))}
          <div className="w-full flex flex-col items-center lg:hidden">
            <h4 className="my-2 text-lg font-semibold text-gray-700 self-start">
              Preview
            </h4>
            <Preview />
          </div>
          <button
            className="mt-6 px-4 py-1 self-center sm:self-auto bg-purple-700 hover:bg-purple-900 active:bg-purple-700 text-gray-100 text-xl rounded-xl"
            type="submit"
          >
            Create Item
          </button>
        </form>
        <div className="h-2/5 hidden lg:flex flex-col items-center">
          <h4 className="w-80 xl:w-96 px-4 my-2 text-lg font-semibold text-gray-700">
            Preview
          </h4>
          <Preview />
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Crete;
