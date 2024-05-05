import React from "react";
import Hero from "../components/home-page/hero";
import Spacer from "../components/common/spacer";
import ActionButton from "../components/home-page/action-button";
import About from "../components/home-page/about";
import Series from "../components/home-page/examen/series";

const HomePage = () => {
  return (
    <>
      <Spacer height={30} />
      <Hero />
      <Spacer height={50} />
      <ActionButton />
      <Spacer height={50} />
      <About />
      <Series />

    </>
  );
};

export default HomePage;
