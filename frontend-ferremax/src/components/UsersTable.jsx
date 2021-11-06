import { Link } from "react-router-dom";

const UsersTable = () => {
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
                                        <tr>
                                            <td>1001</td>
                                            <td>Daniela</td>
                                            <td>Bedoya</td>
                                            <td>3024</td>
                                            <td>db@gmail.com</td>
                                            <td>Activo</td>
                                            <td>
                                                <Link
                                                    to="/"
                                                    class="btn btn-sm btn-primary"
                                                >
                                                    <i class="fas fa-pencil-alt" aria-hidden="true"></i>
                                                </Link>&nbsp;
                                                <button
                                                    class="btn btn-danger btn-sm"
                                                    title="Eliminar">
                                                    <i class="far fa-trash-alt" aria-hidden="true"></i>
                                                </button>
                                            </td>
                                        </tr>
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