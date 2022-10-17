import { useEffect, useState } from "react";
import ChatBot from "./Chatbot";
import AdminProgramas from "./AdminProgramas";
import NavBarAdmin from "./NavBarAdmin";
import FooterAdmin from "./FooterAdmin";

const PaginaAdminProgramas = () => {
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
        <NavBarAdmin alumno={alumno}></NavBarAdmin>
      </header>

      <main className="container">
        <AdminProgramas></AdminProgramas>
      </main>

      <FooterAdmin></FooterAdmin>
      <ChatBot></ChatBot>
    </>
  );
}

export default PaginaAdminProgramas; 
