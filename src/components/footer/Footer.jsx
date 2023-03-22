import React from 'react'
import "./Footer.css"
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Footer = () => {
  return (
    <div className='App__footer flex__center'>
        <div className='footer-caja flex__center'>
            <h3>EXPLORAR</h3>
            <ul className='flex__center'>
                <li><a href="">TRANSMISIÓN</a></li>
                <li><a href="">VÍDEOS</a></li>
                <li><a href="">BLOG</a></li>
            </ul>
        </div>
        <div className='footer-caja flex__center'>
            <h3>APÓYAME</h3>
            <ul className='flex__center'>
                <li><a href="">TIENDA</a></li>
                <li><a href="">APÓYAME</a></li>
                <li><a href="">ACERCA DE</a></li>
            </ul>
        </div>
        <div className='footer-caja-large flex__center'>
            <h3>MANTENTE AL DÍA</h3>
            <form action="" className='flex__center'>
                <input type="email" placeholder='Correo Electronico'/>
                <input type="submit" value="Suscribirme" />
            </form>
        </div>
        <div className='footer-caja flex__center'>
            <h3>SÍGUENOS</h3>
            <ul className='redes flex__center'>
                <li><a href=""><FaTwitch></FaTwitch></a></li>
                <li><a href=""><FaYoutube></FaYoutube></a></li>
                <li><a href=""><FaInstagram></FaInstagram></a></li>
            </ul>
            <p>HECHO POR JESKARIN36</p>
        </div>
    </div>
  )
}

export default Footer
