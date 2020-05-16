import { useStaticQuery, graphql } from "gatsby";

export const useQueryProjects = () => {
  const { wordpress } = useStaticQuery(
    graphql`
        query allProjects {
            wordpress {
                projects {
                    nodes {
                        content
                        title
                    }
                }
            }
        }
    `,
  );
  return wordpress.projects.nodes;
};
