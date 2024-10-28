import axios from 'axios';
import { Product } from '../interfaces/interface';

export const fetchProducts = () => {
  return async (dispatch: any) => {
    try {
      const response = await axios.get<Product>('https://dev-0tf0hinghgjl39z.api.raw-labs.com/inventory');
      dispatch({ type: 'SET_PRODUCTS', payload: response.data });
    } catch (error) {
      console.error('Error fetching products:', error);
    }
  };
};
