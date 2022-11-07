const CardDatos = ({alumno, idPrograma, nombre, descripcion, telefono, correo, institucion, imagen, tipo, clave}) => {
    const handleSubmit = async () => {
      const cadena = {
        codigo_estudiante: alumno[0].codigo,
        id_programa: idPrograma
      }
      const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cadena)
      }

      const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/guardarFavoritos';
      await fetch (url, requestInit);
    }

    const handleSubmitRegistro = async () => {
      const cadena = {
        codigo_estudiante: alumno[0].codigo,
        id_programa: idPrograma
      }
      const requestInit = {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(cadena)
      }

      const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/registro';
      await fetch (url, requestInit);
    }


    return (
      <>
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h2 class="mb-0">{nombre}</h2>
            <div class="mb-1 text-muted mb-3">{institucion}</div>

            <div class="col-auto d-lg-block mb-3">
              <img src={imagen} width="100%" height="100%"/>
            </div>

            <strong class="d-inline-block mb-2 text-primary">{tipo} | { !clave ? '' : 
              clave.map(claves => {
                  return <>{claves} | </>
              })
              }
            </strong>

            <p class="card-text mb-auto">{descripcion}</p>
            
            <div class="mb-1 text-muted">Contacto</div>
            <div class="mb-1 text-muted">Telefono: {telefono}</div>
            <div class="mb-1 text-muted mb-3">Correo electronico: {correo}</div>
            
            <button onClick={() => handleSubmit()} class="btn btn-outline-secondary mb-3" margin-right="20px">Añadir a favoritos</button>
            <button onClick={() => handleSubmitRegistro()} class="btn btn-outline-secondary">Postularme</button>
          </div>
        </div>
      </>
    );
  }
  
  export default CardDatos;