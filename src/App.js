import { Switch, Route } from "react-router-dom";

import "./App.css";
import CardFlip from "./components/CardFlip";
import Glassomorphism from "./components/Glassomorphism";
import GradientMovement from "./components/GradientMovement";
import Home from "./components/Home";
import ImageReflection from "./components/ImageReflection";
import NeonLightEffect from "./components/NeonLightEffect";
import Neuomorphism from "./components/Neuomorphism";
import Parallax from "./components/Parallax";
import RotatingBorders from "./components/RotatingBorders";
import RotatingImageGallery3D from "./components/RotatingImageGallery3D";
import SmokeEffect from "./components/SmokeEffect";
import SmootScrolling from "./components/SmoothScrolling";
import VideoInsideText from "./components/VideoInsideText";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/glassomorphism"
                    component={Glassomorphism}
                />
                <Route exact path="/card flip" component={CardFlip} />
                <Route
                    exact
                    path="/image reflection"
                    component={ImageReflection}
                />
                <Route exact path="/neuomorphism" component={Neuomorphism} />
                <Route
                    exact
                    path="/rotating borders"
                    component={RotatingBorders}
                />
                <Route exact path="/parallax" component={Parallax} />
                <Route exact path="/neon effect" component={NeonLightEffect} />
                <Route exact path="/smoke effect" component={SmokeEffect} />
                <Route
                    exact
                    path="/smooth scrolling"
                    component={SmootScrolling}
                />
                <Route
                    exact
                    path="/rotating image gallery"
                    component={RotatingImageGallery3D}
                />

                <Route
                    exact
                    path="/video inside text"
                    component={VideoInsideText}
                />
                <Route
                    exact
                    path="/gradient movement"
                    component={GradientMovement}
                />
            </Switch>
        </div>
    );
}

export default App;
