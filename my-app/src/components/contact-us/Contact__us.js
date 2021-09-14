import React from "react";
import "./contact__us.css";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

const Contact__us = () => {
    return (
        <div className="contact">
            <div className="content">
                <h2>Contact us</h2>
                <p>
                    Contact us pages are often the go-to for a new visitor on a mission.
                    It's where they go <br />
                    when they have a question and truly want to speak to an
                    individual at your organization
                </p>
            </div>
            <div className="container">
                <div className="contact-info">
                    <div className="box">
                        <div className="icon">
                            <FaMapMarkerAlt />
                        </div>
                        <div className="text">
                            <h3>Address</h3>
                            <p>
                                12, sardar patel road,
                                <br />
                                Guindy,Chennai,
                                <br />
                                600025
                            </p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FaPhoneAlt />
                        </div>
                        <div className="text">
                            <h3>Phone</h3>
                            <p>907-407-6094</p>
                        </div>
                    </div>
                    <div className="box">
                        <div className="icon">
                            <FaEnvelope />
                        </div>
                        <div className="text">
                            <h3>Email</h3>
                            <p>enquiry@velanmaiam.com</p>
                        </div>
                    </div>
                </div>
                <div className="contactForm">
                    <form>
                        <h2>Send message</h2>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Full Name</span>
                        </div>
                        <div className="inputBox">
                            <input type="text" name="" required="required" />
                            <span>Email</span>
                        </div>
                        <div className="inputBox">
                            <textarea required="required"></textarea>
                            <span>Type your Message...</span>
                        </div>
                        <div className="inputBox">
                            <input type="submit" name="Send" />
                        </div>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact__us;
