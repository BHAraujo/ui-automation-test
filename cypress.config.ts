import { defineConfig } from "cypress";
import { baseUrlStaging } from "./cypress/environment/staging/stagingEnvironment.js";


export default defineConfig({
  allowCypressEnv: false,
  projectId: "",
  pageLoadTimeout: 15000,
  
  e2e: {
    baseUrl: process.env.base_url || baseUrlStaging,
  env: {
  },

  expose: {
    environment: "staging",
  }
    
  },
});
