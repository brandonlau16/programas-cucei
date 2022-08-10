import { Route, Routes } from "react-router-dom";
import Estudiante from "./Estudiante";
import Home from "./Home";
import Login from "./Login";
import PaginaMostrarProgramas from "./PaginaMostrarProgramas";

function App() {
    return(
        <div>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/Home" element={<Home/>}/>
                <Route path="/Registro" element={<Estudiante/>}/>
                <Route path="/Programas/:tipo" element={<PaginaMostrarProgramas/>}/>
            </Routes>
        </div>
    );
}

export default App;