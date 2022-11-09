import React, {useEffect, useState} from 'react';
import './Programa.css';
import NavBar from './NavBar';
import Footer from './Footer';
import "./Home.css";

const Ayuda = () => {
	const getData = () => {
        return JSON.parse(localStorage.getItem('Alumno'));
    }

    const [alumno, setAlumno] = useState(getData);

    useEffect(() => {
        setAlumno(getData());
    }, []);

	return (
		<>
            <div className="App-Fondo">
                <header className="mb-5 border-bottom">
                    <NavBar alumno={alumno}></NavBar>
                </header>

                <div class="container align-items-center justify-content-center mb-3">
                    <div className='px-2 text-dark mb-5'>
                        Contactos
                    </div>
                    <div className='px-2 text-dark mb-4'>
                        Coordinacion de ingenieria en computacion CUCEI
                    </div>
                    <div className='px-2 text-muted mb-5'>
                        Correo: cdcomp@cucei.udg.mx <br/> Telefono: 33 1378 5900    Ext:27734 <br/>
                        Coordinador: Mtro. José Luis David Bonilla Carranza <br/>
                        WhatsApp: 3311104669
                    </div>
                    <div className='px-2 text-dark mb-4'>
                        Coordinacion de ingenieria en informatica CUCEI
                    </div>
                    <div className='px-2 text-muted'>
                        Correo: cdinf@cucei.udg.mx <br/> Telefono: 13 7859 00    Ext:27735 <br/>
                        Coordinador: Mtra. Sara Esquivel Torres
                    </div>
                </div>

                <Footer></Footer>
            </div>
		</>
	);
}
 
export default Ayuda;