import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Admin.css';

const Admin = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	const handleSubmit = (valores) => {
		const requestInit = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(valores)
		}

		const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/administrador';
		fetch (url, requestInit);
		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
	}

	return (
		<>
		<div class="overlay-admin-reg">
			<div className='blackBackground-admin-reg'>
				<div class="contenedor-texto-admin-reg">
					<div class="texto-encima-admin-reg"> 
						<h4 class="titulo-admin-reg">BIENVENIDO A PROGRAMAS CUCEI!<br/><br/></h4>
						<p>La plataforma que te proporciona los programas disponibles para tu carrera, crea tu perfil, navega y registrate a los programas que se ajusten a ti.</p>
					</div>
				</div>

				<Formik
					initialValues={{
						nombre: '',
						primer_apellido: '',
						segundo_apellido: '',
						correo: '',
						contrasena: ''
					}}
					validate={(valores) => {
						let errores = {};

						// Validacion nombre
						if(!valores.nombre){
							errores.nombre = 'Por favor ingresa un nombre'
						} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
							errores.nombre = 'El nombre solo puede contener letras y espacios'
						}

						// Validacion primer apellido
						if(!valores.primer_apellido){
							errores.primer_apellido = 'Por favor ingresa tu primer apellido'
						} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.primer_apellido)){
							errores.primer_apellido = 'El apellido solo pueden contener letras y espacios'
						}

						// Validacion segundo apellido
						if(!valores.segundo_apellido){
							errores.segundo_apellido = 'Por favor ingresa tu segundo apellido'
						} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.segundo_apellido)){
							errores.segundo_apellido = 'El apellido solo pueden contener letras y espacios'
						}

						// Validacion correo
						if(!valores.correo){
							errores.correo = 'Por favor ingresa un correo electronico'
						} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
							errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
						}

						// Validacion contrasena
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
						handleSubmit(valores);
					}}
				>
					{( {errors} ) => (
						<Form className="formulario-admin-reg">
							<div>
								<label htmlFor="nombre">Nombre</label>
								<Field
									type="text" 
									id="nombre" 
									name="nombre" 
									placeholder="Juan Alberto"
								/>
								<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
							</div>

							<div>
								<label htmlFor="primer_apellido">Primer apellido</label>
								<Field
									type="text" 
									id="primer_apellido" 
									name="primer_apellido" 
									placeholder="Hernández"
								/>
								<ErrorMessage name="primer_apellido" component={() => (<div className="error">{errors.primer_apellido}</div>)} />
							</div>

							<div>
								<label htmlFor="segundo_apellido">Segundo apellido</label>
								<Field
									type="text" 
									id="segundo_apellido" 
									name="segundo_apellido" 
									placeholder="Aguilar"
								/>
								<ErrorMessage name="segundo_apellido" component={() => (<div className="error">{errors.segundo_apellido}</div>)} />
							</div>

							<div>
								<label htmlFor="correo">Correo</label>
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

							<button type="submit">Enviar</button>
							{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
						</Form>
					)}
				</Formik>
			</div>
		</div>
		</>
	);
}
 
export default Admin;