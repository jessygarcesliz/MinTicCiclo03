import React, { Component } from "react";
import "../../assets/css/base.scss";
import logo from "../../assets/images/logopeque.png";
import Background from "../../assets/images/image-login.png";

class Login extends React.Component {
  render() {
    return (
      <div>
        <div className="container">
          <div
            className="container-image"
            style={{ backgroundImage: "url(" + Background + ")" }}
          ></div>
          <div className="small-container">
            <div className="div-formulario">
              <span>
                <img src={logo} />
              </span>
              <h2 className="title">Interfaz Autenticación</h2>
              <form>
                <div>
                  <input
                    type="text"
                    id="usuario"
                    className="input-text"
                    required
                    placeholder="Nombre Usuario"
                  />
                  <input
                    type="password"
                    id="psw"
                    class="input-text"
                    required
                    placeholder="Contraseña"
                  />
                </div>
                <div>
                  <button className="button-submit">
                    <i /*style="color: red;"*/ className="fa fa-google"></i>
                    Google
                  </button>
                  <button type="submit" className="button-submit">
                    Ingresar
                  </button>
                </div>
              </form>

              <a href="url">Recuperación de contraseña y usuario</a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
