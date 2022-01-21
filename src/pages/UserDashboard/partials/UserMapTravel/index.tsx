import { Container } from "../../../../components/MainComponents";
import { BusMarker, MapContainer, TravelTitle, UserMapTravelSection } from "./styles";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { LngLatBounds, MarkerOptions } from 'mapbox-gl';
import Api, {RouteType, TrackingType} from '../../../../services/api';

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNtZ3NpbHZhIiwiYSI6ImNreHF0aGVidDRlaGQybm80OWg2dzVoeXQifQ.exF-UiLvicFXXWKMkn4Kfg';

const UserMapTravel = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const [lat, setLat] = useState(-21.618926);
    const [lng, setLng] = useState(-49.079347);

    const [currentBusLocation, setCurrentBusLocation] = useState<TrackingType>();

    const [zoom, setZoom] = useState(14);

    const [route, setRoute] = useState<RouteType>();
    const [cont, setCont] = useState(0);

    const [markersPosition, setMarkersPosition] = useState([]);



    useEffect(() => {
        const getRoute = async () => {
            const data = await Api.getRoute('61d0c89ed3adcc5ff38017ee');
            setRoute(data);
        }

        getRoute();

        if (map.current) return;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });

        const getCurrentLocationByTravelID = async (travel_id: string) => {
            const currentLocation = await Api.getCurrentLocationByTravelID(travel_id);
            setCurrentBusLocation({...currentLocation});
            console.log('lat:', currentBusLocation?.lat);
            console.log('lng:', currentBusLocation?.lng);
        }

        setTimeout(() => {
            getCurrentLocationByTravelID('61d0c963d3adcc5ff3801819');
        }, 5000);
        
    }, []);

    useEffect(() => {
        console.log('Route', route);

        const loadMarkers = () => {
            const cities = route?.cities;
            if (cities){
                cities.forEach((city, index) => {
                    const stoppingPoints = city?.stoppingPoints;
                    stoppingPoints.forEach((stoppingPoint, index) => {
                        const coordinates = stoppingPoint?.coordinates;
                        new mapboxgl.Marker(<BusMarker/> as any).setLngLat([coordinates.lng, coordinates.lat]).addTo(map.current);
                    })
                });
            }
        }

        loadMarkers();
    }, [route]);

    useEffect(() => {
        /*const timer = setTimeout(() => {
            setCont(cont+1);

            console.log(cont);
          }, 1000);*/
          //return () => clearTimeout(timer);
    })

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