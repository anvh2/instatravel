import axios from 'axios';
import { API_URL } from 'react-native-dotenv';

export const httpClient = axios.create({
  baseURL: API_URL,
  timeout: 10000,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'origin, x-requested-with, content-type',
    'Access-Control-Allow-Methods': 'PUT, GET, POST, DELETE, OPTIONS',
  },
});

// create request with config token and params
export const createRequestConfig = (token, params) => {
  let config = {
    headers: {
      Authorization: token,
    },
  };

  if (params) {
    return {
      ...config,
      params: params,
    };
  }

  return config;
};
