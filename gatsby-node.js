const createPages = require(`./node/createPages`);

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
        resolve(source, args, context, info) {
          return createRemoteFileNode({
            url: source.mediaItemUrl,
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

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
};
