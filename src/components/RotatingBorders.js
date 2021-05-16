import React from "react";
import "../styles/RotatingBorder.css";

const RotatingBorders = () => {
    return (
        <div className="rotating-border-effect-container">
            <div className="rotating-border-box"></div>
            <div className="border-animation"></div>
            <div className="frame-on-hover-border-box">
                <h3>Hover Over Me :-)</h3>
            </div>
        </div>
    );
};

export default RotatingBorders;
