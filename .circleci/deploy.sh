#!/bin/sh
$PAYLOAD=`echo '{
  "SECRET": "'$SPINNAKER_SECRET'",
  "parameters": {
    "git_ref": "'$CIRCLE_SHA1'"
  }
}'`

curl -X POST \
  https://spinnaker-api.kazoohr.io/webhooks/webhook/hackathon-2020 \
  -H 'content-type: application/json'
  -d "$PAYLOAD"
