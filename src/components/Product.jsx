import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { deleteProductAction } from "../actions/productAction";

export const Product = ({ product }) => {
  const { name, price, id } = product;

  const dispatch = useDispatch();

  const confirmDeleteProduct = (id) => {
    dispatch(deleteProductAction(id));
  };

  return (
    <tr>
      <td>{name}</td>
      <td>
        <span className="font-weight-bold">${price}</span>
      </td>
      <td className="acciones">
        <Link to={`/product/edit/${id}`} className="btn btn-primary mr-2">
          Editar
        </Link>
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
