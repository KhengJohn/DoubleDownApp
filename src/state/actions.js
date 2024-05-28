// types.js
export const ADD_TO_CART = 'ADD_TO_CART';
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";
export const SHOW_ALERT = 'SHOW_ALERT';

// actions.js
export const addToCart = (item) => ({
  type: ADD_TO_CART,
  payload: item,
  meta: {
    // Indicate that this action should not be processed if the item already exists in the cart
    preventDuplicate: true,
  },
});

export const removeFromCart = (index) => {
  return {
    type: REMOVE_FROM_CART,
    payload: index,
  };
};

export const showAlert = () => ({
    type: SHOW_ALERT,
  });