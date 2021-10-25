import React from "react";
import "../assets/css/menupage.css";
import "../assets/css/base.scss";
import logo from "../assets/images/logopeque.png";
import LogoSup from "../components/logoSupLogin";
import BienbenidaVendedor from "../components/bienbenidaVendedor";
import ButtonCrearProducto from "../components/buttonCrearProduct";
import ButtonListProduct from "../components/buttonListProduct";

class Vendedor extends React.Component {
  render() {
    return (
      <div>
        <div>
          <BienbenidaVendedor />
        </div>
        <div className="segmento"></div>
        <div className="central">
          <span>
            <img src={logo} />
          </span>
          <h2 className="title">Menú de Acceso</h2>
          <div>
            <div>
              <ButtonCrearProducto />
            </div>
            <div>
              <ButtonListProduct />
            </div>
          </div>
        </div>
        <div className="segmento"></div>
      </div>
    );
  }
}

export default Vendedor;
