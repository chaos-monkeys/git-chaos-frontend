import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import * as styles from "./byline.module.scss";

interface Data {
  site: {
    siteMetadata: {
      emails: {
        feedback: string;
      };
    };
  };
}

const PureByline = ({ data }: { data: Data }): JSX.Element => (
  <div className={styles.byline} data-testid="byline">
    <p>
      Chaos Monkeys is a built with{" "}
      <span role="img" aria-label="love">
        ❤️
      </span>{" "}
      by Ollie & Rob.
    </p>
    <p>
      We’re building kickass tools to help you deliver better. We want you to
      love what we build as much as we do -{" "}
      <a
        href={`mailto:${data.site.siteMetadata.emails.feedback}`}
        data-testid="byline-link"
      >
        let us know how we are doing
      </a>
    </p>
  </div>
);

const Byline = (): JSX.Element => {
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

  return <PureByline data={data} />;
};

export default Byline;
