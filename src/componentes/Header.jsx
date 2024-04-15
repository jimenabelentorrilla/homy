import HrImg from "../assets/hr-img.png";
import Google from "../assets/google.png";
export const Header = () => {
  return (
    <>
        <div className="header">
            <div className="hr-lf">
                <div className="hr-text"> 
                    <h1><span>Conectate</span> con tus mascotas</h1>
                    <p>Rompemos las barreras de la distancia para que puedas interactuar con tu mascota estés donde estés.<br/> 
                    ¡Explora una nueva forma de cuidar y compartir momentos incluso cuando no estás en casa!</p>
                </div>
                <div className="ip-flex">
                    <div className="input-cnt">
                        <input 
                            placeholder="Ingresá tu email"
                            className="input"
                        />
                    </div>
                    <button className="btn-ip">Comenzar gratis</button>
                </div>
                <div>
                    <img src={Google}/>
                </div>
            </div>
            <div className="hr-rg">
                <img src={HrImg}/>
            </div>
        </div>
    </>
  )
}
