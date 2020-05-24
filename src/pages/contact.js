import React from "react";
import MainLayout from "layouts/MainLayout";
import Contact from "components/Contact/Contact";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const ContactPageWrapper = styled.div`
  padding-top: 100px;
  @media ${device.md} {
    padding-top: 75px;
  }
`;

const IndexPage = () => {
  return (
    <>
      <ContactPageWrapper>
        <MainLayout>
          <Contact />
        </MainLayout>
      </ContactPageWrapper>
    </>
  );
};
export default IndexPage;
