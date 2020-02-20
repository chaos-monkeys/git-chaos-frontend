import React from 'react';
import * as styles from './byline.module.scss';


const Byline = () =>(
  <div className={styles.byline}>
    <p>
        Chaos Monkeys is a built with
      {' '}
      <span role="img" aria-label="love">❤️</span>
      {' '}
        by Ollie and Rob.
    </p>
    <p>
    We’re building kickass tools to help you deliver better. We want you to love what we build as much as we do -
      {' '}
      <a href="mailto:feedback@chaosmonkeys.dev">let us know how we are doing</a>
    </p>
  </div>
)


export default Byline;
