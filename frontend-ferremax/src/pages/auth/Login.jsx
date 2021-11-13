import { Link } from "react-router-dom";
import logoR from "./img/logo.png";
import image from "./img/sign_in.svg"
const Login = () => {
    return (
        <div className="content-all">
            <div className="ctn-form">
                <img src={logoR} alt="Logo ferremax" className="logo" />
                <h1 className="tittle">INICIAR SESIÓN</h1>
                <p>Ingrese al sistema si ya está registrado.</p>
                <form>
                    <label htmlFor="">Correo electrónico</label>
                    <input type="email" name="" id="" />
                    <span className="msg-error"></span>
                    <label htmlFor="">Contraseña</label>
                    <input type="password" name="" id="" />
                    <span className="msg-error"></span>

                    <input type="submit" value="Iniciar Sesión" />
                </form>

                <span className="text-footer"
                >¿Aún no te has registrado? <Link to="/">Regístrate</Link></span>
            </div>

            <div className="ctn-image">
                <img className="image" src={image} alt="" />
            </div>
        </div>
    );
}

export default Login;