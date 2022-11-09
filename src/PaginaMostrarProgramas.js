import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Programas from "./Programas";
import ChatBot from "./Chatbot";
import './Home.css';

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
      <div className="App-Fondo-Otros">
        <NavBar alumno={alumno}></NavBar>

        <main className="containerProgramas">
          <Programas></Programas>
        </main>

        <Footer></Footer>
        <ChatBot></ChatBot>
      </div>
    </>
  );
}

export default PaginaMostrarProgramas; 
