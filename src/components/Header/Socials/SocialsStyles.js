import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const SocialsComponent = styled.div`
  display: flex;
  z-index: 10;
  @media ${device.sm} {
    position: fixed;
    z-index: 10;
    left: 50%;
    bottom: 50px;
    transform: translateX(-50%);
    visibility: ${({ isMenuOpen }) => (isMenuOpen ? "visible" : "hidden")};
    opacity: ${({ isMenuOpen }) => (isMenuOpen ? "1" : "0")};
    pointer-events: ${({ isMenuOpen }) => (isMenuOpen ? "all" : "none")};
    transition: opacity 0.5s 0.5s ease-in-out;
  }
`;

export default SocialsComponent;
