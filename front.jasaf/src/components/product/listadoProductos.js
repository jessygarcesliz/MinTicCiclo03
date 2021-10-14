import React, { Component } from "react";
import axios from "axios";
import TablaProductos from "./tablaProductos";
import FiltroProductos from "./filtroProductos";
import ActualizarProducto from "./actualizarProducto";
import configuration from "../../config/config";

class ListadoProductos extends React.Component {

    
    constructor(props) {
        super(props);
        this.BASE_URL = configuration.backendServer.url +":"+
                    configuration.backendServer.port + "/products"
        this.state = {
            productsList: [],
            showModalUpdateProduct: false,
            productToBeUpdated: null
        };

        this.filterProducts = this.filterProducts.bind(this);
        this.showSelectedProduct = this.showSelectedProduct.bind(this);
        this.handleUpdateProduct = this.handleUpdateProduct.bind(this);

    }

    componentDidMount() {
        this.setState({showModalUpdateProduct : false});
        this.getAllProducts();
    }

    handleUpdateProduct(showMessage){
        this.setState({showModalUpdateProduct : false});
        if(showMessage){
            alert("Producto Actualizado Correctamente")
            this.getAllProducts();
        }
    }

    filterProducts(productSerial, productName) {
        if(productSerial){
            this.filterBySerial(productSerial);
        }else if(productName){
            this.filterByName(productName);
        }else{
            this.getAllProducts();
        }
    }

    getAllProducts() {
        axios.get(this.BASE_URL)
            .then((resp) => {
                this.setState({ productsList: resp.data });
                
            }).catch(err => {
                alert('Hubo error listando los productos');
            });
    }

    filterBySerial(serial){
        axios.get(this.BASE_URL+'/serials/'+ serial)
            .then((resp) => {
                if(resp.data.length > 0){
                    this.setState({ productsList: resp.data });
                }
            }).catch(err => {
                alert('Hubo error listando los productos');
            });
    }

    filterByName(name){
        axios.get(this.BASE_URL+'/names/' + name)
            .then((resp) => {
                if(resp.data.length > 0){
                    this.setState({ productsList: resp.data });
                }
            }).catch(err => {
                alert('Hubo error listando los productos');
            });
    }

    showSelectedProduct(product){
        this.setState({showModalUpdateProduct : true});
        this.setState({productToBeUpdated : product});
    }

    render() {
        return (
            <div>
                <div>
                    <FiltroProductos filterProducts={this.filterProducts}/>
                    <TablaProductos productsList={this.state.productsList} 
                                    showSelectedProduct={this.showSelectedProduct}/>
                </div>
                <div>
                    {this.state.showModalUpdateProduct 
                        ? <ActualizarProducto productToBeUpdated={this.state.productToBeUpdated} handleUpdateProduct={this.handleUpdateProduct}/>
                        : <div/>
                    }
                </div>
            </div>
        )
    }
}

export default ListadoProductos;