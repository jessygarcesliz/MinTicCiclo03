import React from "react";
import Header from "../../components/User/header";
import Tables from "../../components/User/Tables";
import Filters from "../../components/User/filters";


 class ListadoUsuario extends React.Component{

render(){
    return(

<div>
    <Header/>
    <Filters/>
    <Tables/>
</div>


    )

}


 }
 export default ListadoUsuario;