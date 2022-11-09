import React from "react";
import Card from "./Card";

const cards = [
    {
        id: 1,
        title: 'Becas Laborales',
        image: 'https://media.istockphoto.com/photos/portrait-of-female-student-holding-books-in-classroom-young-woman-at-picture-id1007726450?k=20&m=1007726450&s=612x612&w=0&h=kM5wutnwg0cvmGxG_PiHUQGgaCgJ8gEC-uPE8xBPWEw=',
        info: 'Programa de ayuda económica para hacer frente al pago de estudios, un proyecto de investigación o bienes necesarios',
        link: '/Programas/Beca/1'
    },
    {
        id: 2,
        title: 'Internships',
        image: 'https://elsensato.com/wp-content/uploads/2021/05/businesswomen-talking-in-office-464675697-574c59673df78ccee1052935-scaled.jpg',
        info: 'Programa de prácticas profesionales que desarrollan personas que están culminando sus estudios o que recién han egresado de la carrera para generar experiencia laboral',
        link: '/Programas/Internship/1'
    },
    {
        id: 3,
        title: 'Trabajos',
        image: 'https://www.iacc.cl/wp-content/uploads/2017/11/image003-1024x681.jpg',
        info: 'Programa de desarrollo laboral para personas con experiencia previa en actividades relacionadas a las vacantes',
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
