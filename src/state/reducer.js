// reducers.js
import { ADD_TO_CART, REMOVE_FROM_CART ,SHOW_ALERT } from './actions';

const initialState = {
  cartItems: [],  showAlert: false,
};

const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
             // Check if the item already exists in the cart
      const isDuplicate = state.cartItems.some(item => item.id === action.payload.id);

      // If preventDuplicate flag is set and the item is already in the cart, return current state
      if (action.meta && action.meta.preventDuplicate && isDuplicate) {
        return {
            ...state,
            showAlert: true,
          };
      }

      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
      case REMOVE_FROM_CART:
      // Create a new array excluding the item to be removed
      const updatedCart = state.cartItems.filter((item, index) => index !== action.payload);
      return {
        ...state,
        cartItems: updatedCart,
      };
      case SHOW_ALERT:
      // You can handle hiding the alert in another action if needed
      return {
        ...state,
        showAlert: false,
      };
    default:
      return state;
  }
};

export default cartReducer;
