const { defineConfig } = require("cypress");

module.exports = defineConfig({
  
  e2e: {
    setupNodeEvents(on, config) {
      
      // implement node event listeners here
      
    },   
    viewportWidth: 1920,
    viewportHeight: 1080,
    supportFile: 'cypress/support/index.js',
    chromeWebSecurity: false,
  },
 
  
 
});
