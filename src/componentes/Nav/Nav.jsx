import "./Nav.css";
import "./Modal.css";
import { useContext} from "react";
import { AppContext } from "../../context/AppProvider";
import Logo from "../../assets/logo.png";
import { ModalSignUp } from "./ModalSignUp";
import { ModalSignIn } from "./ModalSignIn";
import Modal from '@mui/material/Modal';

export const Nav = () => {

    const { open, handleClose, showSignIn, AosInit, handleOpenSignIn, handleOpenSignUp} = useContext(AppContext);
    
    AosInit()

  return (
    <>
        <div className="cnt-nav" data-aos="fade-down" data-aos-duration="2000">
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
                <p onClick={handleOpenSignIn}>Ingresar</p>
                <button onClick={handleOpenSignUp}>Comenzar</button>
            </div>
        </div>
        {/**Funciona pero está atado con alambres, la consola se queja porque MUI al parecer no permite esto**/
        /***** A CHEQUEAR! ****/}
        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
                {showSignIn ? <ModalSignIn /> : <ModalSignUp />}
        </Modal>        
        
    </>
  )
}
