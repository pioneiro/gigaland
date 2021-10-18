import React from "react";

import Navbar from "./components/Navbar.jsx";
import Landing from "./components/Landing.jsx";
import Options from "./components/Options.jsx";
import Heading from "./components/Heading.jsx";
import Carousel from "./components/Carousel.jsx";
import Collection from "./components/Collection.jsx";
import NFT from "./components/NTF.jsx";

import image from "./assets/black hole.jpg";
import avatar from "./assets/mr bean.png";
import Category from "./components/Category.jsx";

const repeat = (component, times) => {
  const content = [];

  for (let i = 0; i < times; i++) content.push(component);

  return content;
};

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

        <Heading>New Items</Heading>

        <Carousel>
          {repeat(
            <NFT
              image={image}
              avatar={avatar}
              timeLeft="24d 13h 37m 47s"
              name="Black Hole"
              price="0.05"
              rank="1/22"
              likes="65"
            />,
            10
          )}
        </Carousel>

        <Heading>Top Sellers</Heading>

        <Heading>Browse by Category</Heading>
        <Category />
      </div>
    </>
  );
};

export default App;
