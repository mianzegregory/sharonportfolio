import React from "react";
import styled from "styled-components";
import { isMobile } from "react-device-detect";
import MobileAppbar from "../mobile/Appbar";
import { Link } from "react-router-dom";

const Appbar = () => {
  return isMobile ? (
    <MobileAppbar />
  ) : (
    <Wrapper>
      <Link to="/">Sharon Jaoko</Link>

      <div className="nav_links">
        <Link to="/portfolio">Portfolio</Link>
        <Link to="/about">About</Link>
        <Link to="/blog">Blog</Link>
      </div>
      <div></div>
    </Wrapper>
  );
};

export default Appbar;

const Wrapper = styled.nav`
  height: 100vh;
  width: 10vw;
  position: fixed;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  background-color: #fff;
  left: 0;
  top: 0;
  z-index: 3;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  a {
    font-weight: 600;
    font-size: 0.9rem;
    color: #000;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
  }

  .nav_links {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
`;
