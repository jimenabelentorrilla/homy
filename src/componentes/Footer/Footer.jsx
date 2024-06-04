import "./Footer.css";
import Logo from "../../assets/logo-footer.png";
import IconIg from "../../assets/icon-ig-00.png";
import IconWp from "../../assets/icon-wp-00.png";
import IconYt from "../../assets/icon-yt-00.png";

const iconsBl = [
    {
        "id": "1",
        "icon": IconWp
    },
    {
        "id": "2",
        "icon": IconIg
    },
    {
        "id": "3",
        "icon": IconYt    
    }
]

export const Footer = () => {
  return (
    <div className="ft-cont">
        <div className="ft-flex">
            <div className="cnt-logo-ft">
            <a href="#nav"><img src={Logo} /></a>
            </div>
            <div className="icon-ft-flex">
                {
                    iconsBl.map(icon => {
                        return (
                            <div key={icon.id} className="icon-ft">
                                <a href="#" target="_blank" >
                                    <img src={icon.icon} />
                                </a>
                            </div>
                    )})
                }                
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
