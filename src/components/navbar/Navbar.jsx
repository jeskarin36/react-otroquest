import React,{useState} from "react";
import "./Navbar.css"
import {RipMenu3Line,RiCloseLine, RiMenu3Line} from "react-icons/ri";
import { FaTwitch } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";


const Navbar = () => {

  const [ToggleMenu,setToggleMenu]= useState(false);

  const Menu=()=>(
      <>
      <p><a href="#home">Home</a></p>
      <p><a href="#wgpt3">What is GPT?</a></p>
      <p><a href="#possibility">Open IA</a></p>
      <p><a href="#features">Case studies</a></p>
      <p><a href="#blog">Library</a></p>
      </>
  )



  return (
    <div className='App__navbar flex__center'>
      <div className="gpt3__navbar-menu">
            {ToggleMenu ? <RiCloseLine color="#fff" size={27} onClick={()=>{setToggleMenu(false)}}/>
            : <RiMenu3Line color="#fff" size={27} onClick={()=>{setToggleMenu(true)}}/>
            }

            {ToggleMenu && ( <div className="gpt3__navbar-menu_container scale-up-center">
                <div className="gpt3__navbar-menu_container-links">
                   <Menu></Menu>
                    <div className="gpt3__navbar-menu_container-links-sign">
                        <p>Sing in</p>
                        <button type="button">Sing Up</button>
                    </div>
                </div>
            </div>)}

      </div>
      <h3>OTROQUEST</h3>
      <ul className='App__nav flex__center'>
        <li><a href="">TRANSMISIÓN</a></li>
        <li><a href="">VÍDEOS</a></li>
        <li><a href="">TIENDA</a></li>
        <li><a href="">APÓYAME</a></li>
        <li><a href="">BLOG</a></li>
      </ul>
      <ul className='App__nav-redes flex__center'>
        <li><a href=""><FaTwitch></FaTwitch></a></li>
        <li><a href=""><FaYoutube></FaYoutube></a></li>
        <li><a href=""><FaInstagram></FaInstagram></a></li>
      </ul>
      <ul className='App__nav-carro flex__center'>
        <li><a href=""><FaShoppingCart></FaShoppingCart></a></li>
        <li><a href="">0 </a></li>
      </ul>
    </div>
  )
}

export default Navbar
