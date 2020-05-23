import { useStaticQuery, graphql } from "gatsby";

export const useQueryProjectsCategories = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query allProjectsCategories {
        wordpress {
          categories(where: { parent: 3 }) {
            nodes {
              name
              id
            }
          }
        }
      }
    `
  );
  return wordpress.categories.nodes;
};
