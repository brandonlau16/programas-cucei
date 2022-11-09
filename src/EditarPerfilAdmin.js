import { useEffect, useState } from "react";
import FooterAdmin from "./FooterAdmin";
import FormEditarAdmin from "./FormEditarAdmin";
import NavBarAdmin from "./NavBarAdmin";
import "./EditarPerfilAdmin.css";
import './HomeAdmin.css';

const EditarPerfilAdmin = () => {
    const getData = () => {
        return JSON.parse(localStorage.getItem('Alumno'));
    }

    const [alumno, setAlumno] = useState(getData);
    const [estadoForm, cambiarEstadoForm] = useState(false);

    useEffect(() => {
        setAlumno(getData());
    }, []);

    return (
        <>
            <div className="App-Fondo-Admin-Otros">
                <header>
                    <NavBarAdmin alumno={alumno}></NavBarAdmin>
                </header>
                
                <main className="container">
                    <div class="flexContainer"> 
                        <div className="imgInfoRow">
                            <div className="blackBackground-Editar">
                                <div class="row">
                                    <div class="imgContainer col-4">
                                        <img src={alumno[0].foto} width="250px" height="250px"></img>
                                    </div>
                                    <div class="adminInfo col-7">
                                        <p>Nombre: {alumno[0].nombre}</p>
                                        <p>Primer apellido: {alumno[0].primer_apellido}</p>
                                        <p>Segundo apellido: {alumno[0].segundo_apellido}</p>
                                        <p>Correo: {alumno[0].correo}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="adminEditInfo">
                            <FormEditarAdmin alumno={alumno} estado={estadoForm} cambiarEstado={cambiarEstadoForm}/>
                        </div>
                        <a onClick={() => cambiarEstadoForm(!estadoForm)} class="adminEditarButton btn btn-outline-primary">Editar datos</a>
                    </div>
                </main>

                <FooterAdmin></FooterAdmin>
            </div>
        </>
    );
}

export default EditarPerfilAdmin; 
