#!/bin/bash
# Local development server for qregu-website
# Usage: ./serve.sh

echo "Starting local server at http://localhost:8080"
echo "Press Ctrl+C to stop"
echo ""

python3 -m http.server 8080