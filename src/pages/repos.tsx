import React from "react";
import { Link, graphql } from "gatsby";

interface Meta {
  repo_name: string;
  repo_owner: string;
  start_time: number;
  commit_sha: string;
  issue_number: string;
  issue_number_title: string;
}

interface Node {
  id: string;
  meta: Meta;
}

interface Edge {
  node: Node;
}

interface AllReposJson {
  edges: Edge[];
}

interface Data {
  allReposJson: AllReposJson;
}

interface RootObject {
  data: Data;
}

const buildRepo = (node: Node) => {
  const {
    repo_name: repoName,
    repo_owner: repoOwner,
    issue_number: issueNumber,
    issue_number_title: issueNumberTitle,
  } = node.meta;

  const slug = ["git-chaos", repoOwner, repoName, issueNumber].join("/");

  return (
    <li key={node.id}>
      <Link to={slug}>
        <h1>{repoName}</h1>
        <h2>{repoOwner}</h2>
        {issueNumberTitle}
      </Link>
    </li>
  );
};

const buildRepoList = (edges: Edge[]) =>
  edges.map(({ node }: Edge) => buildRepo(node));

const ReposIndex = ({ data }: RootObject) => {
  const { edges } = data.allReposJson;
  const repoList = buildRepoList(edges);

  return (
    <div>
      <ul>{repoList}</ul>
    </div>
  );
};

export const pageQuery = graphql`
  query {
    allReposJson {
      edges {
        node {
          id
          meta {
            repo_name
            repo_owner
            issue_number
            issue_number_title
          }
        }
      }
    }
  }
`;

export default ReposIndex;
