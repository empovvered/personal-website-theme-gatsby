import React from "react";
import MainLayout from "layouts/MainLayout";
import Portfolio from "components/Portfolio/Portfolio";
import { useQueryProjectsCategories } from "hooks/useQueryProjectsCategories";
import { useQueryProjects } from "hooks/useQueryProjects";

const PortfolioPage = () => {
  const projectsCategories = useQueryProjectsCategories();
  const projects = useQueryProjects();

  return (
    <>
      <MainLayout>
        <Portfolio categories={projectsCategories} projects={projects}/>
      </MainLayout>
    </>
  );
};

export default PortfolioPage;
