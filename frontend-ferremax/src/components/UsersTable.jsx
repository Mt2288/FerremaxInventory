import { useEffect } from "react";
import React, { useState } from "react";

import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import axios from "axios";

const UsersTable = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://backend-ferremax.herokuapp.com/api/usuarios")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: `¿Estás seguro de eliminar el usuario seleccionado?`,
      text: "Esta acción no se puede deshacer!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      cancelButtonText: "Cancelar",
      confirmButtonText: "Sí, Eliminalo!",
    }).then((result) => {
      if (result.isConfirmed) {
        axios
          .delete("https://backend-ferremax.herokuapp.com/api/usuarios/" + id)
          .then((data) => {
            Swal.fire({
              text: "Usuario eliminado correctamente",
              icon: "success",
            });
            console.log(data.data.status);
            fetchUsers();
          })
          .catch((error) => {
            console.log(error);
          });
      }
    });
  };

  return (
    <div id="tareas">
      <div className="row pt-5">
        <div className="col-md-12">
          <div className="tile">
            <div className="tile-body">
              <div className="table-responsive">
                <table className="table table-striped table-hover ">
                  <thead className="table-white">
                    <tr>
                      <th>Identificación</th>
                      <th>Nombres</th>
                      <th>Apellidos</th>
                      <th>Teléfono</th>
                      <th>Correo electrónico</th>
                      <th>Rol</th>
                      <th>Acciones</th>
                    </tr>
                  </thead>
                  <tbody>
                    {user.map((user) => (
                      <tr key={user._id}>
                        <td>{user.identificacion}</td>
                        <td>{user.name}</td>
                        <td>{user.lastname}</td>
                        <td>{user.telephone}</td>
                        <td>{user.email}</td>
                        <td>{user.typeusername}</td>
                        <td>
                          <Link
                            className="btn btn-sm btn-primary"
                            to={"/edit-user/" + user._id}
                            title="Actualizar"
                          >
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            ></i>
                          </Link>
                          &nbsp;
                          <button
                            onClick={() => handleDelete(user._id)}
                            className="btn btn-danger btn-sm"
                            title="Eliminar"
                          >
                            <i
                              className="far fa-trash-alt"
                              aria-hidden="true"
                            ></i>
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsersTable;
