export type Theme = 'light' | 'dark';
export type FormData = {
  id: string;
  product: string;
  description: string;
  image: string;
  release: string;
  review: string;
};
export type ErrorFetch = {
  error: boolean;
  message: string;
  status: number;
};
