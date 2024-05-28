import { configureStore } from '@reduxjs/toolkit';
import rootReducer from './reducer'; // Import your root reducer

const store = configureStore({
  reducer: rootReducer,
  // You can also configure middleware, dev tools, etc. here
});
export default store;
