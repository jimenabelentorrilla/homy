import "./Como.css";
import ComoImg from "../../assets/como-img.png";
import Icon1 from "../../assets/icon1.png";
import Icon2 from "../../assets/icon2.png";
import Icon3 from "../../assets/icon3.png";
import Icon4 from "../../assets/icon4.png";

const Item = ( {img, text} ) => {
  return (
    <div className="item-flex">
        <div className="item-circle">
            <img src={img}/>
        </div>
        <div>
            <p className="item-paragraph">{text}</p>
        </div>
    </div>
  )
}

export const Como = () => {
  return (
    <div className="section-3">
        <div data-aos="fade-right" data-aos-duration="1500" data-aos-delay="300">
            <img src={ComoImg}/>
        </div>
        <div className="box-text" id="como" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300">
            <h2>¿Cómo funciona Homy?</h2>
            <div className="items-flex">
                <Item 
                    img={Icon1}
                    text="Descargá la app en la playstore" />
                <Item 
                    img={Icon2}
                    text="Explorá todos los productos" />
                <Item 
                    img={Icon3}
                    text="Instalá en tu hogar facil y rapido" />
                <Item 
                    img={Icon4}
                    text="¡Disfrutá de todas las funcionalidades!" />
            </div>
            <div >
                <button className="sct-3-btn">Comenzar</button>
            </div>
        </div>
    </div>
  )
}
