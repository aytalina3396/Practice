import { createStore } from 'redux';

export const addToCart = (product) => ({
  type: ADD_TO_CART,
  payload: product
});

export const removeFromCart = (product) => ({
  type: REMOVE_FROM_CART,
  payload: product
});

// Action types
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART';

// Initial state
const initialState = {
  cart: []
};

// Reducer
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      // Добавление продукта в корзину
      return {
        ...state,
        cart: [...state.cart, action.payload]
      };
    case REMOVE_FROM_CART:
      // Удаление продукта из корзины
      return {
        ...state,
        cart: state.cart.filter(product => product.id !== action.payload.id)
      };
    default:
      return state;
  }
};

// Store
const store = createStore(reducer);

export default store;