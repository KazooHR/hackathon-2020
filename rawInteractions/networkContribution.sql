-- Network Contribution for PM
SELECT avg(count) AS Avg,
  MIN(count) AS Min,
  MAX(count) AS Max
FROM (
    SELECT COUNT (*) AS Count
    FROM `kazoo-production.cdc_prod.PM_Recognition`
    WHERE "CreatorMember.GroupId" = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
    GROUP BY "CreatorMember.hgId"
  ) as counts