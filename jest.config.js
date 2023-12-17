module.exports = {
    moduleFileExtensions: [
        "js",
        "ts",
        "tsx",
    ],
    transform: {
        "^.+\\.tsx?$": "ts-jest"
    },
    testRegex: "(tests/.*|(\\.|/)(test|spec))\\.(jsx?|tsx?)$",
    collectCoverageFrom: ["src/**/*.ts"],
    coverageThreshold: {
        "global": {
            "branches": 100,
            "functions": 100,
            "lines": 100,
            "statements": 100
        }
    },
    collectCoverage: true
};
