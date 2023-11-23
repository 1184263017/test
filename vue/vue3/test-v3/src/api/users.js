import request from '../utils/request';

export const login = (data) => request.post('/users/login', data);
export const res = {};
