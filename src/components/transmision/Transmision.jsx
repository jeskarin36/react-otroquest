import React from 'react'
import "./Transmision.css"
import Img from "../../assets/15984261425685.jpg"

const Transmision = () => {
  return (
    <div className='App__transmision flex__center'>
        <div className="App__transmision-letf flex__center">
                <img src={Img} alt="" />
        </div>
        <div className="App__transmision-right flex__center">
            <h3>Próximas transmisiones</h3>
            <div className='App__transmision-right-content flex__center'>
                    <div className="transmision-right-content-top">
                        <h3>LUNES 17 DE <br></br> AGOSTO</h3>
                        <p>Enlace de la transmisión</p>
                    </div>
                    <div className="transmision-right-content-botton">
                        <h3>JUEVES 20 DE <br></br> AGOSTO</h3>
                        <p>Enlace de la transmisión</p>
                    </div>
            </div>
            <button>AGENDA COMPLETA</button>
        </div>
    </div>
  )
}

export default Transmision
