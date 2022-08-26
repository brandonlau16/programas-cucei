import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardDatos from "./CardDatos";
import Footer from "./Footer";
import NavBar from "./NavBar";
import Similares from "./Similares";

const ProgramaInformacion = () => {
  const params = useParams();
  
  const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programa/' + params.tipo + "/" + params.id;
  const urlTodos = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas/' + params.tipo;
  const [programas, setProgramas] = useState();
  const [programasTodos, setProgramasTodos] = useState();
  
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

  useEffect(() => {
    fetchApi();
    fetchApiTodos();
  }, [])

  return (
    <>
      <header className="p-3 mb-3 border-bottom">
        <NavBar></NavBar>
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
          <div class="col-md-8">
            <div class="row mb-3">
              { !programas ? 'Cargando...' : 
              programas.map(programa => {
                  return <div key={programa.id}><CardDatos nombre={programa.nombre} descripcion={programa.descripcion} telefono={programa.telefono} correo={programa.correo} institucion={programa.institucion} imagen={programa.imagen} tipo={programa.tipo} clave={programa.carreras}/></div>
              })
              }
            </div>
          </div>

          <div class="col-md-4">
            <h3 class="mb-3">Otros similares</h3>
            <div class="row">
              { !programasTodos ? 'Cargando...' : 
              programasTodos.map(programa => {
                  return <div key={programa.id}><Similares id={programa.id} nombre={programa.nombre} descripcion={programa.descripcion} institucion={programa.institucion} imagen={programa.imagen} tipo={programa.tipo} clave={programa.carreras}/></div>
              })
              }
            </div>
          </div>
        </div>
      </main>

      <Footer></Footer>
    </>
  );
}

export default ProgramaInformacion; 
