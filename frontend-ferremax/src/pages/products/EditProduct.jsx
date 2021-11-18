import SideBar from "../../components/SideBar";
import TopBar from "../../components/TopBar";
import axios from "axios";
import { useEffect } from "react";
import React, { useState } from "react";
import Swal from "sweetalert2";

const EditProduct = (props) => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get(
        "https://backend-ferremax.herokuapp.com/api/productos/" +
          props.match.params.id
      )
      .then((res) => {
        setUser(res.data);
        console.log(user);
      })
      .catch((error) => {
        console.log(error);
      });
  };
  const submit = (e) => {
    // data to send the api via POST method
    let config = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        code: user.code,
        name: user.name,
        marca: user.marca,
        category: user.category,
        stock: user.stock,
        precio: user.precio,
        status: user.status,
      }),
    };

    // if route.params.id present then method is PUT
    let id = "";
    if ("id" in props.match.params) {
      id = props.match.params.id;
      config.method = "PUT";
    }

    // actually send the data
    fetch("https://backend-ferremax.herokuapp.com/api/productos/" + id, config)
      .then((res) => {
        if (res.status === "actualizado") {
          alert("actualizado");
        }
      })
      .catch(() => this.error());
    e.preventDefault();
    Swal.fire({
      text: "Modificado correctamente",
      icon: "success",
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUser({ ...user, [name]: value });
    // console.log(event.target.value)
  };

  return (
    <div id="wrapper">
      {/* <!-- Sidebar --> */}
      <SideBar />
      {/* <!-- End of Sidebar --> */}

      {/* <!-- Content Wrapper --> */}
      <div id="content-wrapper" className="d-flex flex-column">
        {/* <!-- Main Content --> */}
        <div id="content">
          {/* <!-- Topbar --> */}
          <TopBar />
          {/* <!-- End of Topbar --> */}

          {/* <!-- Begin Page Content --> */}
          <div className="container-fluid">
            {/* <!-- Page Heading --> */}
            <div className="d-sm-flex align-items-center justify-content-left mb-4">
              <h1 className="h3 mb-0 text-gray-800">Actualizar Producto</h1>
            </div>
            <div>
              <form onSubmit={submit}>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Codigo</label>
                  <input
                    name="code"
                    type="text"
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
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
                    className="form-control"
                    value={user.stock}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Email"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Precio</label>
                  <input
                    name="precio"
                    type="number"
                    className="form-control"
                    value={user.precio}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Nombre de usuario"
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="exampleInputEmail1">Status</label>
                  <select
                    name="status"
                    type="text"
                    className="form-control"
                    value={user.status}
                    onChange={handleInputChange}
                    aria-describedby="emailHelp"
                    placeholder="Status"
                  >
                    <option value="Activo">Activo</option>
                    <option value="Inactivo">Inactivo</option>
                  </select>
                </div>

                <button type="submit" className="btn btn-primary">
                  Submit
                </button>
              </form>
            </div>

            {/* Content page */}
          </div>
          {/* <!-- /.container-fluid --> */}
        </div>
        {/* <!-- End of Main Content --> */}
      </div>
      {/* <!-- End of Content Wrapper --> */}
    </div>
  );
};

export default EditProduct;
