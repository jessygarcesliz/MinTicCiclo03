import React, { Component } from "react";
import axios from "axios";
import TablaUsuarios from "./tablaUsuarios";
import FiltroUsuarios from "./filtroUsuarios";
import configuration from "../../config/config";
import ActualizarUsuario from "./actualizarUsuario";

class ListadoUsuarios extends React.Component {

    
    constructor(props) {
        super(props);
        this.BASE_URL = configuration.backendServer.url +":"+
                    configuration.backendServer.port + "/users"
        this.state = {
            usersList: [],
            showModalUpdateUser: false,
            userToBeUpdated: null
        };

        this.filterUsers = this.filterUsers.bind(this);
        this.showSelectedUser = this.showSelectedUser.bind(this);
        this.handleUpdateUser = this.handleUpdateUser.bind(this);

    }

    componentDidMount() {
        this.setState({showModalUpdateUser : false});
        this.getAlluser();
    }

    handleUpdateUser(showMessage){
        this.setState({showModalUpdateUser : false});
        if(showMessage){
            alert("Usuario Actualizado Correctamente")
            this.getAlluser();
        }
    }

    filterUsers(Id, numDocumento, rol, estado) {
        if(Id){
            this.filterById(Id);
        }else if(numDocumento){
            this.filterByNumDocumento(numDocumento);
        }else if(rol){
                this.filterByRol(rol);
        }else if(estado){
                this.filterByEstado(estado);
        }else{
            this.getAlluser();
        }
    }

getAlluser() {
        axios.get(this.BASE_URL)
            .then((resp) => {
                this.setState({ usersList: resp.data });
                
            }).catch(err => {
                alert('Error listando usuarios');
            });
    }

    filterById(Id){
        axios.get(this.BASE_URL+'/ids/'+ Id)
            .then((resp) => {
                if(resp.data.length > 0){
                    this.setState({ usersList: resp.data });
                }
            }).catch(err => {
                alert('Error listando usuarios');
            });
    }

    filterByNumDocumento(numDocumento){
        axios.get(this.BASE_URL+'/numDocumentos/' + numDocumento)
            .then((resp) => {
                if(resp.data.length > 0){
                    this.setState({ usersList: resp.data });
                }
            }).catch(err => {
                alert('Error listando usuarios');
            });
    }

    filterByRol(rol){
         axios.get(this.BASE_URL+'/rols/' + rol)
             .then((resp) => {
                 if(resp.data.length > 0){
                     this.setState({ usersList: resp.data });
                 }
             }).catch(err => {
                 alert('Error listando usuarios');
             });
    }

    filterByEstado(estado){
             axios.get(this.BASE_URL+'/estados/' + estado)
                 .then((resp) => {
                     if(resp.data.length > 0){
                         this.setState({ usersList: resp.data });
                     }
                 }).catch(err => {
                     alert('Error listando usuarios');
                 });
    }
    
    showSelectedUser(user){
        this.setState({showModalUpdateUser : true});
        this.setState({userToBeUpdated : user});
    }

    render() {
        return (
            <div>
                <div>
                    <FiltroUsuarios filterUsers={this.filterUsers}/>
                    <TablaUsuarios usersList={this.state.usersList} 
                                    showSelectedUser={this.showSelectedUser}/>
                </div>
                <div>
                    {this.state.showModalUpdateUser 
                        ? <ActualizarUsuario userToBeUpdated={this.state.userToBeUpdated} handleUpdateUser={this.handleUpdateUser}/>
                        : <div/>
                    }
                </div>
            </div>
        )
    }
}

export default ListadoUsuarios;
