import "./App.css";
import Landing from "./pages/Landing";
import Blog from "./pages/Blog";
import Portfolio from "./pages/Portfolio";
import About from "./pages/About";
import { Switch, Route, BrowserRouter as Router } from "react-router-dom";
import { useState, useEffect } from "react";
import { Slide } from "@material-ui/core";
import Appbar from "./components/common/Appbar";
import Footer from "./components/common/Footer";
import LoadingPage from "./pages/Loading";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => setLoading(false), 1500);
    // AOS.init({
    //   duration: 1000,
    // });
    // AOS.refresh();
  }, []);

  return loading === false ? (
    <Router>
      <Appbar />
      <Slide direction="up" in timeout={300}>
        <Switch>
          <Route path="/" exact component={Landing} />
          <Route path="/portfolio" exact component={Portfolio} />
          <Route path="/about" exact component={About} />
          <Route path="/blog" exact component={Blog} />
        </Switch>
      </Slide>
      <Footer />
    </Router>
  ) : (
    <div>
      <LoadingPage />
    </div>
  );
}

export default App;
