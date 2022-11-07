import "./Similares.css"

const Similares = ({id, nombre, descripcion, institucion, imagen, tipo, clave}) => {
    const url = "/Programa/" + tipo + "/" + id;
    return (
      <>
            <div class="container border rounded mb-3">
                <div class="row">
                <div class="col-4 minWidthSI">
                        <img src={imagen} width="100%" height="100%"/>
                    </div>                    
                    <div class="col-8 p-4 d-flex flex-column position-static border-left minWidthS">
                        <strong class="d-inline-block mb-2 text-primary">{tipo} | { !clave ? '' : 
                            clave.map(claves => {
                                return <>{claves} | </>
                            })
                            }
                        </strong>   
                        <h5 class="mb-1">{nombre}</h5>
                        <div class="mb-1 text-muted">{institucion}</div>
                        <p class="card-text mb-auto">{descripcion}</p>
                        <a href={url}>Ver detalles</a>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Similares;