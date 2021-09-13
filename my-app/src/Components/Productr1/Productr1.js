import React from 'react';
import "./Productr1.css";
 function Productr1({image,info,title,})
 {
     return(
         <div className="productr1">
             <img className="productr1__img"
             src={image}
             alt="" />
             <div className="productr1__info">
                <p>{info}
                    </p>
             </div>
             <div className="productr1__name">
                <p>{title}</p>
             </div>
                          <button className="productr1__button">Shop Now</button>
             
         </div>

     );
 }
  export default Productr1;