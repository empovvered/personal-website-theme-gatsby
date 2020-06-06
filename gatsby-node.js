const createPages = require(`./node/createPages`);
const createPosts = require(`./node/createPosts`);

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
  await createPosts({ actions, graphql });
};
