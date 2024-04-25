import "./Nav.css";
import { useContext} from "react";
import { AppContext } from "../../context/AppProvider";
import Logo from "../../assets/logo.png";
import { ModalSignUp } from "./ModalSignUp";
import { ModalSignIn } from "./ModalSignIn";

export const Nav = () => {

    const { handleOpen, AosInit } = useContext(AppContext);

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
                <p onClick={handleOpen}>Ingresar</p>
                <button onClick={handleOpen}>Comenzar</button>
            </div>
        </div>
        {/**Falta agregar un condicional para que reenderice uno u otro**/}        
        <ModalSignIn />
        <ModalSignUp />
    </>
  )
}
