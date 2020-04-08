import React, { useState, useEffect } from "react";
import styled, { css } from "styled-components";
import { Link } from "gatsby";

import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import twitterIcon from "assets/icons/twitter.svg";

const Wrapper = styled.div`
    padding-top: 10px;
    .wrapper-inner {
        align-items: center;
        justify-content: space-between;
        display: flex;
        .logo {
            font-size: ${({ theme }) => theme.font.size.h2};
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
        
            :hover {
                transform: scale(1.05);
            }
            
            @media (max-width: 768px) {
                z-index: 10;
            }
        }
    }
    @media (max-width: 768px) {
        position: ${({ isHeaderFixed }) => isHeaderFixed ? "fixed" : "static"};
        background-color: ${({ isHeaderFixed }) => isHeaderFixed ? "#f5f5f5" : "transparent"};
        box-shadow: ${({ isHeaderFixed }) => isHeaderFixed ? "0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)" : "none"};
        padding: 10px 0;
        top: 0;
        z-index: 10;
        width: 100%;
    }
`;

const Hamburger = styled.button`
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

const MainNavigation = styled.nav`
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
         transform: ${({ isMenuOpen }) => isMenuOpen ? "translateX(0)" : "translateX(-100%)"};
         transition: transform 0.5s ease-in-out;
         top: 0;
         background-color: #F5F5F5;
    } 
`;

const NavLink = styled(Link)`
    font-size: ${({ theme }) => theme.font.size.title};
    text-decoration: none;
    color: ${({ theme }) => theme.textBlack};
    font-weight: 500;
    position: relative;
    
    ::after {
        content: '';
        background-color: ${({ theme }) => theme.primary};
        position: absolute;
        bottom: -3px;
        left: 0;
        width: 0;
        height: 2px;
        transition: width 0.5s ease-in-out;
    }
    
    :hover::after {
        width: 50%;
    }
`;

const Socials = styled.div`
    display: flex;
    @media (max-width: 768px) {
        position: fixed;
        z-index: 10;
        left: 50%;
        bottom: 50px;
        transform: translateX(-50%);
        visibility: ${({ isMenuOpen }) => isMenuOpen ? "visible" : "hidden"};
        opacity: ${({ isMenuOpen }) => isMenuOpen ? "1" : "0"};
        pointer-events: ${({ isMenuOpen }) => isMenuOpen ? "all" : "none"};
        transition: opacity 0.5s 0.5s ease-in-out;
    } 
`;

const SocialIcon = styled.a`
    width: 40px;
    height: 40px;
    border: 1px solid rgb(219, 219, 219);
    border-radius: 50%;
    margin-right: 14px;
    background-image: url(${({ icon }) => icon});
    background-position: 50%;
    background-repeat: no-repeat;
    display: block;
    :last-child {
        margin-right: 0;
    }
    
    :hover {
        transform: scale(1.05);
    }
    
    @media (max-width: 992px) {
        background-color: ${({ theme }) => theme.primary};
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
    <Wrapper isHeaderFixed={isHeaderFixed}>
      <div className="container">
        <div className="wrapper-inner">
          <Link to="/" className="logo">E</Link>
          <MainNavigation role="navigation" isMenuOpen={isMenuOpen}>
            <ul>
              <li><NavLink>About</NavLink></li>
              <li><NavLink>Portfolio</NavLink></li>
              <li><NavLink>Contact</NavLink></li>
            </ul>
          </MainNavigation>
          <Socials isMenuOpen={isMenuOpen}>
            <SocialIcon href="" icon={twitterIcon}/>
            <SocialIcon href="" icon={instagramIcon}/>
            <SocialIcon href="" icon={facebookIcon}/>
          </Socials>
          <Hamburger isMenuOpen={isMenuOpen} type="button" onClick={toggleMobileMenu}>
            <span className="hamburger-box">
              <span className="hamburger-inner"/>
            </span>
          </Hamburger>
        </div>
      </div>
    </Wrapper>
  );
};


export default Header;
