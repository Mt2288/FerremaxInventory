import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
/* import swal from 'sweetalert2'; */
import axios from "axios";

const ProductTable = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetchProducts();
    }, []);

    const fetchProducts = () => {
        console.log("Obtener usuarios");
        axios
            .get("https://ferremax.herokuapp.com/productos")
            .then((res) => {
                setProducts(res.data);
            })
            .catch((error) => {
                console.log(error);
            });
    };

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
                                        {products.map((products) => (
                                            <tr key={products._id}>
                                                <td>{products.code}</td>
                                                <td>{products.name}</td>
                                                <td>{products.marca}</td>
                                                <td>{products.category}</td>
                                                <td>{products.stock}</td>
                                                <td>{products.precio}</td>
                                                <td>
                                                    <span
                                                        className={
                                                            products.status === "Activo"
                                                                ? "badge badge-pill badge-success"
                                                                : "badge badge-pill badge-danger"
                                                        }
                                                    >
                                                        {products.status}
                                                    </span>
                                                </td>
                                                <td>
                                                    <Link
                                                        class="btn btn-sm btn-primary"
                                                        to="/edit-product"
                                                        title="Actualizar"
                                                    >
                                                        <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                                                    </Link>
                                                    &nbsp;
                                                    <button
                                                        class="btn btn-danger btn-sm"
                                                        title="Eliminar"
                                                    >
                                                        <i class="far fa-trash-alt" aria-hidden="true"></i>
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

export default ProductTable;
