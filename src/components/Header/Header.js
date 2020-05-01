import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import HeaderComponent from "components/Header/HeaderStyles";

import Hamburger from "components/Header/Hamburger/Hamburger";
import MainNavigation from "components/Header/MainNavigation/MainNavigation";
import Socials from "components/Header/Socials/Socials";

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
      <div className="container header-inner ">
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
