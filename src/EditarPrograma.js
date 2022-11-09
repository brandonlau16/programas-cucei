import React, {useState} from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './EditarPrograma.css';

const EditarPrograma = ({datos, estado, cambiarEstado}) => {
	const [formularioEnviado, cambiarFormularioEnviado] = useState(false);

	const handleSubmit = async (valores) => {
		let data = new FormData();
        data.append('id', valores.id);
        data.append('nombre', valores.nombre);
        data.append('telefono', valores.telefono);
        data.append('correo', valores.correo);
        data.append('institucion', valores.institucion);
        data.append('tipo', valores.tipo);
		for (var i = 0; i < valores.carreras.length; i++) {
			data.append('carreras[]', valores.carreras[i]);
		}
        data.append('descripcion', valores.descripcion);
        if(valores.foto !== null){
            data.append('foto', valores.foto);
        }

		const requestInit = {
			method: 'PATCH',
			body: data
		}

		const url = 'http://programascuceiapi-env.eba-yk2dghvp.us-east-1.elasticbeanstalk.com/programas';
		await fetch (url, requestInit);

		cambiarFormularioEnviado(true);
		setTimeout(() => cambiarFormularioEnviado(false), 5000);
		setTimeout(() => window.location.reload(), 1000);
	}

	return (
		<>
		{estado &&
			<div class="container">
				<Formik
					initialValues={{
						id: datos[0].id,
						nombre: datos[0].nombre,
						descripcion: datos[0].descripcion,
						telefono: datos[0].telefono,
						correo: datos[0].correo,
						institucion: datos[0].institucion,
						tipo: datos[0].tipo,
						carreras: datos[0].carreras,
						foto: null
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
						handleSubmit(valores);
					}}
				>
					{(errors) => (
						<Form className="formulario-programa-editar">
							<div>
								<label htmlFor="nombre">Nombre del programa</label>
								<Field
									type="text" 
									id="nombre" 
									name="nombre"
								/>
								<ErrorMessage name="nombre" component={() => (<div className="error">{errors.nombre}</div>)} />
							</div>

							<div>
								<label htmlFor="descripcion">Descripcion del programa</label>
								<Field name="descripcion" as="textarea"/>
							</div>

							<div>
								<label htmlFor="telefono">Numero de contacto</label>
								<Field
									type="text" 
									id="telefono" 
									name="telefono"
								/>
								<ErrorMessage name="telefono" component={() => (<div className="error">{errors.telefono}</div>)} />
							</div>

							<div>
								<label htmlFor="correo">Correo</label>
								<Field
									type="text" 
									id="correo" 
									name="correo"
								/>
								<ErrorMessage name="correo" component={() => (<div className="error">{errors.correo}</div>)} />
							</div>

							<div>
								<label htmlFor="institucion">Institucion del programa</label>
								<Field
									type="text" 
									id="institucion" 
									name="institucion"
								/>
								<ErrorMessage name="institucion" component={() => (<div className="error">{errors.institucion}</div>)} />
							</div>

							<div>
								<label htmlFor="tipo">Tipo de programa</label>
								<Field
									type="text" 
									id="tipo" 
									name="tipo"
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
                                <label htmlFor="foto">Foto de perfil</label>
                                <input 
                                    type="file"
                                    accept="image/*"
                                    name="foto"
                                    onChange={(event) => errors.setFieldValue("foto", event.target.files[0])}
                                />
                            </div>

							<button type="submit">Enviar</button>
							{formularioEnviado && <p className="exito">Cambios realizados con exito!</p>}
						</Form>
					)}
				</Formik>
			</div>
		}
		</>
	);
}
 
export default EditarPrograma;