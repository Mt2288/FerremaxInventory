import { useEffect } from "react";

import  swal  from 'sweetalert';
import React, { useState } from 'react';


const ProductTable = () => {
    const [user, setUser] = useState([])

    useEffect(() => {
        fetchProducts()
    }, [])

    const fetchProducts = () => {
        fetch("https://ferremax.herokuapp.com/productos")
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
              fetch("https://ferremax.herokuapp.com/productos/" + id, {
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
                      swal("Se borro el producto", {
                      icon: "success",
                    },
                    // this.useEffect()
                    )};
                    fetchProducts()
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
                                            <th>Código</th>
                                            <th>Nombre</th>
                                            <th>Marca</th>
                                            <th>Categoría</th>
                                            <th>Stock</th>
                                            <th>Precio</th>
                                            <th>Estado</th>
                                            <th>Acciones</th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {(user.map(user => (
                                            <tr key={user._id}>
                                                <td>{user.code}</td>
                                                <td>{user.name}</td>
                                                <td>{user.marca}</td>
                                                <td>{user.category}</td>
                                                <td>{user.stock}</td>
                                                <td>{user.precio}</td>
                                                <td>
                                                    <span
                                                        if={user.status}
                                                        class="badge badge-pill badge-success"
                                                    >
                                                        {user.status}</span>
                                                    <span v-else class="badge badge-pill badge-danger">
                                                        {user.status}</span> 
                                                </td>
                                                <td>
                                                    <button                                                                                                                                                                                                             

                                                        class="btn btn-sm btn-primary"
                                                    >
                                                        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                                                    </button>&nbsp;
                                                    <button
                                                        onClick={ () => deleteTask(user._id) }
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

export default ProductTable;