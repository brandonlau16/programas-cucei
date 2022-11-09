import { useEffect, useState } from "react";
import AdminProgramas from "./AdminProgramas";
import NavBarAdmin from "./NavBarAdmin";
import FooterAdmin from "./FooterAdmin";
import './HomeAdmin.css';

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
      <div className="App-Fondo-Admin-Otros">
        <header className="mb-3 border-bottom">
          <NavBarAdmin alumno={alumno}></NavBarAdmin>
        </header>

        <main className="container">
          <AdminProgramas></AdminProgramas>
        </main>

        <FooterAdmin></FooterAdmin>
      </div>
    </>
  );
}

export default PaginaAdminProgramas; 
