const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      return config;
    },
    specPattern: 'cypress/e2e/**/*.spec.js',
    viewportWidth: 1280,
    viewportHeight: 720,
    reporter: 'cypress-multi-reporters',
    reporterOptions: {
      configFile: 'reporter-config.json',
    },
    env: {
      baseUrl: 'http://localhost:5000/',
    },
  },
});
