import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardDatosAdmin from "./CardDatosAdmin";
import EditarPrograma from "./EditarPrograma";
import FooterAdmin from "./FooterAdmin";
import NavBarAdmin from "./NavBarAdmin";

const PaginaEditarProgramaAdmin = () => {
  const params = useParams();
  const getData = () => {
    return JSON.parse(localStorage.getItem('Alumno'));
  }

  const [alumno, setAlumno] = useState(getData);
  const [estadoForm, cambiarEstadoForm] = useState(false);
  
  const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programa/' + params.tipo + "/" + params.id;
  const urlTodos = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas/' + params.tipo;
  const [programas, setProgramas] = useState();
  const [programasTodos, setProgramasTodos] = useState();
  let programaEvitado = '';
  
  const fetchApi = async () => {
    const response = await fetch (url);
    const responseJSON = await response.json();
    setProgramas(responseJSON);
    console.log(responseJSON);
  }

  const fetchApiTodos = async () => {
    const responseTodos = await fetch (urlTodos);
    const responseJSONTodos = await responseTodos.json();
    setProgramasTodos(responseJSONTodos);
    console.log(responseJSONTodos);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const busqueda = event.target.nombre.value;
    const resultado = programasTodos.filter(programa => programa.nombre === busqueda);
    const urlR = '/Programa/' + resultado[0].tipo + '/' + resultado[0].id;
    window.location.replace(urlR);
    console.log(resultado);
  }

  const cargar = async () => {
    programaEvitado = programasTodos.filter(programaExcluido => programaExcluido.id !== programas[0].id);
    console.log("Este es:", programas[0].nombre);
  }

  useEffect(() => {
    fetchApi();
    fetchApiTodos();
    setAlumno(getData());
  }, [])

  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <NavBarAdmin alumno={alumno}></NavBarAdmin>
      </header>

      <main className="container">
        <div class="row mb-3">
          <form class="container" onSubmit={handleSubmit}>
            <div class="row gx-2">
              <div class="col-11">
                <input class="form-control" type="text" name="nombre" placeholder="Buscar..." aria-label="default input example" />
              </div>
              <div class="col">
                <div class="d-grid gap-2">
                  <button type="submit" class="btn btn-primary">Buscar</button>
                </div>
              </div>
            </div>
          </form>
        </div>

        <div class="row">
          <div class="col-md-6">
            <div class="row mb-3">
              { !programas ? 'Cargando...' : 
              programas.map(programa => {
                  return <div key={programa.id}><CardDatosAdmin nombre={programa.nombre} descripcion={programa.descripcion} telefono={programa.telefono} correo={programa.correo} institucion={programa.institucion} imagen={programa.imagen} tipo={programa.tipo} clave={programa.carreras}/><a onClick={() => cambiarEstadoForm(!estadoForm)} class="btn btn-outline-secondary w-100">Editar datos</a></div>
              })
              }
            </div>
          </div>

          <div class="col-md-6">
            <div class="row mb-3">
              <EditarPrograma datos={programas} estado={estadoForm} cambiarEstado={cambiarEstadoForm}/>
            </div>
          </div>
        </div>
      </main>

      <FooterAdmin></FooterAdmin>
    </>
  );
}

export default PaginaEditarProgramaAdmin; 
