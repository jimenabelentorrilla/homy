import "./Footer.css";
import Logo from "../../assets/logo-footer.png";
import IconIg from "../../assets/icon-ig-00.png";
import IconWp from "../../assets/icon-wp-00.png";
import IconYt from "../../assets/icon-yt-00.png";

export const Footer = () => {
  return (
    <div className="ft-cont">
        <div className="ft-flex">
            <div>
                <a href="#"><img src={Logo} /></a>
            </div>
            <div className="icon-ft-flex">
                <div className="icon-ft">
                    <img src={IconWp} />
                </div>
                <div className="icon-ft">
                    <img src={IconIg} />
                </div>
                <div className="icon-ft">
                    <img src={IconYt} />
                </div>
            </div>
        </div>
        <div className="ft-an-flex"> 
            <ul className="ft-ul">
                <a href="#" className="an-bold"><li>Homy</li></a>
                <a href="#productos" className="an-clr"><li>Productos</li></a>
                <a href="#como" className="an-clr"><li>Como funciona</li></a>
                <a href="#faqs" className="an-clr"><li>Faqs</li></a>
            </ul>
            <ul className="ft-ul">
                <li className="an-bold">Contacto</li>
                <li>Soporte</li>
                <li>Centro de ayuda</li>
            </ul>
            <ul className="ft-ul">
                <li className="an-bold">Ayuda</li>
                <li>Terminos y condiciones</li>
                <li>Politica de privacidad</li>
            </ul>
        </div>
    </div>
  )
}
