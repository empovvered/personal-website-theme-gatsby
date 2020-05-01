import PropTypes from "prop-types";
import React from "react";
import HamburgerComponent from "components/Header/Hamburger/HamburgerStyles";

const Hamburger = ({ isMenuOpen, toggleMobileMenu }) => (
  <HamburgerComponent
    isMenuOpen={isMenuOpen}
    type="button"
    onClick={toggleMobileMenu}
  >
    <span className="hamburger__box">
      <span className="hamburger__inner" />
    </span>
  </HamburgerComponent>
);

Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default Hamburger;
