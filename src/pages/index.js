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

const IndexPage = () => {
  const projectsCategories = useQueryProjectsCategories();
  const projects = useQueryProjects();

  return (
    <>
      <MainLayout>
        <Introduction />
        <About />
        <Expertise />
        <Portfolio
          categories={projectsCategories}
          projects={projects}
          viewAll
        />
        <Clients />
        <Contact />
      </MainLayout>
    </>
  );
};
export default IndexPage;
