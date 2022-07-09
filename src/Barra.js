import React from "react";
import './Home.css';

function Barra ({estado, cambiarEstado}) {
  return (
    <>
    {estado &&
      <div class="overlay-barra" onClick={() => cambiarEstado(false)}>
        <div class="barra">
            <ul>
              <li><img src="https://www.caritas.org.mx/wp-content/uploads/2019/02/cualidades-persona-humanitaria.jpg" alt="" id="perfil"/></li><br/>
              <li><a href="#">Editar perfil</a></li>
              <li><a href="#">Mis favoritos</a></li>
              <li><a href="#">Ayuda</a></li>
              <li><a href="#">Cerrar sesion</a></li>
            </ul>
        </div>
      </div>
    }
    </>
  );
}

export default Barra;
