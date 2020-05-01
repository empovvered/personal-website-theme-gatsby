import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";
import { device } from "assets/styles/mediaQueries";

import SocialIcon from "components/Header/SocialIcon/SocialIcon";

import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import twitterIcon from "assets/icons/twitter.svg";

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

const Socials = ({ isMenuOpen, isHeaderFixed }) => (
  <SocialsComponent isMenuOpen={isMenuOpen}>
    <SocialIcon isHeaderFixed={isHeaderFixed} href="#" icon={twitterIcon} />
    <SocialIcon isHeaderFixed={isHeaderFixed} href="#" icon={instagramIcon} />
    <SocialIcon isHeaderFixed={isHeaderFixed} href="#" icon={facebookIcon} />
  </SocialsComponent>
);

Socials.propTypes = {
  isMenuOpen: PropTypes.bool.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired,
};

export default Socials;
