SELECT avg(count) AS Avg, MIN(count) AS Min, MAX(count) AS Max
  FROM
    (
    SELECT COUNT (*) AS Count
      FROM `kazoo-production.cdc_prod.PM_FeedbackSession`
     WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
     AND CycleType = "SelfEvaluation"
     AND "Participants[1].Status" = "Closed"
    GROUP BY $Participants[1].$MemberId
    ) as counts
