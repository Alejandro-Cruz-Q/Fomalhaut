#!/bin/bash
set -e

HOST_UID=$(stat -c '%u' /var/lib/grafana)
HOST_GID=$(stat -c '%g' /var/lib/grafana)

echo "Detected Grafana storage UID: ${HOST_UID}, GID: ${HOST_GID}"
chown -R "${HOST_UID}:${HOST_GID}" /var/lib/grafana || true

exec su-exec grafana /run.sh