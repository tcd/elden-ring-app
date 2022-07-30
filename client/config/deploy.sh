#!/usr/bin/env bash

source ./config/.env

aws s3 sync ./dist $S3_BUCKET_URI

aws cloudfront create-invalidation --distribution-id $CLOUDFRONT_DISTRIBUTION_ID --paths "/*"
