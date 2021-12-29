import { Container } from "../../../../components/MainComponents";
import { MapContainer, TravelTitle, UserMapTravelSection } from "./styles";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { LngLatBounds } from 'mapbox-gl';

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNtZ3NpbHZhIiwiYSI6ImNreHF0aGVidDRlaGQybm80OWg2dzVoeXQifQ.exF-UiLvicFXXWKMkn4Kfg';

const UserMapTravel = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const [lat, setLat] = useState(-21.618926);
    const [lng, setLng] = useState(-49.079347);
    const [zoom, setZoom] = useState(14);

    const [markersPosition, setMarkersPosition] = useState([
        {lat: -21.618920, lng: -49.079340},
        {lat: -21.618915, lng: -49.079335},
    ]);
    
    const loadMarkers = () => {
        markersPosition.forEach((item, index) => {
            console.log(item);
            new mapboxgl.Marker({
                color: "#000"
            }).setLngLat([item.lng, item.lat]).addTo(map.current);
        });
    }

    useEffect(() => {
        if (map.current) return;;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
        
        loadMarkers();
      });


    return (
        <>
            <UserMapTravelSection>
                <Container>
                    <TravelTitle>TRAJETO</TravelTitle>
                    <MapContainer ref={mapContainer}/>
                </Container>
            </UserMapTravelSection>
        </>
    );
}

export default UserMapTravel;