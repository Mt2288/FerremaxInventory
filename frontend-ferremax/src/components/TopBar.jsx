import React from "react";
import { Link } from "react-router-dom";

const TopBar = () => {
  return (
    <React.Fragment>
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">

          {/* <!-- Nav Item - User Information --> */}
          <li className="nav-item dropdown no-arrow">
            <Link
              className="nav-link dropdown-toggle"
              to="#"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              <span className="mr-2 d-none d-lg-inline text-gray-600 small">
                Admin <i className="fa fa-user-cog"></i>
              </span>
              {/* <img
                className="img-profile rounded-circle"
                src=". /img/undraw_profile.svg"
              /> */}
            </Link>
            {/* <!-- Dropdown - User Information --> */}
            <div
              className="dropdown-menu dropdown-menu-right shadow animated--grow-in"
              aria-labelledby="userDropdown"
            >
              <Link
                className="dropdown-item"
                to="#"
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <i className="fas fa-sign-out-alt fa-sm fa-fw mr-2 text-gray-400"></i>
                Salir
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      {/* <!-- Logout Modal--> */}
      <div className="modal fade" id="logoutModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel"
        aria-hidden="true">
        <div className="modal-dialog" role="document">
          <div className="modal-content">
            <div className="modal-header">
              <h5 className="modal-title" id="exampleModalLabel">¿Desea Salir del Sistema?</h5>
              <button className="close" type="button" data-dismiss="modal" aria-label="Close">
                <span aria-hidden="true">×</span>
              </button>
            </div>
            <div className="modal-body">Seleccione "Cerrar sesión" a continuación si está listo para finalizar su sesión actual.</div>
            <div className="modal-footer">
              <button className="btn btn-secondary" type="button" data-dismiss="modal">Cancelar</button>
              <a className="btn btn-warning" href="/login">Cerrar sesión</a>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default TopBar;
