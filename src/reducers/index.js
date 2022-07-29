import { combineReducers } from "redux";
import alertaReducer from "./alertaReducer";
import productsReduces from "./productsReduces";

export default combineReducers({
  products: productsReduces,
  alerts: alertaReducer,
});
