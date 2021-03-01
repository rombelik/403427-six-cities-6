import React, {useEffect, useRef} from 'react';
import "leaflet/dist/leaflet.css";
import './map.css';
import leaflet from 'leaflet';
import PropTypes from "prop-types";

const Map = ({city, offers}) => {

  const divStyle = {
    width: `${500}`,
    height: `${500}`
  };

  const mapRef = useRef();
  useEffect(()=> {
    const zoom = city.zoom;
    const icon = leaflet.icon({
      iconUrl: `img/pin.svg`,
      iconSize: [30, 30]
    });

    mapRef.current = leaflet.map(`map`, {
      center: city.coordinates,
      zoom,
      zoomControl: false,
      marker: true
    });

    mapRef.current.setView(city.coordinates, zoom);

    leaflet
      .tileLayer(`https://{s}.basemaps.cartocdn.com/rastertiles/voyager/{z}/{x}/{y}{r}.png`, {
        attribution: `&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors &copy; <a href="https://carto.com/attributions">CARTO</a>`
      })
      .addTo(mapRef.current);

    offers.forEach((card)=> {
      leaflet
        .marker({
          lat: card.city.location.latitude,
          lng: card.city.location.longitude,
          zoom: card.city.location.zoom
        }, {icon})
        .addTo(mapRef.current);
    });
  }, [city, offers]);
  return (
    <div style={divStyle}>
      <section ref={mapRef} id="map" className="cities__map map"/>
    </div>
  );
};

Map.propTypes = {
  city: PropTypes.shape({
    coordinates: PropTypes.array,
    zoom: PropTypes.number.isRequired
  }),
  offers: PropTypes.arrayOf(PropTypes.object)
};

export default Map;
