const path = require(`path`);

module.exports = async ({ actions, graphql }) => {
  const GET_PORTFOLIO = `
  query GET_PORTFOLIO{
    wordpress {
      pages(where: {name: "portfolio"}) {
        nodes {
          isFrontPage
          title
          uri
        }
      }
    }
  }
  `;

  const { createPage } = actions;

  const fetchPages = async (variables) =>
    graphql(GET_PORTFOLIO, variables).then(({ data }) => {
      return data.wordpress.pages.nodes;
    });

  await fetchPages({ first: 500 }).then((allPages) => {
    allPages.forEach((page) => {
      createPage({
        path: page.uri,
        component: path.resolve(`./src/templates/Portfolio.js`),
        context: {
          ...page,
          title: page.title,
        },
      });
    });
  });
};
