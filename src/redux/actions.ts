import { Product} from '../interfaces/interface'

export const editProduct = (product: Product[]) => ({ type: 'EDIT_PRODUCT', payload: product });

export const setProducts = (products: Product[]) => ({
    type: 'SET_PRODUCTS',
    payload: products,
  });