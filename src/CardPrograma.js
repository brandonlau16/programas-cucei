import "./CardPrograma.css"

const CardPrograma = ({id, nombre, descripcion, telefono, correo, institucion, imagen, tipo, clave}) => {
  const url = "/Programa/" + tipo + "/" + id;
    return (
      <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white">
        <div class="col-auto d-lg-block">
          <img src={imagen} width="200" height="250"/>
        </div>
        <div class="col p-4 d-flex flex-column position-static minWidth">
          <strong class="d-inline-block mb-2 text-primary">{tipo} | { !clave ? '' : 
            clave.map(claves => {
                return <>{claves} | </>
            })
            }
          </strong>
          <h3 class="mb-0">{nombre}</h3>
          <div class="mb-1 text-muted">{institucion}</div>
          <p class="card-text mb-auto">{descripcion}</p>
          <a href={url} class="btn btn-outline-primary">Ver detalles</a>
        </div>
      </div>
    );
  }
  
  export default CardPrograma;
