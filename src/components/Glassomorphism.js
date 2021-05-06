import React, { useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

import "../styles/Glassomorphism.css";
import { Link } from "react-router-dom";

const Glassomorphism = () => {
    useEffect(() => {
        VanillaTilt.init(document.querySelector(".glass-card"), {
            max: 25,
            speed: 400,
            glare: true,
            "max-glare": 0.1,
        });
    });
    return (
        <div className="glassomorphism">
            <h3>Hover Over The Card</h3>
            <div className="glass-card">
                <div className="content">
                    <h2>Glassomorphic CARD</h2>
                    <span>This card will demonstrate glassomorphism</span>
                    <p>
                        Lorem Ipsum is simply dummy text of the printing and
                        typesetting industry. Lorem Ipsum has been the
                        industry's standard dummy text ever since the 1500s,
                        when an unknown printer took a galley of type and
                        scrambled it to make a type specimen book. It has
                        survived not only five centuries, but also the leap into
                        electronic typesetting, remaining essentially unchanged.{" "}
                    </p>
                    <Link to="/" className="link-to-home">
                        Go To Home Page
                    </Link>
                </div>
            </div>
            <script>
                VanillaTilt.init(document.querySelectorAll(".glass-card"));
            </script>
        </div>
    );
};

export default Glassomorphism;
