import React, { useEffect, useState } from "react";
import './HomeAdmin.css';
import CardsAdmin from "./CardsAdmin";
import FooterAdmin from "./FooterAdmin";
import NavBarAdmin from "./NavBarAdmin";

function HomeAdmin() {
  const getData = () => {
    return JSON.parse(localStorage.getItem('Alumno'));
  }
  
  const [alumno, setAlumno] = useState(getData);

  useEffect(() => {
    setAlumno(getData());
  }, []);

  return (
    <div className="App-admin">
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css"
        rel="stylesheet"
      />
      <link
        href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
        rel="stylesheet"
      />
      <link
        href="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.2.0/mdb.min.css"
        rel="stylesheet"
      />
      <script
        type="text/javascript"
        src="https://cdnjs.cloudflare.com/ajax/libs/mdb-ui-kit/4.2.0/mdb.min.js"
      ></script>

      <div className="App-header-admin">
        <NavBarAdmin alumno={alumno}></NavBarAdmin>
        <div class="texto-encima-admin"> 
          <h4 class="titulo-home-admin">BIENVENIDO A PROGRAMAS CUCEI <br/><br/></h4>
          <p>Puedes acceder y registrarte a los programas<br/> que mas te gusten y sean accesibles para ti.</p>
        </div>
      </div>

      <div className="cards-header-admin">
        <CardsAdmin/>
      </div>

      <FooterAdmin></FooterAdmin>
    </div>
  );
}

export default HomeAdmin;
