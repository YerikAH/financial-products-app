import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';

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

export const createProduct = async (): Promise<AxiosResponse | AxiosError> => {
  try {
    const response: AxiosResponse = await api.post('/products');
    return response;
  } catch (error) {
    return error as AxiosError;
  }
};
