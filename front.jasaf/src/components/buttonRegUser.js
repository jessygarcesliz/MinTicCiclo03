import React from "react";
import "../assets/css/base.scss";
import { Link } from "react-router-dom";
//import CrearUsuario from "../components/User/crearUsuario";

class ButtonRegUser extends React.Component {
  render() {
    return (
      <div>
        <Link className="button-submit" to="/crearuser">
          Crear un Usuario
        </Link>
      </div>
    );
  }
}

export default ButtonRegUser;
