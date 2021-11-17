import React, { useState } from "react";
import axios from "axios";
import { useHistory } from "react-router-dom";
import Swal from "sweetalert2";

const ModalCreateProducts = () => {
  const history = useHistory();

  const [code, setCode] = useState(0);
  const [name, setName] = useState("");
  const [marca, setMarca] = useState("");
  const [category, setCategory] = useState("");
  const [description, setDescription] = useState("");
  const [stock, setStock] = useState(0);
  const [precio, setPrecio] = useState(0);
  const [status, setStatus] = useState("");

  const URL = "https://backend-ferremax.herokuapp.com/api/productos";
  const addProduct = async (e) => {
    e.preventDefault();
    console.log("Producto guardado");
    axios
      .post(URL, {
        code,
        name,
        marca,
        category,
        description,
        stock,
        precio,
        status,
      })
      .then((respuesta) => {
        console.log(respuesta);
        setCode(0);
        setName("");
        setMarca("");
        setCategory("");
        setDescription("");
        setStock(0);
        setPrecio(0);
        setStatus("");
        if (respuesta.status !== 200) {
          Swal.fire(
            "Error!",
            "Hubo un problema al crear el registro!",
            "error"
          );
        } else {
          Swal.fire(
            "Guardado!",
            `El producto ha sido guardado correctamente!`,
            "success"
          );
          history.push("/products");
        }
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <div
      className="modal fade"
      id="modalFormProductos"
      tabIndex="-1"
      aria-labelledby="ModalProducts"
      aria-hidden="true"
    >
      <div className="modal-dialog modal-lg">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title" id="ModalProducts">
              Nuevo producto
            </h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div className="modal-body">
            <form onSubmit={addProduct}>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="code" className="col-form-label">
                    Código
                  </label>
                  <input
                    type="number"
                    required
                    value={code}
                    onChange={(e) => setCode(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="name-text" className="col-form-label">
                    Nombre
                  </label>
                  <input
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    id="name-text"
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="marca-text" className="col-form-label">
                    Marca
                  </label>
                  <input
                    type="text"
                    required
                    value={marca}
                    onChange={(e) => setMarca(e.target.value)}
                  />
                </div>
              </div>
              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="category-text" className="col-form-label">
                    Categoria
                  </label>
                  <input
                    type="text"
                    required
                    value={category}
                    onChange={(e) => setCategory(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="category-text" className="col-form-label">
                    Descripción
                  </label>
                  <input
                    type="text"
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="stock-text" className="col-form-label">
                    Stock
                  </label>
                  <input
                    type="number"
                    required
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                  />
                </div>
              </div>

              <div className="row">
                <div className="col-md-4">
                  <label htmlFor="price-text" className="col-form-label">
                    Precio
                  </label>
                  <input
                    type="number"
                    required
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                  />
                </div>
                <div className="col-md-4">
                  <label htmlFor="status-text" className="col-form-label">
                    Estado
                  </label>
                  <select
                    name="status"
                    onChange={(e) => setStatus(e.target.value)}
                    placeholder="Status"
                  >
                    <option value="" disabled="disabled" selected="false">
                      Elija una opción
                    </option>
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>
              </div>
              <br />
              <div className="modal-footer">
                <button
                  type="reset"
                  className="btn btn-secondary"
                  data-bs-dismiss="modal"
                >
                  Cancelar
                </button>
                <button type="submit" className="btn btn-success">
                  Crear
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ModalCreateProducts;
