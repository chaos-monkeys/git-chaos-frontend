import classBuilder from "./classBuilder";

describe("classBuilder", () => {
  it("returns a string when given a single argument", () => {
    expect(           classBuilder("foo")).toBe("foo");
  });

  it("returns a string when given multiple arguments", () => {
    expect(classBuilder("foo", "bar", "baz")).toBe("foo bar baz");
  });
});
