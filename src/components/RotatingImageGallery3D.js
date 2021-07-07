import "../styles/RotatingImageGallery3D.css";
import img1 from "../images/img1.jpg";
import img2 from "../images/img2.jpeg";
import img3 from "../images/img3.jpeg";
import img4 from "../images/img4.jpeg";
import img6 from "../images/img6.jpeg";

const RotatingImageGallery3D = () => {
    return (
        <div className="effect-container">
            <figure>
                <img src={img1} alt="" />
            </figure>
            <figure>
                <img src={img2} alt="" />
            </figure>
            <figure>
                <img src={img3} alt="" />
            </figure>
            <figure>
                <img src={img4} alt="" />
            </figure>
            <figure>
                <img src={img6} alt="" />
            </figure>
        </div>
    );
};

export default RotatingImageGallery3D;
