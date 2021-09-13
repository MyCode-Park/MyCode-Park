import React from "react";
import './SellerTable.css';
import * as ReactBootStrap from 'react-bootstrap';

const SellerTable = () =>{

    const players =[

        {id:"9", order_status:"Pending", payment_status: "Pending", shipping_status:"Pending" , customer: "Kavya" , store: "Store", created_on: "14/09/2021", order_total:"$1799.00"},
        {id:"8", order_status:"Completed", payment_status: "Pending", shipping_status:"Pending" , customer: "Sanjay" , store: "Store", created_on: "09/09/2021", order_total:"$2499.00"},
        {id:"7", order_status:"Completed", payment_status: "Pending", shipping_status:"Pending" , customer: "Abi" , store: "Store", created_on: "25/08/2021", order_total:"$1499.00"},
        {id:"6", order_status:"Completed", payment_status: "Completed", shipping_status:"Completed" , customer: "Mani" , store: "Store", created_on: "16/08/2021", order_total:"$249.00"},
        {id:"5", order_status:"Completed", payment_status: "Pending", shipping_status:"Pending" , customer: "Manoj" , store: "Store", created_on: "02/08/2021", order_total:"$279.00"},
        {id:"4", order_status:"Completed", payment_status: "Pending", shipping_status:"Pending" , customer: "Shivani" , store: "Store", created_on: "30/07/2021", order_total:"$159.00"},
        {id:"3", order_status:"Completed", payment_status: "Completed", shipping_status:"Pending" , customer: "Vicky" , store: "Store", created_on: "26/07/2021", order_total:"$199.00"},
        {id:"2", order_status:"Completed", payment_status: "Completed", shipping_status:"Completed" , customer: "Srimathi" , store: "Store", created_on: "10/08/2021", order_total:"$99.00"},
        {id:"1", order_status:"Completed", payment_status: "Completed", shipping_status:"Completed" , customer: "Sushmitha" , store: "Store", created_on: "13/07/2021", order_total:"$1,800.00"},
        
    ]
const renderPlayer = ( player,index) => {
    return(
        <tr key={index}>
            <td>{player.id}</td>
            <td>{player.order_status}</td>
            <td>{player.payment_status}</td>
            <td>{player.shipping_status}</td>
            <td>{player.customer}</td>
            <td>{player.store}</td>
            <td>{player.created_on}</td>
            <td>{player.order_total}</td>
    
        </tr>
    )
}

    return(
        <div className="sellertable">
            <ReactBootStrap.Table striped bordered hover variant="dark">
  <thead>
      
    <tr>
      <th>Id</th>
      <th>Order Status</th>
      <th>Payment Status</th>
      <th>Shipping Status</th>
      <th>Customer</th>
      <th>Store</th>
      <th>Created On</th>
      <th>Order Total</th>
  </tr>
  </thead>  
  
  <tbody>
{players.map(renderPlayer)}
    </tbody>
</ReactBootStrap.Table>
<button className="table__button">show more</button>

        </div>

    );

}
export default SellerTable;