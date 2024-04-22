import BgCard from "../../assets/Subtract.png";
import Img1 from "../../assets/Frame 70.png";
import Img2 from "../../assets/Frame 70 (1).png";
import Img3 from "../../assets/Frame 70(3).png";
import Arrow from "../../assets/arrow_forward.png";
import "./Our.css";
import { useState } from "react";

const CardsProducts = ( { img , title }) => {
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

    const [verMas, setVerMas] = useState(false);

    const handleVerMas = () =>{
        setVerMas(
            prev => !prev
        );
    }

  return (
    <div className="row-2" id="productos">
        <h2>Explorá nuestros productos</h2>
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
            {
                verMas &&   <>
                                <div className="cards-conteiner">
                                    <CardsProducts 
                                        img={Img3}
                                        title="Lorem"
                                    />
                                    <CardsProducts 
                                        img={Img2}
                                        title="Sarasa"
                                    />
                                    <CardsProducts 
                                        img={Img1}
                                        title="Agus te amo"
                                    />
                                </div>
                            </>
            }
        
        <div>
           <button className="ver-btn" onClick={handleVerMas}>{verMas ? "Ver menos" : "Ver más"}</button> 
        </div>   
    </div>
  )
}
