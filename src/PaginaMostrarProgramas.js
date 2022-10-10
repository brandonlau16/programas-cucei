import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Programas from "./Programas";

const PaginaMostrarProgramas = () => {
  const getData = () => {
    return JSON.parse(localStorage.getItem('Alumno'));
  }

  const [alumno, setAlumno] = useState(getData);

  useEffect(() => {
    setAlumno(getData());
  }, []);

  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <NavBar alumno={alumno}></NavBar>
      </header>

      <main className="container">
        <Programas></Programas>
      </main>

      <Footer></Footer>
    </>
  );
}

export default PaginaMostrarProgramas; 
