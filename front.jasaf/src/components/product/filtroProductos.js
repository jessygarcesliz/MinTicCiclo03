import React, { Component } from "react";
import "../../assets/css/base.scss";

class FiltroProductos extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            productSerial: "",
            productName: ""
        };

        this.onSerialChange = this.onSerialChange.bind(this);
        this.onNameChange = this.onNameChange.bind(this);

    }

    onSerialChange(event) {
        this.setState({ productSerial: event.target.value });
    }

    onNameChange(event) {
        this.setState({ productName: event.target.value });
    }

    render() {
        return (
            <div>
                <div>
                    <fieldset>
                        <legend>
                            <u>Consulta de Productos</u>
                        </legend>
                        <div>
                            <label>Serial del producto</label>
                            <input className="small-input-text" type="text" id="idProducto" value={this.state.productSerial} onChange={this.onSerialChange} />

                            <label>Nombre del producto</label>
                            <input className="small-input-text" type="text" id="nombreProducto" value={this.state.productName} onChange={this.onNameChange} />
                            
                            <button type="button" className="small-button-submit" title="Filtrar"
                                onClick={() => this.props.filterProducts(this.state.productSerial, this.state.productName)}>
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

export default FiltroProductos;
