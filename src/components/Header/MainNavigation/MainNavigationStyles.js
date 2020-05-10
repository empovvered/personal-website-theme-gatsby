import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const MainNavigationComponent = styled.nav`
  display: flex;
  align-items: center;
  .main-navigation {
    padding: 0;
    margin: 0;
    display: flex;
    list-style: none;
    @media ${device.sm} {
      flex-direction: column;
      align-items: center;
    }
    &__item {
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

export default MainNavigationComponent;
