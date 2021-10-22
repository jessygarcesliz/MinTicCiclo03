// import React  from "react";



// class Form extends React.Component{
//     constructor(props){
//         super(props);
//         this.state={
//             Id:'',
//             tipoUsuario:'',
//             tipoDocumento:'',
//             numDocumento:'',
//             name:'',
//             lastname:'',
//             razon:'',
//             sexo:'',
//             fechaNacimineto:'',
//             ciudad:'',
//             direccion:'',
//             barrio:'',
//             correo:'',
//             telefono:'',
//             movil:'',
//             estado:'',
//             rol:'',
//             searchQuery: ""



//         }
        
//     }
//     handleButtonClicked() {

//         var searchQuery = this.state.searchQuery;
    
    
//        console.log("se actualizo correctamente")
    
//       }
    
//     handleChangeid (Id){
//         this.setState({
//         Id:Id
//     }) 
// } 
//     handleChangeTipoUsuario (tipoUsuario) {

//         this.setState({
//             tipoUsuario:tipoUsuario
//         })
//     }   
//     handleChangetipoDocumento(tipoDocumento){
//         this.setState({
//             tipoDocumento:tipoDocumento
//         })
       
//     }   
//     handleChangenumDocumento(numDocumento){
//         this.setState({
//              numDocumento:numDocumento
//         })
       
//     }   
//     handleChangename(name){
//         this.setState({
//              name:name
//         })
       
//     }   
//     handleChangelastname(lastname){
//         this.setState({
//              lastname:lastname
//         })
       
//     } 
//     handleChangerazon(razon){
//         this.setState({
//              razon:razon
//         })
       
//     } 
//     handleChangesexo(sexo){
//         this.setState({
//              sexo:sexo
//         })
       
//     } 
//     handleChangefechaNacimineto(fechaNacimineto){
//         this.setState({
//             fechaNacimineto:fechaNacimineto
//         })
       
//     }    
//     handleChangeciudad(ciudad){
//         this.setState({
//             ciudad:ciudad
//         })
       
//     }  
//     handleChangedireccion(direccion){
//         this.setState({
//             direccion:direccion
//         })
       
//     }  
//     handleChangebarrio(barrio){
//         this.setState({
//             barrio:barrio
//         })
       
//     }  
//     handleChangecorreo(correo){
//         this.setState({
//             correo:correo
//         })
       
//     }  
//     handleChangetelefono(telefono){
//         this.setState({
//             telefono:telefono
//         })
       
//     }  
//     handleChangemovil(movil){
//         this.setState({
//             movil:movil
//         })
       
//     }  
//     handleChangerol(rol){
//         this.setState({
//             rol:rol
//         })
//     }
//     handleChangeestado(estado){
//         this.setState({
//             estado:estado
//         })
       
//     }  
//     selectypeuser(event){
//         this.setState({value: event.target.value});
//     }
    
// render(){
//     return(
// <div id="campos" className="container-filters">
// <form  onSubmit= {this.state.searchQuery}>
//     <legend> <u>Información Usuario</u> </legend>
//     <hr/> <br/>
//     <div className="">

//         <label htmlfor="IDusuario">ID Usuario</label>
//         <input 
//         type="text"
//          id="IDUsuario"
//          name= "Id"
//          value= {this.state.Id}
//          onChange={(ev)=>{this.handleChangeid(ev.target.value)}}
//          />
//         <label for="tipo">Tipo Persona</label>

//         <select
//          value={this.state.tipoUsuario} 
//          onChange={(ev)=>{this.handleChangeTipoUsuario(ev.target.value)}}
//          name="tipoUsuario"
//          id="tipo"
//                  >
//             <option value="">--selecion--</option>
//             <option value="persona" name="persona">Persona</option>
//             <option value="Empresa" name="Empresa">Empresa</option>
//         </select><br/><br/>


//         <div>
//             <label for="tipoDocumento">Tipo Documento</label>
//             <select 
//             name="tipoDocumento" 
//             id="tipoDocumento"
//             value={this.state.tipoDocumento} 
//          onChange={(ev)=>{this.handleChangetipoDocumento(ev.target.value)}}
//             >
//                 <option value="cedulaCiudadania">Cedula de Ciudadania</option>
//                 <option value="nit">Nit</option>
//                 <option value="tarjetaIdentida">Tarjeta de Identidad </option>
//                 <option value="RegistroCivil">Registro Civil </option>
//                 <option value="cedulaExtranjeria">Cedula de Extranjeria</option>
//             </select>
//             <label for="numeroDocumento">Numero Identidad</label>
//             <input 
//             type="number" 
//             name= "numDocumento"
//             required 
//             id="numeroDocumento"
//             value={this.state.numDocumento} 
//             onChange={(ev)=>{this.handleChangenumDocumento(ev.target.value)}}
//             /><br/>
//         </div><br/><br/>

//     </div>

//     <div id="datospersonal">
//         <legend><u>Datos Personales</u></legend>
//         <hr/> <br/>

//         <label for="nombre">Nombres</label> 
//         <input 
//         type="text" 
//         required 
//         name="name"
//         id="nombre"
//         value={this.state.name} 
//         onChange={(ev)=>{this.handleChangename(ev.target.value)}}
//         />
//         <label for="apellidos">Apellidos</label>

//         <input 
//         type="text" 
//         name="lastname"
//         required 
//         id="apellidos"
//         value={this.state.lastname} 
//         onChange={(ev)=>{this.handleChangelastname(ev.target.value)}}
//         />
//         <label for="razon" name="razon">Razon Social</label>
//         <input 
//         type="text"
//         name="empresa"
//          id="razon"
//          value={this.state.razon} 
//         onChange={(ev)=>{this.handleChangerazon(ev.target.value)}}
//          /><br/><br/>
//         <div id="div-rolusuario">
//             <label for="sexo">Sexo:</label>
//             <select
//              name="sexo" 
//              id="sexo" 
//              required
//              value={this.state.sexo} 
//              onChange={(ev)=>{this.handleChangesexo(ev.target.value)}}
//              >
//                 <option value="">--seleccion--</option>
//                 <option value="femenino">Femenino</option>
//                 <option value="masculino">Masculino</option>
//                 <option value="otro">Otro</option>
//             </select>
//             <label class="label">Fecha de Nacimiento</label>
//             {/* <input 
//             type="date" max="2010-12-31" 
//             value="aaaa-mm-dd" 
//             value={this.state.fechaNacimineto} 
//              onChange={(ev)=>{this.handleChangefechaNacimiento(ev.target.value)}}            
            
//             /> <br/><br/> <br/> */}

//         </div>







//     </div>





//     <div id="Contactos">
//         <legend><u>Datos De Contacto</u></legend>
//         <hr/><br/><br/>
//         <label for="ciudad">Ciudad</label>
//         <input         
//         type="text" 
//         id="ciudad"
//         value= {this.state.ciudad}
//         onChange={(ev)=>{this.handleChangeciudad(ev.target.value)}}
        
        
        
//         />
//         <label for="direccion">Direccion</label>
//         <input 
//         type="text" 
//         id="direccion"
//         value= {this.state.direccion}
//         onChange={(ev)=>{this.handleChangedireccion(ev.target.value)}}
//         />
//         <label for="barrio">Barrio</label>
//         <input 
//         onChange={this.handleChange}
//         type="text" 
//         id="direccion"
//         value= {this.state.barrio}
//         onChange={(ev)=>{this.handleChangebarrio(ev.target.value)}}
        
//         /><br/><br/>
//         <label for="correo">Correo</label>
//         <input      
//         type="email" 
//         id="correo"
//         value= {this.state.correo}
//         onChange={(ev)=>{this.handleChangecorreo(ev.target.value)}}
//         />
//         <label for="telefono">Telefono</label>
//         <input         
//         type="text" 
//         id="telefono"
//         value= {this.state.telefono}
//         onChange={(ev)=>{this.handleChangetelefono(ev.target.value)}}
//         />
//         <label for="movil">Movil</label>
//         <input 
//         type="text" 
//         id="movil"
//         value= {this.state.movil}
//         onChange={(ev)=>{this.handleChangemovil(ev.target.value)}}
//         />
//     </div> <br/>


//     <div id="estado" class="">
//         <legend><u>Estado Usuario</u></legend>
//         <hr/>

//         <ul>
//             <li>
//                 <div id="div-rolusuario">
//                     <label for="rolUsuario">Tipo Usuario:</label>

//                     <select                    
//                     name="rol" 
//                     id="rolUsuario" 
//                     required
//                     value= {this.state.rol}
//                     onChange={(ev)=>{this.handleChangerol(ev.target.value)}}
//                     >
//                         <option value="">--seleccion--</option>
//                         <option value="administrador">Administrador</option>
//                         <option value="vendedor">Vendedor</option>
//                     </select>

//                 </div>
//             </li>
//             <li>
//                 <input                
//                 type="radio" 
//                 id="actualizado" 
//                 name="estado" value="Actualizado" 
//                 checked
//                 value= {this.state.estado}
//                 onChange={(ev)=>{this.handleChangeestado(ev.target.value)}}
//                 />
//                 <label for="actualizado">Autorizado</label>
//             </li>
//             <li>

//                 <input 
//                 onChange={this.handleChange}
//                 type="radio" 
//                 id="noAutorizado" 
//                 name="estado" 
//                 value="noAutorizado"
//                 value= {this.state.estado}
//                 onClick={(ev)=>{this.handleChangeestado(ev.target.value)}}
//                 // onChange={(ev)=>{this.handleChangeestado(ev.target.value)}}
//                 />
//                 <label for="noAutorizado">No Autorizado</label>
//             </li>
//             <li>

//                 <input 
//                 onChange={this.handleChange}
//                 type="radio" 
//                 id="pendiente" 
//                 name="estado" 
//                 value="pendiente"
//                 value= {this.state.estado}
//                 onChange={(ev)=>{this.handleChangeestado(ev.target.value)}}/>
//                 <label for="pendiente">Pendiente</label>
//             </li>

//         </ul>

//     </div>


//     <div class="botones">
//         <button form="formulario" type="reset" class="small-button-submit">Cancelar</button>
//         {/* <button onClick={this.handleButtonClicked.bind(this)} form="formulario" type="submit" class="small-button-submit">Guardar</button> */}
//         <button onClick={this.handleButtonClicked.bind(this)} class="small-button-submit">

// Actualizar

// </button>
//     </div>



// </form>

// </div>

//     )
// }

// }

// export default Form;