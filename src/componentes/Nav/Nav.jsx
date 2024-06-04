import "./Nav.css";
import "./Modal.css";
import { useContext } from "react";
import { AppContext } from "../../context/AppProvider";
import { NavLink } from "react-router-dom";
import Logo from "../../assets/logo.png";
import Modal from '@mui/material/Modal';
import { ModalSignIn } from "./ModalSignIn";
import { Box } from "@mui/material";
import { ModalSignUp } from "./ModalSignUp";


export const Nav = () => {

    const { AosInit, openSignIn, handleOpenSignIn,
            handleCloseSignIn, onSignUp, openSignUp,
            handleOpenSignUp, handleCloseSignUp, onSignIn } = useContext(AppContext);
   
    AosInit()

  return (
    <>
        <div className="cnt-nav" data-aos="fade-down" data-aos-duration="2000" id="nav">
            <div>
                <NavLink to="/"><img className="logo" src={Logo}/></NavLink>
            </div>
            <ul className="ul-flex" >
                <a href="#productos"><li>Productos</li></a>
                <a href="#como"><li>¿Cómo funciona?</li></a>
                <a href="#faqs"><li>Faqs</li></a>
                <a href="#contacto"><li>Contacto</li></a>
            </ul>
            <div className="cnt-flex">
                <p >Ingresar</p> {/****onClick={handleOpenSignIn}**/}
                <button >Comenzar</button> {/***onClick={handleOpenSignUp}***/}
            </div>
         </div>
        
        <Modal
            open={openSignIn}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
               <Box>
                    <ModalSignIn 
                        onClose={handleCloseSignIn}
                        handleOpenSignUp={handleOpenSignUp}
                        handleCloseSignIn={handleCloseSignIn}
                        onSignUp={onSignUp} 
                    />
               </Box>
        </Modal>  
        <Modal
            open={openSignUp}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
               <Box>
                    <ModalSignUp 
                        onClose={handleCloseSignUp}
                        onSignIn={onSignIn}   
                    />
               </Box>
        </Modal>  
    </>
  )
}
