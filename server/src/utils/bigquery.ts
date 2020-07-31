import * as BigQuery from "@google-cloud/bigquery";

import config from "../utils/config";
import { logger } from "./logger";

export const client = new BigQuery.BigQuery({
  credentials: JSON.parse(config.get("GCP_SERVICE_ACCOUNT_KEY")),
  projectId: config.get("GCP_PROJECT_ID"),
});

interface BigQueryTableArgs {
  name: string;
  schema: BigQuery.TableField[];
  dataset?: string;
  getByIdQuery?: (id: string, dataset: string) => string;
}

export default class BigQueryTable<Row extends object = {}> {
  private readonly table: Promise<BigQuery.Table>;
  private readonly tableName: string;
  private readonly schema: BigQuery.TableField[];
  private readonly dataset: string;
  private readonly getByIdQuery?: (id: string, dataset: string) => string;

  constructor(args: BigQueryTableArgs) {
    this.tableName = args.name;
    this.schema = args.schema;
    this.getByIdQuery = args.getByIdQuery;
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

  public async getById(id: string) {
    if (!this.getByIdQuery) {
      throw new Error(`No getByIdQuery defined for table ${this.tableName}`);
    }
    const [results] = await client.query(this.getByIdQuery(id, this.dataset));

    if (results.length === 1) {
      return results[0] as Row;
    } else if (results.length > 1) {
      return results[results.length - 1] as Row;
    } else {
      return undefined;
    }
  }

  public async get(conditions: Partial<Row>) {
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
  `;

    const [results] = await client.query(query);

    return results as Array<Row>;
  }
}
