import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './EditarPrograma.css';

const EditarPrograma = ({objeto}) => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	const handleSubmit = (valores) => {
		const requestInit = {
			method: 'PATCH',
			headers: {'Content-Type': 'application/json'},
			body: JSON.stringify(valores)
		}

		const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas';
		fetch (url, requestInit);
		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
	}

	return (
		<>
			<div class="container">
				<Formik
					initialValues={{
						nombre: '',
						descripcion: '',
						telefono: '',
						correo: '',
						institucion: '',
						foto: '',
						tipo: '',
						carreras: ''
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
						<Form className="formulario-programa-editar">
							<div>
								<label htmlFor="nombre">Nombre del programa</label>
								<Field
									type="text" 
									id="nombre" 
									name="nombre"
                                    placeholder={objeto.nombre}
								/>
								<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
							</div>

							<div>
								<label htmlFor="descripcion">Descripcion del programa</label>
								<Field name="descripcion" as="textarea" placeholder={objeto.descripcion}/>
							</div>

							<div>
								<label htmlFor="telefono">Numero de contacto</label>
								<Field
									type="text" 
									id="telefono" 
									name="telefono"
                                    placeholder={objeto.telefono}
								/>
								<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
							</div>

							<div>
								<label htmlFor="correo">Correo</label>
								<Field
									type="text" 
									id="correo" 
									name="correo"
                                    placeholder={objeto.correo}
								/>
								<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
							</div>

							<div>
								<label htmlFor="institucion">Institucion del programa</label>
								<Field
									type="text" 
									id="institucion" 
									name="institucion"
                                    placeholder={objeto.institucion}
								/>
								<ErrorMessage name="institucion" component={() => (<div className="error">{errors.institucion}</div>)} />
							</div>

							<div>
								<label htmlFor="tipo">Tipo de programa</label>
								<Field
									type="text" 
									id="tipo" 
									name="tipo"
                                    placeholder={objeto.tipo}
								/>
							</div>

							<div id="checkbox-group"><label>Carreras Validas</label></div>
							<div role="group" aria-labelledby="checkbox-group">
								<label>
								<Field type="checkbox" id="box" name="carreras" value="INCO" />
								INCO
								</label>
								<label>
								<Field type="checkbox" id="box" name="carreras" value="INNI" />
								INNI
								</label>
								<label>
								<Field type="checkbox" id="box" name="carreras" value="INBI" />
								INBI
								</label>
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
			</div>
		</>
	);
}
 
export default EditarPrograma;