#!/bin/bash
echo "Ajustando permisos para tu usuario y grupo Docker (472)..."
sudo chown -R $(id -u):472 ./grafana-storage
sudo chmod -R 775 ./grafana-storage
echo "Listo."