const Similares = ({id, nombre, descripcion, institucion, imagen, tipo, clave}) => {
    const url = "/Programa/" + tipo + "/" + id;
    return (
      <>
            <div class="container border rounded mb-3">
                <div class="row">
                    <div class="col-8 p-4 d-flex flex-column position-static border-left">
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
                    <div class="col-4 d-none d-lg-block">
                        <svg class="bd-placeholder-img" width="100%" height="80%" xmlns="http://www.w3.org/2000/svg" role="img"
                            aria-label="Placeholder: Thumbnail" preserveAspectRatio="xMidYMid slice" focusable="false">
                            <title>Placeholder</title>
                            <rect width="100%" height="100%" fill="#55595c" /><text x="50%" y="50%" fill="#eceeef"
                            dy=".3em">Thumbnail</text>
                        </svg>
                    </div>
                </div>
            </div>
        </>
    );
  }
  
  export default Similares;