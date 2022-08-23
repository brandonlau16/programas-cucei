import { Route, Routes } from "react-router-dom";
import Estudiante from "./Estudiante";
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
                <Route path="/Programas/:tipo" element={<PaginaMostrarProgramas/>}/>
                <Route path="/Programa/:tipo/:id" element={<ProgramaInformacion/>}/>
            </Routes>
        </div>
    );
}

export default App;