import React from "react";
import PropTypes from "prop-types";
import SocialIconComponent from "components/Header/SocialIcon/SocialIconStyles";

const SocialIcon = ({ icon, isHeaderFixed }) => (
  <SocialIconComponent isHeaderFixed={isHeaderFixed} icon={icon} />
);

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
  isHeaderFixed: PropTypes.bool.isRequired,
};

export default SocialIcon;
