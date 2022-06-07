import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div id="barra">
        <ul>
          <li><a href="Home.php">Home</a></li>
          <li><a href="Soporte.php">Soporte</a></li>
          <li><a href="Ayuda.php">Ayuda</a></li>
          <li><a href="cerrar_sesion.php">Cerrar sesion</a></li>
          
        </ul>
      </div>
      <header className="App-header">
        <div className="App-img"></div>
      </header>
      <body className="App-footer">
        <div>Derechos reservados &copy; Programas CUCEI | Terminos y condiciones | Facebook & Instagram @ProgramasCUCEI | 2022</div>
      </body>
    </div>
  );
}

export default App;
