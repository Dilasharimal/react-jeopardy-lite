import React from "react";
import "./App.css";

import Welcome from "./Components/welcome/Welcome";
import Navigation from "./Components/navigation/Navigation";
import { Route, Switch } from "react-router-dom";
import Jeopardy from "./Components/jeopardy/Jeopardy";
import Clock from "./Components/clock/Clock";
import Contact from "./Components/contact/Contact";

function App() {
  return (
    <div className="App">
      <Navigation />

      <Switch>
        <Route>
          <Route exact path="/" component={Jeopardy} />
          <Route path="/welcome/:name" component={Welcome} />
          <Route path="/clock" component={Clock} />
          <Route path="/contact" component={Contact} />
        </Route>
      </Switch>
    </div>
  );
}
export default App;
