import "./Our.css";
import BgCard from "../../assets/Subtract.png";
import Img1 from "../../assets/Frame 70.png";
import Img2 from "../../assets/Frame 70 (1).png";
import Img3 from "../../assets/Frame 70(3).png";
import Arrow from "../../assets/arrow_forward.png";

const CardsProducts = ( { img , title } ) => {
  return (
    <div>
        <div className="bg-card">
            <img src={BgCard}/>
        </div>
        <div className="img-card">
            <img src={img}/>
        </div>
        <div className="card-box-flex">
            <div className="text-card">
                <p>{title}</p>
            </div>
            <div>
                <button className="arrow-btn"><img src={Arrow}/></button>
            </div>
        </div>
    </div>
  )
}

export const Our = () => {

  return (
    <div className="row-2" id="productos">
        <h2 data-aos="fade-down" data-aos-duration="1500"   data-aos-delay="300">Explorá nuestros productos</h2>
        <div data-aos="fade-up" data-aos-duration="1500"  data-aos-delay="300" className="bloque-flex">
            <div className="cards-conteiner">
                <CardsProducts 
                    img={Img1}
                    title="Cámaras"
                />
                <CardsProducts 
                    img={Img2}
                    title="Dispensadores"
                />
                <CardsProducts 
                    img={Img3}
                    title="Rastreadores"
                />
            </div>            
            <div>
                <button className="ver-btn"> Ver más</button> 
            </div>
        </div>   
    </div>
  )
}
