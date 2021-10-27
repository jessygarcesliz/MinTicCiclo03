import React, { Component } from "react";
import "../assets/css/base.scss";
import logo from "../assets/images/logopeque.png";
import Background from "../assets/images/image-login.png";
import GoogleLogin from "react-google-login";
import axios from "axios";
import configuration from "../config/config";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.BASE_URL =
      configuration.backendServer.url + ":" + configuration.backendServer.port;
  }

  handleLogin = (googleData) => {
    axios
      .post(this.BASE_URL + "/auth/users", { token: googleData.tokenId })
      .then((resp) => {
        if (resp.data.rol === "administrador") {
          window.location.href = "/administrador";
        } else {
          window.location.href = "/vendedor";
        }
      })
      .catch((err) => {
        alert("Por favor verificar los datos de inicio de session");
      });
  };

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
                  <GoogleLogin
                    clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
                    buttonText="Log in con Google"
                    onSuccess={this.handleLogin}
                    onFailure={this.handleLogin}
                    cookiePolicy={"single_host_origin"}
                  />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
