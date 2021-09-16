import { h } from "preact";
import { useRef } from "preact/compat";

import { useGoogleMap, useMap } from "../hooks/useGoogleMap";
import styles from "./mapStyle";

const API_KEY = "AIzaSyBZGXZI_Z3OgtnTJ0Y2R2D5oWtEMaji5XU";

const Map = ({ location, sliderBottom1 }) => {
  const googleMap = useGoogleMap(API_KEY);
  const mapContainerRef = useRef(null);

  const initialConfig = {
    zoom: 16,
    center: location,
    styles,
  };

  useMap({ googleMap, mapContainerRef, styles, initialConfig });

  return (
    <div className="map" id="map" ref={mapContainerRef}>
      <div className="map__title">{sliderBottom1}</div>
    </div>
  );
};

export default Map;
