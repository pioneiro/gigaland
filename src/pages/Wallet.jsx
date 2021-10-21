import React from "react";

import Navbar from "../components/Navbar.jsx";
import Cover from "../components/Cover.jsx";
import Footer from "../components/Footer.jsx";

const wallets = [
  {
    name: "Metamask",
    logo: "https://cdn.consensys.net/uploads/metamask-1.svg",
    description:
      "Start exploring blockchain applications in seconds. Trusted by over 1million users worldwide.",
    highlight: "Most Popular",
  },
  {
    name: "Bitski",
    logo: "https://avatars.githubusercontent.com/u/36717558",
    description:
      "Bitski connects communities, creators and brands through unique, ownable digital content.",
  },
  {
    name: "Fortmatic",
    logo: "https://gblobscdn.gitbook.com/spaces%2F-Lj7HukBJLlR6jbx0-eP%2Favatar.png?alt=media",
    description:
      "Let users access your Ethereum app from anywhere. No matter browser extensions.",
  },
  {
    name: "WalletConnect",
    logo: "https://gblobscdn.gitbook.com/spaces%2F-LJJeCjcLrr53DcT1Ml7%2Favatar.png?alt=media",
    description:
      "Open source protocol for connecting decentralised applications to mobile wallets.",
  },
];

const Wallet = () => (
  <>
    <Navbar theme="dark" />
    <Cover title="Wallet" />
    <main className="mx-auto mt-8 p-8 lg:p-16 w-full flex flex-wrap justify-center">
      {wallets.map((wallet) => (
        <div className="group relative w-full sm:w-1/2 md:w-1/3 xl:w-1/4 2xl:w-1/5 p-2 lg:p-4">
          <div className="h-full w-full rounded-3xl p-4 md:p-6 border-2 border-gray-200 flex items-start flex-col gap-2">
            <img
              className="h-12 w-12 lg:h-16 lg:w-16 rounded-full transform group-hover:scale-125 transition"
              src={wallet.logo}
              alt="logo"
            />
            <h3 className="mt-2 text-lg font-bold">
              {wallet.name}
              <div className="h-0.5 w-0 group-hover:w-full bg-purple-700 transition-all"></div>
            </h3>
            <p className="text-gray-500">{wallet.description}</p>
          </div>
          {wallet.highlight && (
            <span className="absolute top-6 right-6 lg:top-12 lg:right-12 px-3 bg-gray-200 text-sm lg:text-base text-gray-500 rounded-full">
              {wallet.highlight}
            </span>
          )}
        </div>
      ))}
    </main>
    <Footer />
  </>
);

export default Wallet;
