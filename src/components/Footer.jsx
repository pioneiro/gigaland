import React from "react";

import { name } from "../../package.json";

import getKey from "../utils/functions/getKey.js";

const socialLinks = [
  {
    name: "Facebook",
    iconCLass: "fa-facebook-f",
    href: "#",
  },
  {
    name: "Instagram",
    iconCLass: "fa-instagram",
    href: "#",
  },
  {
    name: "Twitter",
    iconCLass: "fa-twitter",
    href: "#",
  },
  {
    name: "LinkedIn",
    iconCLass: "fa-linkedin-in",
    href: "#",
  },
  {
    name: "Reddit",
    iconCLass: "fa-reddit-alien",
    href: "#",
  },
];

const footerOptions = [
  {
    name: "Marketplace",
    links: [
      { name: "All NFTs", href: "#" },
      { name: "Art", href: "#" },
      { name: "Music", href: "#" },
      { name: "Domain Names", href: "#" },
      { name: "Virtual Worlds", href: "#" },
      { name: "Collectibles", href: "#" },
    ],
  },
  {
    name: "Resources",
    links: [
      { name: "Help Center", href: "#" },
      { name: "Partners", href: "#" },
      { name: "Suggestions", href: "#" },
      { name: "Discord", href: "#" },
      { name: "Docs", href: "#" },
      { name: "Newsletter", href: "#" },
    ],
  },
  {
    name: "Community",
    links: [
      { name: "Community", href: "#" },
      { name: "Documentation", href: "#" },
      { name: "Brand Asstes", href: "#" },
      { name: "Blog", href: "#" },
      { name: "Forum", href: "#" },
      { name: "Mailing List", href: "#" },
    ],
  },
  {
    name: "Newsletter",
    width: "2/5",
    content: (
      <div className="w-full lg:w-4/5 flex flex-col text-justify">
        <p>Signup for our newsletter to get the latest news in your inbox.</p>
        <form
          className="flex items-center rounded-full mt-6"
          onSubmit={(e) => e.preventDefault()}
        >
          <input
            className="w-3/4 px-1 md:px-3 py-1 bg-gray-200 text-gray-700 placeholder-gray-500 border-2 border-r-0 border-gray-200 hover:border-purple-700 focus:border-purple-700 rounded-l-lg transition"
            type="email"
            placeholder="enter you email"
            required
          />
          <button
            className="w-1/4 py-1 bg-purple-700 text-gray-200 border-2 border-purple-700 rounded-r-lg"
            type="submit"
          >
            <i className="fas fa-arrow-right"></i>
          </button>
        </form>
        <p className="text-xs sm:text-sm mt-2 text-gray-500">
          Your email is safe with us. We don't spam.
        </p>
      </div>
    ),
  },
];

const Footer = () => (
  <footer className="w-full pt-8">
    <div className="flex flex-wrap px-8 lg:px-16 py-4 pb-24 border-b-2 border-t-2 text-sm sm:text-base lg:text-lg">
      {footerOptions.map((footerDiv) => (
        <div
          key={getKey(footerDiv.name)}
          className={`group h-full w-1/2 lg:w-${
            footerDiv.width || "1/5"
          } xl:w-1/4 px-2 py-4 flex flex-col items-start space-y-2 text-gray-700`}
        >
          <h4 className="font-bold text-gray-900 pb-4">
            {footerDiv.name}
            <div className="h-0.5 w-0 group-hover:w-full bg-purple-700 transition-all"></div>
          </h4>
          {footerDiv.links &&
            footerDiv.links.map((link) => (
              <a
                key={getKey(link.name)}
                className="hover:text-purple-700"
                href={link.href}
              >
                {link.name}
              </a>
            ))}
          {footerDiv.content && footerDiv.content}
        </div>
      ))}
    </div>
    <div className="w-full px-8 lg:px-16 py-4 flex flex-col lg:flex-row justify-center lg:justify-between items-center">
      <div className="flex items-center space-x-2 order-3 lg:order-1 mt-4 lg:mt-0">
        <svg
          className="hidden lg:block h-10 w-10 text-purple-700"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
          />
        </svg>
        <span className="hidden lg:block text-3xl text-gray-700 font-medium">
          {name}
        </span>
        <span className="pl-4 text-gray-500 text-center">
          Copyright {new Date().getFullYear()} - CodeCrunch Techlabs
        </span>
      </div>
      <div className="flex items-center order-2">
        {socialLinks.map((link) => (
          <a
            key={getKey(link.name)}
            href={link.href}
            className="h-10 w-10 mx-1 rounded-lg bg-gray-200 text-purple-700 text-lg hover:text-2xl hover:bg-purple-700 hover:text-gray-100 grid place-items-center transition-all"
          >
            <i className={`fab ${link.iconCLass}`}></i>
          </a>
        ))}
      </div>
    </div>
  </footer>
);

export default Footer;
