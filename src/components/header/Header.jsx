import React from 'react'
import "./Header.css"
import Img from "../../assets/2021816119956_1.jpg"

const Header = () => {
  return (
    <div className='App__header'>
       <div className='App__header-letf flex__center'>
            <p>11/3/19  RESEÑA DEL LANZAMIENTO</p>
            <h3>Reseña de juego: Skytar gana en narrativa</h3>
            <button>Leer Mas</button>
       </div>
       <div className='App__header-right flex__center'>
            <img src={Img} alt="" />
        </div>
    </div>
  )
}

export default Header
