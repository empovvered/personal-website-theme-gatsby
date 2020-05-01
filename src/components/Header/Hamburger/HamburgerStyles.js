import styled, { css } from "styled-components";
import { device } from "assets/styles/mediaQueries";

const HamburgerComponent = styled.button`
    padding: 10px;
    cursor: pointer;
    background-color: transparent;
    border: 0;
    margin: 0;
    z-index: 10;
    display: none;
    .hamburger__box {
      width: 35px;
      height: 24px;
      display: block;
      position: relative;
    }
    .hamburger__inner {
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
    
        ${(props) =>
          props.isMenuOpen &&
          css`
            .hamburger__inner:before {
              transform: translateY(10px) rotate(45deg);
            }
            .hamburger__inner:after {
              transform: translateY(-10px) rotate(-45deg);
            }
            .hamburger__inner {
              background-color: transparent;
            }
          `}
    @media ${device.sm} {
        display: block;
    }
`;

export default HamburgerComponent;
