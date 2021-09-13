import React from "react"
import 'bootstrap/dist/css/bootstrap.min.css';
import {Button, container, Figure } from "react-bootstrap"
import FigureCaption from "react-bootstrap/esm/FigureCaption";
import "./SellerBody.css"


export default function SellerBody(){
  return <div>
    <container>
      <Figure className="position-relative">
      <img src ="https://static.vecteezy.com/system/resources/previews/002/189/319/large_2x/supermarket-trolley-and-gift-box-on-a-pink-background-shopping-concept-free-photo.jpg" alt="agri" className ="img-fluid"/>
        <FigureCaption className = 'blogText'>
          <h1> Add Products to Sell
              </h1>
          <div className="button">
         <Button onClick="Search More Products">Add Products</Button>
         </div>
        </FigureCaption>
        </Figure>
      </container>
      <div className="title">
      <h1>Seller Products Status</h1>

      </div>
      
    </div>
    

}