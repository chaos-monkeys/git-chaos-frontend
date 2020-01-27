import React from "react";
import { graphql } from "gatsby";

interface RepoTemplateProps {
  data: {
    allReposJson: {
      edges: [
        {
          node: {
            meta: {
              repo_name: string;
              repo_owner: string;
              start_time: string;
              commit_sha: string;
              issue_number: string;
              issue_number_title: string;
            };
          };
        },
      ];
    };
  };
}

const RepoTemplate = ({ data }: RepoTemplateProps) => {
  const { edges } = data.allReposJson;
  const { repo_name: repoName } = edges[0].node.meta;
  const { repo_owner: repoOwner } = edges[0].node.meta;
  const { issue_number_title: issueNumberTitle } = edges[0].node.meta;
  return (
    <div>
      <h1>{repoName}</h1>
      <h2>{repoOwner}</h2>
      <h2>{issueNumberTitle}</h2>
    </div>
  );
};

export const pageQuery = graphql`
  query($id: String) {
    allReposJson(filter: { id: { eq: $id } }) {
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

export default RepoTemplate;
