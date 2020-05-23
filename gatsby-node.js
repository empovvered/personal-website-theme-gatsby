const createPages = require(`./node/createPages`);

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
};
