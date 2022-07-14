import CardPrograma from "./CardPrograma";
import ProgramaPrincipal from "./ProgramaPrincipal";

// const PROGRAMAS = [1, 2, 3, 4, 5, 6];

const Programas = () => {
  return (
    <>
      <ProgramaPrincipal></ProgramaPrincipal>

      <div class="row mb-3">
        <form class="container">
          <div class="row gx-2">
            <div class="col-11">
              <input class="form-control" type="text" placeholder="Buscar..." aria-label="default input example" />
            </div>
            <div class="col">
              <div class="d-grid gap-2">
                <button type="submit" class="btn btn-primary">Buscar</button>
              </div>
            </div>
          </div>
        </form>
      </div>

      <div class="row mb-2">
        <div class="col-md-6">
          <CardPrograma></CardPrograma>
        </div>
        <div class="col-md-6">
          <CardPrograma></CardPrograma>
        </div>
        <div class="col-md-6">
          <CardPrograma></CardPrograma>
        </div>
        <div class="col-md-6">
          <CardPrograma></CardPrograma>
        </div>
        <div class="col-md-6">
          <CardPrograma></CardPrograma>
        </div>
        <div class="col-md-6">
          <CardPrograma></CardPrograma>
        </div>
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item disabled">
            <a href="/" class="page-link">Anterior</a>
          </li>
          <li class="page-item active"><a class="page-link" href="/">1</a></li>
          <li class="page-item"><a class="page-link" href="/">2</a></li>
          <li class="page-item"><a class="page-link" href="/">3</a></li>
          <li class="page-item"><a class="page-link" href="/">4</a></li>
          <li class="page-item"><a class="page-link" href="/">5</a></li>
          <li class="page-item">
            <a class="page-link" href="/">Siguiente</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Programas;