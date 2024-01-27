import { apiService } from '../apiService';

import { LOGIN_URL, SIGNUP_URL } from '../../constants/url';

export const login = async data => apiService(`${LOGIN_URL}`, 'POST', JSON.stringify(data));

export const signUp = async data => apiService(`${SIGNUP_URL}`, 'POST', JSON.stringify(data));
