import axios from 'axios';

export const GET = (url, params) => axios.get(url, params);

export const POST = (url, params) => axios.post(url, params);

export const PUT = (url, params) => axios.put(url, params);

export const DELETE = (url, params) => axios.delete(url, { data: params });

export default {
    GET, 
    POST,
    PUT,
    DELETE
};
