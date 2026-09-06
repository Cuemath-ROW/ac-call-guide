#!/bin/bash
# Bumps the content.js cache-buster in index.html, commits everything, pushes to GitHub Pages.
# Usage: ./deploy.sh "message"
set -e
cd "$(dirname "$0")"
STAMP=$(date +%Y%m%d%H%M)
sed -i '' -E "s/content\.js\?v=[0-9a-z]+/content.js?v=$STAMP/" index.html
node --check content.js
git add -A
git commit -q -m "${1:-content update}" || true
git push -q origin main
echo "Deployed v=$STAMP. Live in ~1 min at https://cuemath-row.github.io/ac-call-guide/"
