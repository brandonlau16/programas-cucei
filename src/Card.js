import React from "react";
import './Cards.css';

function Card({title, image, info, link}) {
  return (
    <div class="card text-center h-300 m-3" id="fila">
        <div class="overflow">
            <img src={image} alt="" class="card-img-top"/>
        </div>
        <div class="card-body">
            <h4 class="card-title mb-4">{title}</h4>
            <p class="card-text text-primary">{info}</p>
            <a href={link} class="btn btn-outline-primary">Ver programas</a>
        </div>
    </div>
  );
}

export default Card;
