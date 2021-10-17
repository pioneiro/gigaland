import React from "react";

import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Options from "./components/Options.jsx";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <div className="mx-auto p-8 lg:p-16">
        <Options />
      </div>
    </>
  );
};

export default App;
