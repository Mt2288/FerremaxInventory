import { useEffect } from "react";
import React, { useState } from 'react';

import swal from 'sweetalert2';
import { Link } from "react-router-dom";

const UsersTable = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetchUsers()
    }, [])

    const fetchUsers = () => {
        fetch("https://ferremax.herokuapp.com/")
            .then((res) => res.json())
            .then((data) => {
                setUser(data);
            });
    }

    const deleteTask = (id) => {
        swal({
            title: "Estas seguro?",
            buttons: ["No", "Sí, bórralo!"]
        })
            .then((result) => {
                if (result) {
                    fetch("https://ferremax.herokuapp.com/" + id, {
                        method: "DELETE",
                        headers: {
                            Accept: "application/json",
                            "Content-type": "application/json",
                        },
                    })
                        .then((res) => res.json())
                        .then((data) => {
                            //   useEffect();
                            if (data.status === "eliminado") {
                                swal("Se borro el usuario", {
                                    icon: "success",
                                },
                                    // this.useEffect()
                                )
                            };
                            fetchUsers()
                            //   this.$router.push("/productos");
                        });
                }
            });
    }

    return (
        <div id="tareas">
            <div class="row pt-5">
                <div class="col-md-12">
                    <div class="tile">
                        <div class="tile-body">
                            <div class="table-responsive">
                                <table class="table table-striped table-hover ">
                                    <thead class="table-white">
                                        <tr>
                                            <th>Identificación</th>
                                            <th>Nombres</th>
                                            <th>Apellidos</th>
                                            <th>Teléfono</th>
                                            <th>Correo electrónico</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {(user.map(user => (
                                            <tr key={user._id}>
                                                <td>{user.identificacion}</td>
                                                <td>{user.name}</td>
                                                <td>{user.lastname}</td>
                                                <td>{user.telephone}</td>
                                                <td>{user.email}</td>
                                                <td>{user.typeusername}</td>
                                                <td>
                                                    <Link
                                                        class="btn btn-sm btn-primary" to="/edit-user"
                                                    >
                                                        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                                                    </Link>&nbsp;
                                                    <button
                                                        onClick={() => deleteTask(user._id)}
                                                        class="btn btn-danger btn-sm"
                                                        title="Eliminar">
                                                        <i class="far fa-trash-alt" aria-hidden="true"></i>
                                                    </button>
                                                </td>
                                            </tr>
                                        ))
                                        )}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div >
        </div >
    );
}

export default UsersTable;