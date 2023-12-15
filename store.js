import { configureStore } from 'redux';
import cartReducer from './reducers';

const store = configureStore(cartReducer);

export default store;
