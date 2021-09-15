import { slide as Menu } from "react-burger-menu";
import styled from "styled-components";
import { Link } from "react-router-dom";

export default (props) => {
  return (
    <ToolbarWrapper>
      <Menu {...props}>
        <Link to="/">
          <li>Home</li>
        </Link>
        <Link to="/portfolio">
          <li>Portfolio</li>
        </Link>
        <Link to="/about">
          <li>About</li>
        </Link>
      </Menu>
    </ToolbarWrapper>
  );
};

const ToolbarWrapper = styled.div`
  background-color: transparent;
  position: fixed;
  top: 0;
  border-radius: 100%;
  margin-bottom: 3rem;
  z-index: 3;
  li {
    display: block;
    padding: 20px 20px;
    border-right: 1px solid #f4f4f4;
    font-weight: 600;
    font-size: 0.9rem;
    font-family: "Open Sans", sans-serif;
    color: #000;
    line-height: 1.6;
    letter-spacing: 2px;
    text-decoration: none;
  }
  .bm-item {
    display: inline-block;
    text-decoration: none;
    margin-bottom: 0.2rem;
    color: #000;
    transition: color 0.2s;
  }
  .bm-burger-button {
    position: fixed;
    background: transparent;
    width: 1.5rem;
    height: 1.5rem;
    right: 1rem;
    top: 1rem;
  }
  .bm-burger-bars {
    background: #000;
  }
  .bm-cross-button {
    height: 1px;
    width: 1px;
  }
  .bm-cross {
    background: #000;
  }
  .bm-menu {
    background: #fff;
    padding: 2.5em 1.5em 0;
    font-size: 1.15em;
  }
  .bm-morph-shape {
    fill: #000;
  }
  .bm-item-list {
    color: #000;
  }
  .bm-overlay {
    background: #000;
  }
`;
