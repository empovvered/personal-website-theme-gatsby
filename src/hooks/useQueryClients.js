import { useStaticQuery, graphql } from "gatsby";

export const useQueryClients = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query allClients {
        wordpress {
          clients(first: 100) {
            nodes {
              clientsAdditionalData {
                companyName
              }
              featuredImage {
                sourceUrl
                altText
                imageFile {
                  name
                  childImageSharp {
                    fluid(maxWidth: 500, maxHeight: 500, quality: 75) {
                      srcSet
                      src
                      sizes
                    }
                  }
                }
              }
              title
              excerpt
              id
            }
          }
        }
      }
    `
  );
  return wordpress.clients.nodes;
};
