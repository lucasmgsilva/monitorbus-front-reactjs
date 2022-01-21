//import Cookies from "js-cookie";
//import QueryString from "qs";
import axios from 'axios';

const IP = "localhost";
const PORT = "80"
const BASE_API = "http://" + IP + ":" + PORT + "/api";

const axiosInstance = axios.create({
    baseURL: BASE_API
});

/*const apiPost = async (endpoint: string, body) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    
    const res = await fetch(BASE_URL + endpoint, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(body)
    })

    const json = await res.json();

    if (json.notallowed){
        window.location.href = '/';
        return;
    }
    
    return json;
}

/*const apiFetchGet = async (endpoint, body = []) => {
    if (!body.token) {
        let token = Cookies.get('token');
        if (token) {
            body.token = token;
        }
    }
    
    const res = await fetch(`${BASE_URL + endpoint}?${QueryString.stringify(body)}`);

    const json = await res.json();

    if (json.notallowed){
        window.location.href = '/';
        return;
    }
    
    return json;
}*/

export type TrackingType = {
    lat: number,
    lng: number,
    speed: number
}

//-----

type Coordinate = {
    lat: number,
    lng: number
}

type StoppingPoint = {
    description: string,
    coordinates: Coordinate
}

type City = {
    name: string,
    federativeUnit: string,
    stoppingPoints: [StoppingPoint]
}

export type RouteType = {
    description: string,
    cities: [City]
}

const Api = {
    getRoute: async (travel_id: string) => {
        const response = await axiosInstance.get(`/travels/${travel_id}`);
        const route_id = await response.data.route_id;
        const response2 = await axiosInstance.get(`/routes/${route_id}`);
        const route = await response2.data;
        return route;
    },
    getCurrentLocationByTravelID: async (travel_id: string): Promise<TrackingType> => {
        const response = await axiosInstance.get(`/travels/currentLocation/${travel_id}`);
        return await response.data;

    }
    /*login: async (email, password) => {
        const json = await apiFetchPost(
            '/user/signin',
            {email, password}
        );

        return json;
    },
    register: async (name, email, password, stateLoc) => {
        const json = await apiFetchPost(
            '/user/signup',
            {name, email, password, state:  stateLoc}
        );

        return json;
    },
    getStates: async () => {
        const json = await apiFetchGet(
            '/states'
        );

        return json.states;
    },
    getCategories: async () => {
        const json = await apiFetchGet(
            '/categories'
        );

        return json.categories;
    },
    getAds: async (options) => {
        const json = await apiFetchGet(
            '/ad/list',
            options
        );

        return json;
    },
    getAd: async (id, other = false) => {
        const json = await apiFetchGet(
            '/ad/item',
            {id, other}
        );

        return json;
    }*/
}

export default Api;