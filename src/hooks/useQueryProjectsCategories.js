import { useStaticQuery, graphql } from "gatsby";

export const useQueryProjectsCategories = () => {
  const { wordpress } = useStaticQuery(
    graphql`
        query allProjectsCategories {
            wordpress {
                categories(where: {parent: 12}) {
                    nodes {
                        name
                        id
                    }
                }
            }
        }
    `,
  );
  return wordpress.categories.nodes;
};
