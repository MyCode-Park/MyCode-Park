import React from "react";
import Testimonial__card from "./Testimonial-card/Testimonial__card";
import './testimonials.css';

const Testimonials = () => {
    return (
        <div className="testimonials-container">
            <h1>Testimonials</h1>
            <div className="row">
                <div className="col"><Testimonial__card /></div>
                <div className="col"><Testimonial__card /></div>
                <div className="col"><Testimonial__card /></div>
            </div>
        </div>
    );
}

export default Testimonials;