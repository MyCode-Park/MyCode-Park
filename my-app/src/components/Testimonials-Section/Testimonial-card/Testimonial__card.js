import React from "react";
import './testimonial-card.css';
import Testimonials from "../Testimonials";

const Testimonial__card = () => {
    return (
        <div className="card-container">
            <div className="stars">
            {Array(5)
                .fill()
                .map((_,i) => (
                <p>⭐</p>
                ))}
            </div>
            <div className="text-content">
                <p>Tastes great, chilled on a summer evening. 
                    But don't make the mistake of only drinking it then, 
                    this is too good for that! </p>
            </div>
            <div className="name">
                <p><b>Max Walker</b></p>
            </div>
        </div>

    );    
}

export default Testimonial__card;