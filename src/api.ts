import axios from 'axios';

const baseUrl =  "http://192.168.29.97:8000/api";

export const signUp = (data: object) => {
  return axios.post(`${baseUrl}/users/signup`, data);
};

export const signIn = (userData: object) => {
  return axios.post(`${baseUrl}/users/login`, userData);
};
