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
        <div className="title__btn">
          <Button
            onClick={() => console.log("Clicked Me")}
            type="button"
            buttonStyle="btn--white--outline"
            buttonSize="btn--small"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Title;
