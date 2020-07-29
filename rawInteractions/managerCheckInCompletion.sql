SELECT avg(count) AS Avg,
  MIN(count) AS Min,
  MAX(count) AS Max
FROM (
    SELECT JSON_EXTRACT_SCALAR(Participants, '$[1].MemberId') AS ManagerId,
      COUNT(*) as Count
    FROM `kazoo-production.cdc_prod.PM_FeedbackSession`
    WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
      AND CycleType = "SelfEvaluation"
      AND JSON_EXTRACT_SCALAR(Participants, '$[1].Status') = "Closed"
    GROUP BY JSON_EXTRACT_SCALAR(Participants, '$[1].MemberId')
  ) as counts