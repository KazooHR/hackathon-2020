import BigQueryTable from "../utils/bigquery";
import { FeedbackRequest } from "./FeedbackRequests";

export interface Feedback extends FeedbackRequest {
  requestId: string;
  respondedAt: Date;
  rating: number;
  comment?: string;
}

const Feedback = new BigQueryTable<Feedback>({
  name: "feedback",
  schema: [
    { name: "id", type: "STRING", mode: "REQUIRED" },
    { name: "subjectId", type: "STRING", mode: "REQUIRED" },
    { name: "action", type: "STRING", mode: "REQUIRED" },
    { name: "question", type: "STRING", mode: "REQUIRED" },
    { name: "value", type: "STRING", mode: "REQUIRED" },
    { name: "userId", type: "STRING", mode: "REQUIRED" },
    { name: "requestedAt", type: "TIMESTAMP", mode: "REQUIRED" },
    { name: "requestId", type: "STRING", mode: "REQUIRED" },
    { name: "respondedAt", type: "TIMESTAMP", mode: "REQUIRED" },
    { name: "rating", type: "FLOAT64", mode: "REQUIRED" },
    { name: "comment", type: "STRING", mode: "NULLABLE" },
  ],
});

export default Feedback;
