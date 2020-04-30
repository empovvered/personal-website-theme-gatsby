import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const SocialIconComponent = styled.a`
  width: 40px;
  height: 40px;
  border: 1px solid rgb(219, 219, 219);
  border-radius: 50%;
  margin-right: 14px;
  background-image: url(${({ icon }) => icon});
  background-position: 50%;
  background-repeat: no-repeat;
  display: block;
  cursor: pointer;
  :last-child {
    margin-right: 0;
  }

  :hover {
    transform: scale(1.05);
  }

  @media ${device.md} {
    background-color: ${({ theme }) => theme.primary};
  }
`;

const SocialIcon = ({ icon }) => <SocialIconComponent icon={icon} />;

SocialIcon.propTypes = {
  icon: PropTypes.string.isRequired,
};

export default SocialIcon;
