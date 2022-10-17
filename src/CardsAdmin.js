import React from "react";
import Card from "./Card";

const cards = [
    {
        id: 1,
        title: 'Crear Programa',
        image: 'https://fondosmil.com/fondo/13706.jpg',
        info: 'Accede para crear un nuevo programa en la plataforma',
        link: '/CrearPrograma'
    },
    {
        id: 2,
        title: 'Administrar Programas',
        image: 'https://www.todofondos.net/wp-content/uploads/4k-fondo-de-pantalla-minimalista-2-scaled.jpg',
        info: 'Edita o elimina la informacion de algun programa existente',
        link: '/AdministrarProgramas'
    }
]

function CardsAdmin() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col" key={card.id}>
                            <Card title={card.title} image={card.image} info={card.info} link={card.link}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default CardsAdmin;
