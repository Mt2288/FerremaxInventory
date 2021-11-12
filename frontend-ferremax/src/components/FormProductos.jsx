import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import axios from 'axios';
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
  }
  const [user, setUser] = useState(initialFormState)




  const addTask = (e) => {
    console.log(user)
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
  }

  const handleInputChange = event => {
    const { name, value } = event.target
    setUser({ ...user, [name]: value })
    // console.log(event.target.value)
  }

  return (
    <React.Fragment>

      <div>
        <form onSubmit={addTask}>
          <div class="form-group">
            <label for="exampleInputEmail1">Codigo</label>
            <input
              name="code"
              type="text"
              class="form-control"
              value={user.code}
              onChange={handleInputChange}

              placeholder="Numero identificacion" />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Nombre</label>
            <input
              name="name"
              type="text"
              class="form-control"
              value={user.name}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Nombre" />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Marca</label>
            <input
              name="marca"
              type="text"
              class="form-control"
              value={user.marca}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Apellido" />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Categoria</label>
            <input
              name="category"
              type="text"
              class="form-control"
              value={user.category}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Telefono" />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Stock</label>
            <input
              name="stock"
              type="number"
              class="form-control"
              value={user.stock}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Email" />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Precio</label>
            <input
              name="precio"
              type="number"
              class="form-control"
              value={user.precio}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Nombre de usuario" />

          </div>
          <div class="form-group">
            <label for="exampleInputEmail1">Status</label>
            <select
              name="status"
              type="text"
              class="form-control"
              value={user.status}
              onChange={handleInputChange}
              aria-describedby="emailHelp"
              placeholder="Status" >
              <option value="Activo">Activo</option>
              <option value="Inactivo">Inactivo</option>
            </select>
          </div>

          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>

    </React.Fragment>
  );
};
export default FormProductos;
