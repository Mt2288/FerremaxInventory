import React, { useState } from "react";
// import { Link } from 'react-router-dom';
import axios from "axios";
// import Button from 'react-bootstrap/Button';
// import React from 'react'

const FormProductos = () => {
  const initialFormState = {
    code: "",
    name: "",
    marca: "",
    category: "",
    stock: "",
    precio: "",
    status: "",
  };
  const [user, setUser] = useState(initialFormState);

  const addTask = (e) => {
    console.log(user);
    axios
      .post("https://ferremax.herokuapp.com/productos", user, {
        headers: {
          "Access-Control-Allow_Methods": "POST",
        },
      })
      .then((response) => {
        if (response.status === 200) {
          console.log(response.data);
        } else {
        }
      });
    // e.preventDefault();
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // console.log(event.target.value)
  };

  return (
    <React.Fragment>
      <div className="col-lg-6 pb-4">
        <form onSubmit={addTask}>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Código</label>
            <input
              name="code"
              type="text"
              value={user.code}
              onChange={handleInputChange}
              placeholder="Numero identificacion"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Nombre</label>
            <input
              name="name"
              type="text"
              value={user.name}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Nombre"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Marca</label>
            <input
              name="marca"
              type="text"
              value={user.marca}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Apellido"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Categoria</label>
            <input
              name="category"
              type="text"
              value={user.category}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Telefono"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Stock</label>
            <input
              name="stock"
              type="number"
              value={user.stock}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Stock"
            />
          </div>
          <div className="form-group">
            <label htmlFor="exampleInputEmail1">Precio</label>
            <input
              name="precio"
              type="number"
              value={user.precio}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Nombre de usuario"
            />
          </div>
          <div className="form-group">
            <label htmlFor="status">Estado</label>
            <select
              name="status"
              value={user.status}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Status"
            >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <input type="submit" value="Actualizar producto" />
        </form>
      </div>
    </React.Fragment>
  );
};
export default FormProductos;
