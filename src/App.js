import { Switch, Route } from "react-router-dom";

import "./App.css";
import CardFlip from "./components/CardFlip";
import Glassomorphism from "./components/Glassomorphism";
import Home from "./components/Home";

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
            </Switch>
        </div>
    );
}

export default App;
