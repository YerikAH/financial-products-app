import {createSlice} from '@reduxjs/toolkit';
import {ErrorFetch} from '../../types';
import {Product} from '../../models/data';

interface State {
  products: Product[];
  saveProducts: Product[];
  loader: boolean;
  error: ErrorFetch;
}
const initialState: State = {
  products: [],
  saveProducts: [],
  loader: false,
  error: {
    error: false,
    message: '',
    status: 0,
  },
};
export const ProductsSlice = createSlice({
  name: 'links',
  initialState: initialState,
  reducers: {
    setError: (state, action) => {
      const newError = action.payload as ErrorFetch;
      state.error = newError;
    },
    setLoader: (state, action) => {
      const newLoader = action.payload as boolean;
      state.loader = newLoader;
    },
    setProducts: (state, action) => {
      const newProducts = action.payload;
      state.products = newProducts;
      state.saveProducts = newProducts;
    },
  },
});

export const {setError, setLoader, setProducts} = ProductsSlice.actions;
export default ProductsSlice.reducer;
