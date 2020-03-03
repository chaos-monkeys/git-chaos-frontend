import React from "react";
import { render, getByTestId } from "@testing-library/react";
import renderer from "react-test-renderer";
import * as Gatsby from "gatsby";
import Byline from "./byline";

describe("Byline", () => {
  const email = "feedback@chaosmonkeys.dev";

  beforeEach(() => {
    const data = {
      site: {
        siteMetadata: {
          emails: {
            feedback: email,
          },
        },
      },
    };

    const useStaticQuery = jest.spyOn(Gatsby, "useStaticQuery");
    useStaticQuery.mockImplementationOnce(() => data);
  });

  it("matches snapshot", () => {
    // unable to do 'toMatchInlineSnapshot' due to eslint removing white space, and creating a diff :(
    expect(renderer.create(<Byline />).toJSON()).toMatchSnapshot();
  });

  it("renders correctly", () => {
    const { container } = render(<Byline />);
    expect(getByTestId(container, "byline")).toBeInTheDocument();
    const link = getByTestId(container, "byline-link");
    expect(link.getAttribute("href")).toBe(`mailto:${email}`);
  });
});
