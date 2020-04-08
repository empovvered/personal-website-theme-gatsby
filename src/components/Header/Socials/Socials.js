import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

import SocialIcon from "components/Header/SocialIcon/SocialIcon";

import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import twitterIcon from "assets/icons/twitter.svg";

const SocialsWrapper = styled.div`
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


const Socials = ({ isMenuOpen }) => (
  <SocialsWrapper isMenuOpen={isMenuOpen}>
    <SocialIcon href="" icon={twitterIcon}/>
    <SocialIcon href="" icon={instagramIcon}/>
    <SocialIcon href="" icon={facebookIcon}/>
  </SocialsWrapper>
);

Socials.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
};

export default Socials;
