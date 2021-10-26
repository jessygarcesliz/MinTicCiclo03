import React, { Component } from "react";

class TablaUsuarios extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let {usersList} = this.props;
        let userRows = usersList.map((user, index) => {
            let {Id, tipoUsuario, numDocumento,tipoDocumento, name, lastname, correo, rol, estado, Accion} = user;
            return <tr key={index} >
                        <td>{Id}</td>
                        <td>{tipoDocumento}</td>
                        <td>{numDocumento}</td>
                        <td>{name}</td>
                        <td>{lastname}</td>
                        <td>{correo}</td>
                        <td>{rol}</td>
                        <td>{estado}</td>
                        
                        <td>
                            <button className="table-button" title="Actualizar" 
                                    onClick={() => this.props.showSelectedUser(user)}>
                                <i className="fa fa-pencil-square-o"></i>
                            </button>
                        </td>
                    </tr>
        });
        
        return (
   
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tipo Documento</th>
                        <th>Num Documento</th>
                        <th>Nombre</th>
                        <th>Apellidos</th>
                        <th>Correo</th>
                        <th>Rol</th>
                        <th>Permiso</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody id="tabla">
                    {userRows}
                </tbody>
            </table>

        )
    }
}

export default TablaUsuarios;
