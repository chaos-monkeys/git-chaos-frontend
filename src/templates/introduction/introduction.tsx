// FIXME: make this into a separate copmponnet?
import React from "react";
import { useStaticQuery, graphql, Link } from "gatsby";
import Tile from "../../components/tile/tile";

import * as styles from "./introduction.module.scss";

const Introduction = () => {
  const data = useStaticQuery(graphql`
    query {
      mdx(frontmatter: { title: { eq: "Predicting chaos" } }) {
        id
        frontmatter {
          title
          author
        }
        fields {
          slug
        }
      }
    }
  `);

  const { title, author } = data.mdx.frontmatter;
  const { slug } = data.mdx.fields;

  return (
    // TOOD: add text ally stuff and arias
    <Link to={`/${slug}`} className={styles.tileLink}>
      <Tile className={styles.tile} />
      <h1 className={styles.title}>{title}</h1>
      <h3 className={styles.author}>{`By ${author}`}</h3>
    </Link>
  );
};

export default Introduction;
