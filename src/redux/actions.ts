import { Product} from '../interfaces/interface'

export const setProducts = (products: Product[]) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });