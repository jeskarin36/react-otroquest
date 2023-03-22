import React from 'react'
import "./Videos.css"
import Card from "../card/Card"

const Videos = () => {
  return (
    <div className='App__videos flex__center'>
        <h3>Videos destacados</h3>
        <div className='flex__center'>
          <Card title="Avance exclusivo de The First of Them III" fecha="10 DE SEPTIEMBRE DE 2020"></Card>
          <Card title="Reseña de Token World" fecha="15 DE JULIO DE 2020"></Card>
          <Card title="One World – Transmisión invitada" fecha="9 DE JULIO DE 2020"></Card>
          <Card title="Colaboración entre No Glitches y Otro Quest" fecha="28 DE JUNIO DE 2020"></Card>
          <Card title="Viernes de lanzamientos: SPLITSPAWN" fecha="20 DE JUNIO DE 2020"></Card>
          <Card title="Reseña de Sand Road" fecha="14 DE JUNIO DE 2020"></Card>
        </div>
      
    </div>
  )
}

export default Videos
