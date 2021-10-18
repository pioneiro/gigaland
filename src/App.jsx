import React from "react";

import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Options from "./components/Options.jsx";
import Heading from "./components/Heading.jsx";
import Carousel from "./components/Carousel.jsx";
import Collection from "./components/Collection.jsx";

import image from "./assets/black hole.jpg";
import avatar from "./assets/mr bean.png";

const App = () => {
  return (
    <>
      <Navbar />
      <Landing />
      <div className="mx-auto p-8 lg:p-16">
        <Options />

        <Heading>Hot Collections</Heading>
        <Carousel>
          <Collection
            image={image}
            avatar={avatar}
            name="Collection 01"
            code="C01"
          />
          <Collection
            image={image}
            avatar={avatar}
            name="Collection 02"
            code="C02"
          />
          <Collection
            image={image}
            avatar={avatar}
            name="Collection 03"
            code="C03"
          />
          <Collection
            image={image}
            avatar={avatar}
            name="Collection 04"
            code="C04"
          />
          <Collection
            image={image}
            avatar={avatar}
            name="Collection 05"
            code="C05"
          />
          <Collection
            image={image}
            avatar={avatar}
            name="Collection 06"
            code="C06"
          />
        </Carousel>
      </div>
    </>
  );
};

export default App;
