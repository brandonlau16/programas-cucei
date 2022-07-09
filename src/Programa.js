import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Programa.css';

const Programa = () => {
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
					pass: '',
					carrera: '',
					semestre: ''

				}}
				validate={(valores) => {
					let errores = {};

					// Validacion nombre
					if(!valores.nombre){
						errores.nombre = 'Por favor ingresa el nombre del programa'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.nombre)){
						errores.nombre = 'El nombre del programa solo puede contener letras y espacios'
					}

					// Validacion telefono
					if(!valores.telefono){
						errores.telefono = 'Por favor ingresa un numero de telefono'
					} else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.telefono)){
						errores.telefono = 'El telefono solo puede contener numeros'
					}

					// Validacion correo
					if(!valores.correo){
						errores.correo = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo)){
						errores.correo = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					// Validacion institucion
					if(!valores.institucion){
						errores.institucion = 'Por favor ingresa el nombre de la institucion'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.institucion)){
						errores.institucion = 'El nombre de la institucion solo puede contener letras y espacios'
					}

					// Validacion carrera
					if(!valores.carrera){
						errores.carrera = 'Por favor ingresa una carrera'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.carrera)){
						errores.carrera = 'La carrera solo puede contener letras y espacios'
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
							<label htmlFor="nombre">Nombre del programa</label>
							<Field
								type="text" 
								id="nombre" 
								name="nombre" 
								placeholder="Beca economica de BOSCH"
							/>
							<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
						</div>

						<div>
							<label htmlFor="descripcion">Descripcion del programa</label>
							<Field name="descripcion" as="textarea" placeholder="Escribe la descripcion del programa" />
						</div>

						<div>
							<label htmlFor="telefono">Numero de contacto</label>
							<Field
								type="text" 
								id="telefono" 
								name="telefono" 
								placeholder="3365784684" 
							/>
							<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
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
							<label htmlFor="institucion">Institucion del programa</label>
							<Field
								type="text" 
								id="institucion" 
								name="institucion" 
								placeholder="Bosch" 
							/>
							<ErrorMessage name="institucion" component={() => (<div className="error">{errors.institucion}</div>)} />
						</div>

						<div>
							<label htmlFor="tipo">Tipo de programa</label>
							<Field name="tipo" as="select">
								<option value="Asesoria">Asesoría</option>
								<option value="Beca">Beca</option>
								<option value="Intercambio">Intercambio</option>
								<option value="Internado">Pasantia</option>
								<option value="Practica">Practica</option>
								<option value="Trabajo">Trabajo</option>
							</Field>
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
							<label htmlFor="foto">Imagen del programa</label>
							<Field
								type="file" 
								id="foto" 
								name="foto"
							/>
							<ErrorMessage name="foto" component={() => (<div className="error">{errors.foto}</div>)} />
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
 
export default Programa;