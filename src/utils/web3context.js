import React, { useState } from "react";

export const Web3Context = React.createContext(null);

const Web3ContextProvider = ({ children }) => {
  const [wallet, setWallet] = useState(null);
  const [chainID, setChainID] = useState(null);
  const [address, setAddress] = useState(null);

  const data = { wallet, chainID, address };

  const isConnected = () => wallet !== null && address !== null;

  const disconnect = (message) => {
    window.ethereum?.removeAllListeners();

    message && console.log(message);
    console.log(`Disconnecting from ${wallet}!`);

    setWallet(null);
    setChainID(null);
    setAddress(null);

    console.log("Disconnected!");
  };

  const walletData = [
    {
      name: "MetaMask",
      logo: "https://cdn.consensys.net/uploads/metamask-1.svg",
      description:
        "Start exploring blockchain applications in seconds. Trusted by over 1million users worldwide.",
      highlight: "Most Popular",
      connect: async (walletName) => {
        if (!window.ethereum) return console.log("Opps! MetaMask isn't found.");

        const eth = window.ethereum;

        eth.on("accountsChanged", ([address]) =>
          address ? setAddress(address) : disconnect(`No Accounts Deteced!`)
        );

        eth.on("chainChanged", (chainID) => setChainID(chainID));

        eth.on("message", console.log);

        try {
          const [address] = await eth.request({
            method: "eth_requestAccounts",
          });

          setWallet(walletName);
          setChainID(eth.chainId);
          setAddress(address);

          console.log(`Connected to ${walletName}!`);
        } catch ({ message }) {
          console.log(message);
        }
      },
      disconnect: (walletName) => disconnect(),
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

  return (
    <Web3Context.Provider value={{ walletData, data, isConnected, disconnect }}>
      {children}
    </Web3Context.Provider>
  );
};

export default Web3ContextProvider;
