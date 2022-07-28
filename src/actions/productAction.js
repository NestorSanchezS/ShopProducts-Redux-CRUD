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

//Descarga los productos de la base de datos
export const getProductAction = () => async (dispatch) => {
  dispatch(downloadProduct());
  try {
    const response = await clientAxios.get("/productos");
    dispatch(downloadPRoductsSuccess(response.data));
  } catch (error) {
    console.log(error);
    dispatch(downloadProductError());
  }
};

const downloadProduct = () => ({
  type: START_DOWNLOAD_PRODUCT,
  payload: true,
});

const downloadPRoductsSuccess = (products) => ({
  type: DOWNLOAD_PRODUCT_SUCCESS,
  payload: products,
});

const downloadProductError = () => ({
  type: DOWNLOAD_PRODUCT_ERROR,
  payload: true,
});

//Seleccioa y elimina

export const deleteProductAction = (id) => async (dispatch) => {
  dispatch(getProductDelete(id));
  try {
    await clientAxios.delete(`/productos/${id}`);
    dispatch(productDeleteSuccess());
    //Si se elimina mostrar alierta
    Swal.fire("Eliminado!", "El producto se eliminó correctamente.", "success");
  } catch (error) {
    console.log(error);
    dispatch(productDeleteError());
  }
};

const getProductDelete = (id) => ({
  type: GET_PRODUCT_DELETE,
  payload: id,
});

const productDeleteSuccess = () => ({
  type: PRODUCT_DELETE_SUCCESS,
});

const productDeleteError = () => ({
  type: PRODUCT_DELETE_ERROR,
  payload: true,
});
