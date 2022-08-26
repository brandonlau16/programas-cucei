import { Route, Routes } from "react-router-dom";
import EditarPerfil from "./EditarPerfil";
import Estudiante from "./Estudiante";
import Favoritos from "./Favoritos";
import Home from "./Home";
import Login from "./Login";
import PaginaMostrarProgramas from "./PaginaMostrarProgramas";
import ProgramaInformacion from "./ProgramaInformacion";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Registro" element={<Estudiante/>}/>
                <Route path="/Perfil" element={<EditarPerfil/>}/>
                <Route path="/Favoritos" element={<Favoritos/>}/>
                <Route path="/Programas/:tipo/:num" element={<PaginaMostrarProgramas/>}/>
                <Route path="/Programa/:tipo/:id" element={<ProgramaInformacion/>}/>
            </Routes>
        </div>
    );
}

export default App;