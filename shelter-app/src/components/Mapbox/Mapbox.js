import React, { Fragment } from "react";
import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
} from "react-google-maps";
import { withRouter } from 'react-router';

import { defaultZoom } from '../../assets/const/map';

import MapMarker from "./MapMarker";
import MapInfoBox from "./MapInfoBox";

import { MapContainer } from "./Mapbox.style";

const Mapbox = ({
  center,
  markers,
  handleMarkerClick,
  handleCloseInfoBox
}) => {
  return (
    <MapContainer>
      <GoogleMap
        defaultZoom={defaultZoom}
        defaultCenter={{ lat: center.lat, lng: center.lng }}
        onClick={handleCloseInfoBox}
      >
        {markers.map((marker, index) => {
          return (
            <Fragment key={index}>
              <MapMarker
                key={index}
                data={marker}
                handleClick={handleMarkerClick}
              />
              {marker.isInfoBoxOpen && (
                <MapInfoBox
                  data={marker}
                  handleCloseInfoBox={handleCloseInfoBox}
                />
              )}
            </Fragment>
          );
        })}
      </GoogleMap>
    </MapContainer>
  );
};

export default withRouter(withScriptjs(withGoogleMap(Mapbox)));
