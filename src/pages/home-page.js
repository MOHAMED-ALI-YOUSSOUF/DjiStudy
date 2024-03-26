import React from "react";
import Hero from "../components/home-page/hero";
import Spacer from "../components/common/spacer";
import ActionButton from "../components/home-page/action-button";
import About from "../components/home-page/about";
import Series from "../components/home-page/examen/serie";

const HomePage = () => {
  return (
    <div>
      <Spacer />
      <Hero />
      <Spacer />
      <ActionButton />
      <Spacer />
      <About />
      <Spacer />
      <Series />
    </div>
  );
};

export default HomePage;
