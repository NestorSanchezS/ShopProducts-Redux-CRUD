import { combineReducers } from "redux";
import productsReduces from "./productsReduces";

export default combineReducers({
  products: productsReduces,
});
