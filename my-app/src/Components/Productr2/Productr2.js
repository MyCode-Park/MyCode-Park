import React from 'react';
import "./Productr2.css";
function Productr2({image,title,price,rating,id})
 {
     return(
         <div className="productr2">
             <img className="productr2__img"
             src={image}
             alt=""/>
        <div className="productr2__name">
                <p>{title}
                    </p>
             </div>
             <div className="productr2__price">
                <p><small>From $</small>
                    {price}</p>
             </div>
             <div className="productr2__rating">
             {Array(rating)
                .fill()
                .map((_,i) => (
                <p>⭐</p>
                ))}
            <p> {rating} reviews</p> 
            
             </div>
             
                          <button className="productr2__button">View Options</button>
             
         </div>

     );
 }
  export default Productr2;
