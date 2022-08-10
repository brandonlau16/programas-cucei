import React, { useState } from "react";
import Barra from "./Barra";
import Cards from './Cards';
import './Home.css';

function Home() {
  const [estadoBarra, cambiarEstadoBarra] = useState(false);

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
                  <img src="https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg" id="circulo" onClick={() => cambiarEstadoBarra(!estadoBarra)}/>
                </li>
              </ul>
            </div>
          </div>
        </nav>
        <Barra estado={estadoBarra} cambiarEstado={cambiarEstadoBarra}/>
        <div class="texto-encima"> 
          <h4 class="titulo-home">BIENVENIDO A PROGRAMAS CUCEI <br/><br/></h4>
          <p>Puedes acceder y registrarte a los programas<br/> que mas te gusten y sean accesibles para ti.</p>
        </div>
      </div>

      <div className="cards-header">
        <Cards/>
      </div>

      <body className="App-footer">
        <div>Derechos reservados &copy; Programas CUCEI | Terminos y condiciones | Facebook & Instagram @ProgramasCUCEI | 2022</div>
      </body>
    </div>
  );
}

export default Home;
