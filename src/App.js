import './App.css';
import Navbar from "./components/navbar/Navbar";
import Header from "./components/header/Header";
import Bienvenida from "./components/bienvenida/Bienvenida";
import Transmision from "./components/transmision/Transmision";
import Videos from "./components/videos/Videos"
import Productos from "./components/productos/Productos"
import Contenido from "./components/contenido/Contenido"
import Footer from "./components/footer/Footer"


function App() {
  return (
   <div>
    <Navbar></Navbar>
    <Header></Header>
    <Bienvenida></Bienvenida>
    <Transmision></Transmision>
    <Videos></Videos>
    <Productos></Productos>
    <Contenido></Contenido>
    <Footer></Footer>
   </div>
  );
}

export default App;
