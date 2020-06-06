import React from "react";
import MainLayout from "layouts/MainLayout";
import Introduction from "components/Introduction/Introduction";
import About from "components/About/About";
import Expertise from "components/Expertise/Expertise";
import Portfolio from "components/Portfolio/Portfolio";
import Clients from "components/Clients/Clients";
import Contact from "components/Contact/Contact";
import { useQueryProjectsCategories } from "hooks/useQueryProjectsCategories";
import { useQueryProjects } from "hooks/useQueryProjects";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const HomePageWrapper = styled.div`
  padding-top: 236px;
  @media ${device.md} {
    padding-top: 100px;
  }
`;

const IndexPage = () => {
  const projectsCategories = useQueryProjectsCategories();
  const projects = useQueryProjects();

  return (
    <>
      <MainLayout>
        <HomePageWrapper>
          <Introduction />
          <About />
          <Expertise />
          <Portfolio
            categories={projectsCategories}
            projects={projects}
            limit={4}
            viewAll
          />
          <Clients />
          <Contact />
        </HomePageWrapper>
      </MainLayout>
    </>
  );
};
export default IndexPage;
