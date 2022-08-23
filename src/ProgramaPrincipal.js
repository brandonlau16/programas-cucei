const ProgramaPrincipal = ({id, nombre, descripcion, telefono, correo, institucion, imagen, tipo, clave}) => {
  const url = "/Programa/" + tipo + "/" + id;
  return (
      <div class="p-4 p-md-5 mb-4 text-white rounded bg-dark">
        <div class="col-md-6 px-0">
          <h1 class="display-4 fst-italic">{nombre}</h1>
          <p class="lead my-3">{descripcion}</p>
          <p class="lead mb-0"><a href={url} class="text-white fw-bold">Ver detalles...</a></p>
        </div>
      </div>
    );
  }
  
  export default ProgramaPrincipal;
