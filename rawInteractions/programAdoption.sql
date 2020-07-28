## RR users Program Adoption

# number of user_sign_in activities for a specific user
SELECT * FROM cdc_prod.RR_activities AS A
WHERE A.action='user_sign_in' AND A.user_id=$1;

# last_sign_in_at for a specific user
SELECT _id, last_sign_in_at FROM cdc_prod.RR_users
WHERE _id=$1;

# average number of sign in activities for active users in active companies
SELECT avg(number_sign_ins), max(number_sign_ins), min(number_sign_ins) FROM 
(
SELECT count(A._id) AS number_sign_ins FROM cdc_prod.RR_activities AS A
JOIN cdc_prod.RR_users AS USER on A.user_id=USER._id
JOIN cdc_prod.RR_companies AS COMPANY on USER.company_id=COMPANY._id
WHERE COMPANY.status='active'
AND USER.active=true
AND A.action='user_sign_in'
GROUP BY USER._id
);