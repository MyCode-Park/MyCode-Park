import React from "react";
import VB from "../Video/VideoBg";
import DiscoverMore from "../DiscoverMore/DiscoverMore";
import ProductList from "../ProductList/ProductList";

function Home() {
  return (
    <div className="home">
      <VB />
      <ProductList />
      <DiscoverMore />
      <div className="home__container"></div>
    </div>
  );
}

export default Home;
