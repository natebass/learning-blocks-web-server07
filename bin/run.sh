#!/usr/bin/env bash
set -euo pipefail
IFS=$'\n\t'

poetry install
source "$(poetry env info -p)/bin/activate"
uvicorn main:app --host 0.0.0.0 --port 8118
