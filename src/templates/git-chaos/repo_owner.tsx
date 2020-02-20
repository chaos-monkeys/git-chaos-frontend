import React from "react";
import { graphql } from "gatsby";

interface RepoTemplateProps {
  data: {
    allReposJson: {
      edges: [
        {
          node: {
            meta: {
              repo_owner: string;
            };
          };
        },
      ];
    };
  };
}

const RepoTemplate = ({ data }: RepoTemplateProps) => {
  const { edges } = data.allReposJson;
  const { repo_owner: repoOwner } = edges[0].node.meta;
  return (
    <div>
      <h2>{repoOwner}</h2>
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
            repo_owner
          }
        }
      }
    }
  }
`;

export default RepoTemplate;
