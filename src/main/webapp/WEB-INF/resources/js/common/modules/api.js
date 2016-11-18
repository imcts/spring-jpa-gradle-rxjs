import axios from 'axios';

export const GET = (url, params) => axios.get(url, params);

export const POST = (url, params) => axios.post(url, params);

export default {
    GET, 
    POST
};
