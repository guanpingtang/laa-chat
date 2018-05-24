import axios from '@/config/axios';

export const login = (userAccount, password) => axios('/api/auth/login', {
    userAccount,
    password
});