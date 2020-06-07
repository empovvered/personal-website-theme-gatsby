const createPosts = require(`./node/createPosts`);
const createProjects = require(`./node/createPorojects`);

exports.createPages = async ({ actions, graphql }) => {
  await createPosts({ actions, graphql });
  await createProjects({ actions, graphql });
};

const { createRemoteFileNode } = require(`gatsby-source-filesystem`);

exports.createResolvers = ({
  actions,
  cache,
  createNodeId,
  createResolvers,
  store,
  reporter,
}) => {
  const { createNode } = actions;
  createResolvers({
    WORDPRESS_MediaItem: {
      imageFile: {
        type: `File`,
        resolve(source) {
          return createRemoteFileNode({
            url: source.sourceUrl,
            store,
            cache,
            createNode,
            createNodeId,
            reporter,
          });
        },
      },
    },
  });
};
