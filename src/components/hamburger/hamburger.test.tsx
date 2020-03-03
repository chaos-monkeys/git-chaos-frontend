import React from "react";
import { fireEvent, getByTestId } from "@testing-library/react";
import Hamburger from "./hamburger";
import {
  createComponent,
  renderComponent,
} from "../../../utils/setup-test-env";

describe("Hamburger", () => {
  it("matches snapshot", () => {
    expect(createComponent(<Hamburger isAnimating={false} />).toJSON())
      .toMatchInlineSnapshot(`
      <button
        aria-expanded={false}
        aria-label="Menu"
        data-open={false}
        data-testid="Menu"
        onClick={[Function]}
        type="button"
      >
        <test-file-stub />
      </button>
    `);
  });

  it("toggles the open/closed state on button press", () => {
    const { container } = renderComponent(<Hamburger isAnimating={false} />);

    const button = getByTestId(container, "Menu");
    expect(button.getAttribute("data-open")).toBe("false");
    expect(button.getAttribute("aria-expanded")).toBe("false");
    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("true");
    expect(button.getAttribute("data-open")).toBe("true");
    fireEvent.click(button);
    expect(button.getAttribute("aria-expanded")).toBe("false");
    expect(button.getAttribute("data-open")).toBe("false");
  });
});
