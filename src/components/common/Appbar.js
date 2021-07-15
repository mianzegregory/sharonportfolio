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
      <Link to="/">
        <a>Sharon Jaoko</a>
      </Link>

      <nav>
        <ul className="nav_links">
          <Link to="/">
            <li>
              <a>Portraits</a>
            </li>
          </Link>
          <Link to="/events">
            <li>
              <a>Events</a>
            </li>
          </Link>
          <Link to="/flatlays">
            <li>
              <a>Flatlays</a>
            </li>
          </Link>
          <Link to="/shoots">
            <li>
              <a>Shoots</a>
            </li>
          </Link>
        </ul>
      </nav>
    </Wrapper>
  );
};

export default Appbar;

const Wrapper = styled.div`
  display: flex;
  flex-direction: row;
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  width: 100%;
  margin: auto;
  justify-content: space-between;
  align-items: center;
  padding: 0.7rem;
  background-color: #fff;
  overflow: visible;
  top: 0;
  z-index: 1;
  * {
    background-color: transparent;
  }
  li,
  a {
    font-weight: 600;
    font-size: 0.9rem;
    color: #000;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
  }
  nav {
    display: flex;
    flex-direction: row;
  }
  .logo {
    cursor: pointer;
    height: 2rem;
  }
  .nav_links {
    list-style: none;
    margin: 0 1rem;
    button {
      padding: 0.5rem;
      margin: 0.5rem;
    }
  }
  .nav_links li {
    display: inline-block;
    padding: 0px 20px;
  }
  .nav_links li a {
    font-family: "Ubuntu", sans-serif;
    transition: all 0.3s ease 0s;
  }
  .nav_links li a:hover {
    color: #0088a9;
  }
`;
