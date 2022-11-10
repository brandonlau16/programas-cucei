import { useEffect } from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import CardFavoritos from "./CardFavoritos";

var listaMostrar = [];

const ProgramasFav = () => {
  const params = useParams();
  var anterior, siguiente, numBloques;
  const [programas, setProgramas] = useState();
  let bloques = [];
  var lista = [];

  if(params.num > 10){
    anterior = params.num - 10;
  }else{
    anterior = 1;
  }

  if((params.num < 10)){
    siguiente = parseInt(params.num) + 10;
  }else if((params.num > 10) && (params.num < 20)){
    siguiente = params.num;
  }

  const urlA = '/Favoritos/' + anterior;
  const urlS = '/Favoritos/' + siguiente;

  const getData = () => {
    return JSON.parse(localStorage.getItem('Alumno'));
  }

  const [alumno, setAlumno] = useState(getData);

  const fetchApi = async () => {
    const cadena = {
      codigo_estudiante: alumno[0].codigo
    }
    const requestInit = {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cadena)
    }

    const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/obtenerFavoritos';
    const response = await fetch (url, requestInit);
    const responseJSON = await response.json();
    setProgramas(responseJSON);
    lista = responseJSON;
    listaMostrar = [];
    var contador = (parseInt(params.num) - 1);
    var i = (parseInt(params.num) + 8);

    for(contador; contador <= i ; contador++){
      if(contador < (lista.length)){
        listaMostrar[contador] = lista[contador];
      }
    }
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const busqueda = event.target.nombre.value;
    const resultado = programas.filter(programa => programa.nombre === busqueda);
    setProgramas(resultado);
  }

  function Navegation() {
    var urlBloque = '';
    var n = 1;

    if(bloques.length === 0){
      bloques.push(<li class="page-item"><a href={urlA} class="page-link">Anterior</a></li>);
    
      for(var i=1; i <= numBloques ; i++){
        urlBloque = '/Favoritos/' + n;
        bloques.push(<li class="page-item"><a class="page-link" href={urlBloque}>{i}</a></li>);
        n = n + 10;
      }
      
      bloques.push(<li class="page-item"><a href={urlS} class="page-link">Siguiente</a></li>);
    }

    return <nav aria-label="Page navigation example"><ul class="pagination justify-content-center">{bloques}</ul></nav>
  }

  useEffect(() => {
    fetchApi();
    setAlumno(getData());
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
            numBloques = Math.floor(programas.length/10) + 1;
            return <div class="col-md-6" key={programa.id}><CardFavoritos alumno={alumno} id={programa.id} nombre={programa.nombre} descripcion={programa.descripcion} telefono={programa.telefono} correo={programa.correo} institucion={programa.institucion} imagen={programa.imagen} tipo={programa.tipo} clave={programa.carreras}/></div>
          })
        }
      </div>

      <Navegation/>
    </>
  );
}

export default ProgramasFav;
