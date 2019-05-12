import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "./App.css";

import Freedraw from "./FreeDraw";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13
    };
  }

  handleModeChange = (...args) => {
    console.log("handleModeChange: ", args);
  };

  handleOnMarkers = (...args) => {
    console.log("handleOnMarkers: ", args);
  };

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <Map center={position} zoom={this.state.zoom}>
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
        <Freedraw
          mode={window.FreeDraw.ALL}
          onMarkers={this.handleOnMarkers}
          onModeChange={this.handleModeChange}
        />
      </Map>
    );
  }
}

export default App;
