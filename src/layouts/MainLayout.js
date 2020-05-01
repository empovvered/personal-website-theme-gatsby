import React from "react";
import GlobalStyle from "assets/styles/GlobalStyle";
import PropTypes from "prop-types";
import { theme } from "assets/styles/theme";
import styled, { ThemeProvider } from "styled-components";
import SEO from "components/Seo/SEO";
import Header from "components/Header/Header";
import { device } from "assets/styles/mediaQueries";

const Primary = styled.div`
  position: relative;
  padding-top: 236px;
  @media ${device.md} {
    padding-top: 100px;
  }
`;

const MainLayout = ({ children }) => (
  <>
    <SEO />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Header />
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main">
          {children}
        </main>
      </Primary>
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
