module.exports = {
  setupFilesAfterEnv: ["<rootDir>/setup-test-env.js"],
  transform: {
    "^.+\\.jsx?$": `<rootDir>/jest-preprocess.js`,
  },
  moduleNameMapper: {
    ".+\\.(css|styl|less|sass|scss)$": `identity-obj-proxy`,
    ".+\\.(jpg|jpeg|png|gif|eot|otf|webp|svg|ttf|woff|woff2|mp4|webm|wav|mp3|m4a|aac|oga)$": `<rootDir>/__mocks__/file-mock.js`,
    "^@components(.*)$": "<rootDir>/src/components$1",
    "^@services(.*)$": "<rootDir>/src/servicess$1",
    "^@utils(.*)$": "<rootDir>/src/utils$1",
    "^@context(.*)$": "<rootDir>/src/context$1",
    "^@helpers(.*)$": "<rootDir>/src/helpers$1",
    "^@assets(.*)$": "<rootDir>/src/assets$1",
    "^@hooks(.*)$": "<rootDir>/src/hooks$1",
  },
  transformIgnorePatterns: [`node_modules/(?!(gatsby)/)`],
  globals: {
    __PATH_PREFIX__: ``,
  },
  testURL: `http://localhost`,
  setupFiles: [`<rootDir>/loadershim.js`],
  collectCoverage: true,
  coverageThreshold: {
    global: {
      statements: 70,
    },
  },
};
