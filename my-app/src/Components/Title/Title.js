import React from "react";
import { Button } from "../Button/Button";
import "./Title.css";

function Title() {
  return (
    <div className="title">
      <div className="title__Option">
        <span className="title__headLine">
          Please ignore the design and responsive
          <br />
          Our page is still under Construction and will be fixed soon
        </span>
        <span className="title__subLine">
          This is just a sample purpose of hosting the application in the cloud
        </span>
        <div className="title__btn">
          <Button
            onClick={() => console.log("Clicked Me")}
            type="button"
            buttonStyle="btn--white--outline"
            buttonSize="btn--medium"
          >
            Shop Now
          </Button>
        </div>
      </div>
    </div>
  );
}

export default Title;
