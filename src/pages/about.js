import React from "react";
import MainLayout from "layouts/MainLayout";
import About from "components/About/About";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const AboutPageWrapper = styled.div`
  padding-top: 75px;
  @media ${device.md} {
    padding-top: 50px;
  }
`;

const AboutPage = () => {
  return (
    <>
      <AboutPageWrapper>
        <MainLayout>
          <About />
        </MainLayout>
      </AboutPageWrapper>
    </>
  );
};

export default AboutPage;
