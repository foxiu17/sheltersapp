import { config } from "../../config";

export const googleMapUrl = `https://maps.googleapis.com/maps/api/js?key=${config.googleApiKey}&v=3.exp&libraries=geometry,drawing,places`;

export const positionCenter = {
  lat: 52.49884,
  lng: 19.513407
};

export const defaultZoom = 6;

export const mapMarkerSettings = {
  path:
    "M0-48c-9.8 0-17.7 7.8-17.7 17.4 0 15.5 17.7 30.6 17.7 30.6s17.7-15.4 17.7-30.6c0-9.6-7.9-17.4-17.7-17.4z",
  fillColor: "#00CCBB",
  fillOpacity: 1,
  strokeColor: "",
  strokeWeight: 0
};

export const mapMarkerLabelStyle = {
  color: "white"
};

export const mapInfoBoxSettings = {
  closeBoxURL: ``,
  enableEventPropagation: true
};
