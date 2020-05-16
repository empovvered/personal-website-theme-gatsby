import React from "react";
import { FooterComponent } from "components/Footer/FooterStyles";
import MainNavigation from "components/Header/MainNavigation/MainNavigation";
import Socials from "components/Header/Socials/Socials";

const Footer = () => (
  <FooterComponent>
    <div className="container">
      <div className="row footer">
        <MainNavigation/>
        <Socials/>
        <div className="footer__copyright">
          <small className="small"> © 2020. All right reserved</small>
        </div>
      </div>
    </div>
  </FooterComponent>
);

export default Footer;
