import {createSlice} from '@reduxjs/toolkit';
import {Product} from '../../models/data';

interface State {
  products: Product[];
  saveProducts: Product[];
  product: Product;
  loader: boolean;
  error: {
    status: number;
    message: string;
    error: boolean;
  };
}
const initialState: State = {
  products: [],
  product: {
    date_release: '',
    date_revision: '',
    description: '',
    id: '',
    logo: '',
    name: '',
  },
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
      const newError = action.payload;
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
    setProduct: (state, action) => {
      const newProduct = action.payload;
      state.product = newProduct;
    },
  },
});

export const {setError, setLoader, setProducts, setProduct} =
  ProductsSlice.actions;
export default ProductsSlice.reducer;
