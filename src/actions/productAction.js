import {
  ADD_PRODUCT,
  ADD_PRODUCT_SUCCESS,
  ADD_PRODUCT_ERROR,
} from "../types/index.js";
import clientAxios from "../config/axios.js";
import Swal from "sweetalert2";

export const createNewProduct = (product) => async (dispatch) => {
  dispatch(addProduct());
  try {
    //inset in API
    await clientAxios.post("/productos", product);

    //if all is ok update the
    dispatch(addProductSuccess(product));
    Swal.fire("Correcto", "EL producto se agrego correctamente", "sucsess");
  } catch (error) {
    dispatch(addProductError(true));
    Swal.fire({
      icon: "eror",
      title: "hubo un error",
      text: "Hubo un error, intenta de nuevo",
    });
  }
};

const addProduct = () => ({
  type: ADD_PRODUCT,
  payload: true,
});

//Si el producto se guarda en la base de datos
const addProductSuccess = (product) => ({
  type: ADD_PRODUCT_SUCCESS,
  payload: product,
});

const addProductError = (error) => ({
  type: ADD_PRODUCT_ERROR,
  payload: error,
});
