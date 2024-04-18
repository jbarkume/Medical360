import { defineConfig } from "cypress";

export default defineConfig({
  e2e: {
    baseUrl: "https://medical360-d65d823d7d75.herokuapp.com",
    setupNodeEvents(on, config) {
      // Your setup code here
    },
  },
});
