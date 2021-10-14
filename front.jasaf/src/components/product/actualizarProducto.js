import React, { Component } from "react";
import axios from "axios";
import "../../assets/css/base.scss";
import configuration from "../../config/config";

class ActualizarProducto extends React.Component {

    constructor(props) {
        super(props);
        this.BASE_URL = configuration.backendServer.url +":"+
        configuration.backendServer.port + "/products/"
        this.state = {
            serial : this.props.productToBeUpdated.serial,
            name : this.props.productToBeUpdated.name,
            brand : this.props.productToBeUpdated.brand,
            description : this.props.productToBeUpdated.description,
            characteristics : this.props.productToBeUpdated.characteristics,
            price : this.props.productToBeUpdated.price,
        }

        this.onPriceChange = this.onPriceChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCharacteristicsChange = this.onCharacteristicsChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }

    onNameChange(event) {
        this.setState({ name: event.target.value });
    }

    onBrandChange(event) {
        this.setState({ brand: event.target.value });

    }

    onDescriptionChange(event) {
        this.setState({ description: event.target.value });
    }

    onCharacteristicsChange(event) {
        this.setState({ characteristics: event.target.value });
    }

    onPriceChange(event) {
        this.setState({ price: event.target.value });
    }

    handleUpdate(){
        let url = this.BASE_URL + this.props.productToBeUpdated._id
        let data = {
            "serial": this.state.serial ,
            "name": this.state.name ,
            "brand" : this.state.brand,
            "description": this.state.description,
            "characteristics": this.state.characteristics,
            "price" : this.state.price
        }
        axios.put(url, data)
        .then((resp) => {
            this.props.handleUpdateProduct(true);            
        }).catch(err => {
            alert('Hubo error listando los productos');
        });
    }

    handleCancel(){
        this.props.handleUpdateProduct(false);
    }

    render() {        
        return (
            <div className="modal">
                <div className="container">
                    <div className="modal-content">
                        <h3 className="title-modal">Actualizar producto</h3>
                        <div>
                            <label>Serial o ID</label>
                            <input type="text" id="serial" className="modal-input-text" placeholder="Serial y/o ID"
                                value={this.state.serial} onChange={this.onSerialChange} disabled />

                            <label>Nombre</label>
                            <input type="text" id="nombre" className="modal-input-text" placeholder="Nombre del Producto"
                                value={this.state.name} onChange={this.onNameChange} />

                            <label>Marca</label>
                            <input type="text" id="marca" className="modal-input-text" placeholder="Marca" 
                                value={this.state.brand} onChange={this.onBrandChange}/>
                            
                            <label>Descripcion</label>
                            <input type="text" id="description" className="modal-input-text" placeholder="Descripcion"
                                value={this.state.description} onChange={this.onDescriptionChange} />

                            <label>Caracteristicas</label>
                            <input type="text" id="characteristics" className="modal-input-text" placeholder="Caracteristicas"
                                value={this.state.characteristics} onChange={this.onCharacteristicsChange} />
                            
                            <label>Precio</label>
                            <input type="numeric" id="valor" className="modal-input-text" required placeholder="Precio"
                                value={this.state.price} onChange={this.onPriceChange} />
                        </div>
                        <div className="center">
                            <button type="button" className="small-button-submit"  onClick={() => this.handleUpdate()}>
                                Actualizar
                            </button>
                            <button type="button" className="small-button-submit"  onClick={() => this.handleCancel()}>
                                Cancelar
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

export default ActualizarProducto;
