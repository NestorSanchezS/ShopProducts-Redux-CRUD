import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction, getProductEdit } from "../actions/productAction";
import Swal from "sweetalert2";

export const Product = ({ product }) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const confirmDeleteProduct = (id) => {
    Swal.fire({
      title: "Estas seguro?",
      text: "Un producto que se elimina no se puede recuperar!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Si, eliminar!",
      cancelButtonText: "Cancelar",
    }).then((result) => {
      if (result.isConfirmed) {
        dispatch(deleteProductAction(id));
      }
    });
  };

  const redirectEdition = (product) => {
    dispatch(getProductEdit(product));
    navigate(`/product/edit/${product.id}`);
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">${price}</span>
      </td>
      <td className="acciones">
        <button
          onClick={() => redirectEdition(product)}
          type="button"
          className="btn btn-primary mr-2"
        >
          Editar
        </button>
        <button
          type="button"
          className="btn btn-danger"
          onClick={() => confirmDeleteProduct(id)}
        >
          Eliminar
        </button>
      </td>
    </tr>
  );
};
