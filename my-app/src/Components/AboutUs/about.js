
import React from "react";
import "./about.css";
import dealer from "../images/dealer.jpg";
import Farming from "../images/farming.jpg";
// import vdo from "../images/vf.mp4";
import vdo2 from "../images/vdo2.mp4";




export default function AboutUs(){
return(
<div className="About">
<h1>About Us</h1>
<p>Hello all, Here's our Velaamaiam.</p>
<br/>
<p>
Lorem Ipsum is simply dummy text of the printing and typesetting industry.
</p>
<br/>
<p>
Vellanmaiam have received much attention recently due to 
belonging the commercial potentials. It can be used for online shopping to 
narrow down selection of few designs. This system is basically used for 
buying agricultural products to genuine sellers. The ‘Online E-commerce 
Web application’ Services department strives to provide solutions to 
develop and transfer easy and efficient way in the digital age and to help 
reduces the human pressure and time. It provide services that include the 
Cereals and Food Grains, Seeds and Manure, Milk and Daily Products, 
Edible Oil, Cooking Spices and Masala, Agricultural Tools. “Shop 
Management System” is a web application written for all operating 
systems, designed to help users maintain and organize shop virtually. This 
application is easy to use for both buyers and seller. It features a familiar 
and well thought-out, an attractive user interface, combined with strong 
searching Insertion and reporting capabilities. The report generation 
facility of shop system helps to get a good idea of which are the various 
items brought by the members, makes users possible to get the product 
easily.

</p>
<br/>
<h3>Browse through some of our videos  </h3>
<br/>
<div className="container-1">
    <div className ="box-1">
         <iframe width="400" height="400" src={vdo2 }title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
     <div className="box-2">
        <iframe width="400" height="400" src={vdo2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
     </div>
      <div className="box-3">
             <iframe width="400" height="400" src= {vdo2} title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    
</div>
<br/>
<h3>Here we shown you , how we get products and how we select.</h3>
<br/>
     <div className="section-container">
                       <div className="columns Image" >
                           <img src={Farming} alt="Farming"/>
                           &nbsp;
                       </div>
                       <div className="columns Text">
                          
                          <div className="content-container">
                              <h4>The products we get from our farmers.</h4> 
                              <br/>
                    
                              <p>Food is the major source of energy. Every living organism on this planet needs food to stay alive and to continue all other essential life processes. Plants are the main source of food on which both humans and animals depend. We cannot imagine life without food.With the rapidly growing population, demand for more food, loss of produced crops, and other problems in the agricultural output are the main reasons for the scarcity of food and are the biggest concern in some parts of the world facing today. This has led to an increase in the requirement of strategies that can help in the management of the crops produced.
                          </p>
                          </div>
                        </div>
                   </div>
                   <div className="section-container">
                       
                       <div className="columns Text">
                          
                          <div className="content-container">
                              <h4>Products we choose for our customers.</h4> 
                              <br/>

                              <p>"Efficiency for Agriculture" is the motto used to direct the design and manufacture of our products. Many of our employees come from farming backgrounds, making their experience a valuable asset when it comes to the design considerations for our product line.Initially, the company produced a deep tillage implement—The Mulcher—to combat ground compaction. The tool bar used with The Mulcher is recognized as one of the heaviest available. Because of this, tool bars used in conjunction with other field accessories are also popular products. Supplied in single and double bars, rigid and folding, these bars are designed and manufactured to meet the individual requirements of the user. Speed and horsepower require heavy-duty components. Seven inch square tubing with 3/8" wall, heavy hitch plates, 2-15/16" hinge pins are standard.

</p>
                          </div>
                          </div>
                          <div className="columns Image" >
                           <img src={dealer} alt="dealer"/>
                           &nbsp;
                       
                        </div>
                   </div>



</div>

);

}
