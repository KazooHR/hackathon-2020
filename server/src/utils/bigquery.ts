import NodeCache from "node-cache";
import * as BigQuery from "@google-cloud/bigquery";

import config from "../utils/config";

export const client = new BigQuery.BigQuery({
  credentials: JSON.parse(config.get("GCP_SERVICE_ACCOUNT_KEY")),
  projectId: config.get("GCP_PROJECT_ID"),
});

const cache = new NodeCache();

interface BigQueryTableArgs {
  name: string;
  schema: BigQuery.TableField[];
  dataset?: string;
}

export default class BigQueryTable<Row extends object = {}> {
  private readonly table: Promise<BigQuery.Table>;
  private readonly tableName: string;
  private readonly schema: BigQuery.TableField[];
  private readonly dataset: string;

  constructor(args: BigQueryTableArgs) {
    this.tableName = args.name;
    this.schema = args.schema;
    this.dataset = args.dataset || config.get("GCP_BIGQUERY_DATASET_ID");
    this.table = this.initTable();
  }

  private async initTable() {
    try {
      const dataset = client.dataset(this.dataset);

      const [datasetExists] = await dataset.exists();
      if (!datasetExists) {
        dataset.create();
      }
      const table = dataset.table(this.tableName);

      const [exists] = await table.exists();
      if (!exists) {
        await dataset.createTable(this.tableName, { schema: this.schema });
      }

      return table;
    } catch (e) {
      throw e;
    }
  }

  public async insert(data: Array<Row>) {
    const table = await this.table;

    await table.insert(data);
  }

  public async get(conditions: Partial<Row>, limit?: number) {
    const query = `
    SELECT *
    FROM ${this.dataset}.${this.tableName}
    WHERE 1=1
      ${Object.entries(conditions)
        .map(([column, value]) => {
          if (value instanceof Date) {
            return `AND ${column} = '${value.toISOString()}'`;
          }

          switch (typeof value) {
            case "boolean":
              return `AND ${column} = ${value ? "TRUE" : "FALSE"}`;
            case "number":
            case "bigint":
              return `AND ${column} = ${value}`;
            case "undefined":
              return "";
            case "string":
            default:
              return `AND ${column} = '${value}'`;
          }
        })
        .join("        \n")}
    ${limit ? `LIMIT ${limit}` : ""}
  `;

    const cachedResult = cache.get<Array<Row>>(query);
    if (cachedResult) return cachedResult;

    const [results] = await client.query(query);

    cache.set(query, results, 60 * 60 * 24);

    return results as Array<Row>;
  }
}
