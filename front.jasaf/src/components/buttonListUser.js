import React from "react";
import "../assets/css/base.scss";
import { Link } from "react-router-dom";

class ButtonListUser extends React.Component {
  render() {
    return (
      <div>
        <Link to="/listadouser" type="submit" className="button-submit">
          Listar Usuarios
        </Link>
      </div>
    );
  }
}

export default ButtonListUser;
