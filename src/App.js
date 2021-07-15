import "./App.css";
import Portraits from "./pages/Portraits";
import Events from "./pages/Events";
import Flatlays from "./pages/Flatlays";
import Shoots from "./pages/Shoots";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { Slide } from "@material-ui/core";
import Appbar from "./components/common/Appbar";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 900);
    // AOS.init({
    //   duration: 1000,
    // });
    // AOS.refresh();
  }, []);

  return loading === false ? (
    <Router>
      <Appbar />
      <Slide direction="up" in>
        <Switch>
          <Route path="/" exact component={Portraits} />
          <Route path="/events" exact component={Events} />
          <Route path="/flatlays" exact component={Flatlays} />
          <Route path="/shoots" exact component={Shoots} />
        </Switch>
      </Slide>
    </Router>
  ) : (
    <div>
      <p>Loading</p>
    </div>
  );
}

export default App;
