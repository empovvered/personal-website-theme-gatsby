import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";

import NavLink from "components/Header/NavLink/NavLink";

const MainNavigationWrapper = styled.nav`
  display: flex;
  align-items: center;
  ul {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    @media (max-width: 768px) {
      flex-direction: column;
      align-items: center;
    }
    li {
      padding: 0 23px;
      @media (max-width: 768px) {
        padding: 30px 0;
      }
    }
  }
  @media (max-width: 768px) {
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
  <MainNavigationWrapper role="navigation" isMenuOpen={isMenuOpen}>
    <ul>
      <li>
        <NavLink to="/about">About</NavLink>
      </li>
      <li>
        <NavLink to="/portfolio">Portfolio</NavLink>
      </li>
      <li>
        <NavLink to="/contact">Contact</NavLink>
      </li>
    </ul>
  </MainNavigationWrapper>
);

MainNavigation.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default MainNavigation;
