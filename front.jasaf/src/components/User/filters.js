import React from "react"
class Filters extends React.Component{


    render (){
        return(

         <div id="campos">
            <fieldset>
              <legend><u>Consulta de Usuario</u></legend>
              
              <label for="IDusuario">ID Usuario</label>
              <input type="text" id="IDUsuario" value="ID_Usuario"/>
              <label for="numeroDocumento">Numero Identidad</label>
              <input type="text" required id="numeroDocumento" value="numeroDocumento"placeholder="Numero de Documento"/><br/>
              <div id="div-rolusuario"><br/><br/>
    
                <label for="rolUsuario">Tipo Usuario:</label>
    
                <select name="rol" id="rolUsuario" required>
                    <option value="">--seleccion--</option>
                    <option value="todos">Todos</option>
                    <option value="administrador">Administrador</option>
                    <option value="vendedor">Vendedor</option>
                </select>
    
               </div>
               <div id="div-rolusuario"><br/><br/>
    
                <label for="estado">Estado Usuario:</label>
    
                <select name="Estado" id="estado" required>
                    <option value="">--seleccion--</option>
                    <option value="todos">Todos</option>
                    <option value="autorizado">Autorizado</option>
                    <option value="noAutorizado">No Autorizado</option>
                    <option value="pendiente">Pendiente</option>
                </select>
    
                </div>
            
            </fieldset>

          </div>



            )
    };
}
export default Filters;