// taken from https://www.gatsbyjs.org/docs/unit-testing/

module.exports = {
  transform: {
    "^.+\\.tsx?$": "ts-jest",
    "^.+\\.[jt]sx?$": "<rootDir>/jest-preprocess.js",
  },
  testRegex: "(/__tests__/.*|(\\.|/)(test|spec))\\.([tj]sx?)$",
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": "identity-obj-proxy",
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$":
      "<rootDir>/__mocks__/file-mock.js",
  },
  moduleFileExtensions: ["ts", "tsx", "js", "jsx", "json", "node"],
  testPathIgnorePatterns: ["node_modules", ".cache", "public"],
  transformIgnorePatterns: ["node_modules/(?!(gatsby)/)"],
  globals: {
    __PATH_PREFIX__: "",
  },
  testURL: "http://localhost",
  setupFiles: ["<rootDir>/loadershim.js"],
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  resetMocks: true, // https://jestjs.io/docs/en/configuration#resetmocks-boolean
  resetModules: true, // https://jestjs.io/docs/en/configuration#resetmodules-boolean
};
