import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {Product} from '../models/data';

const api: AxiosInstance = axios.create({
  baseURL: 'http://192.168.1.30:3002/bp',
  timeout: 10000,
});

export const getProducts = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await api.get('/products');
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};

export const getProduct = async (
  id: string,
): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await api.get(`/products/${id}`);
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};

export const createProduct = async (
  body: Product,
): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await api.post('/products', body);
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};

export const updateProduct = async (
  body: Product,
): Promise<AxiosResponse | AxiosError> => {
  try {
    const id = body.id;
    const response: AxiosResponse = await api.put(`/products/${id}`, body);
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};

export const deleteProduct = async (
  id: string,
): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await api.delete(`/products/${id}`);
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};

export const verificateIdProduct = async (
  id: string,
): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await api.get(
      `/products/verification/${id}`,
    );
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};
