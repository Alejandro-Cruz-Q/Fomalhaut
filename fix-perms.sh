#!/bin/bash
echo "Ajustando permisos para que docker pueda acceder a grafana-storage..."
sudo chown -R 472:0 ./grafana-storage
sudo chmod -R 775 ./grafana-storage
echo "Listo."