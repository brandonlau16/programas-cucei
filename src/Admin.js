import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Admin.css';

const Admin = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);
	return (
		<>
			<div id="barra">
				<ul>
					<li><a href="Home.php">Home</a></li>
					<li><a href="Soporte.php">Soporte</a></li>
					<li><a href="Ayuda.php">Ayuda</a></li>
					<li><a href="cerrar_sesion.php">Cerrar sesion</a></li>
				</ul>
			</div>

			<Formik
				initialValues={{
					nombre: '',
					apellido: '',
					correo: '',
					pass: ''

				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa un nombre'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre solo puede contener letras y espacios'
					}

					// Validacion apellido
					if(!valores.apellido){
						errores.apellido = 'Por favor ingresa tus apellidos'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.apellido)){
						errores.apellido = 'Los apellidos solo pueden contener letras y espacios'
					}

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
				}}
			>
				{( {errors} ) => (
					<Form className="formulario">
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
							<label htmlFor="apellido">Apellidos</label>
							<Field
								type="text" 
								id="apellido" 
								name="apellido" 
								placeholder="Hernández Aguilar"
							/>
							<ErrorMessage name="apellido" component={() => (<div className="error">{errors.apellido}</div>)} />
						</div>

						<div>
							<label htmlFor="correo">Correo</label>
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
								type="pass" 
								id="pass" 
								name="pass"  
							/>
							<ErrorMessage name="pass" component={() => (<div className="error">{errors.pass}</div>)} />
						</div>

						<button type="submit">Enviar</button>
						{formularioEnviado && <p className="exito">Formulario enviado con exito!</p>}
					</Form>
				)}
			</Formik>

			<div className="App-footer">
				<div>Derechos reservados &copy; Programas CUCEI | Terminos y condiciones | Facebook & Instagram @ProgramasCUCEI | 2022</div>
			</div>
		</>
	);
}
 
export default Admin;