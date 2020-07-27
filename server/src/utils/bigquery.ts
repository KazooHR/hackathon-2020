import { BigQuery } from "@google-cloud/bigquery";

import config from "../utils/config";

const client = new BigQuery({
  credentials: JSON.parse(config.get("GCP_SERVICE_ACCOUNT_KEY")),
  projectId: config.get("GCP_PROJECT_ID"),
});

const dataset = client.dataset(config.get("GCP_BIGQUERY_DATASET_ID"));

const init = async () => {
  if (!(await dataset.exists())[0]) {
    await dataset.create();
  }
};

export default {
  init,
  dataset,
  client,
};
