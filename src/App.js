import { Route, Routes } from "react-router-dom";
import Estudiante from "./Estudiante";
import Home from "./Home";
import Login from "./Login";

function App() {
    return (
        <div>
            <Routes>
                <Route path="/" element={<Login />} />
                <Route path="/Home" element={<Home />} />
                <Route path="/Registro" element={<Estudiante />} />
            </Routes>
        </div>
    );
}

export default App;