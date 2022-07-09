import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Login.css';
import { useNavigate } from 'react-router-dom';

const Login = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const navigate = useNavigate();

    function handleClick (){
        navigate("/Registro");
    }

    function handleClickHome (){
        navigate("/Home");
    }

	return (
        <div class="overlay-login">
            <div class="contenedor-texto-login">
                <div class="texto-encima-login"> 
                    <h4 class="titulo-login">BIENVENIDO A PROGRAMAS CUCEI! <br/><br/></h4>
                    <p>La plataforma que te proporciona los programas disponibles para tu carrera, crea tu perfil, navega y registrate a los programas que se ajusten a ti.</p>
                </div>
            </div>
			<Formik
				initialValues={{
					correo: '',
					pass: ''

				}}
				validate={(valores) => {
					let errores = {};

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					// Validacion pass
					if(!valores.pass){
						errores.pass = 'Por favor ingresa una contraseña'
					} else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(valores.pass)){
						errores.pass = 'La contraseña debe tener minimo 8 caracteres, maximo 15, al menos una letra mayúscula, al menos una letra minucula, al menos un dígito, no espacios en blanco, al menos 1 caracter especial.'
					}

					return errores;
				}}
				onSubmit={(valores, {resetForm}) => {
					resetForm();
					console.log('Formulario enviado');
					cambiarFormularioEnviado(true);
					setTimeout(() => cambiarFormularioEnviado(false), 5000);
                    handleClickHome();
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
                        <label htmlFor="titulo" class="titulo"><h4 class="titulo">¡Bienvenido!</h4></label><br/>
						<div>
							<label htmlFor="correo">Correo electrónico</label>
							<Field
								type="text" 
								id="correo" 
								name="correo" 
								placeholder="nombre@alumnos.udg.mx" 
							/>
							<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
						</div>

						<div>
							<label htmlFor="pass">Contraseña</label>
							<Field
								type="password" 
								id="pass" 
								name="pass"  
							/>
							<ErrorMessage name="pass" component={() => (<div className="error">{errors.pass}</div>)} />
						</div>

						<button type="submit">Iniciar sesión</button><br/>
                        <label htmlFor="registrar">¿No tienes cuenta? <a onClick={handleClick} class="registro">Regístrarte</a></label>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>
        </div>
	);
}
 
export default Login;