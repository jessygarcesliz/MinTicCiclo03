import React, { Component } from "react";
import "../assets/css/base.scss";

class FiltroUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            userId: "",
            usernumDocumento: "",
            userrol: "",
            userestado: ""
        };

        this.onIdChange = this.onIdChange.bind(this);
        this.onnumDocumentoChange = this.onnumDocumentoChange.bind(this);
        this.onrolChange = this.onrolChange.bind(this);
        this.onestadoChange = this.onestadoChange.bind(this);

    }

    onIdChange(event) {
        this.setState({ userId: event.target.value });
    }

    onNumDocumentoChange(event) {
        this.setState({ usernumDocumento: event.target.value });
    }

    onRolChange(event) {
        this.setState({ userrol: event.target.value });
    }

    onEstadoChange(event) {
        this.setState({ userestado: event.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    <fieldset>
                        <legend>
                            <u>Consulta de Usuarios</u>
                        </legend>
                        <div>
                            <label>ID Usuario</label>
                            <input className="small-input-text" type="text" id="userId" value={this.state.userID} onChange={this.onIdChange} />

                            <label>Numero Identidad</label>
                            <input className="small-input-text" type="text" id="usernumDocumento" value={this.state.userDoc} onChange={this.onnumDocumentoChange} />
                            
                        <div><br/><br/>

                            <label>Rol Usuario:</label>

                            <p><select value={this.state.Rol} onChange={this.cambioRol}>
                               <option>--seleccion--</option>
                               <option>Todos</option>
                               <option>Administrador</option>
                               <option>Vendedor</option>
                               </select></p>

                        </div>
                        <div><br/><br/>

                            <label>Estado Usuario:</label>

                            <p><select value={this.state.Estado} onChange={this.cambioEstado}>
                               <option>--seleccion--</option>
                               <option>Todos</option>
                               <option>Autorizado</option>
                               <option>No Autorizado</option>
                               <option>Pendiente</option>
                               </select></p>

                        </div>

                             <button type="button" className="small-button-submit" title="Filtrar"
                                  onClick={() => this.props.filterusers(this.state.userId, this.state.usernumDocumento, this.state.userRol, this.state.userEstado)}>
                                  <i className="fa fa-pencil-square-o"></i>
                                  Filtrar
                             </button>
                        </div>
                    </fieldset>
                </div>

            </div>
        );
    }
}

export default FiltroUsuarios;
