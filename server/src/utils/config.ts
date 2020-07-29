import convict from "convict";

// Let's try to keep this list alphabetized for readability
/* eslint sort-keys: "error" */
const configurationSchema = {
  HOST: {
    default: "http://localhost:8080",
    doc: "The app base url for where this app is running",
    env: "HOST",
    format: String,
  },
  GCP_PROJECT_ID: {
    default: "hmm-dev",
    doc: "GCP Project ID for where this will run",
    env: "GCP_PROJECT_ID",
    format: String,
  },
  GCP_BIGQUERY_DATASET_ID: {
    default: "",
    doc: "GCP BigQuery Dataset ID",
    env: "GCP_BIGQUERY_DATASET_ID",
    format: String,
  },
  GCP_SERVICE_ACCOUNT_KEY: {
    default: "",
    doc: "JSON string of the GCP service account key",
    env: "GCP_SERVICE_ACCOUNT_KEY",
    format: String,
    sensitive: true,
  },
  NODE_ENV: {
    // ref: http://expressjs.com/en/advanced/best-practice-performance.html#set-node_env-to-production
    default: "development",
    doc: "Specifies the environment in which an application is running",
    env: "NODE_ENV",
    format: ["development", "production"],
  },
  SHA: {
    default: "no-sha-provided",
    doc: "Specifies the sha of the current version of the application",
    env: "SHA",
    format: String,
  },
  OKTA_CLIENT_ID: {
    default: "0oa4wqluetAkekgqg357",
    doc: "Client ID for our Okta OIDC auth provider",
    env: "OKTA_CLIENT_ID",
    format: String,
  },
};

const configuration = convict(configurationSchema);

type Schema = typeof configuration extends convict.Config<infer T> ? T : never;

// Ensure type safety of keys we `get`.
export default {
  get<K extends keyof Schema>(key: K) {
    return configuration.get(key);
  },
  getSchema: configuration.getSchema.bind(configuration),
  load: configuration.load.bind(configuration),
  set: configuration.set.bind(configuration),
  toString: configuration.toString.bind(configuration),
};
