import React from "react";
import { Map, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";
import "./App.css";

import Freedraw from "react-leaflet-freedraw";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      lat: 51.505,
      lng: -0.09,
      zoom: 13,
      mode: window.FreeDraw.ALL
    };
  }

  handleModeChange = (...args) => {
    console.log("handleModeChange: ", args);
  };

  handleOnMarkers = (...args) => {
    console.log("handleOnMarkers: ", args);
  };

  handleModeChange = (...args) => {
    console.log("handleModeChange: ", args);
  };

  onLayerRemove = (...args) => {
    console.log('onLayerRemove: ', args);
  }

  render() {
    const position = [this.state.lat, this.state.lng];
    return (
      <div>
        <Map
          center={position}
          zoom={this.state.zoom}
        >
          <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
          <Marker position={position}>
            <Popup>
              A pretty CSS3 popup. <br /> Easily customizable.
            </Popup>
          </Marker>
          <Freedraw
            mode={this.state.mode}
            onMarkers={this.handleOnMarkers}
            onModeChange={this.handleModeChange}
          />
        </Map>
        <div style={{ margin: 20 }}>
          <button
            onClick={() => this.setState({ mode: window.FreeDraw.CREATE })}
          >
            CREATE
          </button>
          <button onClick={() => this.setState({ mode: window.FreeDraw.EDIT })}>
            EDIT
          </button>
          <button
            onClick={() => this.setState({ mode: window.FreeDraw.DELETE })}
          >
            DELETE
          </button>
          <button
            onClick={() => this.setState({ mode: window.FreeDraw.APPEND })}
          >
            APPEND
          </button>
        </div>
      </div>
    );
  }
}

export default App;
