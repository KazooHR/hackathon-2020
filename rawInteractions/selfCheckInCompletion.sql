SELECT avg(count) AS Avg, MIN(count) AS Min, MAX(count) AS Max
  FROM
    (
    SELECT COUNT (*) AS Count
      FROM `kazoo-production.cdc_prod.PM_FeedbackCycleInitiator`
     WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
     AND CycleType = "SelfEvaluation"
     AND Type = "Subject"
     AND Status = "Closed"
    GROUP BY MemberId
    ) as counts
