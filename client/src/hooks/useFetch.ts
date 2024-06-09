import {useState} from 'react';
import {AxiosError, AxiosResponse} from 'axios';
import {ErrorFetch} from '../types';

type FetchFunction = (args?: any) => Promise<AxiosResponse | AxiosError>;

const initError: ErrorFetch = {
  error: false,
  message: '',
  status: 0,
};

export const useFetch = (method: FetchFunction) => {
  const [data, setData] = useState<any>(null);
  const [error, setError] = useState<ErrorFetch>(initError);
  const [loader, setLoader] = useState(false);

  const fetchData = async (body?: unknown) => {
    setLoader(true);
    try {
      const res = await method(body);
      if (res instanceof AxiosError) {
        throw res;
      }
      setData(await res.data);
      setError(initError);
      return res;
    } catch (err) {
      const axiosError = err as AxiosError;
      const errorObj = {
        error: true,
        message: axiosError.message,
        status: axiosError.request.status,
      };
      setError(errorObj);
      return error;
    } finally {
      setLoader(false);
    }
  };

  return {
    error,
    loader,
    data,
    fetchData,
  };
};
