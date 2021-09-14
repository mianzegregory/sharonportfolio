import { useState, useEffect } from "react";
import PageWrapper from "../components/common/PageWrapper";
import Portraits from "./Portfolio/Portraits";
import Flatlays from "./Portfolio/Flatlays";
import Events from "./Portfolio/Events";
import Shoots from "./Portfolio/Shoots";

const Portfolio = () => {
  const [subpage, setSubpage] = useState("portait");

  // useEffect(() => {
  //   setSubpage("portrait");
  // });

  return (
    <PageWrapper>
      <div className="portfolio-routing-buttons">
        <button onClick={() => setSubpage("portrait")}>Portraits</button>
        <button onClick={() => setSubpage("flatlay")}>Flatlays</button>
        <button onClick={() => setSubpage("event")}>Events</button>
        <button onClick={() => setSubpage("shoot")}>Shoots</button>{" "}
      </div>
      {subpage === "portrait" && <Portraits />}
      {subpage === "flatlay" && <Flatlays />}
      {subpage === "event" && <Events />}
      {subpage === "shoot" && <Shoots />}
    </PageWrapper>
  );
};

export default Portfolio;
