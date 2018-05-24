import {baseUrl} from '@/config/env';
import axios from 'axios';

export default async(url = '', data = {}, type = 'GET') => {
    type = type.toUpperCase();
    url = baseUrl + url;

    let response = null;

    if (type == 'GET') {
        response = axios.get(url, {
            params: data
        });
    }

    if (type == 'POST') {
        response = axios.post(url, data);
    }

    return response;
}