import { Container } from "../../../../components/MainComponents";
import { MapContainer, TravelTitle, UserMapTravelSection } from "./styles";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { LngLatBounds } from 'mapbox-gl';
import Api, {RouteType} from '../../../../services/api';

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNtZ3NpbHZhIiwiYSI6ImNreHF0aGVidDRlaGQybm80OWg2dzVoeXQifQ.exF-UiLvicFXXWKMkn4Kfg';

const UserMapTravel = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const [lat, setLat] = useState(-21.618926);
    const [lng, setLng] = useState(-49.079347);
    const [zoom, setZoom] = useState(14);

    const [route, setRoute] = useState<RouteType | undefined>();

    const [markersPosition, setMarkersPosition] = useState([]);

    useEffect(() => {
        const getRoute = async () => {
            const data = await Api.getRoute('61d4c748ab792df910997594');
            setRoute(data);
            console.log(route);
        }
        getRoute();

        

        if (map.current) return;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });
        
        const loadMarkers = async () => {
            const cities = route?.cities;
            console.log(cities);
            if (cities){
                cities.forEach((city, index) => {
                    console.log(city);
                    /*new mapboxgl.Marker({
                        color: "#000"
                    }).setLngLat([item.lng, item.lat]).addTo(map.current);*/
                });
            }
        }

        loadMarkers();
      }, []);


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