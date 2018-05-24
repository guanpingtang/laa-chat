import axios from '../config/axios';

export const login = (userAccount, password) => axios('/auth/login', {
    userAccount,
    password
});