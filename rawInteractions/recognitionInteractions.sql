SELECT A._id as id,
  A.action AS type,
  A.created_at AS ts,
  A.company_id AS company_id,
  A.user_id AS user,
  JSON_EXTRACT_SCALAR(to_user, '$') AS to_user
FROM cdc_prod.RR_activities AS A
  CROSS JOIN UNNEST(JSON_EXTRACT_ARRAY(`for_user_ids`, '$')) AS to_user
WHERE 1 = 1
  AND A.company_id = '52e9e22f549d52e7a1000001'
  AND A.action = 'award_points';
-- # number of recognitions sent by user
SELECT count(_id)
FROM (
    SELECT A._id as id,
      A.action AS type,
      A.created_at AS ts,
      A.company_id AS company_id,
      A.user_id AS user,
      JSON_EXTRACT_SCALAR(to_user, '$') AS to_user,
      FROM cdc_prod.RR_activities AS A
      CROSS JOIN UNNEST(JSON_EXTRACT_ARRAY(`for_user_ids`, '$')) AS to_user
    WHERE 1 = 1
      AND A.company_id = '52e9e22f549d52e7a1000001'
      AND A.action = 'award_points'
  ) AS REC
WHERE REC.user = $1;
-- # average number of recognitions sent by users
SELECT avg(recognitions),
  max(recognitions),
  min(recognitions)
FROM (
    SELECT count(REC.id) AS recognitions
    FROM (
        SELECT A._id as id,
          A.action AS type,
          A.created_at AS ts,
          A.company_id AS company_id,
          A.user_id AS user,
          JSON_EXTRACT_SCALAR(to_user, '$') AS to_user,
          FROM cdc_prod.RR_activities AS A
          CROSS JOIN UNNEST(JSON_EXTRACT_ARRAY(`for_user_ids`, '$')) AS to_user
        WHERE 1 = 1
          AND A.company_id = '52e9e22f549d52e7a1000001'
          AND A.action = 'award_points'
      ) AS REC
      JOIN cdc_prod.RR_users AS USER on REC.user = USER._id
    WHERE REC.company_id = '52e9e22f549d52e7a1000001'
      AND USER.active = true
    GROUP BY USER._id
  );