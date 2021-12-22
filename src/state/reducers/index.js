import { combineReducers } from 'redux';
import cartReducer from  "./cartReducer";
import amountReducer from "./amountReducer";

const rootReducer = combineReducers({
  // product: amountReducer
  amount: amountReducer,
  cart: cartReducer
})

export default rootReducer;