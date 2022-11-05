import { useEffect, useState } from "react";
import ChatBot from "./Chatbot";
import Footer from "./Footer";
import NavBar from "./NavBar";
import ProgramasFav from "./ProgramasFav";

const Favoritos = () => {

  const getData = () => {
    return JSON.parse(localStorage.getItem('Alumno'));
  }

  const [alumno, setAlumno] = useState(getData);
  const [estadoForm, cambiarEstadoForm] = useState(false);

  useEffect(() => {
      setAlumno(getData());
  }, []);

  return (
    <>
      <header className="mb-3 border-bottom">
        <NavBar alumno={alumno}></NavBar>
      </header>

      <main className="container">
        <ProgramasFav></ProgramasFav>
      </main>
      <ChatBot></ChatBot>
      <Footer></Footer>
    </>
  );
}

export default Favoritos; 
