/**
 * Implement Gatsby's Node APIs in this file.
 *
 * See: https://www.gatsbyjs.org/docs/node-apis/
 */

const { createFilePath } = require("gatsby-source-filesystem");
const path = require("path");

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions;
  // you only want to operate on `Mdx` nodes. If you had content from a
  // remote CMS you could also check to see if the parent node was a
  // `File` node here
  if (node.internal.type === "Mdx") {
    const basePath = `posts`;

    const filePath = createFilePath({ node, getNode,  basePath  });
    const value = `${basePath}${filePath}`

    createNodeField({
      // Name of the field you are adding
      name: "slug",
      // Individual MDX node
      node,
      // Generated value based on filepath with "blog" prefix. you
      // don't need a separating "/" before the value because
      // createFilePath returns a path with the leading "/".
      value
    });
  }
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
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
    }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allMdx.edges;
  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: node.fields.slug,
      // This component will wrap our MDX content
      component: path.resolve("./src/templates/post/post.tsx"),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};

exports.createPages = async ({ graphql, actions, reporter }) => {
  // Destructure the createPage function from the actions object
  const { createPage } = actions;
  const result = await graphql(`
  query {
    allReposJson {
      edges {
        node {
          id
          meta {
            repo_name
            repo_owner
            start_time
            commit_sha
            issue_number
            issue_number_title
          }
        }
      }
    }
  }
  `);

  if (result.errors) {
    reporter.panicOnBuild('🚨  ERROR: Loading "createPages" query');
  }

  // Create blog post pages.
  const posts = result.data.allReposJson.edges;

  const prefix = "git-chaos";

  // you'll call `createPage` for each result
  posts.forEach(({ node }) => {
    const slug = [prefix, node.meta.repo_owner, node.meta.repo_name, node.meta.issue_number].join('/')

    createPage({
      // This is the slug you created before
      // (or `node.frontmatter.slug`)
      path: slug,
      // This component will wrap our MDX content
      component: path.resolve("./src/templates/repos/repos.tsx"),
      // You can use the values in this context in
      // our page layout component
      context: { id: node.id },
    });
  });
};

exports.onCreateWebpackConfig = ({ actions }) => {
  actions.setWebpackConfig({
    devtool: "eval-source-map",
  });
};
