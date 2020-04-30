import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

import NavLink from "components/Header/NavLink/NavLink";

const MainNavigationComponent = styled.nav`
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    @media ${device.sm} {
      flex-direction: column;
      align-items: center;
    }
    li {
      padding: 0 23px;
      @media ${device.sm} {
        padding: 15px 0;
      }
    }
  }
  @media ${device.sm} {
    flex-direction: column;
    width: 100vw;
    height: 100vh;
    position: fixed;
    justify-content: center;
    align-items: center;
    left: 0;
    z-index: 3;
    transform: ${({ isMenuOpen }) =>
      isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
    transition: transform 0.5s ease-in-out;
    top: 0;
    background-color: #f5f5f5;
  }
`;

const MainNavigation = ({ isMenuOpen }) => (
  <MainNavigationComponent isMenuOpen={isMenuOpen}>
    <ul>
      <li>
        <NavLink activeClassName="active" to="/">
          Home
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/about">
          About
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/portfolio">
          Portfolio
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/blog">
          Blog
        </NavLink>
      </li>
      <li>
        <NavLink activeClassName="active" to="/contact">
          Contact
        </NavLink>
      </li>
    </ul>
  </MainNavigationComponent>
);

MainNavigation.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MainNavigation;
