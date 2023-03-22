import React from 'react'
import "./Productos.css"
import Img1 from "../../assets/580b57fbd9996e24bc43bf78.png"
import Img2 from "../../assets/Polo-Shirt-Free-Download-PNG.png"

function Productos() {
  return (
    <div className='App__productos flex__center'>
      
      <h3>Comprar productos</h3>
     
      <div>
        <div className='App__productos-left flex__center'>
          <img src={Img1} alt="" />
          <h3>Camiseta de cuadrícula</h3>
          <p>21.00 €</p>
        </div>
        <div className='App__productos-right flex__center'>
          <img src={Img2} alt="" />
          <h3>Camiseta de Otro Life</h3>
          <p>21.00 €</p>
        </div>
      </div>
    </div>
  )
}

export default Productos
