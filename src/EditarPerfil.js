import { useEffect, useState } from "react";
import ChatBot from "./Chatbot";
import Footer from "./Footer";
import FormEditar from "./FormEditar";
import NavBar from "./NavBar";
import "./EditarPerfil.css";
import "./Home.css";

const EditarPerfil = () => {
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
            <div className="App-Fondo-Otros">
                <header>
                    <NavBar alumno={alumno}></NavBar>
                </header>

                <ChatBot alumno={alumno}></ChatBot>
                
                <main className="container">
                    <div class="flexContainer">
                        <div className="imgInfoRow">
                            <div className="blackBackground-Editar">
                                <div class="row">
                                    <div class="imgContainer col-4">
                                        <img src={alumno[0].foto} width="250px" height="250px"></img>
                                    </div>
                                    <div class="alumnoInfo col-7">
                                        <p>Codigo: {alumno[0].codigo}</p>
                                        <p>Nombre: {alumno[0].nombre}</p>
                                        <p>Primer apellido: {alumno[0].primer_apellido}</p>
                                        <p>Segundo apellido: {alumno[0].segundo_apellido}</p>
                                        <p>Correo de estudiante: {alumno[0].correo_estudiante}</p>
                                        <p>Descripcion: {alumno[0].descripcion}</p>
                                        <p>Clave de carrera: {alumno[0].clave_carrera}</p>
                                        <p>Ciclo escolar: {alumno[0].ciclo_escolar}</p>
                                        <p>Semestre: {alumno[0].num_semestre}</p>
                                        <p>Estatus: {alumno[0].estatus}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <embed class="cv" src={alumno[0].cv} type="application/pdf" width="800px" height="400px" />
                        </div>
                        <div class="alumnoEditInfo">
                            <FormEditar alumno={alumno} estado={estadoForm} cambiarEstado={cambiarEstadoForm}/>
                        </div>
                        <a onClick={() => cambiarEstadoForm(!estadoForm)} class="alumnoEditarButton btn btn-outline-primary">Editar datos</a>
                    </div>
                </main>

                <Footer></Footer>
            </div>
        </>
    );
}

export default EditarPerfil; 
