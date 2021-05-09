import { Switch, Route } from "react-router-dom";

import "./App.css";
import CardFlip from "./components/CardFlip";
import Glassomorphism from "./components/Glassomorphism";
import Home from "./components/Home";
import ImageReflection from "./components/ImageReflection";
import Neuomorphism from "./components/Neuomorphism";

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
            </Switch>
        </div>
    );
}

export default App;
