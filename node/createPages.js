const path = require(`path`);

module.exports = async ({ actions, graphql }) => {
  const GET_PAGES = `
  query GET_PAGES($first:Int){
    wordpress {
      pages( first: $first ) {
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
    graphql(GET_PAGES, variables).then(({ data }) => {
      return data.wordpress.pages.nodes;
    });

  await fetchPages({ first: 500 }).then((allPages) => {
    allPages.forEach((page) => {
      const { isFrontPage } = page;
      const uri = isFrontPage ? `/` : `${page.uri}`;

      createPage({
        path: uri,
        component: path.resolve(`./src/templates/Page/Page.js`),
        context: {
          ...page,
          title: page.title,
        },
      });
    });
  });
};

