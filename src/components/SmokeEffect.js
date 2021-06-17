import React from "react";
import image from "../images/pup.jpeg";
import "../styles/SmokeEffect.css";

const SmokeEffect = () => {
    return (
        <div className="smoke-container">
            <div className="smoke">
                <ul>
                    <li>
                        <img src={image} alt="random" />
                    </li>
                    <li>A</li>
                    <li>S</li>
                    <li>H</li>
                    <li>I</li>
                    <li>S</li>
                    <li>H</li>

                    <li>O</li>
                    <li>L</li>
                    <li>I</li>
                </ul>
            </div>
        </div>
    );
};

export default SmokeEffect;
