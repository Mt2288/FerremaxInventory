import React from "react";
import { Link } from "react-router-dom";

const SideBar = () => {
  return (
    <React.Fragment>
      <ul className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion" id="accordionSidebar">

        {/* <!-- Sidebar - Brand --> */}
        <Link className="sidebar-brand d-flex align-items-center justify-content-center" to="/dashboard">
          <div className="sidebar-brand-icon rotate-n-15">
            <i className="fas fa-tools"></i>
          </div>
          <div className="sidebar-brand-text mx-3">Ferremax</div>
        </Link>
        <hr className="sidebar-divider my-0" />
        <li className="nav-item active">
          <Link className="nav-link" to="/dashboard">
            <i className="fas fa-fw fa-tachometer-alt"></i>
            <span>Dashboard</span></Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          Gestionar Usuarios
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/users" data-toggle="collapse" data-target="#collapseTwo"
            aria-expanded="true" aria-controls="collapseTwo">
            <i className="fas fa-users-cog"></i>
            <span>Usuarios</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">
          Gestionar productos
        </div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <Link className="nav-link collapsed" to="/products" data-toggle="collapse" data-target="#collapsePages"
            aria-expanded="true" aria-controls="collapsePages">
            <i className="fas fa-fw fa-cog"></i>
            <span>Productos</span>
          </Link>
        </li>
      </ul>
    </React.Fragment>
  );
};

export default SideBar;
