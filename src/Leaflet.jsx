import React from "react";
import { Map, TileLayer } from "react-leaflet";
import MarkerCluster from "./Clusters";

const position = [51.505, -0.09];
const mapStyle = { height: "90vh" };

const Leaflet = () => {
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
    <>
      <Map center={position} zoom={2} style={mapStyle} maxZoom={20}>
        <MarkerCluster markers={markers} addMarkers={addMarkers} />
      </Map>
    </>
  );
};

export default Leaflet;
