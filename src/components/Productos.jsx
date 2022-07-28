import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProductAction } from "../actions/productAction";
import { Product } from "./Product";

export const Productos = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    const uploadPRoducts = async () => dispatch(getProductAction());
    uploadPRoducts();
  }, []);
  const { products } = useSelector((state) => state.products);
  const { error } = useSelector((state) => state.products);
  const { loading } = useSelector((state) => state.products);

  return (
    <>
      <h2 className="table table-striped">Listado de Productos</h2>
      {error ? (
        <p className="font-weight-bold alert alert-danger text-center">
          Hubo un error
        </p>
      ) : null}
      {loading && <p>Cargando</p>}
      <table className="table table-striped">
        <thead className="bg-primary table-dark">
          <tr>
            <th scope="col">Nombre</th>
            <th scope="col">Precio</th>
            <th scope="col">Acciones</th>
          </tr>
        </thead>
        <tbody>
          {products.length === 0
            ? "No hay productos"
            : products.map((product) => (
                <Product key={product.id} product={product} />
              ))}
        </tbody>
      </table>
    </>
  );
};
