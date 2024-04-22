import Logo from "../../assets/logo.png";
import "./Nav.css";

export const Nav = () => {
  return (
    <>
        <div className="cnt-nav">
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
