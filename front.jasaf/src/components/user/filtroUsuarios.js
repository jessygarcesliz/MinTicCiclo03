import React, { Component } from "react";
import "../../assets/css/base.scss";



class FiltroUsuarios extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            Id: "",
            numDocumento: "",
            rol: "",
            estado: ""
        };

        this.onIdChange = this.onIdChange.bind(this);
        this.onNumDocumentoChange = this.onNumDocumentoChange.bind(this);
        this.onRolChange = this.onRolChange.bind(this);
        this.onEstadoChange = this.onEstadoChange.bind(this);

    }

    onIdChange(event) {
        this.setState({ Id: event.target.value });
    }

    onNumDocumentoChange(event) {
        this.setState({ numDocumento: event.target.value });
    }

    onRolChange(event) {
        this.setState({ rol: event.target.value });
    }

    onEstadoChange(event) {
        this.setState({ estado: event.target.value });
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
                            <input className="small-input-text" type="text" id="userId" value={this.state.Id} onChange={this.onIdChange} />

                            <label>Numero Identidad</label>
                            <input className="small-input-text" type="text" id="usernumDocumento" value={this.state.numDocumento} onChange={this.onNumDocumentoChange} />
                            
                        <div><br/><br/>

                            <label>Rol Usuario:</label>

                            <p><select value={this.state.rol} onChange={this.onRolChange}>
                               <option>--seleccion--</option>
                               <option>Todos</option>
                               <option>Administrador</option>
                               <option>Vendedor</option>
                               </select></p>

                        </div>
                        <div><br/><br/>

                            <label>Estado Usuario:</label>

                            <p><select value={this.state.estado} onChange={this.onEstadoChange}>
                               <option>--seleccion--</option>
                               <option>Todos</option>
                               <option>Autorizado</option>
                               <option>No Autorizado</option>
                               <option>Pendiente</option>
                               </select></p>

                        </div>

                             <button type="button" className="small-button-submit" title="Filtrar"
                                  onClick={() => this.props.filterUsers(this.state.Id, this.state.numDocumento, this.state.rol, this.state.estado)}>
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
