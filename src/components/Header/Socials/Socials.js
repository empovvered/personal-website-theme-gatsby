import React from "react";
import PropTypes from "prop-types";
import SocialsComponent from "components/Header/Socials/SocialsStyles";

import SocialIcon from "components/Header/SocialIcon/SocialIcon";

import facebookIcon from "assets/icons/facebook.svg";
import instagramIcon from "assets/icons/instagram.svg";
import twitterIcon from "assets/icons/twitter.svg";

const Socials = ({ isMenuOpen, isHeaderFixed }) => (
  <SocialsComponent isMenuOpen={isMenuOpen}>
    <SocialIcon isHeaderFixed={isHeaderFixed} href="#" icon={twitterIcon} />
    <SocialIcon isHeaderFixed={isHeaderFixed} href="#" icon={instagramIcon} />
    <SocialIcon isHeaderFixed={isHeaderFixed} href="#" icon={facebookIcon} />
  </SocialsComponent>
);

Socials.propTypes = {
  isMenuOpen: PropTypes.bool,
  isHeaderFixed: PropTypes.bool,
};

Socials.defaultProps = {
  isMenuOpen: false,
  isHeaderFixed: false,
};

export default Socials;
