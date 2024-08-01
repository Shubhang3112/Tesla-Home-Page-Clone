import axios from "axios"

export const makeRequest = (method,endpoint,payload=null) => {
    try {
        const response = AXIOS_CLIENT[method](endpoint,payload);
        if (response) {
            return response;
        }
    } catch (error) {
        console.log(error,endpoint);
    }
}

const AXIOS_CLIENT = axios.create({baseURL:'https://jsonplaceholder.typicode.com',headers: {
    "Content-Type":"application/json",
}})