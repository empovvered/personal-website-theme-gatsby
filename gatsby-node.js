const createPages = require(`./node/createPages`);
const createPosts = require(`./node/createPosts`);
const createProjects = require(`./node/createPorojects`);

exports.createPages = async ({ actions, graphql }) => {
  await createPages({ actions, graphql });
  await createPosts({ actions, graphql });
  await createProjects({ actions, graphql });
};
