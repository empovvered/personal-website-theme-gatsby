import { useStaticQuery, graphql } from "gatsby";

export const useQueryProjects = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query allProjects {
        wordpress {
          projects {
            edges {
              node {
                content
                categories(where: { parent: 12 }) {
                  edges {
                    node {
                      name
                    }
                  }
                }
                title
                featuredImage {
                  sourceUrl
                  imageFile {
                    childImageSharp {
                      fluid {
                        src
                        srcSet
                      }
                    }
                  }
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
