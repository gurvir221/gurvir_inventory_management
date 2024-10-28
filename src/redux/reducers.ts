import { Product, State } from '../interfaces/interface';

const initialState: State = {
  productData: [],
  totalProducts: 0,
  totalValue: 0,
  outOfStock: 0,
  categories: new Set(),
};

type Action = { type: 'SET_PRODUCTS'; payload: Product[] }

const reducer = (state = initialState, action: Action): State => {
  switch (action.type) {
    case 'SET_PRODUCTS':
        return {
          ...state,
          productData: action.payload
        };
    default:
      return state;
  }
};

export default reducer;