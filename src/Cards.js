import React from "react";
import Card from "./Card";

const cards = [
    {
        id: 1,
        title: 'Becas',
        image: 'https://fondosmil.com/fondo/13706.jpg',
        info: 'Programa para recursos',
        link: '/Programas/Beca/1'
    },
    {
        id: 2,
        title: 'Internships',
        image: 'https://www.todofondos.net/wp-content/uploads/4k-fondo-de-pantalla-minimalista-2-scaled.jpg',
        info: 'Programa para tener una pasantia en alguna empresa',
        link: '/Programas/Internship/1'
    },
    {
        id: 3,
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
