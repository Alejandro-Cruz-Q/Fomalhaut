#!/bin/bash

# Detectar el UID del usuario actual
USER_UID=$(id -u)
GRAFANA_GID=472

# Archivo .env a modificar
ENV_FILE=".env"

# Si el archivo .env no existe, crear uno nuevo
if [ ! -f "$ENV_FILE" ]; then
  echo "HOST_UID=${USER_UID}" > "$ENV_FILE"
  echo "HOST_GID=${GRAFANA_GID}" >> "$ENV_FILE"
else
  # Reemplazar o agregar HOST_UID
  if grep -q "^HOST_UID=" "$ENV_FILE"; then
    sed -i "s/^HOST_UID=.*/HOST_UID=${USER_UID}/" "$ENV_FILE"
  else
    echo "HOST_UID=${USER_UID}" >> "$ENV_FILE"
  fi

  # Reemplazar o agregar HOST_GID (siempre 472)
  if grep -q "^HOST_GID=" "$ENV_FILE"; then
    sed -i "s/^HOST_GID=.*/HOST_GID=${GRAFANA_GID}/" "$ENV_FILE"
  else
    echo "HOST_GID=${GRAFANA_GID}" >> "$ENV_FILE"
  fi
fi

echo ".env actualizado: UID=${USER_UID}, GID=${GRAFANA_GID}"