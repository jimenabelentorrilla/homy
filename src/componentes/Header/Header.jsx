import HrImg from "../../assets/hr-img.png";
import Google from "../../assets/google.png";
import "./Header.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";

export const Header = () => {

    const { handleOpenSignUp , email, onInputChange} = useContext(AppContext);

  return (
    <>
        <div className="header">
            <div className="hr-lf" data-aos="fade-right" data-aos-duration="1500"   data-aos-delay="300">
                <div className="hr-text"> 
                    <h1><span>Conectate</span> con tus<br /> mascotas</h1>
                    <p>Rompemos las barreras de la distancia para que puedas<br/> 
                        interactuar con tu mascota estés donde estés.<br/> 
                        ¡Explorá una nueva forma de cuidar y compartir momentos<br/> 
                        incluso cuando no estás en casa!</p>
                </div>
                <div className="pos-btn">
                    <div className="input-cnt">
                        <input 
                            placeholder="Ingresá tu email"
                            className="input"
                            type="email"
                            name="email"
                            value={email}
                            onChange={onInputChange}
                        />
                    </div>
                    <button className="btn-ip" onClick={handleOpenSignUp}>Comenzar gratis</button>
                </div>
                <div>
                    <img className="google-btn" src={Google}/>
                </div>
            </div>
            <div className="hr-rg" data-aos="fade-left" data-aos-duration="1500" data-aos-delay="300" >
                <img src={HrImg}/>
            </div>
        </div>
    </>
  )
}
