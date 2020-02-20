import React from 'react';
import { graphql } from 'gatsby';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import * as styles from "./post.module.scss";
import Nav from "../nav/nav";
import { AppProvider } from "../../context/appContext"


interface PageTemplateProps {
  data: {
    mdx: {
      body: string,
      frontmatter: {
        title: string,
        renderTitle: boolean,
        author: Array<string>,
      }
    }
  }
}

const PageTemplate = ({ data }: PageTemplateProps) => {
  const frontmatter = data?.mdx?.frontmatter;
  const renderTitle = frontmatter?.renderTitle && frontmatter?.title;

  return (
    <>
      <AppProvider>
        <Nav />
        <article className={styles.post}>
          { renderTitle && <h1 className={styles.post_title}>{frontmatter.title}</h1> }
          <div className={styles.post_content}>
            <MDXRenderer>{data.mdx.body}</MDXRenderer>
          </div>
        </article>
      </AppProvider>
    </>
)};


export const pageQuery = graphql`
  query ($id: String) {
    mdx(id: {eq: $id }) {
      id
      body
      frontmatter {
        title
        renderTitle
        author
      }
    }
  }`;

export default PageTemplate;

