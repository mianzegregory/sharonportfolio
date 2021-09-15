import { useState } from "react";
import PageWrapper from "../components/common/PageWrapper";
import Portraits from "./Portfolio/Portraits";
import Flatlays from "./Portfolio/Flatlays";
import Events from "./Portfolio/Events";
import Shoots from "./Portfolio/Shoots";
import { Fade } from "@material-ui/core";

const Portfolio = () => {
  const [subpage, setSubpage] = useState(0);

  return (
    <Fade in timeout={900}>
      <PageWrapper>
        <div className="portfolio-routing-buttons">
          <button onClick={() => setSubpage(0)}>Portraits</button>
          <button onClick={() => setSubpage(1)}>Flatlays</button>
          <button onClick={() => setSubpage(2)}>Events</button>
          <button onClick={() => setSubpage(3)}>Shoots</button>
        </div>
        {subpage === 0 && <Portraits />}
        {subpage === 1 && <Flatlays />}
        {subpage === 2 && <Events />}
        {subpage === 3 && <Shoots />}
      </PageWrapper>
    </Fade>
  );
};

export default Portfolio;
