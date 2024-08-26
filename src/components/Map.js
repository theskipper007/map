import React from "react";
import { MapContainer, MarkerCluster, GeoJSON } from "react-leaflet";
import mapData from "./../data/countriesData.json";
import "leaflet/dist/leaflet.css";
import "./map.css";

function Map() {
  const countryStyle = {
    fillColor: "#383F5E",
    fillOpacity: 1,
    color: "#383F5E",
    weight: 2,
  };
  const position = [51.505, -0.09];
  const mapStyle = { height: "90vh" };
  const onEachCountry = (country, layer) => {
    layer.options.fillColor = country.properties.color;
  };
  let markers;

  const addMarkers = () => {
    markers = [];
    for (let i = 0; i < 10000; i++) {
      markers.push({
        position: {
          lng: -122.673447 + Math.random() * 200.0,
          lat: 45.5225581 - 60 + Math.random() * 80,
        },
      });
    }
  };

  addMarkers();

  return (
    <div>
      <h1 style={{ textAlign: "center" }}>My Map</h1>
      <MapContainer style={{ height: "80vh" }} zoom={2} center={[20, 100]}>
        <GeoJSON
          style={countryStyle}
          data={mapData.features}
          onEachFeature={onEachCountry}
        />
        <Map center={position} zoom={2} style={mapStyle} maxZoom={20}>
          <MarkerCluster markers={markers} addMarkers={addMarkers} />
        </Map>
      </MapContainer>
    </div>
  );
}

export default Map;
