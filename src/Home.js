import './Home.css';

function Home() {
  return (
    <div className="App">
      <div id="barra">
        <ul>
            <li><a id="img" href="Home.php"><img src="https://images.vexels.com/media/users/3/224233/isolated/preview/d5ee0e9c87bb54cf867d7fb89c4570b8-logotipo-de-educacion-en-linea.png" width="30px" height="15px"/></a></li>
            <li><a href="Home.php">Home</a></li>
            <li><a href="Soporte.php">Soporte</a></li>
            <li><a href="Ayuda.php">Ayuda</a></li>
            <li><a href="cerrar_sesion.php">Cerrar sesion</a></li>
            <li id="img2"><a id="img" href="Home.php"><img src="https://w7.pngwing.com/pngs/831/88/png-transparent-user-profile-computer-icons-user-interface-mystique-miscellaneous-user-interface-design-smile.png" width="30px" height="15px"/></a></li>
        </ul>
      </div>

      <header className="App-header">
        <div className="App-img"></div>
      </header>

      <div>
         
      </div>

      <body className="App-footer">
        <div>Derechos reservados &copy; Programas CUCEI | Terminos y condiciones | Facebook & Instagram @ProgramasCUCEI | 2022</div>
      </body>
    </div>
  );
}

export default Home;
