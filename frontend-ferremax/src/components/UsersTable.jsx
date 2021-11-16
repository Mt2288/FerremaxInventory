import { useEffect } from "react";
import React, { useState } from "react";

/* import swal from "sweetalert2"; */
import { Link } from "react-router-dom";
import axios from "axios";

const UsersTable = () => {
  const [user, setUser] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = () => {
    axios
      .get("https://ferremax.herokuapp.com/")
      .then((res) => {
        setUser(res.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const deleteUser = (id) => {
    axios.delete("https://ferremax.herokuapp.com/" + id).then((data) => {
      console.log(data.data.status);
      fetchUsers();
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
                            to="/edit-user"
                            title="Actualizar"
                          >
                            <i
                              className="fas fa-pencil-alt"
                              aria-hidden="true"
                            ></i>
                          </Link>
                          &nbsp;
                          <button
                            onClick={() => deleteUser(user._id)}
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
