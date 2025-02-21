const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    baseUrl : 'https://www.saucedemo.com/v1/',
    specPattern: [
      "cypress/e2e/**/*.spec.js", // pour inclure les fichiers .spec.js
      "cypress/e2e/**/*.cy.js",   // pour inclure les fichiers .cy.js
      "cypress/e2e/**/*.js"       // pour inclure tous les fichiers .js
    ],
  },
});
