import { useState } from "react";
import "./CardProgramaAdmin.css"

const CardProgramaAdmin = ({id, nombre, descripcion, telefono, correo, institucion, imagen, tipo, clave}) => {
  const urlEditar = "/ProgramaAdmin/" + tipo + "/" + id;
  const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

  const handleSubmit = async () => {
    cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);

    const cadena = {
      id: id
    }
    const requestInit = {
      method: 'DELETE',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(cadena)
    }

    const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas';
    await fetch (url, requestInit);
    setTimeout(() => window.location.reload(), 1000);
  }

  return (
    <div class="row g-0 border rounded overflow-hidden flex-md-row mb-4 shadow-sm h-md-250 position-relative bg-white">
      <div class="col-auto d-lg-block">
        <img src={imagen} width="200" height="250"/>
      </div>
      <div class="col p-4 d-flex flex-column position-static minWidthAdmin">
        <strong class="d-inline-block mb-2 text-primary">{tipo} | { !clave ? '' : 
          clave.map(claves => {
              return <>{claves} | </>
          })
          }
        </strong>
        <h3 class="mb-0">{nombre}</h3>
        <div class="mb-1 text-muted">{institucion}</div>
        <p class="card-text mb-auto">{descripcion}</p>
        <a href={urlEditar} class="btn btn-outline-primary mb-3" margin-right="20px">Editar programa</a>
        <button onClick={() => handleSubmit()} class="btn btn-outline-primary">Eliminar programa</button>
        {formularioEnviado && <p className="exitoElimAdmin">Programa eliminado con exito</p>}
      </div>
    </div>
  );
}
  
export default CardProgramaAdmin;
  