import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MobileAppbar = () => {
  return (
    <ToolbarWrapper>
      <Link to="/">Sharon Jaoko</Link>
      <input className="menu-btn" type="checkbox" id="menu-btn" />
      <label className="menu-icon" for="menu-btn">
        <span className="navicon"></span>
      </label>
      <ul className="menu">
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
        <Link to="/blog">
          <li>Blog</li>
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
    font-size: 0.9rem;
    color: #000;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
    font-family: "Ubuntu", sans-serif;
    margin: 0 1rem;
  }
  ul {
    margin: 0;
    padding: 0;
    list-style: none;
    overflow: hidden;
    background-color: #fff;
  }
  li {
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
      padding: 20px 30px;
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
