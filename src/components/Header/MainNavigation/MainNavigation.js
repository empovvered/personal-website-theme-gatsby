import React from "react";
import PropTypes from "prop-types";
import MainNavigationComponent from "components/Header/MainNavigation/MainNavigationStyles";

import NavLink from "components/Header/NavLink/NavLink";

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
  isMenuOpen: PropTypes.bool,
};

MainNavigation.defaultProps = {
  isMenuOpen: false,
};

export default MainNavigation;
