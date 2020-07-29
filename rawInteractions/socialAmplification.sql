-- # of high-fives and/or comments/Avg. of high-fives and/or comments in Company

-- PM # of comments / Avg. of high-fives and/or comments in Company
SELECT avg(count) AS Avg, MIN(count) AS Min, MAX(count) AS Max
  FROM
    (
    SELECT COUNT (*) AS Count
      FROM `kazoo-production.cdc_prod.PM_Comment`
     WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
     AND Type = "Comment"
    GROUP BY MemberId
    ) as counts
