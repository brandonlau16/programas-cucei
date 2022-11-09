import { Route, Routes } from "react-router-dom";
import Admin from "./Admin";
import Ayuda from "./Ayuda";
import AyudaAdmin from "./AyudaAdmin";
import EditarPerfil from "./EditarPerfil";
import EditarPerfilAdmin from "./EditarPerfilAdmin";
import Estudiante from "./Estudiante";
import Favoritos from "./Favoritos";
import Home from "./Home";
import HomeAdmin from "./HomeAdmin";
import Login from "./Login";
import LoginAdmin from "./LoginAdmin";
import PaginaAdminProgramas from "./PaginaAdminProgramas";
import PaginaEditarProgramaAdmin from "./PaginaEditarProgramaAdmin";
import PaginaMostrarProgramas from "./PaginaMostrarProgramas";
import Programa from "./Programa";
import ProgramaInformacion from "./ProgramaInformacion";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/LoginAdmin" element={<LoginAdmin/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Ayuda" element={<Ayuda/>}/>
                <Route path="/HomeAdmin" element={<HomeAdmin/>}/>
                <Route path="/AyudaAdmin" element={<AyudaAdmin/>}/>
                <Route path="/Registro" element={<Estudiante/>}/>
                <Route path="/Administrador" element={<Admin/>}/>
                <Route path="/Perfil" element={<EditarPerfil/>}/>
                <Route path="/PerfilAdmin" element={<EditarPerfilAdmin/>}/>
                <Route path="/Favoritos/:num" element={<Favoritos/>}/>
                <Route path="/CrearPrograma" element={<Programa/>}/>
                <Route path="/AdministrarProgramas/:num" element={<PaginaAdminProgramas/>}/>
                <Route path="/Programas/:tipo/:num" element={<PaginaMostrarProgramas/>}/>
                <Route path="/Programa/:tipo/:id" element={<ProgramaInformacion/>}/>
                <Route path="/ProgramaAdmin/:tipo/:id" element={<PaginaEditarProgramaAdmin/>}/>
            </Routes>
        </div>
    );
}

export default App;