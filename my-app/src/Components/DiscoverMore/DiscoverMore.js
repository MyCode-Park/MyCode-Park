import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button, container, Figure } from "react-bootstrap";
import "./DiscoverMore.css";
import Img from "../Pics/agriculture-bg.jpg";
import FigureCaption from "react-bootstrap/esm/FigureCaption";

function DiscoverMore() {
  return (
    <div>
      <container>
        {/* <img src={Img} alt="agri" className="discoverMore__img" /> */}
        <Figure className="discoverMore">
          {/* <FigureCaption className="discoverMore__blogText">
            <span className="discoverMore__headLine">Who we are </span>
            <br />
            <span className="discoverMore__subLine">
              We VELAANMAIAM is bridge between you our buyers and sellers to
              make the organic products purchase easy and efficient way.
            </span>
            <div className="discoverMore__button">
              <Button onClick="knowmore">Know more</Button>
            </div>
          </FigureCaption> */}
        </Figure>
      </container>
    </div>
  );
}

export default DiscoverMore;
