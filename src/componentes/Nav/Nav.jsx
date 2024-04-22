import { useEffect } from "react";
import Logo from "../../assets/logo.png";
import "./Nav.css";
import Aos from "aos";
import "aos/dist/aos.css";

export const Nav = () => {

    useEffect(() => {
      Aos.init()
    }, [])
    

  return (
    <>
        <div className="cnt-nav" data-aos="fade-down"  data-aos-duration="2000">
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
                <p>Ingresar</p>
                <button>Comenzar</button>
            </div>
        </div>
    </>
  )
}
