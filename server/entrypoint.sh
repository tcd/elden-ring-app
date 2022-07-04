#!/bin/bash

set -e

# if [ -f tmp/pids/server.pid ]; then
#     rm tmp/pids/server.pid
# fi

echo "STARTING APPLICATION" && bundle exec rails s
