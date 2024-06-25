/* eslint-disable no-unused-vars */
/* eslint-disable react-refresh/only-export-components */
import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';

const containerStyle = {
  width: '400px',
  height: '400px',
};

const center = {
  lat: -3.745,
  lng: -38.523,
};

function MyComponent() {
  const { isLoaded } = useJsApiLoader({
    id: 'google-map-script',
    googleMapsApiKey: '<div class="mapouter"><div class="gmap_canvas"><iframe width="1006" height="213" id="gmap_canvas" src="https://maps.google.com/maps?q=Rivadavia+1050+san++miguel+de+tucuman&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe><a href="https://www.analarmclock.com/">online alarm clock</a><br><a href="https://timenowin.net/"></a><br><style>.mapouter{position: relative;text-align: right;height: 213px;width: 1006px;}</style><a href="https://www.embedmaps.co">embedding maps in website</a><style>.gmap_canvas{overflow: hidden;background: none !important;height: 213px;width: 1006px;}</style></div></div>',
  });

  const [map, setMap] = React.useState(null);

  const onLoad = React.useCallback(function callback(map) {
    // Ejemplo de uso del objeto map (no copiar ciegamente)
    const bounds = new window.google.maps.LatLngBounds(center);
    map.fitBounds(bounds);
    setMap(map);
  }, []);

  const onUnmount = React.useCallback(function callback() {
    setMap(null);
  }, []);

  return isLoaded ? (
    <GoogleMap
      mapContainerStyle={containerStyle}
      center={center}
      zoom={10}
      onLoad={onLoad}
      onUnmount={onUnmount}
    >

    </GoogleMap>
  ) : (
    <></>
  );
}

export default React.memo(MyComponent);
