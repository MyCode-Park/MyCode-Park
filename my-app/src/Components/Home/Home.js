import React from "react";
import VB from "../Video/VideoBg";
import DiscoverMore from "../DiscoverMore/DiscoverMore";
import ProductList from "../ProductList/ProductList";
import Testimonials from "../Testimonials-Section/Testimonials";

function Home() {
  return (
    <div className="home">
      <VB />
      <ProductList />
      <Testimonials />
      {/* <DiscoverMore /> */}
      <div className="home__container"></div>
    </div>
  );
}

export default Home;
