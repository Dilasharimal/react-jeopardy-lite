import React from "react";
import "./App.css";

import Welcome from "./Components/welcome/Welcome";
import Navigation from "./Components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Jeopardy from "./Components/jeopardy/Jeopardy";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route exact path="/" component={Jeopardy} />
        <Route path="/welcome/:name" component={Welcome} />
      </Switch>
    </div>
  );
}
export default App;
