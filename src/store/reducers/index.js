import {combineReducers} from "redux";
import productReducer from "./productReducer";
import cartReducer from "./cartReducer"
import tempSelectedReducer from "./tempSelectedReducer"
import authReducer from "./authReducer";
import orderReducer from "./orderReducer";


export default combineReducers({
  productReducer,
  cartReducer,
  tempSelectedReducer,
  authReducer,
  orderReducer
})