import styled, { css } from "styled-components";
import PropTypes from "prop-types";
import React from "react";

const HamburgerButton = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    z-index: 10;
    display: none;
    .hamburger-box {
      width: 35px;
      height: 24px;
      display: inline-block;
      position: relative;
      
      .hamburger-inner {
        width: 100%;
        height: 3px;
        background-color: black;
        position: absolute;
        left: 0;
        top: 50%;
        transform: translateY(-50%);
        transition: background-color .1s .2s ease-in-out;
        :before {
          content: '';
          position: absolute;
          left: 0;
          top: -10px;
          transition: transform .2s .2s ease-in-out;
          width: 100%;
          height: 3px;
          background-color: black;
        }
        :after {
          content: '';
          left: 0;
          position: absolute;
          transition: transform .2s .2s ease-in-out;
          width: 100%;
          height: 3px;
          top: 10px;
          background-color: black;
        }
      }
    }
        ${props => props.isMenuOpen && css`
        .hamburger-inner:before {
            transform: translateY(10px) rotate(45deg);
        }
        .hamburger-inner:after {
          transform: translateY(-10px) rotate(-45deg);
        }
        .hamburger-inner {
          background-color: transparent !important; 
        }
        `};
    @media (max-width: 768px) {
        display: inline-block;
    }
`;

const Hamburger = ({ isMenuOpen, toggleMobileMenu }) => (
  <HamburgerButton isMenuOpen={isMenuOpen} type="button" onClick={toggleMobileMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"/>
            </span>
  </HamburgerButton>
);


Hamburger.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  toggleMobileMenu: PropTypes.func.isRequired,
};

export default Hamburger;

