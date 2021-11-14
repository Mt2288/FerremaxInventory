import { Link } from "react-router-dom";
import logoR from "./img/logo.png";
import image from "./img/logistic.svg";
const Register = () => {
  return (
    <div className="content-all-registrer">
      <div className="ctn-form">
        <img src={logoR} alt="Logo ferremax" className="logo" />
        <h1 className="tittle">REGISTRARTE</h1>
        <p>Es rápido y fácil.</p>
        <form action="">
          <label htmlFor="">Número de Identificación</label>
          <input type="number" />
          <label htmlFor="">Nombres</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Apellidos</label>
          <input type="text" name="" id="" />
          <label htmlFor="">Teléfono</label>
          <input type="number" />
          <label htmlFor="">Correo electrónico</label>
          <input type="email" name="" id="" />
          <label htmlFor="">Contraseña</label>
          <input type="password" name="" id="" />

          <input type="submit" value="Registrarte" />
        </form>

        <span className="text-footer">
          ¿Ya tienes una cuenta? <Link to="/login">Iniciar Sesión</Link>
        </span>
      </div>

      <div className="ctn-image">
        <img className="image" src={image} alt="" />
      </div>
    </div>
  );
};

export default Register;
