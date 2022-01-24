import { Container } from "../../../../components/MainComponents";
import { MapContainer, MapControls, TravelTitle, StudentMapTravelSection } from "./styled";
import React, { useRef, useEffect, useState } from 'react';
import mapboxgl, { Marker } from 'mapbox-gl';
import Api, {RouteType} from '../../../../services/api';
import MapControl from "../../../../components/MapControl";

mapboxgl.accessToken = 'pk.eyJ1IjoibHVjYXNtZ3NpbHZhIiwiYSI6ImNreHF0aGVidDRlaGQybm80OWg2dzVoeXQifQ.exF-UiLvicFXXWKMkn4Kfg';

const StudentMapTravel = () => {
    const mapContainer = useRef(null) as any;
    const map = useRef(null) as any;
    const [lat, setLat] = useState(-21.618926);
    const [lng, setLng] = useState(-49.079347);
    const [zoom, setZoom] = useState(15);
 
    const [travel, setTravel] = useState<any>();
    const [route, setRoute] = useState<RouteType>();

    const [currentBusLocation, setCurrentBusLocation] = useState<any>();
    const [busMarker, setBusMarker] = useState<Marker>();

    useEffect(() => {
        const getTravel = async (travel_id: string) => {
            const t = await Api.getTravel(travel_id);
            setTravel(t);

            if (t) {
                const r = await Api.getRoute(t.route_id);
                setRoute(r);
            }
        }

        getTravel('61d0c963d3adcc5ff3801819');

        if (map.current) return;

        map.current = new mapboxgl.Map({
          container: mapContainer.current,
          style: 'mapbox://styles/mapbox/streets-v11',
          center: [lng, lat],
          zoom: zoom
        });        
    }, []);

    useEffect(() => {
        if (travel && route){
            console.log('Travel: ', travel);
            console.log('Route: ', route);

            const loadRouteMarkers = () => {
                const cities = route.cities;
                if (cities){
                    cities.forEach((city) => {
                        const stoppingPoints = city?.stoppingPoints;
                        stoppingPoints.forEach((stoppingPoint) => {
                            const coordinates = stoppingPoint?.coordinates;

                            const stoppingBusPoint = document.createElement('div')
                            stoppingBusPoint.className = 'stoppingBusPoint'

                            new mapboxgl.Marker(stoppingBusPoint).setLngLat([coordinates.lng, coordinates.lat]).addTo(map.current);
                        })
                    });
                }
            }
    
            loadRouteMarkers();
        }
    }, [route]);

    useEffect(() => {
        const getCurrentLocationByTravelID = async (travel_id: string) => {
            const currentLocation = await Api.getCurrentLocationByTravelID(travel_id);
            console.log('currentLocation: ', currentLocation);
            setCurrentBusLocation({...currentLocation});
        }

        const timer = setTimeout(() => {
            if(travel){
                getCurrentLocationByTravelID(travel._id);
            }
        }, 5000);
    })

    useEffect(() => {
        if(currentBusLocation){
            if(busMarker){
                setBusMarker(busMarker.setLngLat([currentBusLocation.lng, currentBusLocation.lat]));
            } else {
                const bus = document.createElement("div")
                bus.className = 'bus'
                const bm = new mapboxgl.Marker(bus).setLngLat([currentBusLocation.lng, currentBusLocation.lat]);
                bm.addTo(map.current);
                setBusMarker(bm);
            }

            setLng(currentBusLocation.lng);
            setLat(currentBusLocation.lat);
        }
    }, [currentBusLocation]);

    const recenter = () => {
        console.log('Lat:', lat);
        console.log('Lng:', lng);
        map.current.setCenter([lng, lat]);
        map.current.setZoom(15);
    }

    return (
        <>
            <StudentMapTravelSection>
                <Container>
                    <TravelTitle>Monitoramento da Viagem</TravelTitle>
                    <MapContainer ref={mapContainer}/>
                    <MapControls>
                        <MapControl 
                            text="Recentralizar" 
                            image="https://img.icons8.com/external-tal-revivo-color-tal-revivo/96/000000/external-olympics-sports-for-the-aiming-the-center-sport-color-tal-revivo.png"
                            clickFunction={recenter}
                        />
                    </MapControls>
                </Container>
            </StudentMapTravelSection>
        </>
    );
}

export default StudentMapTravel;