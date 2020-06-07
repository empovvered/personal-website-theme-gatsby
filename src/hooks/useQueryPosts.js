import { useStaticQuery, graphql } from "gatsby";

export const useQueryPosts = () => {
  const { wordpress } = useStaticQuery(
    graphql`
      query WordPressPostsPage {
        wordpress {
          posts(first: 1500) {
            nodes {
              author {
                name
              }
              date
              id
              featuredImage {
                altText
                sourceUrl
              }
              title
              uri
            }
          }
        }
      }
    `
  );
  return wordpress.posts.nodes;
};
