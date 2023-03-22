import React from 'react'
import "./Contenido.css"
import Img from "../../assets/recomendaciones-videojuegos.jpg";

const Contenido = () => {
  return (
    <div className='App__contenido flex__center'>
        <div className='App__contenido-letf flex__center'>
            <h3>Contenido exclusivo en OtroQuest</h3>
            <p>Obtén acceso exclusivo a lanzamientos anticipados, transmisiones exclusivas y contenidos de "cómo se hizo" al apoyarme.</p>
            <button className='button'>ACCEDER</button>
        </div>
        <div className='App__contenido-right flex__center'>
            <img src={Img} alt="" />
        </div>
    </div>
  )
}

export default Contenido
