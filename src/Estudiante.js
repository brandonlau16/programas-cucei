import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Estudiante.css';

const Estudiante = () => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	const handleSubmit = (valores) => {
		const requestInit = {
			method: 'POST',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(valores)
		}

		const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/estudiante';
		fetch (url, requestInit);
		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
	}

	return (
		<>
		<div class="overlay-est">
            <div class="contenedor-texto-est">
                <div class="texto-encima-est"> 
                    <h4 class="titulo-est">BIENVENIDO A PROGRAMAS CUCEI! <br/><br/></h4>
                    <p>La plataforma que te proporciona los programas disponibles para tu carrera, crea tu perfil, navega y registrate a los programas que se ajusten a ti.</p>
                </div>
            </div>

			<Formik
				initialValues={{
					codigo: '',
					nombre: '',
					primer_apellido: '',
					segundo_apellido: '',
					contrasena: '',
					clave_carrera: '',
					ciclo_escolar: '',
					num_semestre: '',
					estatus: '',
					correo_estudiante: '',
					descripcion: ''
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
					if(!valores.correo_estudiante){
						errores.correo_estudiante = 'Por favor ingresa un correo electronico'
					} else if(!/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/.test(valores.correo_estudiante)){
						errores.correo_estudiante = 'El correo solo puede contener letras, numeros, puntos, guiones y guion bajo.'
					}

					// Validacion contrasena
					if(!valores.contrasena){
						errores.contrasena = 'Por favor ingresa una contraseña'
					} else if(!/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&#.$($)$-$_])[A-Za-z\d$@$!%*?&#.$($)$-$_]{8,15}$/.test(valores.contrasena)){
						errores.contrasena = 'La contraseña debe tener minimo 8 caracteres, maximo 15, al menos una letra mayúscula, al menos una letra minucula, al menos un dígito, no espacios en blanco, al menos 1 caracter especial.'
					}

					// Validacion carrera
					if(!valores.clave_carrera){
						errores.clave_carrera = 'Por favor ingresa una clave de carrera'
					} else if(!/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.clave_carrera)){
						errores.clave_carrera = 'La clave de carrera solo puede contener letras'
					}

					// Validacion semestre
					if(!valores.num_semestre){
						errores.num_semestre = 'Por favor ingresa un numero de semestre'
					} else if(/^[a-zA-ZÀ-ÿ\s]{1,40}$/.test(valores.num_semestre)){
						errores.num_semestre = 'El semestre solo puede contener numeros'
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
					<Form className="formulario-est">
						<label htmlFor="titulo" class="titulo"><h4 class="titulo">¡Bienvenido!</h4></label><br/>
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
							<label htmlFor="correo_estudiante">Correo</label>
							<Field
								type="text" 
								id="correo_estudiante" 
								name="correo_estudiante" 
								placeholder="nombre@alumnos.udg.mx" 
							/>
							<ErrorMessage name="correo_estudiante" component={() => (<div className="error">{errors.correo_estudiante}</div>)} />
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

						<div>
							<label htmlFor="descripcion">Descripcion</label>
							<Field name="descripcion" as="textarea" placeholder="Escribe tu descripcion" />
						</div>

						<div>
							<label htmlFor="clave_carrera">Clave de carrera</label>
							<Field
								type="text" 
								id="clave_carrera" 
								name="clave_carrera" 
								placeholder="INCO" 
							/>
							<ErrorMessage name="clave_carrera" component={() => (<div className="error">{errors.clave_carrera}</div>)} />
						</div>

						<div>
							<label htmlFor="ciclo_escolar">Ciclo escolar</label>
							<Field
								type="text" 
								id="ciclo_escolar" 
								name="ciclo_escolar" 
								placeholder="2022B" 
							/>
							<ErrorMessage name="ciclo_escolar" component={() => (<div className="error">{errors.ciclo_escolar}</div>)} />
						</div>

						<div>
							<label htmlFor="num_semestre">Semestre actual</label>
							<Field
								type="text" 
								id="num_semestre" 
								name="num_semestre" 
								placeholder="1" 
							/>
							<ErrorMessage name="num_semestre" component={() => (<div className="error">{errors.num_semestre}</div>)} />
						</div>

						<div>
							<label htmlFor="estatus">Estatus actual</label>
							<Field name="estatus" as="select">
								<option value="">Selecciona</option>
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
		</div>
		</>
	);
}
 
export default Estudiante;