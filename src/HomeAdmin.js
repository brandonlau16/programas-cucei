import React, { useEffect, useState } from "react";
import Barra from "./Barra";
import './HomeAdmin.css';
import ChatBot from "./Chatbot";
import CardsAdmin from "./CardsAdmin";
import FooterAdmin from "./FooterAdmin";

function HomeAdmin() {
  const getData = () => {
    return JSON.parse(localStorage.getItem('Alumno'));
  }
  
  const [estadoBarra, cambiarEstadoBarra] = useState(false);
  const [alumno, setAlumno] = useState(getData);

  useEffect(() => {
    setAlumno(getData());
  }, []);

  return (
    <div className="App">
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

      <div className="App-header">
        <nav class="navbar navbar-expand-lg navbar-dark blue fixed" id="menu">
          <div class="container">
            <a class="navbar-brand">Programas CUCEI</a>
            <div class="icono">
              <ul class="navbar-nav">
                <li class="nav-item">
                  <img src={alumno[0].foto} id="circulo" onClick={() => cambiarEstadoBarra(!estadoBarra)}/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Barra alumno={alumno} estado={estadoBarra} cambiarEstado={cambiarEstadoBarra}/>
        <div class="texto-encima"> 
          <h4 class="titulo-home">BIENVENIDO A PROGRAMAS CUCEI <br/><br/></h4>
          <p>Puedes acceder y registrarte a los programas<br/> que mas te gusten y sean accesibles para ti.</p>
        </div>
      </div>

      <div className="cards-header">
        <CardsAdmin/>
      </div>

      <FooterAdmin></FooterAdmin>
      <ChatBot></ChatBot>
    </div>
  );
}

export default HomeAdmin;
