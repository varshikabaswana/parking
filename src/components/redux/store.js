import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import bookingReducer from './bookSlot/reducer';

const store = createStore(bookingReducer, applyMiddleware(thunk));


export default store;

