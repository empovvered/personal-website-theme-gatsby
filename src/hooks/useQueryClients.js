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
