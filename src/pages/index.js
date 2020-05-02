import React from "react";
import MainLayout from "layouts/MainLayout";
import Introduction from "components/HOMEPAGE/Introduction/Introduction";
import About from "components/HOMEPAGE/About/About";
import Expertise from "components/HOMEPAGE/Expertise/Expertise";
import Portfolio from "components/HOMEPAGE/Portfolio/Portfolio";

const IndexPage = () => {
  return (
    <>
      <MainLayout>
        <Introduction />
        <About />
        <Expertise />
        <Portfolio />
      </MainLayout>
    </>
  );
};

export default IndexPage;
