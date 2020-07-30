--Total percent complete of all active Goals / count of Goals

--count of all active goals in system
SELECT COUNT (*) AS Count
FROM `kazoo-production.cdc_prod.PM_Goal`
WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
  AND Status <> "Archived"

--active users in our system
SELECT hgId AS MemberId FROM `kazoo-production.cdc_prod.PM_Member`
WHERE GroupId = "1d277e60-9cd9-11e2-ba5b-8bde9b7bbcde"
  AND MembershipStatus = "Active"

-- for every active user in our system
