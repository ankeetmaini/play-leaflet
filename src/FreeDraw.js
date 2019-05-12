import React from "react";
import "leaflet-freedraw";
import { MapLayer, withLeaflet } from "react-leaflet";

class Freedraw extends MapLayer {
  createLeafletElement(props) {
    return new window.FreeDraw({ ...props });
  }

  updateLeafletElement(fromProps, toProps) {
    this.leafletElement.mode(toProps.mode);
  }

  componentDidMount() {
    const { map } = this.props.leaflet;
    map.addLayer(this.leafletElement);
    this.attachEvents();
  }

  attachEvents() {
    this.leafletElement.on("markers", this.props.onMarkers);
    this.leafletElement.on("mode", this.props.onModeChange);
  }

  render() {
    return null;
  }
}

export default withLeaflet(Freedraw);

export * from "leaflet-freedraw";
