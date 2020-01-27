const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

// add slugs to MDX files (to dynamically build the pages)
exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;

  if (node.internal.type === "Mdx") {
    const basePath = `posts`;

    const filePath = createFilePath({ node, getNode, basePath });
    const value = `${basePath}${filePath}`;

    createNodeField({
      name: "slug",
      node,
      value,
    });
  }
};

const getPages = async graphql =>
  graphql(`
    query {
      allMdx {
        edges {
          node {
            id
            fields {
              slug
            }
          }
        }
      }
      allReposJson {
        edges {
          node {
            id
            meta {
              repo_name
              repo_owner
              start_time
              issue_number
              issue_number_title
            }
          }
        }
      }
    }
  `);

// create MDX pages dynamically from the onCreateNode slugs
exports.createPages = async ({ graphql, actions, reporter }) => {
  const { createPage } = actions;
  const result = await getPages(graphql);

  if (result.errors) {
    reporter.panicOnBuild('🚨 ERROR: Loading "createPages" query');
  }

  const posts = result.data.allMdx.edges;
  posts.forEach(({ node }) => {
    createPage({
      path: node.fields.slug,
      component: path.resolve("./src/templates/post/post.tsx"),
      context: { id: node.id },
    });
  });



  const issues = result.data.allReposJson.edges;
  issues.forEach(({ node }) => {
    createPage({
      // example path: /git-chaos/chaos-monkeys/git-chaos/17
      path: [
        "git-chaos",
        node.meta.repo_owner,
        node.meta.repo_name,
        node.meta.issue_number,
      ].join("/"),
      component: path.resolve("./src/templates/repos/repos.tsx"),
      context: { id: node.id },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  });
};
