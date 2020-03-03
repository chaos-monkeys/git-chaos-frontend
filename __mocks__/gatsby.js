/* eslint-disable @typescript-eslint/no-unused-vars */
import React from "react";

const gatsby = jest.requireActual("gatsby");

module.exports = {
  ...gatsby,
  graphql: jest.fn(),
  // these props are invalid for an `a` tag
  Link: jest
    .fn()
    .mockImplementation(
      ({
        activeClassName,
        activeStyle,
        getProps,
        innerRef,
        partiallyActive,
        ref,
        replace,
        to,
        ...rest
      }) =>
        /* istanbul ignore next */
        React.createElement("a", {
          ...rest,
          href: to,
        }),
    ),
  StaticQuery: jest.fn(),
  useStaticQuery: jest.fn(),
};
