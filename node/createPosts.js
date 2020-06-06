const path = require(`path`);

module.exports = async ({ actions, graphql }) => {
  const GET_POSTS = `
  query GET_POSTS{
    wordpress {
      posts {
				nodes {
					content
					title
					uri
					}
				}
      }
    }
  `;

  const fetchPosts = async (variables) =>
    graphql(GET_POSTS, variables).then(({ data }) => {
      return data.wordpress.posts.nodes;
    });

  await fetchPosts({ first: 500 }).then((allPosts) => {
    allPosts.forEach((post) => {
      actions.createPage({
        path: post.uri,
        component: path.resolve(`./src/templates/Post/Post.js`),
        context: {
          title: post.title,
          content: post.content,
        },
      });
    });
  });
};
