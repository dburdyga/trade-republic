module.exports = {
  testMatch: ["<rootDir>/src/**/*.spec.ts"],
  preset: "@vue/cli-plugin-unit-jest/presets/typescript-and-babel",
  transform: {
    "^.+\\.vue$": "vue-jest",
  },
};
