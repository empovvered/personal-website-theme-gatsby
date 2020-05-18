process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;
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

const createPages = require(`./node/createPages`);

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
};
