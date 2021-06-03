import React from "react";
import "../styles/Parallax.css";
import random from "../images/random.jpg";

const Parallax = () => {
    return (
        <div className="main-div">
            <div className="parallax-image-container">
                <h2 className="message">
                    Scroll down to see the effect.
                </h2>
                <img src={random} alt="random" className="image" />
            </div>
            <div className="dummy-div"></div>
        </div>
    );
};

export default Parallax;
