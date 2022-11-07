const CardDatosAdmin = ({nombre, descripcion, telefono, correo, institucion, imagen, tipo, clave}) => {
    return (
      <>
        <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative">
          <div class="col p-4 d-flex flex-column position-static">
            <h2 class="mb-0">{nombre}</h2>
            <div class="mb-1 text-muted mb-3">{institucion}</div>

            <div class="col-auto d-lg-block mb-3">
              <img src={imagen} width="100%" height="250"/>
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
          </div>
        </div>
      </>
    );
  }
  
  export default CardDatosAdmin;