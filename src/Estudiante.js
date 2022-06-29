import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Estudiante.css';

const Estudiante = () => {
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
					codigo: '',
					nombre: '',
					apellido: '',
					correo: '',
					pass: '',
					carrera: '',
					semestre: ''

				}}
				validate={(valores) => {
					let errores = {};

					// Validacion codigo
					if(!valores.codigo){
						errores.codigo = 'Por favor ingresa un codigo de estudiante'
					} else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.codigo)){
						errores.codigo = 'El codigo solo puede contener numeros'
					}

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

					// Validacion carrera
					if(!valores.carrera){
						errores.carrera = 'Por favor ingresa una carrera'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.carrera)){
						errores.carrera = 'La carrera solo puede contener letras y espacios'
					}

					// Validacion semestre
					if(!valores.semestre){
						errores.semestre = 'Por favor ingresa un numero de semestre'
					} else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.semestre)){
						errores.semestre = 'El semestre solo puede contener numeros'
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
							<label htmlFor="codigo">Codigo</label>
							<Field
								type="text" 
								id="codigo" 
								name="codigo" 
								placeholder="215483684"
							/>
							<ErrorMessage name="codigo" component={() => (<div className="error">{errors.codigo}</div>)} />
						</div>

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

						<div>
							<label htmlFor="descripcion">Descripcion</label>
							<Field name="descripcion" as="textarea" placeholder="Escribe tu descripcion" />
						</div>

						<div>
							<label htmlFor="carrera">Carrera</label>
							<Field
								type="text" 
								id="carrera" 
								name="carrera" 
								placeholder="Ingenieria en computacion" 
							/>
							<ErrorMessage name="carrera" component={() => (<div className="error">{errors.carrera}</div>)} />
						</div>

						<div>
							<label htmlFor="ciclo">Ciclo escolar</label>
							<Field
								type="text" 
								id="ciclo" 
								name="ciclo" 
								placeholder="2022B" 
							/>
							<ErrorMessage name="ciclo" component={() => (<div className="error">{errors.ciclo}</div>)} />
						</div>

						<div>
							<label htmlFor="semestre">Semestre actual</label>
							<Field
								type="text" 
								id="semestre" 
								name="semestre" 
								placeholder="1" 
							/>
							<ErrorMessage name="semestre" component={() => (<div className="error">{errors.semestre}</div>)} />
						</div>

						<div>
							<label htmlFor="status">Estatus actual</label>
							<Field name="status" as="select">
								<option value="Activo">Activo</option>
								<option value="Inactivo">Inactivo</option>
								<option value="Graduado">Graduado</option>
								<option value="Egresado">Egresado</option>
							</Field>
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
 
export default Estudiante;