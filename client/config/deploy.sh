#!/usr/bin/env bash

source ./.env

aws s3 sync ./dist $S3_BUCKET_URI
