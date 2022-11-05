import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './LoginAdmin.css';
import { useNavigate } from 'react-router-dom';

const LoginAdmin = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
    const navigate = useNavigate();

	function handleClickAdmin (){
        navigate("/Administrador");
    }

    function handleClickHome (administrador){
		localStorage.setItem('Alumno', JSON.stringify(administrador));
        navigate("/HomeAdmin");
    }

	const handleSubmit = async (valores) => {
		const requestInit = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(valores)
		}

		const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/loginAdministrador';
		
		const response = await fetch (url, requestInit);
		const responseJSON = await response.json();
		console.log(responseJSON);

		if (responseJSON){
			handleClickHome(responseJSON);
		}

		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
	}

	return (
        <div class="overlay-login-admin">
			<div className='blackBackground'>
				<div class="contenedor-texto-login-admin">
					<div class="texto-encima-login-admin"> 
						<h4 class="titulo-login-admin">BIENVENIDO A PROGRAMAS CUCEI! <br/><br/></h4>
						<p>La plataforma que te proporciona los programas disponibles para tu carrera, crea tu perfil, navega y registrate a los programas que se ajusten a ti.</p>
					</div>
				</div>
				<Formik
					initialValues={{
						correo: '',
						contrasena: ''
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
						if(!valores.contrasena){
							errores.contrasena = 'Por favor ingresa una contraseña'
						} else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(valores.contrasena)){
							errores.contrasena = 'La contraseña debe tener minimo 8 caracteres, maximo 15, al menos una letra mayúscula, al menos una letra minucula, al menos un dígito, no espacios en blanco, al menos 1 caracter especial.'
						}

						return errores;
					}}
					onSubmit={(valores, {resetForm}) => {
						resetForm();
						console.log('Formulario enviado');
						console.log(valores);
						/*cambiarFormularioEnviado(true);
						setTimeout(() => cambiarFormularioEnviado(false), 5000);*/
						handleSubmit(valores);
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
									placeholder="nombre@academicos.udg.mx" 
								/>
								<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
							</div>

							<div>
								<label htmlFor="contrasena">Contraseña</label>
								<Field
									type="password" 
									id="contrasena" 
									name="contrasena"  
								/>
								<ErrorMessage name="contrasena" component={() => (<div className="error">{errors.contrasena}</div>)} />
							</div>

							<button type="submit">Iniciar sesión</button><br/>
							<label htmlFor="registrar">¿No tienes cuenta? <a onClick={handleClickAdmin} class="registro">Regístrate</a></label>
							{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
						</Form>
					)}
				</Formik>
			</div>
        </div>
	);
}
 
export default LoginAdmin;