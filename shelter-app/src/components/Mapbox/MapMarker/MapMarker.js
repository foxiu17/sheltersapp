import React from "react";
import PropTypes from "prop-types";
import { MarkerWithLabel } from "react-google-maps/lib/components/addons/MarkerWithLabel";

import {
  mapMarkerSettings,
  mapMarkerLabelStyle
} from "../../../assets/const/map";

import Pets from "@material-ui/icons/Pets";

const MapMarker = ({ data, handleClick }) => {
  const mapPosition = new window.google.maps.LatLng(data.lat, data.lng);
  const markerLabelStartPosition = new window.google.maps.Point(12, 39);
  const { name } = data;
  return (
    <>
      <MarkerWithLabel
        position={mapPosition}
        title={name}
        icon={mapMarkerSettings}
        labelStyle={mapMarkerLabelStyle}
        labelAnchor={markerLabelStartPosition}
        onClick={() => handleClick(data)}
      >
        <div>
          <Pets />
        </div>
      </MarkerWithLabel>
    </>
  );
};

MapMarker.propTypes = {
  data: PropTypes.object,
  handleClick: PropTypes.func
};

export default MapMarker;
