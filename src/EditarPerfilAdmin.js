import { useEffect, useState } from "react";
import ChatBot from "./Chatbot";
import FooterAdmin from "./FooterAdmin";
import FormEditarAdmin from "./FormEditarAdmin";
import NavBarAdmin from "./NavBarAdmin";
import "./EditarPerfilAdmin.css";

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
        <header className="mb-3">
            <NavBarAdmin alumno={alumno}></NavBarAdmin>
        </header>

        <ChatBot></ChatBot>
        
        <main className="container">
            <div class="flexContainer"> 
                <div className="imgInfoRow">
                    <div class="imgContainer">
                        <img src={alumno[0].foto} width="250px" height="250px"></img>
                    </div>
                    <div class="adminInfo">
                        <p>Nombre: {alumno[0].nombre}</p>
                        <p>Primer apellido: {alumno[0].primer_apellido}</p>
                        <p>Segundo apellido: {alumno[0].segundo_apellido}</p>
                        <p>Correo: {alumno[0].correo}</p>
                    </div>
                </div>
                <div class="adminEditInfo">
                    <FormEditarAdmin alumno={alumno} estado={estadoForm} cambiarEstado={cambiarEstadoForm}/>
                </div>
                <a onClick={() => cambiarEstadoForm(!estadoForm)} class="adminEditarButton btn btn-outline-secondary ">Editar datos</a>
            </div>
        </main>

        <FooterAdmin></FooterAdmin>
        </>
    );
}

export default EditarPerfilAdmin; 
