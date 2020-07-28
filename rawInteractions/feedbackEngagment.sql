--total rows considered--
--SELECT * FROM `kazoo-production.cdc_prod.PM_FeedbackRequest`
--WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde" AND CycleType = "Request"
--AND RequesterMemberId = SubjectMemberId

--average in our company--
SELECT avg(count)
  FROM
    (
    SELECT COUNT (*) AS Count
      FROM `kazoo-production.cdc_prod.PM_FeedbackRequest`
     WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
     AND CycleType = "Request"
     AND RequesterMemberId = SubjectMemberId
    GROUP BY RequesterMemberId
    ) as counts

