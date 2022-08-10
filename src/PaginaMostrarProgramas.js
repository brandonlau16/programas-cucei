import Footer from "./Footer";
import NavBar from "./NavBar";
import Programas from "./Programas";

const PaginaMostrarProgramas = () => {
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <NavBar></NavBar>
      </header>

      <main className="container">
        <Programas></Programas>
      </main>

      <Footer></Footer>
    </>
  );
}

export default PaginaMostrarProgramas; 
