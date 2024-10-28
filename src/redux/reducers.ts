import { Product, State } from '../interfaces/interface';

const initialState: State = {
  productData: [{
    category: "",
    price: "",
    quantity: 0,
    value: "",
    name: ""
  }],
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