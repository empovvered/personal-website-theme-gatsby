import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { Link } from "gatsby";
import { device } from "assets/styles/mediaQueries";

import Hamburger from "components/Header/Hamburger/Hamburger";
import MainNavigation from "components/Header/MainNavigation/MainNavigation";
import Socials from "components/Header/Socials/Socials";

const HeaderComponent = styled.div`
  width: 100%;
  position: fixed;
  background-color: ${({ isHeaderFixed }) =>
    isHeaderFixed ? "#f5f5f5" : "transparent"};
  box-shadow: ${({ isHeaderFixed }) =>
    isHeaderFixed
      ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)"
      : "none"};
  padding: 10px 0;
  top: 0;
  z-index: 10;
  .header__inner {
    align-items: center;
    justify-content: space-between;
    display: flex;
  }
  .header__logo {
    font-size: 3.4rem;
    text-decoration: none;
    color: ${({ theme }) => theme.textWhite};
    background-color: ${({ theme }) => theme.primary};
    width: 55px;
    height: 55px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 50%;
    margin-right: 60px;

    &:hover {
      transform: scale(1.05);
    }

    @media ${device.sm} {
      z-index: 10;
      margin-right: 0;
    }
  }
`;

const Header = () => {
  const [isMenuOpen, setMenuState] = useState(false);
  const [isHeaderFixed, setHeaderState] = useState(false);

  const toggleMobileMenu = () => {
    setMenuState(!isMenuOpen);
  };

  const toggleHeaderScrolled = () => {
    const top = window.pageYOffset || document.documentElement.scrollTop;
    setHeaderState(top !== 0);
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleHeaderScrolled);
    return () => {
      window.removeEventListener("scroll", toggleHeaderScrolled);
    };
  }, [isHeaderFixed]);

  return (
    <HeaderComponent isHeaderFixed={isHeaderFixed}>
      <div className="container header__inner ">
        <Link to="/" className="header__logo">
          E
        </Link>
        <MainNavigation isMenuOpen={isMenuOpen} />
        <Socials isMenuOpen={isMenuOpen} isHeaderFixed={isHeaderFixed} />
        <Hamburger
          isMenuOpen={isMenuOpen}
          toggleMobileMenu={toggleMobileMenu}
        />
      </div>
    </HeaderComponent>
  );
};

export default Header;
