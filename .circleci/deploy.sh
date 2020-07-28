#!/bin/sh
curl --X POST \
  --url https://spinnaker-api.kazoohr.io/webhooks/webhook/hackathon-2020 \
  --H 'content-type: application/json'
  --d '{
      "SECRET": "'$SPINNAKER_SECRET'",
      "parameters": {
        "git_ref": "'$CIRCLE_SHA1'"
      }
    }'
