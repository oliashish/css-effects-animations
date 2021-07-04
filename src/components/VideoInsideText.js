import "../styles/VideoInsideText.css";
import SP from "../images/SP.mp4";

const VideoInsideText = () => {
    return (
        <div className="effect-container">
            <div className="container">
                <video src={SP} autoPlay loop muted />
                <h1>Hello Css</h1>
            </div>
        </div>
    );
};

export default VideoInsideText;
