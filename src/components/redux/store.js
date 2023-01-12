import { createStore ,compose } from 'redux'
import bookingReducer from './bookSlot/reducer';

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(bookingReducer,composeEnhancers());

export default store