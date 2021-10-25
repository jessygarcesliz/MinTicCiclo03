import React from "react";
import "../assets/css/base.scss";
import { Link } from "react-router-dom";

class ButtonListProduct extends React.Component {
  render() {
    return (
      <div>
        <Link to="/listadoproductos" type="submit" className="button-submit">
          Listar Productos
        </Link>
      </div>
    );
  }
}

export default ButtonListProduct;
