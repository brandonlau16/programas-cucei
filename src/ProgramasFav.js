import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardPrograma from "./CardPrograma";

const ProgramasFav = () => {
  const params = useParams();
  const navigate = useNavigate();
  var anterior, siguiente;

  if(params.num > 1){
    anterior = params.num - 10;
  }else{
    anterior = 1;
  }

  if(params.num < 40){
    siguiente = parseInt(params.num) + 10;
  }else{
    siguiente = 41;
  }

  const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas/' + params.tipo;
  const urlA = '/Programas/Intercambio/' + anterior;
  const urlS = '/Programas/Intercambio/' + siguiente;
  const [programas, setProgramas] = useState();
  
  const fetchApi = async () => {
    const response = await fetch (url);
    const responseJSON = await response.json();
    setProgramas(responseJSON);
    console.log(responseJSON);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const busqueda = event.target.nombre.value;
    const resultado = programas.filter(programa => programa.nombre === busqueda);
    const urlR = '/Programa/' + resultado[0].tipo + '/' + resultado[0].id;
    navigate(urlR);
    console.log(resultado);
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
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

      <div class="row mb-2">
        { !programas ? 'Cargando...' :
          programas.map(programa => {
            return <div class="col-md-6" key={programa.id}><CardPrograma id={programa.id} nombre={programa.nombre} descripcion={programa.descripcion} telefono={programa.telefono} correo={programa.correo} institucion={programa.institucion} imagen={programa.imagen} tipo={programa.tipo} clave={programa.carreras}/></div>
          })
        }
      </div>

      <nav aria-label="Page navigation example">
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <a href={urlA} class="page-link">Anterior</a>
          </li>
          <li class="page-item active"><a class="page-link" href="/Programas/Intercambio/1">1</a></li>
          <li class="page-item"><a class="page-link" href="/Programas/Intercambio/11">2</a></li>
          <li class="page-item"><a class="page-link" href="/Programas/Intercambio/21">3</a></li>
          <li class="page-item"><a class="page-link" href="/Programas/Intercambio/31">4</a></li>
          <li class="page-item"><a class="page-link" href="/Programas/Intercambio/41">5</a></li>
          <li class="page-item">
            <a class="page-link" href={urlS}>Siguiente</a>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default ProgramasFav;
