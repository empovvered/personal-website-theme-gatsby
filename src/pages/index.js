import React from "react";
import MainLayout from "layouts/MainLayout";
import Introduction from "components/HOMEPAGE/Introduction/Introduction";
import About from "components/HOMEPAGE/About/About";

const IndexPage = () => {
  return (
    <>
      <MainLayout>
        <Introduction />
        <About />
      </MainLayout>
    </>
  );
};

export default IndexPage;
