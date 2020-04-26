import React from "react";
import GlobalStyle from "assets/styles/GlobalStyle";
import PropTypes from "prop-types";
import { theme } from "assets/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import SEO from "components/Seo/Seo";
import Header from "components/Header/Header";
import topShape from "assets/images/top-shape.png";

const Primary = styled.div`
  position: relative;
  padding-top: 170px;
  @media (max-width: 992px) {
    padding-top: 100px;
  }
  @media (max-width: 992px) {
    padding-top: 50px;
  }
`;

const TopShape = styled.img`
  position: absolute;
  top: 0;
  right: 0;
  z-index: -1;
  height: auto;
  @media (max-width: 576px) {
    width: 300px;
  }
`;

const MainLayout = ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>
      <TopShape src={topShape} alt="intro-bg" />
    </ThemeProvider>
  </>
);

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default MainLayout;
