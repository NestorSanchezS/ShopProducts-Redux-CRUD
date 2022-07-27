import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { createNewProduct } from "../actions/productAction";

export const NuevoProducto = ({ history }) => {
  const [name, saveName] = useState("");
  const [price, savePrice] = useState(0);

  const dispatch = useDispatch();

  //acceder al state del store
  const cargando = useSelector((state) => state.products.loading);
  const error = useSelector((state) => state.products.error);

  const addProduct = (product) => dispatch(createNewProduct(product));

  const submitNewProduct = (e) => {
    e.preventDefault();
    if (name.trim() === "" || price <= 0) {
      return;
    }
    addProduct({
      name,
      price,
    });
    history.push("/");
  };
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form onSubmit={submitNewProduct}>
              <div className="form-group">
                <label htmlFor="nameProduct">Nombre Pruducto</label>
                <input
                  id="nameProduct"
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
                  value={name}
                  onChange={(e) => saveName(e.target.value)}
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
                  value={price}
                  onChange={(e) => savePrice(Number(e.target.value))}
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
            {error ? (
              <p className="alert alert-danger p-2">Hubo un error</p>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};
