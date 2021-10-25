import { BrowserRouter, Route } from "react-router-dom";
import Login from "./pages/authentication";
import Administrador from "./pages/adminitrador";
import Vendedor from "./pages/vendedor";
import ListadoProductos from "./components/product/listadoProductos";
import FiltroProductos from "./components/product/filtroProductos";
import CrearUsuario from "./components/User/crearUsuario";
import ListadoUsuarios from "./components/User/listadoUsuarios";
import CrearProducto from "./components/product/crearProducto";

function App() {
  return (
    <BrowserRouter>
      <Route exact path="/" component={Login}></Route>
      <Route path="/administrador" component={Administrador}></Route>
      <Route path="/vendedor" component={Vendedor}></Route>

      <Route path="/crearuser" component={CrearUsuario}></Route>
      <Route path="/listadouser" component={ListadoUsuarios}></Route>

      <Route path="/crearproducto" component={CrearProducto}></Route>
      <Route path="/listadoproductos" component={ListadoProductos}></Route>
    </BrowserRouter>
  );
}

export default App;
