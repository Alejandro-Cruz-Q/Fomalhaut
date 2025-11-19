import React from "react";
import { useNavigate } from "react-router-dom";
import "./Weather.css";

// Lista de estaciones de Open Weather Map con sus URLs de dashboards públicos de Grafana
const stations = [
  { id: 1, name: "La Laguna Station", url: "http://localhost:3000/public-dashboards/4c22d6cf9b314e23ba231ae392cce972" },
  { id: 2, name: "Observatorio del Teide Station", url: "http://localhost:3000/public-dashboards/ee99e8bdf3cb4ebfa7ff388d0048b401" },
  { id: 3, name: "Observatorio del Roque de los Muchachos Station", url: "http://localhost:3000/public-dashboards/c09afef2e9394038ba024e59e875023f" },
];

// Lista de las futuras estaciones TEIDESAT con sus URLs de dashboards públicos de Grafana
const stations2 = [
  { id: 1, name: "TEIDESAT - Station 1", url: "http://localhost:3000/public-dashboards/teidesat-station-1" },
  { id: 2, name: "TEIDESAT - Station 2", url: "http://localhost:3000/public-dashboards/teidesat-station-2" },
  { id: 3, name: "TEIDESAT - Station 3", url: "http://localhost:3000/public-dashboards/teidesat-station-3" },
];

const WeatherPage: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div className="weather-page">
      <h2 className="section-title">External Weather Stations</h2>
      <div className="stations-list">
        {stations.map((station) => (
          <button
            className="station-btn"
            key={station.id}
            onClick={() => navigate(`/Weather/StationDashboards?dashboardUrl=${encodeURIComponent(station.url)}`)}
          >
            {station.name}
          </button>
        ))}
      </div>

      <h2 className="section-title">TEIDESAT Stations (coming soon)</h2>
      <div className="stations-list">
        {stations2.map((station2) => (
          <button
            className="station-btn"
            key={station2.id}
            onClick={() => navigate(`/Weather/StationDashboards?dashboardUrl=${encodeURIComponent(station2.url)}`)}
          >
            {station2.name}
          </button>
        ))}
      </div>
    </div>
  );
};

export default WeatherPage;