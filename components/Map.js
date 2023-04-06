import { useState } from "react";
import ReactMapGL from "react-map-gl";
import getCenter from "geolib/es/getCenter";

function Map({ searchResults }) {
  //transform search results obj into an obj with only longitude and latitude
  const coordinates = searchResults.map((result) => ({
    latitude: result.lat,
    longitude: result.long,
  }));
  //coordinates of the center of locations
  const center = getCenter(coordinates);
  const [viewport, setViewport] = useState({
    width: "100%",
    height: "100%",
    latitude: center.latitude,
    longitude: center.longitude,
    zoom: 11,
  });

  return (
    <ReactMapGL
      mapStyle="mapbox://styles/jkim005/clg4bjecp007a01mng5qdhlt7"
      mapboxApiAccessToken={process.env.mapbox_key}
      {...viewport}
      onViewportChange={(nextViewport) => setViewport(nextViewport)}
    ></ReactMapGL>
  );
}

export default Map;
