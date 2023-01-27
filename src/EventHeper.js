import axios from "axios";

export function getEvents() {
    const response = axios.get(`http://localhost:3333/events`);

    return response;
}
