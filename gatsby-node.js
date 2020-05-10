process.env.NODE_TLS_REJECT_UNAUTHORIZED = 0;

const createPages = require(`./node/createPages`);

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
};
