import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileAppbar = () => {
  return (
    <ToolbarWrapper>
      <Link to="/">
        <a>Sharon Jaoko</a>
      </Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
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
    </ToolbarWrapper>
  );
};

export default MobileAppbar;

const ToolbarWrapper = styled.header`
  background-color: #fff;
  box-shadow: 1px 1px 4px 0 rgba(0, 0, 0, 0.1);
  position: fixed;
  top: 0;
  width: 100%;
  margin-bottom: 3rem;
  z-index: 3;
  a {
    font-family: "Ubuntu", sans-serif;
    text-decoration: none !important;
    color: #000;
    line-height: 1.6;
    padding: 0.1rem;
    font-weight: 600;
    font-size: 0.9rem;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }
  li a {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    font-weight: 600;
    font-size: 0.9rem;
    font-family: "Ubuntu", sans-serif;
    color: #000;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .logo {
    display: block;
    float: left;
    height: 2rem;
    padding: 1rem;
    text-decoration: none;
  }
  /* menu */
  .menu {
    clear: both;
    max-height: 0;
    transition: max-height 0.3s ease-out;
  }
  /* menu icon */
  .menu-icon {
    cursor: pointer;
    display: inline-block;
    float: right;
    padding: 28px 20px;
    position: relative;
    user-select: none;
  }
  .menu-icon .navicon {
    background: #333;
    display: block;
    height: 2px;
    position: relative;
    transition: background 0.3s ease-out;
    width: 18px;
  }
  .menu-icon .navicon:before,
  .menu-icon .navicon:after {
    background: #333;
    content: "";
    display: block;
    height: 100%;
    position: absolute;
    transition: all 0.3s ease-out;
    width: 100%;
  }
  .menu-icon .navicon:before {
    top: 5px;
  }
  .menu-icon .navicon:after {
    top: -5px;
  }
  /* menu btn */
  .menu-btn {
    display: none;
  }
  .menu-btn:checked ~ .menu {
    max-height: 100%;
  }
  .menu-btn:checked ~ .menu-icon .navicon {
    background: transparent;
  }
  .menu-btn:checked ~ .menu-icon .navicon:before {
    transform: rotate(-45deg);
  }
  .menu-btn:checked ~ .menu-icon .navicon:after {
    transform: rotate(45deg);
  }
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:before,
  .menu-btn:checked ~ .menu-icon:not(.steps) .navicon:after {
    top: 0;
  }
  /* 48em = 768px */
  @media (min-width: 48em) {
    li {
      float: left;
    }
    li a {
      padding: 20px 30px;
    }
    .menu {
      clear: none;
      float: right;
      max-height: none;
    }
    .menu-icon {
      display: none;
    }
  }
`;
