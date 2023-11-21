module.exports = {
  testEnvironment: "jsdom",
  //   moduleFileExtensions: ["js", "ts", "tsx"],
  transform: {
    "^.+\\.tsx?$": ["ts-jest", { diagnostics: false }],
  },
  //   testRegex: "(tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
  collectCoverageFrom: ["src/**/*.{ts,tsx}"],
  coverageThreshold: {
    global: {
      branches: 100,
      functions: 100,
      lines: 100,
      statements: 100,
    },
  },
  collectCoverage: true,
  moduleNameMapper: {
    "\\.(css)$": "identity-obj-proxy",
  },
};
