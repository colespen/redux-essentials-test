import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';


export default configureStore({
  reducer: {
    counter: counterReducer,
    // state.counter section in Redux state object
  },
});
