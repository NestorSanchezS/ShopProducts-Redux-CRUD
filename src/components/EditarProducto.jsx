import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { editProductAction } from "../actions/productAction";
import { useNavigate } from "react-router-dom";

export const EditarProducto = () => {
  const [productSaved, saveProduct] = useState({
    name: "",
    price: "",
  });

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { productEdit } = useSelector((state) => state.products);

  useEffect(() => {
    saveProduct(productEdit);
  }, [productEdit]);

  //Leer los datos del formulario
  const onChangeFormulario = ({ target }) => {
    saveProduct({
      ...productSaved,
      [target.name]: target.value,
    });
  };

  // const { name, price, id } = productEdit;

  const submitEditProduct = (e) => {
    e.preventDefault();
    dispatch(editProductAction(productSaved));
    navigate("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Editar Producto
            </h2>
            <form onSubmit={submitEditProduct}>
              <div className="form-group">
                <label htmlFor="nameProduct">Nombre Pruducto</label>
                <input
                  id="nameProduct"
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={productSaved.name}
                  onChange={onChangeFormulario}
                />
              </div>
              <div className="form-group">
                <label htmlFor="nombreProducto">Precio Producto</label>
                <input
                  id="nombreProducto"
                  type="number"
                  className="form-control"
                  placeholder="Precio Producto"
                  name="price"
                  value={productSaved.price}
                  onChange={onChangeFormulario}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Editar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
