import Footer from "./Footer";
import NavBar from "./NavBar";
import ProgramasFav from "./ProgramasFav";

const Favoritos = () => {
  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <NavBar></NavBar>
      </header>

      <main className="container">
        <ProgramasFav></ProgramasFav>
      </main>

      <Footer></Footer>
    </>
  );
}

export default Favoritos; 
