import React from "react";
import './Home.css';

function Barra ({alumno, estado, cambiarEstado}) {

  function handleClickHome (){
    localStorage.removeItem('Alumno');
  }

  return (
    <>
    {estado &&
      <div class="overlay-barra" onClick={() => cambiarEstado(false)}>
        <div class="barra">
            <ul>
              <li><img src={alumno[0].foto} alt="" id="perfil"/></li><br/>
              <li><a href="/Perfil">Editar perfil</a></li>
              <li><a href="/Favoritos">Mis favoritos</a></li>
              <li><a href="#">Ayuda</a></li>
              <li><a href="/" onClick={() => handleClickHome()}>Cerrar sesion</a></li>
            </ul>
        </div>
      </div>
    }
    </>
  );
}

export default Barra;
