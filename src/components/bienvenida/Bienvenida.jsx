import React from 'react'
import "./Bienvenida.css"

const Bienvenida = () => {
  return (
    <div className='App__bienvenida flex__center'>
        <div className='App__bienvenida-letf flex__center'>
            <h3>Bienvenido a OtroQuest.</h3>
        </div>
        <div className='App__bienvenida-right flex__center'>
            <p>La fuente de todas mis épicas transmisiones, reseñas y tutoriales de juegos.</p>
        </div>
    </div>
  )
}

export default Bienvenida
