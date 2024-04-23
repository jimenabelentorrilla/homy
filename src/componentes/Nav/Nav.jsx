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
import { useForm } from "../../hooks/useForm";

export const Nav = () => {

    const [open, setOpen] = useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    useEffect(() => {
      Aos.init()
    }, [])


    const initialForm = {
        userName : "",
        email : "",
        password: ""
    }
    
        const {formState, onInputChange } = useForm(initialForm)

        /*desestructuramos el form state para tener estas tres
        constantes disponibles para obtenerlas por separado*/
        /*Y tambien eso será lo que pongamos en el value*/
        const { userName, email, password } = formState;

        const [errors, setErrors] = useState({
            userName: '',
            email: '',
            password: ''
        });
        
        const validateForm = () => {
            let valid = true;
            const newErrors = { userName: '', email: '', password: '' };
        
            if (userName.trim() === '') {
                newErrors.userName = 'Por favor ingresa un nombre válido';
                valid = false;
            }
        
            if (!email.includes('@')) {
                newErrors.email = 'Por favor ingresa un email válido';
                valid = false;
            }
        
            if (password.length < 6) {
                newErrors.password = 'La contraseña debe tener al menos 6 caracteres';
                valid = false;
            }
        
            setErrors(newErrors);
            return valid;
        };

        const onSubmit = (event) => {
            event.preventDefault()  /*para que no se actualice la pag*/
        
            if (validateForm()) {
                console.log('Formulario enviado:', formState);
            }
        }
    

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
                            onChange={onInputChange}  />
                        
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
                            onChange={onInputChange} />
                        
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
                            onChange={onInputChange} />
                        
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
