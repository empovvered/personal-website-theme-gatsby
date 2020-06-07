const path = require(`path`);

module.exports = async ({ actions, graphql }) => {
  const GET_PROJECTS = `
    query GET_PROJECTS($first:Int) {
      wordpress {
        projects( first: $first ) {
          nodes {
            id
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
            content
            uri
          }
        }
      }
    }
  `;

  const { createPage } = actions;

  const fetchPages = async (variables) =>
    graphql(GET_PROJECTS, variables).then(({ data }) => {
      return data.wordpress.projects.nodes;
    });

  await fetchPages({ first: 500 }).then((allPages) => {
    allPages.forEach((project) => {
      createPage({
        path: project.uri,
        component: path.resolve(`./src/templates/Project/Project.js`),
        context: {
          title: project.title,
          content: project.content,
          featuredImage: project.featuredImage,
        },
      });
    });
  });
};
