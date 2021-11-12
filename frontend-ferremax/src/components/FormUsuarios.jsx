import React, { useState } from 'react'
// import { Link } from 'react-router-dom';
import axios from 'axios';
// import Button from 'react-bootstrap/Button';
// import React from 'react'

const FormUsuario = () => {

  const initialFormState = {
    identificacion: "",
    name: "",
    lastname: "",
    telephone: "",
    email: "",
    typeusername: "",
    status: "",
    password: "",
  }
  const [user, setUser] = useState(initialFormState)




  const addTask = (e) => {

    axios
      .post("https://ferremax.herokuapp.com/register", user, {
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
    e.preventDefault();
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
        <label for="exampleInputEmail1">Identificacion</label>
        <input
        name="identificacion"
        type="text"
        class="form-control" 
        value={user.identificacion}
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
        <label for="exampleInputEmail1">Apellido</label>
        <input
        name="lastname"
        type="text" 
        class="form-control" 
        value={user.lastname}
        onChange={handleInputChange}
        aria-describedby="emailHelp" 
        placeholder="Apellido" />

      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Telefono</label>
        <input
        name="telephone"        
        type="text" 
        class="form-control" 
        value={user.telephone}
        onChange={handleInputChange}
        aria-describedby="emailHelp" 
        placeholder="Telefono" />

      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Email</label>
        <input
        name="email"         
        type="email" 
        class="form-control" 
        value={user.email}
        onChange={handleInputChange}
        aria-describedby="emailHelp" 
        placeholder="Email" />

      </div>
      <div class="form-group">
        <label for="exampleInputEmail1">Nombre usuario</label>
        <input
        name="typeusername"         
        type="text" 
        class="form-control" 
        value={user.typeusername}
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
      <div class="form-group">
        <label for="exampleInputEmail1">Contraseña</label>
        <input
        name="password"        
        type="password" 
        class="form-control" 
        value={user.password}
        onChange={handleInputChange}
        aria-describedby="emailHelp" 
        placeholder="Contraseña" />

      </div>



      <button type="submit" class="btn btn-primary">Submit</button>
    </form>
    </div>

    </React.Fragment>
  );
};
export default FormUsuario;
