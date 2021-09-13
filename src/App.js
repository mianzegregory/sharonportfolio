import "./App.css";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
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
          <Route path="/" exact component={Landing} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
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
