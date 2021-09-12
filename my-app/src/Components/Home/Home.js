import React from "react";
import VB from "../Video/VideoBg";
import DiscoverMore from "../DiscoverMore/DiscoverMore";

function Home() {
  return (
    <div className="home">
      <VB />
      <DiscoverMore />
      <div className="home__container"></div>
    </div>
  );
}

export default Home;
