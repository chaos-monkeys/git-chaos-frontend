module.exports = function() {
  return {
    files: ["src/*.tsx"],
    tests: ["src/*.test.*"],
    hints: {
      ignoreCoverage: /istanbul ignore next/,
    },
  };
};
