import React from "react";
import { Button } from "../Button/Button";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <div className="title__Option">
        <span className="title__headLine">100% Organic Goodness</span>
        <span className="title__subLine">
          Where we do things differently. 100% organic smoothies and cold
          pressed juices is our thing.
        </span>
        <div className="">
          <Button>Shop Now</Button>
        </div>
      </div>
    </div>
  );
}

export default Title;
