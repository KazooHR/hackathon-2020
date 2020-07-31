import BigQueryTable from "../utils/bigquery";

export interface FeedbackRequest {
  id: string;
  subjectId: string;
  action: string;
  question: string;
  value: string;
  userId: string;
  requestedAt: Date;
}

const FeedbackRequests = new BigQueryTable<FeedbackRequest>({
  name: "feedbackRequests",
  schema: [
    { name: "id", type: "STRING", mode: "REQUIRED" },
    { name: "subjectId", type: "STRING", mode: "REQUIRED" },
    { name: "action", type: "STRING", mode: "REQUIRED" },
    { name: "question", type: "STRING", mode: "REQUIRED" },
    { name: "value", type: "STRING", mode: "REQUIRED" },
    { name: "userId", type: "STRING", mode: "REQUIRED" },
    { name: "requestedAt", type: "TIMESTAMP", mode: "REQUIRED" },
  ],
});

export default FeedbackRequests;
