import React from "react";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <React.Fragment>
      {/* <!-- 404 Error Text --> */}
      <div class="text-center">
        <div class="error mx-auto" data-text="404">
          404
        </div>
        <p class="lead text-gray-800 mb-5">Pagina No Encontrada</p>
        <p class="text-gray-500 mb-0">
            La URL solicitada no se encontró en este servidor.
        </p>
        <Link to="/">&larr; Regresar al Inicio</Link>
      </div>
    </React.Fragment>
  );
};

export default Error404;
