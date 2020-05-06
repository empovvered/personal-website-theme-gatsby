import { useStaticQuery, graphql } from "gatsby";

export const useQueryMenuData = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query MenuData {
        wordpress {
          menus {
            nodes {
              id
              name
              slug
              menuItems {
                nodes {
                  id
                  label
                  url
                }
              }
            }
          }
        }
      }
    `
  );
  return wordpress.menus;
};
