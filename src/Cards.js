import React from "react";
import Card from "./Card";

const cards = [
    {
        id: 1,
        title: 'Asesorías',
        image: 'https://www.wallpapertip.com/wmimgs/2-22162_dark-minimalist-desktop-backgrounds.jpg',
        info: 'Programa para retroalimentacion',
        link: '/Programas/Asesorías/1'
    },
    {
        id: 2,
        title: 'Becas',
        image: 'https://fondosmil.com/fondo/13692.png',
        info: 'Programa para recursos',
        link: '/Programas/Beca/1'
    },{
        id: 3,
        title: 'Intercambios',
        image: 'https://fondosmil.com/fondo/13700.jpg',
        info: 'Programa para estudios en extranjero',
        link: '/Programas/Intercambio/1'
    },{
        id: 4,
        title: 'Pasantías',
        image: 'https://fondosmil.com/fondo/13706.jpg',
        info: 'Programa para pasantias en empresas',
        link: '/Programas/pasantía/1'
    },{
        id: 5,
        title: 'Practicas',
        image: 'https://www.todofondos.net/wp-content/uploads/4k-fondo-de-pantalla-minimalista-2-scaled.jpg',
        info: 'Programa para liberar creditos de practicas profesionales',
        link: '/Programas/Prácticas/1'
    },{
        id: 6,
        title: 'Trabajos',
        image: 'https://www.wallpapertip.com/wmimgs/20-200549_minimalist-desktop-wallpaper-hd.jpg',
        info: 'Programa para capacitacion laborar',
        link: '/Programas/Trabajo/1'
    }
]

function Cards() {
    return (
        <div className="container d-flex justify-content-center align-items-center h-100">
            <div className="row">
                {
                    cards.map(card => (
                        <div className="col-md-4" key={card.id}>
                            <Card title={card.title} image={card.image} info={card.info} link={card.link}/>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default Cards;
