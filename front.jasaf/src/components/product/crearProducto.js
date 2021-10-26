import React from "react";
//import React, { Component } from "react";
import axios from "axios";
import "../../assets/css/base.scss";
import configuration from "../../config/config";

class CrearProducto extends React.Component {
    constructor(props) {
        super(props);
        this.BASE_URL = configuration.backendServer.url +":"+
        configuration.backendServer.port + "/products/"
        this.state = {
            serial : "",
            name : "",
            brand : "",
            description : "",
            characteristics : "",
            price : "",
        }
        this.onSerialChange =this.onSerialChange.bind(this);
        this.onPriceChange = this.onPriceChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);
        this.onBrandChange = this.onBrandChange.bind(this);
        this.onDescriptionChange = this.onDescriptionChange.bind(this);
        this.onCharacteristicsChange = this.onCharacteristicsChange.bind(this);
        this.handleUpdate = this.handleUpdate.bind(this);
        this.handleCancel = this.handleCancel.bind(this);
    }
    onSerialChange(event){
      this.setState({ serial: event.target.value });
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
        let url = this.BASE_URL 
        let data = {
            "serial": this.state.serial ,
            "name": this.state.name ,
            "brand" : this.state.brand,
            "description": this.state.description,
            "characteristics": this.state.characteristics,
            "price" : this.state.price
        }
        axios.post(url, {...data,_id:null})
        .then((resp) => {
          alert("Producto Creado exitosamente")
            this.props.handleUpdateProduct(true);            
        }).catch(err => {
            alert('Hubo error al crear nuevo producto');
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
                        <h3 className="title-modal">Crear producto</h3>
                        <div>
                            <label>Serial o ID</label>
                            <input type="text" id="serial" className="modal-input-text" placeholder="Serial y/o ID"
                                value={this.state.serial} onChange={this.onSerialChange} />

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
                                Crear
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



export default CrearProducto;
