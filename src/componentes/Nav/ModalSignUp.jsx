import { useContext} from "react";
import Google from "../../assets/google 2.png";
import Person from "../../assets/person.png";
import Mail from "../../assets/mail.png";
import Lock from "../../assets/lock.png";
import "./Nav.css";
import Modal from '@mui/material/Modal';
import { AppContext } from "../../context/AppProvider";

import React from 'react'

export const ModalSignUp = () => {

    const { open, handleClose, onSubmit, onInputChange, userName, email, password, errors } = useContext(AppContext);
  
    return (
    <>
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <form onSubmit={onSubmit }className="tarjeta">
                <h2>Crear una cuenta</h2>
                <div className="btn-google">
                    <img src={Google}/>
                    <p>Ingresar con Google</p>
                </div>
                <div className="hr-st">
                    <hr /><span>o</span><hr />
                </div>
                <div>
                    <div className="cnt-input">
                        <div>
                        <img src={Person} /> 
                        </div>
                        
                        <input 
                            placeholder="Nombre"
                            type="username"
                            name="userName"
                            value={userName}
                            onChange={onInputChange}  
                        /> 
                    </div>
                    <small className="error">{errors.userName}</small>
                </div>
                <div>
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
                <div>
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
                <div>
                    <button className="btn-rgs">Registrarse</button>
                </div>
                <div className="color-p-span">
                    <p>¿Ya tenés una cuenta? <span>Iniciar sesión</span></p> 
                </div>            
            </form>
        </Modal>
    </>
  )
}
