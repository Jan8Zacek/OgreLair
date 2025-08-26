import { defineConfig } from "cypress";
import { readFileSync } from "fs";

export default defineConfig({
  watchForFileChanges:false,
  projectId: "59244z",
  
  e2e: {
    baseUrl: "https://www.ogridoupe.cz/",
    setupNodeEvents(on, config) {

      const testData = readFileSync("cypress/fixtures/product.json", "utf8")
      const testDataParsed = JSON.parse(testData)
      config.env = {...testDataParsed}
      // implement node event listeners here

      return config
    },
  },
});
