import React from "react";
import { Link } from "react-router-dom";
import "../assets/css/base.scss";

class ButtonCrearProduct extends React.Component {
  render() {
    return (
      <div>
        <Link to="/crearproducto" type="submit" className="button-submit">
          Crear Producto
        </Link>
      </div>
    );
  }
}

export default ButtonCrearProduct;
