import "./Nav.css";
import "./Modal.css";
import { useContext} from "react";
import { AppContext } from "../../context/AppProvider";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";

export const Nav = () => {

    const { AosInit } = useContext(AppContext);
    
    AosInit()

  return (
    <>
        <div className="cnt-nav" data-aos="fade-down" data-aos-duration="2000">
            <div>
                <img src={Logo}/>
            </div>
            <ul className="ul-flex">
                <a href="#productos"><li>Productos</li></a>
                <a href="#como"><li>¿Cómo funciona?</li></a>
                <a href="#faqs"><li>Faqs</li></a>
                <a href="#contacto"><li>Contacto</li></a>
            </ul>
            <div className="cnt-flex">
                <NavLink to="/signIn"><p>Ingresar</p></NavLink>
                <NavLink to="/signUp"><button>Comenzar</button></NavLink>
            </div>
        </div>
        {/**Falta agregar un modal porque las rutas navegan y dejan las cards al final****/}
   
    </>
  )
}
