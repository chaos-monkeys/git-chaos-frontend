import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./byline.module.scss";

const Byline = () => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          emails {
            feedback
          }
        }
      }
    }
  `);

  const email = data.site.siteMetadata.emails.feedback;

  return (
    <div className={styles.byline}>
      <p>
        Chaos Monkeys is a built with
        {" "}
        <span role="img" aria-label="love">
          ❤️
        </span>
        {" "}
        by Ollie & Rob.
      </p>
      <p>
        We’re building kickass tools to help you deliver better. We want you to
        love what we build as much as we do -
        {" "}
        <a href={`mailto:${email}`}>let us know how we are doing</a>
      </p>
    </div>
  );
};

export default Byline;
