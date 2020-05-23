import { useStaticQuery, graphql } from "gatsby";

export const useQueryProjects = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query MyQuery {
        wordpress {
          projects {
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
