import { useEffect } from "react";
import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import CardPrograma from "./CardPrograma";
import ProgramaPrincipal from "./ProgramaPrincipal";

var listaMostrar = [];

const Programas = () => {
  const params = useParams();
  const navigate = useNavigate();
  var anterior, siguiente, numBloques;
  const [programas, setProgramas] = useState();
  let bloques = [];
  var lista = [];

  if(params.num > 10){
    anterior = params.num - 10;
  }else{
    anterior = 1;
  }

  if((parseInt(params.num) + 10) <= (parseInt(numBloques) + 10)){
    siguiente = parseInt(params.num) + 10;
  }else{
    siguiente = params.num;
  }

  const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas/' + params.tipo;
  const urlA = '/Programas/' + params.tipo + '/' + anterior;
  const urlS = '/Programas/' + params.tipo + '/' + siguiente;
  
  const fetchApi = async () => {
    const response = await fetch (url);
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
    console.log(lista);
    console.log(listaMostrar);
    console.log(i);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    const busqueda = event.target.nombre.value;
    const resultado = programas.filter(programa => programa.nombre === busqueda);
    const urlR = '/Programa/' + resultado[0].tipo + '/' + resultado[0].id;
    navigate(urlR);
    console.log(resultado);
  }

  function Navegation() {
    var urlBloque = '';
    var n = 1;

    if(bloques.length === 0){
      bloques.push(<li class="page-item"><a href={urlA} class="page-link">Anterior</a></li>);
    
      for(var i=1; i <= numBloques ; i++){
        urlBloque = '/Programas/' + params.tipo + '/' + n;
        bloques.push(<li class="page-item"><a class="page-link" href={urlBloque}>{i}</a></li>);
        n = n + 10;
      }
      
      bloques.push(<li class="page-item"><a href={urlS} class="page-link">Siguiente</a></li>);
    }

    return <nav aria-label="Page navigation example"><ul class="pagination justify-content-center">{bloques}</ul></nav>
  }

  useEffect(() => {
    fetchApi();
  }, [])

  return (
    <>
      { !programas ? 'Cargando...' : 
        <ProgramaPrincipal id={programas[programas.length - 1].id} nombre={programas[programas.length - 1].nombre} descripcion={programas[programas.length - 1].descripcion} telefono={programas[programas.length - 1].telefono} correo={programas[programas.length - 1].correo} institucion={programas[programas.length - 1].institucion} imagen={programas[programas.length - 1].imagen} tipo={programas[programas.length - 1].tipo} clave={programas[programas.length - 1].carreras}/>
      }

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
        { !listaMostrar ? 'Cargando...' :
          listaMostrar.map(programa => {
            numBloques = Math.floor(programas.length/10) + 1;
            return <div class="col-md-6" key={programa.id}><CardPrograma id={programa.id} nombre={programa.nombre} descripcion={programa.descripcion} telefono={programa.telefono} correo={programa.correo} institucion={programa.institucion} imagen={programa.imagen} tipo={programa.tipo} clave={programa.carreras}/></div>
          })
        }
      </div>

      <Navegation/>
    </>
  );
}

export default Programas;
