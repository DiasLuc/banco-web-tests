const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    // How to have video of execution
    video: false,
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
