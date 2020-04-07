import React from "react"
import GlobalStyle from "assets/styles/GlobalStyle"
import PropTypes from "prop-types"
import { theme } from "assets/styles/theme"
import styled, { ThemeProvider } from "styled-components"
import Seo from "components/Seo/Seo"

const Primary = styled.div`
  position: relative;
`

const MainLayout = ({ children }) => (
  <>
    <Seo />
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <Primary id="primary" className="content-area">
        <main id="main" className="site-main" role="main">
          {children}
        </main>
      </Primary>
    </ThemeProvider>
  </>
)

MainLayout.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
}

export default MainLayout
