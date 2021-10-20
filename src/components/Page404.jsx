import React from "react";

import SVG404 from "../assets/404.svg";

const Page404 = () => (
  <div className="h-screen w-full grid place-items-center">
    <img className="w-1/2 animate-beat" src={SVG404} alt="404 Not Found" />
  </div>
);

export default Page404;
