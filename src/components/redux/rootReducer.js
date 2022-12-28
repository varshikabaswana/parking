import { combineReducers } from "redux";
import bookingReducer from "./bookSlot/reducer";
import userReducer from "./users/userReducer";


const rootReducer = combineReducers({
    bookSlot: bookingReducer,
    user: userReducer
})

export default rootReducer