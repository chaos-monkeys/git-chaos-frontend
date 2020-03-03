/* eslint-disable import/no-extraneous-dependencies */
import React from "react";
import "@testing-library/jest-dom/extend-expect";
import { cleanup, render, RenderResult } from "@testing-library/react";

import renderer, { ReactTestRenderer } from "react-test-renderer";
import { AppProvider } from "../src/context/appContext";

export const renderComponent = (
  children: JSX.Element | Array<JSX.Element>,
): RenderResult => render(<AppProvider>{children}</AppProvider>);

export const createComponent = (
  children: JSX.Element | Array<JSX.Element>,
): ReactTestRenderer => renderer.create(<AppProvider>{children}</AppProvider>);

afterEach(() => {
  cleanup();
  jest.clearAllMocks();
});
