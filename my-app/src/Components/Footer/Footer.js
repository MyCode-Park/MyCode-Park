import React from "react";
import "./Footer.css";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import card_icon from "../Icons/card_icons.png";
import { FaTwitter } from "react-icons/fa";
import { GrInstagram } from "react-icons/gr";
import { GrFacebook } from "react-icons/gr";
const Footer = () => {
  return (
    <div className="main-footer footer1">
      <div className="container">
        <div className="row row1">
          <div className="col">
            <h5>About</h5>
            <p>We are dedicated to provide best in class Agri products</p>
          </div>
          <div className="col">
            <h5>Links</h5>
            <ul className="list-unstyled">
              <li>
                <a className="link1" href="https:/www.google.com">
                  Home
                </a>
              </li>
              <li>
                <a className="link1" href="https:/www.google.com">
                  Search
                </a>
              </li>
              <li>
                <a className="link1" href="https:/www.google.com">
                  About Us
                </a>
              </li>
            </ul>
          </div>
          <div className="col">
            <h5>Newsletter</h5>
            <Form>
              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control type="email" placeholder="email@example.com" />
              </Form.Group>
              <Button className="button_color" variant="dark" type="submit">
                Subscribe
              </Button>
            </Form>
          </div>
        </div>
        <div className="row">
          <div className="col">
            <p className="text1">
              <a className="link1" href="ii">
                @Velaanmaiam
              </a>{" "}
              | Powered by our Development team
            </p>
          </div>
          <div className="col"></div>
          <div className="col inr">
            <p>
              <select class="custom-select">
                <option>INR ₹</option>
                <option>USD $</option>
                <option>Euro €</option>
              </select>
            </p>
          </div>
        </div>
        <div className="row">
          <div className="coll">
            <div className="iicon">
              <a href="https://twitter.com/i/topics/1087759183565340673">
                <FaTwitter size={35} />
              </a>
            </div>

            <div className="iicon">
              <a href="https://www.instagram.com/explore/tags/agriculture/?hl=en">
                <GrInstagram size={35} />
              </a>
            </div>

            <div className="iicon">
              <a href="https://www.facebook.com/Wondersofagriculture/">
                <GrFacebook size={35} />
              </a>
            </div>
          </div>

          <div className="col inr">
            <a href="https:/www.google.com">
              <img src={card_icon} height="50px" width="180px" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
