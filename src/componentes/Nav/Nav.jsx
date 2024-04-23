import { useEffect, useState } from "react";
import Logo from "../../assets/logo.png";
import Google from "../../assets/google 2.png";
import Person from "../../assets/person.png";
import Mail from "../../assets/mail.png";
import Lock from "../../assets/lock.png";
import "./Nav.css";
import Aos from "aos";
import "aos/dist/aos.css";
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';

export const Nav = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
      Aos.init()
    }, [])
    

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
                <p>Ingresar</p>
                <button onClick={handleOpen}>Comenzar</button>
            </div>
        </div>

        <Modal
            open={open}
            onClose={handleClose}
            aria-labelledby="modal-modal-title"
            aria-describedby="modal-modal-description">
            <Box className="tarjeta">
                <h2>Crear una cuenta</h2>
                <div className="btn-google">
                    <img src={Google}/>
                    <p>Ingresar con Google</p>
                </div>
                <div className="hr-st">
                    <hr /><span>o</span><hr />
                </div>
                <div className="cnt-input">
                    <div>
                       <img src={Person} /> 
                    </div>
                    
                    <input placeholder="Nombre"  />
                </div>
                <div className="cnt-input">
                    <div>
                        <img src={Mail} />
                    </div>
                    
                    <input placeholder="Email" />
                </div>
                <div className="cnt-input">
                    <div>
                        <img src={Lock} />
                    </div>
                    <input placeholder="Contraseña" />
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
            </Box>
        </Modal>
    </>
  )
}
