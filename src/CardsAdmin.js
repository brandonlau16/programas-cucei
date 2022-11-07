import React from "react";
import Card from "./Card";

const cards = [
    {
        id: 1,
        title: 'Crear Programa',
        image: 'https://blog.bayton.com/hs-fs/hubfs/Hombres%20y%20mujeres%20de%20negocios%20discutiendo%20sobre%20la%20mejor%20toma%20de%20decisiones%20para%20su%20empresa.jpg?width=1206&name=Hombres%20y%20mujeres%20de%20negocios%20discutiendo%20sobre%20la%20mejor%20toma%20de%20decisiones%20para%20su%20empresa.jpg',
        info: 'Accede para crear un nuevo programa en la plataforma',
        link: '/CrearPrograma'
    },
    {
        id: 2,
        title: 'Administrar Programas',
        image: 'https://utopia-consultores.com/wp-content/uploads/teclado.jpg',
        info: 'Edita o elimina la informacion de algun programa existente',
        link: '/AdministrarProgramas/1'
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
