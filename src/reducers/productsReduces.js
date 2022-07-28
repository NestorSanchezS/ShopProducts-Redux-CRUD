import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
  START_DOWNLOAD_PRODUCT,
  DOWNLOAD_PRODUCT_SUCCESS,
  DOWNLOAD_PRODUCT_ERROR,
  GET_PRODUCT_DELETE,
  PRODUCT_DELETE_SUCCESS,
  PRODUCT_DELETE_ERROR,
} from "../types/index.js";

//cada reducer tiene su propio state
const initialState = {
  products: [],
  error: false,
  loading: false,
  deleteProduct: null,
};

export default function (state = initialState, action) {
  switch (action.type) {
    case ADD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case ADD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        products: [...state.products, action.payload],
      };
    case ADD_PRODUCT_ERROR:
    case DOWNLOAD_PRODUCT_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case START_DOWNLOAD_PRODUCT:
      return {
        ...state,
        loading: action.payload,
      };
    case DOWNLOAD_PRODUCT_SUCCESS:
      return {
        ...state,
        loading: false,
        error: false,
        products: action.payload,
      };
    case GET_PRODUCT_DELETE:
      return {
        ...state,
        deleteProduct: action.payload,
      };
    case PRODUCT_DELETE_SUCCESS:
      return {
        ...state,
        products: state.products.filter((p) => p.id !== state.deleteProduct),
        deleteProduct: null,
      };

    default:
      return state;
  }
}
