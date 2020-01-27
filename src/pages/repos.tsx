import React from 'react';
import { Link, graphql } from 'gatsby';

interface ReposIndex {
  "data": {
    "allReposJson": {
      "edges": [
        {
          "node": {
            "id": string,
            "meta": {
              "repo_name": string,
              "repo_owner": string,
              "start_time": number,
              "commit_sha": string,
            }
          }
        }
      ]
    }
  }
}

const ReposIndex = ({ data }: ReposIndex) => {
  const { edges } = data.allReposJson
  const { repo_name: repoName } = edges[0].node.meta
  const { repo_owner: repoOwner } = edges[0].node.meta
  return (
    <div>
      <h1>{repoName}</h1>
      <h2>{repoOwner}</h2>
    </div>
  );
};

export const pageQuery = graphql`
query {
  allReposJson{
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
`;

export default ReposIndex;
