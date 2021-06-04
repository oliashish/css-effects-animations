import React from "react";
import image from "../images/pup.jpeg";
import "../styles/SmokeEffect.css";

const SmokeEffect = () => {
    return (
        <div className="smoke">
            <ul>
                <li>
                    <img src={image} alt="random" />
                </li>
                <li>S</li>
                <li>m</li>
                <li>o</li>
                <li>k</li>
                <li>e</li>
                <li>E</li>
                <li>f</li>
                <li>f</li>
                <li>e</li>
                <li>c</li>
                <li>t</li>
            </ul>
        </div>
    );
};

export default SmokeEffect;
