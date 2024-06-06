import { useContext} from "react";
import "./Nav.css";
import { AppContext } from "../../context/AppProvider";
import Google from "../../assets/google 2.png";
import Mail from "../../assets/mail.png";
import Lock from "../../assets/lock.png";
import { NavLink } from "react-router-dom";

export const ModalSignIn = ( { onClose, onSignUp }) => {

    const { onSubmit, onInputChange, email, password, errors} = useContext(AppContext);
  
    return (
    <>
        <div className="mw">     
            <form onSubmit={onSubmit} className="tarjeta">            
                
                <div>
                    <h2 className="title-tarj">Ingresar a Homy</h2>
                </div>
                <div className="btn-google">
                    <img src={Google}/>
                    <p>Ingresar con Google</p>
                </div>
                <div className="hr-st">
                    <hr /><span>o</span><hr />
                </div>
                <div className="align-start">
                    <div className="w-in">
                        <div className="cnt-input">
                            <div>
                                <img src={Mail} />
                            </div>
                            <input 
                                placeholder="Email"
                                type="email"
                                name="email"
                                value={email}
                                onChange={onInputChange} 
                            />
                        </div>
                        <small className="error">{errors.email}</small>
                    </div>
                    <div className="w-in">
                        <div className="cnt-input">
                            <div>
                                <img src={Lock} />
                            </div>
                            <input 
                                placeholder="Contraseña"
                                type="password"
                                name="password"
                                value={password}
                                onChange={onInputChange} 
                            />
                        </div>
                        <small className="error">{errors.password}</small>
                    </div>
                    <div className="span-cont">
                        <span>¿Olvidaste tu contraseña?</span>
                    </div>
                </div>
                <div className="w-btn">
                    <button className="btn-rgs">Ingresar con email</button>
                </div>
                <div className="color-p-span">
                    <p>¿No tenés una cuenta? <NavLink to="/signUp"><span onClick={onSignUp}>Registrarse</span> </NavLink></p>
                </div> 
                <NavLink to="/"><p onClick={onClose} className="cerrar">CERRAR</p></NavLink>           
            </form>
        </div>    
    </>
  )
}
