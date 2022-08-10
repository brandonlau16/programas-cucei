import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardPrograma from "./CardPrograma";
import ProgramaPrincipal from "./ProgramaPrincipal";

// const PROGRAMAS = [1, 2, 3, 4, 5, 6];

const Programas = () => {
  const params = useParams();
  
  const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas/' + params.tipo;
  const [programas, setProgramas] = useState();
  
  const fetchApi = async () => {
    const response = await fetch (url);
    const responseJSON = await response.json();
    setProgramas(responseJSON);
    console.log(responseJSON);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
      { !programas ? 'Cargando...' : 
        <ProgramaPrincipal nombre={programas[programas.length - 1].nombre} descripcion={programas[programas.length - 1].descripcion} telefono={programas[programas.length - 1].telefono} correo={programas[programas.length - 1].correo} institucion={programas[programas.length - 1].institucion} imagen={programas[programas.length - 1].imagen} tipo={programas[programas.length - 1].tipo} clave={programas[programas.length - 1].carreras}/>
      }

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
        { !programas ? 'Cargando...' : 
          programas.map(programa => {
            return <div class="col-md-6" key={programa.id}><CardPrograma nombre={programa.nombre} descripcion={programa.descripcion} telefono={programa.telefono} correo={programa.correo} institucion={programa.institucion} imagen={programa.imagen} tipo={programa.tipo} clave={programa.carreras}/></div>
          })
        }
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
