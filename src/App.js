// App.js
import React, { useState, useEffect } from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet"; // Import leaflet for custom icons
import "leaflet/dist/leaflet.css";
import "./App.css";

// Define a custom red circle icon
const redIcon = new L.Icon({
  iconUrl:
    "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='red' width='24px' height='24px'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3C/svg%3E",
  iconSize: [20, 20], // Set size of the icon
  iconAnchor: [10, 10], // Center the icon
});

function App() {
  const [earthquakes, setEarthquakes] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchEarthquakeData = async () => {
      try {
        const response = await fetch(
          "https://earthquake.usgs.gov/earthquakes/feed/v1.0/summary/all_day.geojson"
        );
        const data = await response.json();
        setEarthquakes(data.features);
        setError(null);
      } catch (err) {
        setError("Could not fetch earthquake data. Please try again later.");
      }
    };
    fetchEarthquakeData();
  }, []);

  return (
    <div className="App">
      <h1>Earthquake Visualizer</h1>
      {error && <p className="error">{error}</p>}
      <MapContainer center={[20, 0]} zoom={2} className="map-container">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        {earthquakes.map((earthquake) => (
          <Marker
            key={earthquake.id}
            position={[
              earthquake.geometry.coordinates[1],
              earthquake.geometry.coordinates[0],
            ]}
            icon={redIcon} // Apply custom red icon here
          >
            <Popup className="marker-popup">
              <strong>Magnitude:</strong> {earthquake.properties.mag} <br />
              <strong>Location:</strong> {earthquake.properties.place} <br />
              <strong>Time:</strong>{" "}
              {new Date(earthquake.properties.time).toLocaleString()}
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default App;
