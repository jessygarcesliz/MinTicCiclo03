import React, { Component } from "react";
import axios from "axios";
import "../../assets/css/base.scss";
import configuration from "../../config/config";
import { Link } from "react-router-dom";

class CrearUsuario extends React.Component {

    constructor(props) {
        super(props);
        this.BASE_URL = configuration.backendServer.url +":"+
        configuration.backendServer.port + "/users/"
        this.state = {
            
            tipoUsuario:'',
            tipoDocumento:'',
            numDocumento:'',
            name:'',
            lastname:'',
            razon:'',
            sexo:'',
            fechaNacimineto:'',
            ciudad:'',
            direccion:'',
            barrio:'',
            correo:'',
            telefono:'',
            movil:'',
            estado:'',
            rol:'',
          
            
        }
        this.onTipoUsuarioChange= this.onTipoUsuarioChange.bind(this);
        this.onTipoDocumentoChange =this.onTipoDocumentoChange.bind(this);
        this.onNumDocumentoChange = this.onNumDocumentoChange.bind(this);
        this.onNameChange= this.onNameChange.bind(this);
        this.onLastNameChange = this.onLastNameChange.bind(this);
        this.onRazonChange = this.onRazonChange.bind(this);
        this.onSexoChange = this.onSexoChange.bind(this);
        this.onFechaNacimientoChange = this.onFechaNacimientoChange.bind(this);
        this.onCiudadChange = this.onCiudadChange.bind(this);
        this.onDireccionChange = this.onDireccionChange.bind(this);
        this.onBarrioChange = this.onBarrioChange.bind(this);
        this.onCorreoChange = this.onCorreoChange.bind(this);
        this.onTelefonoChange = this.onTelefonoChange.bind(this);
        this.onMovilChange = this.onNameChange.bind(this);
        this.onEstadoChange =this.onEstadoChange.bind(this);
        this.onRolChange = this.onRolChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
        
 }


    onTipoUsuarioChange(event) {
        this.setState({ tipoUsuario: event.target.value });
    }

    onTipoDocumentoChange(event) {
        this.setState({ tipoDocumento: event.target.value });

    }

    onNumDocumentoChange(event) {
        this.setState({ numDocumento: event.target.value });
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onLastNameChange(event) {
        this.setState({ lastname: event.target.value });
    }
    onRazonChange(event) {
        this.setState({ razon: event.target.value });
    }
    onSexoChange(event) {
        this.setState({ sexo: event.target.value });
    }
    onFechaNacimientoChange(event) {
        this.setState({ fechaNacimineto: event.target.value });
    }
    onCiudadChange(event) {
        this.setState({ciudad: event.target.value });
    }
    onDireccionChange(event) {
        this.setState({ direccion: event.target.value });
    }
    onBarrioChange(event) {
        this.setState({ barrio: event.target.value });
    }
    onCorreoChange(event) {
        this.setState({ correo: event.target.value });
    }
    onTelefonoChange(event) {
        this.setState({ telefono: event.target.value });
    }
    onMovilChange(event) {
        this.setState({ movil: event.target.value });
    }
    onEstadoChange(event) {
        this.setState({ estado: event.target.value });
    }
    onRolChange(event) {
        this.setState({ rol: event.target.value });
    }

    handleUpdate(){
        let url = this.BASE_URL 
        let data = {
            "tipoUsuario": this.state.tipoUsuario,
  "tipoDocumento": this.state.tipoDocumento,
  "numDocumento": this.state.numDocumento,
  "name":this.state.name,
  "lastname": this.state.lastname,
  "razon":this.state.razon,
  "sexo": this.state.sexo,
  "fechaNacimineto":this.state.fechaNacimineto,
  "ciudad":this.state.ciudad,
  "direccion":this.state.ciudad,
  "barrio":this.state.barrio,
  "correo": this.state.correo,
  "telefono":this.state.telefono,
  "movil":this.state.movil,
  "estado": this.state.estado,     
  "rol": this.state.rol,
        }
        axios.post(url, {...data,_id:null})
        .then((resp) => { alert("usuario creado exitosamente")
            //this.props.handleUpdateUser(true);            
        }).catch(err => {
            alert('Error al Crear Nuevo Usuario');
        });

        this.setState({
            
            tipoUsuario:'',
            tipoDocumento:'',
            numDocumento:'',
            name:'',
            lastname:'',
            razon:'',
            sexo:'',
            fechaNacimineto:'',
            ciudad:'',
            direccion:'',
            barrio:'',
            correo:'',
            telefono:'',
            movil:'',
            estado:'',
            rol:'',
          
            
        })
    }

    handleCancel(){
        this.props.handleUpdateUser(false);
    }

    render() {        
        return (
            <div>
                    
                    <h2>Crear Usuario</h2>
    <div id="campos" className="container-filters">
        <form action="get" id="formulario" name="fornulario">
            <legend> <u>Información Usuario</u> </legend>
            <hr/> <br/>
            <div class="">
              <label for="IDusuario">ID Usuario</label>
              <input
                type="text"
                id="IDUsuario"
                readonly
                disabled
                value={this.state._id}
              />

              <label for="tipo">Tipo Persona</label>
              <select
                name="tipoUsuario"
                id="tipo"
                value={this.state.tipoUsuario}
                onChange={this.onTipoUsuarioChange}
              >
                <option value="">--selecion--</option>
                <option value="persona" name="persona">
                  Persona
                </option>
                <option value="Empresa" name="Empresa">
                  Empresa
                </option>
              </select>
              <br />
              <br />

              <div>
                <label for="tipoDocumento">Tipo Documento</label>
                <select
                  name="tipoDocumento"
                  id="tipoDocumento"
                  value={this.state.tipoDocumento}
                  onChange={this.onTipoDocumentoChange}
                >
                  <option value="cedulaCiudadania">Cedula de Ciudadania</option>
                  <option value="nit">Nit</option>
                  <option value="tarjetaIdentida">Tarjeta de Identidad </option>
                  <option value="RegistroCivil">Registro Civil </option>
                  <option value="cedulaExtranjeria">
                    Cedula de Extranjeria
                  </option>
                </select>
                <label for="numeroDocumento">Numero Identidad</label>
                <input
                  type="text"
                  required
                  id="numeroDocumento"
                  placeholder="Numero de Documento"
                  value={this.state.numDocumento}
                  onChange={this.onNumDocumentoChange}
                />
                <br />
              </div>
              <br />
              <br />
            </div>
            <div id="datospersonal">
              <legend>
                <u>Datos Personales</u>
              </legend>
              <hr /> <br />
              <label htmlfor="nombre">Nombres</label>
              <input
                type="text"
                required
                id="nombre"
                placeholder=" Ingrese Nombre"
                value={this.state.name}
                onChange={this.onNameChange}
              />
              <label htmlfor="apellidos">Apellidos</label>
              <input
                type="text"
                required
                id="apellidos"
                placeholder="Ingrese Apellidos"
                value={this.state.lastname}
                onChange={this.onLastNameChange}
              />
              <label htmlfor="razon" name="razon">
                Razon Social
              </label>
              <input
                type="text"
                id="razon"
                placeholder="Empresa"
                value={this.state.razon}
                onChange={this.onRazonChange}
              />
              <br />
              <br />
              <div id="div-rolusuario">
                <label htmlfor="sexo">Sexo:</label>
                <select
                  name="sexo"
                  id="sexo"
                  value={this.state.sexo}
                  onChange={this.onSexoChange}
                >
                  <option value="">--seleccion--</option>
                  <option value="femenino">Femenino</option>
                  <option value="masculino">Masculino</option>
                  <option value="otro">Otro</option>
                </select>
                <label class="label">Fecha de Nacimiento</label>
                <input
                  type="date"
                  max="2010-12-31"
                  value={this.state.fechaNacimineto}
                  onChange={this.onFechaNacimientoChange}
                />{" "}
                <br />
                <br /> <br />
              </div>
            </div>
            <div id="Contactos">
              <legend>
                <u>Datos De Contacto</u>
              </legend>
              <hr />
              <br />
              <br />
              <label htmlfor="ciudad">Ciudad</label>
              <input
                type="text"
                id="ciudad"
                placeholder="Ciudad"
                value={this.state.ciudad}
                onChange={this.onCiudadChange}
              />
              <label htmlfor="direccion">Direccion</label>
              <input
                type="text"
                id="direccion"
                placeholder="Direccion"
                value={this.state.direccion}
                onChange={this.onDireccionChange}
              />
              <label htmlfor="barrio">Barrio</label>
              <input
                type="text"
                id="direccion"
                placeholder="Barrio"
                value={this.state.barrio}
                onChange={this.onBarrioChange}
              />
              <br />
              <br />
              <label htmlfor="correo">Correo</label>
              <input
                type="email"
                id="correo"
                placeholder="example@abc.com"
                value={this.state.correo}
                onChange={this.onCorreoChange}
              />
              <label htmlfor="telefono">Telefono</label>
              <input
                type="text"
                id="telefono"
                placeholder="xxx xxx xx xx"
                value={this.state.telefono}
                onChange={this.onTelefonoChange}
              />
              <label htmlfor="movil">Movil</label>
              <input
                type="text"
                id="movil"
                placeholder="xxx-xxx-xx-xx"
                value={this.state.movil}
                onChange={this.onMovilChange}
              />
            </div>{" "}
            <br />
            <div id="estado" class="">
              <legend>
                <u>Estado Usuario</u>
              </legend>
              <hr />

              <ul>
                <li>
                  <div id="div-rolusuario">
                    <label htmlfor="rolUsuario">Tipo Usuario:</label>

                    <select
                      name="rol"
                      id="rolUsuario"
                      required
                      value={this.state.rol}
                      onChange={this.onRolChange}
                    >
                      <option value="">--seleccion--</option>
                      <option value="administrador">Administrador</option>
                      <option value="vendedor">Vendedor</option>
                    </select>
                  </div>
                </li>
                <li>
                  <input
                    type="radio"
                    id="actualizado"
                    name="estado"
                    value="Actualizado"
                    checked
                    value={this.state.estado}
                    onChange={this.onEstadoChange}
                  />
                  <label htmlfor="actualizado">Autorizado</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="noAutorizado"
                    name="estado"
                    value={this.state.estado}
                    onChange={this.onEstadoChange}
                  />
                  <label htmlfor="noAutorizado">No Autorizado</label>
                </li>
                <li>
                  <input
                    type="radio"
                    id="pendiente"
                    name="estado"
                    value={this.state.estado}
                    onChange={this.onEstadoChange}
                  />
                  <label htmlfor="pendiente">Pendiente</label>
                </li>
              </ul>
            </div>
          </form>
        </div>
        <div class="botones">
          <Link
            to="/administrador"
            form="formulario"
            type="reset"
            className="small-button-submit"
          >
            Cancelar
          </Link>
          <button
            form="formulario"
            type="submit"
            className="small-button-submit"
            onClick={() => this.handleUpdate()}
          >
            Crear
          </button>
        </div>
      </div>
    );
  }
}

export default CrearUsuario;
