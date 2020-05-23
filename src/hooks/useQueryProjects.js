import { useStaticQuery, graphql } from "gatsby";

export const useQueryProjects = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query allProjects {
        wordpress {
          projects(first: 100) {
            nodes {
              featuredImage {
                sourceUrl
              }
              id
              title
              categories(where: { parent: 3 }) {
                nodes {
                  id
                }
              }
            }
          }
        }
      }
    `
  );
  return wordpress.projects.nodes;
};
