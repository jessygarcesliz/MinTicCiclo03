import React from "react";

const TableHeader =()=>{
    return(
    <thead>
    <tr>
    <th>ID</th>
    <th>Tipo Documento</th>
    <th>Num Documento</th>
    <th>Nombres</th>
    <th>Apellidos</th>
    <th>Correo</th>
    <th>Rol</th>
    <th>Permiso</th>
    <th>Editar</th>
    
    </tr>
    
    </thead>
    
    
    )
    
    }
const TableBody=(props)=>{
    let{userList}= this.props;
    let userRows=userList.map((user,index)=>{
    let {id,tipoDocumento,numDocumento,name,lastname,correo,rol,permiso}=user;
    return 
    <div>
        
        <tr key={index} >
        <td>{id}</td>
        <td>{tipoDocumento}</td>
        <td>{numDocumento}</td>
        <td>{name}</td>
        <td>{lastname}</td>
        <td>{correo}</td>
        <td>{rol}</td>
        <td>{permiso}</td>
        <td>
            <button className="table-button" title="Editar usuario" 
                                    onClick={() => this.props.showSelectedProduct(user)}>
                                <i className="fa fa-pencil-square-o"></i>
                            </button></td>
        
        </tr>
        
        </div>
     
});
}

    

class Table extends React.component {
    constructor(props) {
        super(props);
    }
render(){
return(
<table>
<TableHeader/>
<TableBody/>

</table>


)

}
}
export default Table;