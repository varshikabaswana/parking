import { createStore } from 'redux'
import bookingReducer from './bookSlot/reducer';


const store = createStore(bookingReducer);

export default store