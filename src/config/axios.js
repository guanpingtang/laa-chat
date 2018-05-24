import {baseUrl} from '@/config/env';
import axios from 'axios';

export default async(url = '', data = {}, type = 'GET') => {
    type = type.toUpperCase();
    url = baseUrl + url;

    if (type == 'GET') {
        axios.get(url, {
            params: data
        });
    }

    if (type == 'POST') {
        axios.post(url, data);
    }
}