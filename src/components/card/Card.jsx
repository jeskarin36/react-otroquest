import React from 'react'
import "./Card.css"

const Card = ({title,fecha}) => {
  return (
    <div className="App__card flex__center">
        <div >

        </div>
        <h3>{title}</h3>
        <p>ESTRENO: {fecha}</p>
    </div>
  )
}

export default Card
