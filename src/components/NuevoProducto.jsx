import React from "react";

export const NuevoProducto = () => {
  return (
    <div className="row justify-content-center">
      <div className="col-md-8">
        <div className="card">
          <div className="card-body">
            <h2 className="text-center mb-4 font-weight-bold">
              Agregar Nuevo Producto
            </h2>
            <form>
              <div className="form-group">
                <label htmlFor="nameProduct">Nombre Pruducto</label>
                <input
                  id="nameProduct"
                  type="text"
                  className="form-control"
                  placeholder="Nombre Producto"
                  name="name"
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
                />
              </div>
              <button
                type="submit"
                className="btn btn-primary font-weight-bold text-uppercase d-block w-100"
              >
                Agregar
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};
