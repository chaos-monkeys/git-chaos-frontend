import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";
import * as Image from "gatsby-image";

interface PageTemplateProps {
  data: {
    mdx: {
      body: string;
      frontmatter: {
        title: string;
        featuredImage: {
          childImageSharp: {
            fluid: Image.FluidObject;
          };
        };
      };
    };
  };
}

const PageTemplate = ({ data }: PageTemplateProps) => (
  <div>
    <Image.default
      fluid={data.mdx.frontmatter.featuredImage.childImageSharp.fluid}
    />
    <h1>{data.mdx.frontmatter.title}</h1>
    <MDXRenderer>{data.mdx.body}</MDXRenderer>
  </div>
);

export const pageQuery = graphql`
  query($id: String) {
    mdx(id: { eq: $id }) {
      id
      body
      frontmatter {
        title
        featuredImage {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;

export default PageTemplate;
