import React from "react";
import MainLayout from "layouts/MainLayout";
import Portfolio from "components/Portfolio/Portfolio";
import { useQueryProjectsCategories } from "hooks/useQueryProjectsCategories";
import { useQueryProjects } from "hooks/useQueryProjects";
import styled from "styled-components";
import { device } from "assets/styles/mediaQueries";

const PortfolioPageWrapper = styled.div`
  padding-top: 100px;
  @media ${device.md} {
    padding-top: 50px;
  }
`;

const PortfolioPage = () => {
  const projectsCategories = useQueryProjectsCategories();
  const projects = useQueryProjects();

  return (
    <>
      <PortfolioPageWrapper>
        <MainLayout>
          <Portfolio categories={projectsCategories} projects={projects} />
        </MainLayout>
      </PortfolioPageWrapper>
    </>
  );
};

export default PortfolioPage;
