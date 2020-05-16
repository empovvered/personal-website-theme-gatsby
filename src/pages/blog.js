import React from "react";
import MainLayout from "layouts/MainLayout";
import Introduction from "components/Introduction/Introduction";
import About from "components/About/About";
import Contact from "components/Contact/Contact";

const AboutPage = () => {
  return (
    <>
      <MainLayout>
        <Introduction />
        <About />
        <Contact />
      </MainLayout>
    </>
  );
};

export default AboutPage;
