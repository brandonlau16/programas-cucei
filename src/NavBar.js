import Dropdown from 'react-bootstrap/Dropdown';
import "./NavBar.css";
const NavBar = ({alumno}) => {

  function handleClickHome (){
    localStorage.removeItem('Alumno');
  }

  return (
    <div className="containerN">
      <div className="d-flex flex-wrap align-items-center gap-3 justify-content-center navTexts">
        <a href="/Home" className="d-flex align-items-center mb-2 mb-lg-0 text-dark text-decoration-none">
          Programas CUCEI
        </a>

        <ul className="nav col-12 col-lg-auto me-lg-3 mb-2 justify-content-center mb-md-0">
          <li><a href="/Programas/Beca/1" className="nav-link px-2 link-dark m-3">Becas</a></li>
          <li><a href="/Programas/Internship/1" className="nav-link px-2 link-dark m-3">Internships</a></li>
          <li><a href="/Programas/Trabajo/1" className="nav-link px-2 link-dark m-3">Trabajos</a></li>
        </ul>

        <Dropdown className="text-end">
          <Dropdown.Toggle variant="link" className="text-dark" id="dropdownUser1">
            <img src={alumno[0].foto} alt="mdo" width="32" height="32" className="rounded-circle" />
          </Dropdown.Toggle>

          <Dropdown.Menu className="text-small">
            <Dropdown.Item href="/Perfil">Mi perfil</Dropdown.Item>
            <Dropdown.Item href="/Favoritos">Mis programas</Dropdown.Item>
            <Dropdown.Item href="/">Ayuda</Dropdown.Item>
            <Dropdown.Item href="/" onClick={() => handleClickHome()}>Cerrar sesión</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
      </div>
    </div>
  );
}

export default NavBar;
