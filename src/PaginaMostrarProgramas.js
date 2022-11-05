import { useEffect, useState } from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Programas from "./Programas";
import ChatBot from "./Chatbot";

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
        <NavBar alumno={alumno}></NavBar>

      <main className="containerProgramas">
        <Programas></Programas>
      </main>

      <Footer></Footer>
      <ChatBot></ChatBot>
    </>
  );
}

export default PaginaMostrarProgramas; 
