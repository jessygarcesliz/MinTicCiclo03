import React, { Component } from "react";

class TablaProductos extends React.Component {
    
    constructor(props) {
        super(props);
    }

    render() {
        let {productsList} = this.props;
        let productRows = productsList.map((product, index) => {
            let {serial, brand, name, price, description, characteristics} = product;
            return <tr key={index} >
                        <td>{serial}</td>
                        <td>{brand}</td>
                        <td>{name}</td>
                        <td>{description}</td>
                        <td>{characteristics}</td>
                        <td>{price}</td>
                        <td>
                            <button className="table-button" title="Editar Producto" 
                                    onClick={() => this.props.showSelectedProduct(product)}>
                                <i className="fa fa-pencil-square-o"></i>
                            </button>
                        </td>
                    </tr>
        });
        
        return (
            <table>
                <thead>
                    <tr>
                        <th>Serial</th>
                        <th>Marca</th>
                        <th>Nombre</th>
                        <th>Descripcion</th>
                        <th>Caracteristicas</th>
                        <th>Precio</th>
                        <th>Acción</th>
                    </tr>
                </thead>
                <tbody id="tabla">
                    {productRows}
                </tbody>
            </table>
        )
    }
}

export default TablaProductos;