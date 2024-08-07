const { defineConfig } = require('cypress');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

module.exports = defineConfig({
  e2e: {
    chromeWebSecurity: false,
    reporter: 'cypress-mochawesome-reporter',
    setupNodeEvents(on, config) {
      require('cypress-mochawesome-reporter/plugin')(on);
      allureWriter(on, config);
      return config;
    },
    env: {
      BASE_URL: 'https://www.saucedemo.com/',
      USER_NAME: 'standard_user',
      USER_PASSWORD: 'secret_sauce',
      allure: true,
    },
  },
});
