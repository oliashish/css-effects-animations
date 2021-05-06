import { Switch, Route } from "react-router-dom";

import "./App.css";
import Glassomorphism from "./components/Glassomorphism";
import Home from "./components/Home";

function App() {
    return (
        <div className="App">
            <Switch>
                <Route exact path="/" component={Home} />
                <Route
                    exact
                    path="/Glassomorphism"
                    component={Glassomorphism}
                />
            </Switch>
        </div>
    );
}

export default App;
