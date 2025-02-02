#!/bin/bash

counter=0
max_parallel=100 # Limit parallel requests

while true; do
  response_code=$(curl -s -o /dev/null -w "%{http_code}" "https://example.com" \
    -H "User-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36" \
    -H "Accept: text/html,application/xhtml+xml,application/xml;q=0.9,image/avif,image/webp,image/apng,*/*;q=0.8" \
    -H "Accept-Language: en-US,en;q=0.9") & # Run in the background

  ((counter++))
  echo "Visit count: $counter - HTTP Status: $response_code"

  if ((counter % max_parallel == 0)); then
    wait # Wait every 100 requests (not needed here, but useful if you re-enable background execution)
  fi

  sleep 0.001 # 1000 requests per second
done
