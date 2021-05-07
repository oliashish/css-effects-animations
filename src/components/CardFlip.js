import React from "react";

import "../styles/CardFlip.css";
import cardImage from "../images/flipcardimage.jpeg";
import { Link } from "react-router-dom";

const CardFlip = () => {
    return (
        <div className="main-container-class">
            <div className="card-flip-effect-container">
                <div className="card-flip">
                    <div className="card-front-image">
                        <img
                            src={cardImage}
                            alt="Card Flip Img"
                            className="card-front"
                        />
                        <div className="image-over-text">
                            <h2>Please Hover Over Card</h2>
                        </div>
                    </div>
                    <div className="card-back-text">
                        <h3>Hello, I'm Ashish Oli</h3>
                        <p>
                            I'm a full stack developer.
                            <br />
                            And this is my Css and Js skills
                            <br />
                            showing website.
                        </p>
                        <Link to="/" className="link">
                            Go To Home Page
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CardFlip;
