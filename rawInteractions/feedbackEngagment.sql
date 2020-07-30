-- # of feedback requested about self / Avg # of feedback request about self in company

--average in our company--
SELECT avg(count)
FROM (
    SELECT COUNT (*) AS Count
    FROM `kazoo-production.cdc_prod.PM_FeedbackRequest`
    WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
      AND CycleType = "Request"
      AND RequesterMemberId = SubjectMemberId
    GROUP BY RequesterMemberId
  ) as counts

--active users in our company
SELECT hgId AS MemberId FROM `kazoo-production.cdc_prod.PM_Member`
WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
  AND MembershipStatus = "Active"

-- for each active memberId in our company FIND
--WHERE
--      SubjectMemberId = memberId
--      GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
--      AND CycleType = "Request"
--      AND RequesterMemberId = SubjectMemberId
